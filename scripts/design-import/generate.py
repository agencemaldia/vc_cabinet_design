"""Generate Next.js page-content components + CSS from the design exports.

python -I generate.py <exports_root> <repo_root>
"""
import glob
import html
import json
import os
import re
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8")
import dc2jsx as D  # noqa: E402
import links  # noqa: E402

ROOT, REPO = sys.argv[1], sys.argv[2]
PAGES = ["Home", "Mission", "Services", "Kitchen", "Bathroom", "Walkin", "Gallery", "Blog", "Article",
         "Contact", "ThankYou", "Privacy", "NotFound"]
PAGE_CLASS = {p: "pg-" + re.sub(r"(?<!^)([A-Z])", r"-\1", p).lower() for p in PAGES}
CURRENT = {"Home": "home", "Mission": "mission", "Services": "services", "Kitchen": "services",
           "Bathroom": "services", "Walkin": "services", "Gallery": "gallery", "Blog": "blog",
           "Article": "blog", "Contact": "contact", "ThankYou": None, "Privacy": None, "NotFound": None}
# names provided by useDesignState()
STATE_NAMES = {"faqs", "chips", "shown", "lb", "lbOpen", "lbIndex", "lbTotal", "prev", "next", "closeLb",
               "pos", "clipW", "slide", "paused", "vidCls", "pauseLabel", "pauseText", "togglePause",
               "ctaHref", "submitForm"} | {f"st{i}" for i in range(7)} | {f"go{i}" for i in range(7)}


def src_of(name):
    return glob.glob(os.path.join(ROOT, "*", name + ".dc.html"))[0]


def read(name):
    s = open(src_of(name), encoding="utf8").read()
    i = s.find("</helmet>") + len("</helmet>")
    j = s.find('<script type="text/x-dc"')
    helmet = s[:i]
    body = s[i:j].replace("</x-dc>", "")
    m = re.search(r"const D = (\{.*?\});\n", s[j:], re.S)
    data = json.loads(m.group(1)) if m else {}
    return helmet, body, data


# ---------------------------------------------------------------- assets
def slug(t):
    t = t.lower().replace("&", "and")
    t = re.sub(r"[’'`]", "", t)
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    return t[:60].strip("-") or "image"


ROOM = {"K": "kitchen", "B": "bathroom", "W": "walk-in"}
OVERRIDES = {
    "2b74ff87f6267a621b8a4733a02233c7.png": "logo-green.png",
    "916e3142a832d2a02c625cdbae9e7e29.png": "logo-gold.png",
    "77436f0eb6cc577b34baba9164bcbb9f.png": "logo-gold-on-dark.png",
    "a8ebf30120d99d21d381573bfb963730.png": "logo-sage-on-dark.png",
    "285608cb95d658972243932d5d2b8309.png": "symbol-gold-on-dark.png",
    "abf3804153d66877d590acee68401dfa.png": "symbol-sage-on-dark.png",
    "abe70050ae2923a925e06c059c6eda58.png": "symbol-gold.png",
    "93e9c850349d96d6eb5f13ff05454003.png": "symbol-green.png",
    "46a7eaf92eb4d2d16b46118f3dae1499.jpg": "photo-design.jpg",
    "ad234609c679358d3cb816e1419ea2a7.jpg": "photo-install.jpg",
    "3ccbc57978f40a11270bd24c34ca301c.jpg": "hero-01.jpg",
    "de8ce1b5de54afdd3cb136cbf233a8cd.jpg": "hero-02.jpg",
    "affa448255d038c79d86c8ff6e94538c.jpg": "hero-03.jpg",
}


def build_asset_names():
    alts = {}
    # photos referenced from CSS classes such as `.ri-K3{background-image:url(./assets/x.jpg)}`
    for p in PAGES:
        helmet, _, _ = read(p)
        for m in re.finditer(r"\.[a-z]+-([A-Z])(\d+)\{background-image:url\(\./assets/([^)]+)\)", helmet):
            alts.setdefault(m.group(3), f"{ROOM.get(m.group(1), 'photo')} {int(m.group(2)):02d}")
    for p in PAGES:
        _, body, data = read(p)
        for m in re.finditer(r'<img\b[^>]*>', body):
            tag = m.group(0)
            src = re.search(r'src="\./assets/([^"]+)"', tag)
            alt = re.search(r'alt="([^"]*)"', tag)
            if src and alt and alt.group(1).strip() and src.group(1) not in alts:
                alts[src.group(1)] = html.unescape(alt.group(1))
    names = {}
    used = set()
    allfiles = sorted(os.listdir(os.path.join(ROOT, "allassets")))
    # gallery photo classes: name by class
    for f in allfiles:
        base, ext = os.path.splitext(f)
        if f in OVERRIDES:
            names[f] = OVERRIDES[f]
            used.add(os.path.splitext(OVERRIDES[f])[0])
            continue
        n = slug(alts.get(f, ""))
        if n == "image":
            n = "asset-" + base[:8]
        k, i = n, 2
        while k in used:
            k = f"{n}-{i}"
            i += 1
        used.add(k)
        names[f] = k + ext.lower()
    return names


ASSETS = build_asset_names()


def style_matchers():
    found = set()
    for p in PAGES:
        helmet, _, _ = read(p)
        found |= set(re.findall(r'\[style\*="([^"]+)"\]', helmet))
    return sorted(found)


D.STYLE_MATCHERS[:] = style_matchers()


def fix_font(s):
    s = s.replace("'Urbanist', system-ui", "var(--font-urbanist), system-ui")
    s = s.replace("'Urbanist',system-ui", "var(--font-urbanist),system-ui")
    s = s.replace("Urbanist, sans-serif", "var(--font-urbanist), sans-serif")
    s = s.replace("Urbanist,sans-serif", "var(--font-urbanist),sans-serif")
    s = re.sub(r"font-family:\s*'?Urbanist'?\s*,", "font-family:var(--font-urbanist),", s)
    return s


def fix_asset_refs(s):
    s = fix_font(s)
    # selectors such as img[src*="a8ebf301"] that match on a hash prefix of the old file name
    for old_name, new_name in ASSETS.items():
        s = s.replace(f'[src*="{old_name[:8]}"]', f'[src*="{os.path.splitext(new_name)[0]}"]')
    return re.sub(r"(?:\./assets/|/images/)([0-9a-f]{32}\.(?:jpg|jpeg|png|webp|svg))",
                  lambda m: "/images/" + ASSETS.get(m.group(1), m.group(1)), s)


# ---------------------------------------------------------------- css
def stmts(c):
    out, depth, cur = [], 0, ""
    for ch in c:
        cur += ch
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                out.append(cur.strip())
                cur = ""
    if cur.strip():
        out.append(cur.strip())
    return out


def split_selectors(sel):
    parts, depth, cur = [], 0, ""
    for ch in sel:
        if ch in "([":
            depth += 1
        elif ch in ")]":
            depth -= 1
        if ch == "," and depth == 0:
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    parts.append(cur)
    return [p.strip() for p in parts if p.strip()]


def scope_selector(sel, scope):
    """Prefix a selector with the page scope. A leading `html`/`:root` is folded into the scope,
    keeping any pseudo-class or attribute that follows it (`:root:has(.pre.skip)`)."""
    s = sel.strip()
    m = re.match(r"^(?:html|:root)(?![\w-])", s)
    if m:
        s = s[m.end():]
        if s and not s[0].isspace():
            return scope + s
        s = s.strip()
    return f"{scope} {s}" if s else scope


def page_key(page):
    return PAGE_CLASS[page][len("pg-"):]


def page_scope(pages):
    """Scope for rules of one or more pages, keyed on the `data-page` attribute PageShell sets on <html>.
    (Not `:has(.pg-…)`: Next keeps recently visited pages mounted but hidden, so their classes stay in
    the document.)"""
    attrs = [f'[data-page="{page_key(p)}"]' for p in pages]
    return ":root" + (attrs[0] if len(attrs) == 1 else f":is({','.join(attrs)})")


def scope_stmt(st, scope):
    if st.startswith("@keyframes") or st.startswith("@font-face") or st.startswith("@import") \
            or st.startswith("@-webkit-keyframes"):
        return st
    if st.startswith("@"):
        head = st[: st.index("{")]
        inner = st[st.index("{") + 1: st.rindex("}")]
        return head + "{" + "\n".join(scope_stmt(x, scope) for x in stmts(inner)) + "}"
    sel = st[: st.index("{")]
    rest = st[st.index("{"):]
    return ",".join(scope_selector(x, scope) for x in split_selectors(sel)) + rest


def build_css():
    """Split the exported stylesheets into:
    - base: rules shared by every inner page (scoped away from Home),
    - pages: rules specific to one or more inner pages (scoped to their page classes),
    - home: Home's complete stylesheet, scoped to the Home page. Home interleaves its own rules with the
      shared ones, so it keeps its full stylesheet in its original order.
    Every rule gets the same extra specificity from its scope, so the original cascade order holds.
    """
    per = {}
    for p in PAGES:
        helmet, _, _ = read(p)
        css = "".join(re.findall(r"<style>(.*?)</style>", helmet, re.S))
        per[p] = stmts(css)
    inner = [p for p in PAGES if p != "Home"]
    common = set.intersection(*[set(per[p]) for p in inner])
    common_list = [x for x in per["Services"] if x in common]
    groups, order = {}, []
    for p in inner:
        for st in per[p]:
            if st in common:
                continue
            if st not in groups:
                groups[st] = []
                order.append(st)
            groups[st].append(p)
    seen_keyframes = set()

    def scoped(st, scope):
        if re.match(r"@(-webkit-)?keyframes", st):
            if st in seen_keyframes:
                return None
            seen_keyframes.add(st)
            return st
        return scope_stmt(st, scope)

    out_base = [scoped(st, ':root:not([data-page="home"])') for st in common_list]
    out_pages = []
    for st in order:
        pages = groups[st]
        out_pages.append(scoped(st, page_scope(pages)))
    out_home = [scoped(st, page_scope(["Home"])) for st in per["Home"]]

    def finish(lst):
        return fix_asset_refs("\n".join(x for x in lst if x)).replace('[style*="', '[data-s*="')

    return finish(out_base), finish(out_pages), finish(out_home)


# ---------------------------------------------------------------- jsx
class Raw(D.Node):
    def __init__(self, jsx, parent):
        super().__init__("__raw__", [], parent)
        self.jsx = jsx


_orig_emit = D.emit


def emit(node, ind=0):
    if isinstance(node, Raw):
        return node.jsx
    if isinstance(node, str):
        return D.text_jsx(node)
    if node.tag in ("sc-if", "sc-for"):
        a = dict(node.attrs)
        inner = "".join(emit(c, ind + 1) for c in node.children)
        if node.tag == "sc-if":
            cond = D.EXPR.fullmatch(a.get("value", "").strip()).group(1).strip()
            if cond == "f.open":  # FAQ answer: keep mounted so it can animate open/closed
                return f"<Collapse open={{{cond}}}>{inner}</Collapse>"
            return f"{{{cond} && (<>{inner}</>)}}"
        lst = D.EXPR.fullmatch(a.get("list", "").strip()).group(1).strip()
        as_ = a.get("as", "item")
        return f"{{{lst}.map(({as_}, {as_}Index) => (<Fragment key={{{as_}Index}}>{inner}</Fragment>))}}"
    attrs = D.jsx_attrs(node.tag, node.attrs)
    a = (" " + " ".join(attrs)) if attrs else ""
    tag = D.SVG_TAGS.get(node.tag, node.tag)
    if tag == "textarea":
        return f"<textarea{a} />"
    if tag in D.VOID or not node.children:
        return f"<{tag}{a} />"
    inner = "".join(emit(c, ind + 1) for c in node.children)
    return f"<{tag}{a}>{inner}</{tag}>"


def walk(n):
    if isinstance(n, str):
        return
    yield n
    for c in n.children:
        yield from walk(c)


def A(n):
    return dict(n.attrs)


def replace(node, new):
    par = node.parent
    i = par.children.index(node)
    if new is None:
        par.children.pop(i)
    else:
        new.parent = par
        par.children[i] = new


def header_props(node, page):
    st = A(node).get("style", "")
    variant = "overlay" if "position: absolute" in st else "solid"
    tone = "sage" if "a8ebf301" in D.emit(node) else "gold"
    props = [f'variant="{variant}"']
    if CURRENT[page]:
        props.append(f'current="{CURRENT[page]}"')
    if tone != "gold":
        props.append(f'logoTone="{tone}"')
    return " ".join(props)


def contact_props(node):
    def text(n):
        return " ".join("".join(c for c in n.children if isinstance(c, str)).split())

    h2 = next(n for n in walk(node) if n.tag == "h2")
    ps = [c for c in h2.parent.children if not isinstance(c, str) and c.tag == "p"]
    lede = ps[0] if ps else None
    appt = next((n for n in walk(node) if n.tag == "p" and "font-size: 26px" in A(n).get("style", "")), None)
    props = []
    if text(h2) != "Let’s work together!":
        props.append(f"title={json.dumps(text(h2), ensure_ascii=False)}")
    if lede is not None and not text(lede).startswith("Tell us about your project. A designer will call you"):
        props.append(f"lede={json.dumps(text(lede), ensure_ascii=False)}")
    if appt is not None:
        props.append(f"appointment={json.dumps(text(appt), ensure_ascii=False)}")
    return " ".join(props), D.emit(node)


def convert_page(page):
    _, body, data = read(page)
    p = D.P()
    p.feed(body)
    root = p.root
    blocks = {}
    # page wrapper
    wrapper = next(c for c in root.children if not isinstance(c, str) and c.tag == "div")
    for n in list(walk(root)):
        if n is root or n.parent is None:
            continue
        a = A(n)
        if n.tag == "header" and any(x.tag == "nav" and "nav-d" in A(x).get("class", "") for x in walk(n)):
            replace(n, Raw(f"<SiteHeader {header_props(n, page)} />", None))
        elif n.tag == "sc-if" and "menuOpen" in a.get("value", ""):
            replace(n, None)
        elif n.tag == "footer":
            blocks["footer"] = emit(n)
            replace(n, None)
        elif n.tag == "input" and a.get("id") == "ck-x":
            replace(n, None)
        elif n.tag == "div" and a.get("class") == "ck":
            blocks["cookie"] = emit(n)
            replace(n, None)
        elif n.tag == "div" and a.get("class") == "sticky-m":
            blocks["sticky"] = emit(n)
            replace(n, None)
        elif n.tag == "div" and a.get("class") in ("curt", "vb"):
            blocks[a.get("class")] = emit(n)
            replace(n, None)
        elif n.tag == "div" and a.get("class") == "{{preCls}}":
            blocks["pre"] = emit(n)
            replace(n, None)
        elif n.tag == "section" and a.get("id") == "contact":
            props, t = contact_props(n)
            blocks["contact"] = t
            replace(n, Raw(f"<ContactSection {props} />", None))
    # wrapper style
    blocks["wrapper_style"] = A(wrapper).get("style", "")
    content = "".join(emit(c) for c in wrapper.children).strip()
    # state names used by the remaining content = leading identifiers of its {{expr}} placeholders
    names = set()
    for n in walk(wrapper):
        if isinstance(n, Raw):
            continue
        for k, v in n.attrs:
            for e in D.EXPR.findall(v or ""):
                names.add(re.match(r"\s*([A-Za-z_]\w*)", e).group(1))
        for c in n.children:
            if isinstance(c, str):
                for e in D.EXPR.findall(c):
                    names.add(re.match(r"\s*([A-Za-z_]\w*)", e).group(1))
    names &= STATE_NAMES
    content = fix_asset_refs(content)
    for k in list(blocks):
        blocks[k] = fix_asset_refs(blocks[k])
    return content, sorted(names), data, blocks


def write_page(page, content, names, data):
    comp = page + "Content"
    uses_state = bool(names)
    uses_fragment = "<Fragment" in content
    imports = []
    if uses_state:
        imports.append('"use client";\n')
    react_names = (["Fragment"] if uses_fragment else []) + (["type CSSProperties"] if "as CSSProperties" in content else [])
    if react_names:
        imports.append(f'import {{ {", ".join(react_names)} }} from "react";')
    if "<SiteHeader" in content:
        imports.append('import { SiteHeader } from "@/components/site/site-header";')
    if "<Collapse" in content:
        imports.append('import { Collapse } from "@/components/site/collapse";')
    if "<ContactSection" in content:
        imports.append('import { ContactSection } from "@/components/site/contact-section";')
    if uses_state:
        imports.append('import { useDesignState, type DesignData } from "@/components/pages/use-design-state";')
    data_js = ""
    hook = ""
    if uses_state:
        data_js = "\nconst DATA: DesignData = " + json.dumps({k: v for k, v in data.items() if k != "ctaHref"},
                                                            ensure_ascii=False, indent=2) + ";\n"
        hook = f"  const {{ {', '.join(names)} }} = useDesignState(DATA);\n"
    src = "\n".join(imports) + "\n" + data_js + f"""
/** Generated from the "{page}" artboard of the V&C design by scripts/design-import — regenerate rather than hand-edit. */
export function {comp}() {{
{hook}  return (
    <>
{content}
    </>
  );
}}
"""
    kebab = re.sub(r"(?<!^)([A-Z])", r"-\1", page).lower()
    out = os.path.join(REPO, "src", "components", "pages", kebab + "-content.tsx")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    src, _ = links.convert(src)
    open(out, "w", encoding="utf8").write(src)
    return out


def main():
    os.makedirs(os.path.join(REPO, "public", "images"), exist_ok=True)
    for f, n in ASSETS.items():
        shutil.copyfile(os.path.join(ROOT, "allassets", f), os.path.join(REPO, "public", "images", n))
    base_css, pages_css, home_css = build_css()
    gen = os.path.join(REPO, "src", "styles")
    os.makedirs(gen, exist_ok=True)
    header = "/* Generated from the V&C design export by scripts/design-import — do not edit by hand. */\n"
    for name, css, note in [
        ("design-base.css", base_css, "Styles shared by the inner pages."),
        ("design-pages.css", pages_css, "Page-specific styles, scoped by the data-page attribute."),
        ("design-home.css", home_css, "Home page styles, scoped to the Home page."),
    ]:
        open(os.path.join(gen, name), "w", encoding="utf8").write(header + f"/* {note} */\n" + css + "\n")
    print("css", len(base_css), len(pages_css), len(home_css))
    for p in PAGES:
        content, names, data, _ = convert_page(p)
        out = write_page(p, content, names, data)
        print(p, "->", os.path.basename(out), "state:", names)


if __name__ == "__main__":
    main()
