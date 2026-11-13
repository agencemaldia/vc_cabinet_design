"""Convert a design-tool `.dc.html` artboard body into JSX.

Usage: python -I dc2jsx.py <in.dc.html> <out.jsx-fragment>
Emits the template body (between </helmet> and the logic script) as JSX text.
"""
import re
import sys
import json
from html.parser import HTMLParser

VOID = {"img", "br", "hr", "input", "meta", "link", "source", "area", "col", "embed", "param", "track", "wbr"}
SVG_SELF = {"path", "circle", "rect", "line", "polyline", "polygon", "ellipse", "stop", "use"}

ROUTES = {
    "Home": "/",
    "Mission": "/mission",
    "Services": "/services",
    "Kitchen": "/services/kitchen",
    "Bathroom": "/services/bathroom",
    "Walkin": "/services/walk-in",
    "Gallery": "/gallery",
    "Blog": "/blog",
    "Article": "/blog/space-optimization-in-small-kitchens",
    "Contact": "/contact",
    "ThankYou": "/thank-you",
    "Privacy": "/privacy-policy",
    "NotFound": "/404",
}

ATTR_MAP = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex", "readonly": "readOnly",
    "maxlength": "maxLength", "minlength": "minLength", "autocomplete": "autoComplete",
    "autofocus": "autoFocus", "autoplay": "autoPlay", "playsinline": "playsInline",
    "crossorigin": "crossOrigin", "datetime": "dateTime", "enctype": "encType",
    "srcset": "srcSet", "inputmode": "inputMode", "novalidate": "noValidate",
    "colspan": "colSpan", "rowspan": "rowSpan", "frameborder": "frameBorder",
    "allowfullscreen": "allowFullScreen", "spellcheck": "spellCheck", "accesskey": "accessKey",
    "contenteditable": "contentEditable", "referrerpolicy": "referrerPolicy",
    "fetchpriority": "fetchPriority", "formnovalidate": "formNoValidate",
    # svg
    "viewbox": "viewBox", "preserveaspectratio": "preserveAspectRatio",
    "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap", "stroke-linejoin": "strokeLinejoin",
    "stroke-dasharray": "strokeDasharray", "stroke-dashoffset": "strokeDashoffset",
    "stroke-miterlimit": "strokeMiterlimit", "stroke-opacity": "strokeOpacity",
    "fill-rule": "fillRule", "clip-rule": "clipRule", "fill-opacity": "fillOpacity",
    "clip-path": "clipPath", "stop-color": "stopColor", "stop-opacity": "stopOpacity",
    "gradientunits": "gradientUnits", "gradienttransform": "gradientTransform",
    "text-anchor": "textAnchor", "dominant-baseline": "dominantBaseline",
    "font-size": "fontSize", "font-weight": "fontWeight", "font-family": "fontFamily",
    "letter-spacing": "letterSpacing", "xlink:href": "xlinkHref", "xmlns:xlink": "xmlnsXlink",
    "patternunits": "patternUnits", "vector-effect": "vectorEffect",
}
EVENTS = {"onclick": "onClick", "onchange": "onChange", "oninput": "onInput", "onsubmit": "onSubmit",
          "onkeydown": "onKeyDown", "onfocus": "onFocus", "onblur": "onBlur", "onmouseenter": "onMouseEnter",
          "onmouseleave": "onMouseLeave", "onload": "onLoad"}
BOOL = {"required", "disabled", "checked", "selected", "hidden", "multiple", "muted", "loop", "autoplay",
        "playsinline", "controls", "novalidate", "readonly", "open", "defer", "async", "allowfullscreen",
        "autofocus", "formnovalidate"}

EXPR = re.compile(r"\{\{(.*?)\}\}")
# Substrings used by the design CSS in `[style*="…"]` selectors (set by generate.py). Elements whose
# style matches one get a `data-s` copy of their original style text, and the selectors are
# rewritten to `[data-s*="…"]`, because React re-serializes inline styles.
STYLE_MATCHERS = []
NUMERIC = {"rows", "cols", "tabindex", "maxlength", "minlength", "size", "span", "colspan", "rowspan"}
SVG_TAGS = {t.lower(): t for t in ["linearGradient", "radialGradient", "clipPath", "foreignObject", "textPath",
                                   "feGaussianBlur", "feOffset", "feBlend", "feColorMatrix", "feMerge",
                                   "feMergeNode", "feFlood", "feComposite", "animateTransform"]}


def route(href: str) -> str:
    m = re.match(r"^(?:\./)?([A-Za-z]+)\.dc\.html(#.*)?$", href)
    if m:
        return ROUTES.get(m.group(1), "/") + (m.group(2) or "")
    return href


def asset(src: str) -> str:
    return re.sub(r"^\./assets/", "/images/", src)


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def attr_value_jsx(v: str) -> str:
    """An attribute value possibly containing {{expr}} placeholders."""
    full = EXPR.fullmatch(v.strip())
    if full:
        return "{" + full.group(1).strip() + "}"
    if EXPR.search(v):
        parts = EXPR.split(v)
        out = "`"
        for i, p in enumerate(parts):
            if i % 2:
                out += "${" + p.strip() + "}"
            else:
                out += p.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        return "{" + out + "`}"
    return jsx_str(v)


def jsx_str(v: str) -> str:
    """A JSX attribute value for a literal string. JSX string attributes don't process escapes,
    so values with a backslash or double quote become `{"…"}` expressions."""
    if "\\" in v or '"' in v:
        return "{" + js_str(v) + "}"
    return '"' + v + '"'


def style_obj(css: str) -> str:
    decls = []
    # split on ; not inside parentheses
    depth = 0
    cur = ""
    for ch in css:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == ";" and depth == 0:
            decls.append(cur)
            cur = ""
        else:
            cur += ch
    decls.append(cur)
    items = []
    for d in decls:
        if ":" not in d:
            continue
        k, v = d.split(":", 1)
        k = k.strip()
        v = v.strip()
        if not k:
            continue
        if k.startswith("--"):
            key = js_str(k)
        else:
            if k.startswith("-ms-"):
                k = k[1:]
            key = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)
            if k.startswith("-webkit-") or k.startswith("-moz-"):
                key = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k[1:])
                key = key[0].upper() + key[1:]
        full = EXPR.fullmatch(v)
        if full:
            val = full.group(1).strip()
        elif EXPR.search(v):
            val = attr_value_jsx(v)[1:-1]
        else:
            val = js_str(v)
        items.append(f"{key}: {val}")
    if any(i.startswith('"--') for i in items):
        return "{{ " + ", ".join(items) + " } as CSSProperties}"
    return "{{ " + ", ".join(items) + " }}"


def text_jsx(t: str) -> str:
    if not t:
        return ""
    if t.strip() == "":
        # newline-only whitespace sits between block elements in the source markup
        return "" if "\n" in t else " "
    t = re.sub(r"\s+", " ", t)
    parts = EXPR.split(t)
    out = ""
    for i, p in enumerate(parts):
        if i % 2:
            out += "{" + p.strip() + "}"
        elif re.search(r"[{}<>]", p):
            out += "{" + js_str(p) + "}"
        else:
            out += p
    return out


class Node:
    def __init__(self, tag, attrs, parent):
        self.tag = tag
        self.attrs = attrs
        self.parent = parent
        self.children = []


class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root", [], None)
        self.cur = self.root
        self.in_svg = 0

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)
        if tag == "svg":
            self.in_svg += 1
        if tag in VOID or (self.in_svg and tag in SVG_SELF and False):
            return
        self.cur = n

    def handle_startendtag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if tag == "svg":
            self.in_svg -= 1
        c = self.cur
        while c is not None and c.tag != tag:
            c = c.parent
        if c is None:
            return  # stray close
        self.cur = c.parent

    def handle_data(self, data):
        self.cur.children.append(data)

    def handle_comment(self, data):
        pass


# html.parser lowercases attribute names; restore camel case for known SVG attrs.
def jsx_attrs(tag, attrs):
    out = []
    for k, v in attrs:
        if v is None:
            v = ""
        if k == "__spread__":
            out.append("{..." + v + "}")
            continue
        if k.startswith("__expr__"):
            out.append(f"{k[8:]}={{{v}}}")
            continue
        lk = k.lower()
        if lk.startswith("hint-"):
            continue
        if lk in EVENTS:
            out.append(f"{EVENTS[lk]}={attr_value_jsx(v)}")
            continue
        if lk == "style":
            out.append(f"style={style_obj(v)}")
            if any(m in v for m in STYLE_MATCHERS):
                out.append(f"data-s={jsx_str(v)}")
            continue
        if lk == "href" and tag in ("a", "link"):
            v = route(v)
        if lk in ("src", "poster", "href") and v.startswith("./assets/"):
            v = asset(v)
        if lk == "srcset":
            v = re.sub(r"\./assets/", "/images/", v)
        name = ATTR_MAP.get(lk, k if (lk.startswith("aria-") or lk.startswith("data-")) else lk)
        if lk == "checked" and tag == "input" and not EXPR.search(v):
            out.append("defaultChecked")
            continue
        if lk in BOOL and not EXPR.search(v):
            if lk == "muted":
                out.append("muted")
            else:
                out.append(name)
            continue
        if lk == "value" and tag in ("input", "textarea", "select") and not EXPR.search(v):
            out.append(f"defaultValue={attr_value_jsx(v)}")
            continue
        if lk == "checked" and tag == "input":
            out.append(f"defaultChecked={attr_value_jsx(v)}")
            continue
        if lk in NUMERIC and re.fullmatch(r"-?\d+", v.strip()):
            out.append(f"{name}={{{v.strip()}}}")
            continue
        out.append(f"{name}={attr_value_jsx(v)}")
    return out


def emit(node, ind=0) -> str:
    sp = "  " * ind
    if isinstance(node, str):
        t = text_jsx(node)
        return t
    if node.tag == "sc-if":
        a = dict(node.attrs)
        cond = EXPR.fullmatch(a.get("value", "").strip()).group(1).strip()
        inner = "".join(emit(c, ind + 1) for c in node.children)
        return f"{{{cond} && (<>{inner}</>)}}"
    if node.tag == "sc-for":
        a = dict(node.attrs)
        lst = EXPR.fullmatch(a.get("list", "").strip()).group(1).strip()
        as_ = a.get("as", "item")
        inner = "".join(emit(c, ind + 1) for c in node.children)
        return f"{{{lst}.map(({as_}, {as_}Index) => (<Fragment key={{{as_}Index}}>{inner}</Fragment>))}}"
    attrs = jsx_attrs(node.tag, node.attrs)
    a = (" " + " ".join(attrs)) if attrs else ""
    if node.tag == "textarea":
        txt = "".join(c for c in node.children if isinstance(c, str))
        if txt:
            a += f" defaultValue={jsx_str(txt)}"
        return f"<textarea{a} />"
    if node.tag in VOID or not node.children:
        return f"<{node.tag}{a} />"
    inner = "".join(emit(c, ind + 1) for c in node.children)
    return f"<{node.tag}{a}>{inner}</{node.tag}>"


def convert(path):
    s = open(path, encoding="utf8").read()
    i = s.find("</helmet>") + len("</helmet>")
    j = s.find('<script type="text/x-dc"')
    body = s[i:j]
    body = body.replace("</x-dc>", "")
    p = P()
    p.feed(body)
    return "".join(emit(c) for c in p.root.children).strip()


if __name__ == "__main__":
    out = convert(sys.argv[1])
    open(sys.argv[2], "w", encoding="utf8").write(out)
    print(len(out))
