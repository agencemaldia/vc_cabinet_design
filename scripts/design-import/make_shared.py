"""Generate the shared site components (header + menu, footer, call bar, contact section) from the
design exports, working on the parsed artboard trees.

python -I make_shared.py <exports_root> <repo_root>
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8")
import generate as G  # noqa: E402  (sets up asset names + style matchers)
import links  # noqa: E402
import tree as T  # noqa: E402

REPO = sys.argv[2]
A = T.A


def node(page, key):
    return T.find(T.parse(G.src_of(page)), T.preds[key])


def set_attr(n, name, value):
    n.attrs = [(k, v) for k, v in n.attrs if k != name] + ([(name, value)] if value is not None else [])


def drop_attr(n, *names):
    n.attrs = [(k, v) for k, v in n.attrs if k not in names]


def walk(n):
    return list(T.walk(n))


def jsx(n):
    return G.fix_asset_refs(G.emit(n))


def indent(s, k):
    pad = " " * k
    return "\n".join(pad + line if line.strip() else line for line in s.split("\n"))


def write(rel, text):
    text, _ = links.convert(text)
    path = os.path.join(REPO, rel)
    open(path, "w", encoding="utf8").write(text)
    print("wrote", rel)


# ------------------------------------------------------------------ header + mobile menu
NAV_KEYS = {"/": "home", "Home.dc.html": "home", "Mission.dc.html": "mission", "Services.dc.html": "services",
            "Gallery.dc.html": "gallery", "Blog.dc.html": "blog", "Contact.dc.html": "contact"}


def role(n, parent_chain):
    a = A(n)
    cls = a.get("class", "")
    if n.tag == "header":
        return "header"
    if n.tag == "nav" and "nav-d" in cls:
        return "nav"
    if n.tag == "div" and "hx-info" in cls:
        return "info"
    if any("hx-info" in A(p).get("class", "") for p in parent_chain):
        return "infoMuted" if n.tag == "span" else "infoPhone"
    if n.tag == "a" and "hdr-cta" in cls:
        return "cta"
    if n.tag == "a" and "burger" in cls:
        return "call"
    return None


def chain(n):
    out = []
    p = n.parent
    while p is not None:
        out.append(p)
        p = p.parent
    return out


over = node("Services", "header")
solid = node("Privacy", "header")
on, sn = walk(over), walk(solid)
assert len(on) == len(sn)

variants = {"overlay": {}, "solid": {}}
nav_active = nav_inactive = None
for a, b in zip(on, sn):
    sa, sb = A(a).get("style"), A(b).get("style")
    href = A(a).get("href", "")
    if a.tag == "a" and sa and "min-height: 36px" in sa and href in NAV_KEYS:
        key = NAV_KEYS[href]
        if "background: #125A50" in sa:
            nav_active = sa
        else:
            nav_inactive = sa
        drop_attr(a, "style", "aria-current")
        a.attrs.insert(1, ("__expr__aria-current", f'current === "{key}" ? "page" : undefined'))
        a.attrs.append(("__spread__", f'sx(navLink(current === "{key}"))'))
        continue
    r = role(a, chain(a))
    if sa != sb:
        assert r, ("unexpected variant difference", a.tag, A(a))
    if r:
        variants["overlay"][r] = sa
        variants["solid"][r] = sb
        drop_attr(a, "style")
        a.attrs.append(("__spread__", f"sx(v.{r})"))
    if a.tag == "img" and "hx-logo-t" in A(a).get("class", ""):
        drop_attr(a, "src")
        a.attrs.insert(1, ("__expr__src", "logo.wordmark"))
    if a.tag == "img" and "hx-sym" in A(a).get("class", ""):
        drop_attr(a, "src")
        a.attrs.insert(1, ("__expr__src", "logo.symbol"))
    if a.tag == "button" and A(a).get("onclick"):
        set_attr(a, "onclick", "{{openMenu}}")
assert nav_active and nav_inactive

hdr_cls = over
drop_attr(hdr_cls, "class")
hdr_cls.attrs.insert(0, ("__expr__className", 'scrolled ? "is-sc" : undefined'))
# Once the visitor has scrolled, the header must not replay its intro fade when it un-sticks
# (see src/styles/overrides.css).
hdr_cls.attrs.insert(1, ("__expr__data-settled", "settled || undefined"))

menu = node("Services", "menu")
for n in walk(menu):
    if n.tag == "img":
        drop_attr(n, "src")
        n.attrs.insert(0, ("__expr__src", "logo.menu"))
    if n.tag == "button" and A(n).get("onclick"):
        set_attr(n, "onclick", "{{closeMenu}}")

# The mobile menu is rendered in a portal on <body>: inside the header it was trapped in the hero's
# stacking context, so later page content (e.g. the footer) painted over it. Tapping a link closes it.
_menu = jsx(menu)
assert _menu.startswith("{menuOpen && (") and _menu.endswith(")}"), _menu[:40]
menu_portal = (
    "{menuOpen && createPortal(<div onClickCapture={(e) => { if ((e.target as Element).closest(\"a\")) closeMenu(); }}>"
    + _menu[len("{menuOpen && ("):-len(")}")]
    + "</div>, document.body)}"
)

header_tsx = f'''"use client";

import {{ useEffect, useState }} from "react";
import {{ createPortal }} from "react-dom";
import {{ sx }} from "@/components/site/sx";
import {{ useTranslate }} from "@/lib/i18n/context";

export type NavKey = "home" | "mission" | "services" | "gallery" | "blog" | "contact";

type SiteHeaderProps = {{
  /** `overlay` floats over a dark hero image; `solid` sits on white. */
  variant?: "overlay" | "solid";
  /** Highlights the matching top-level nav item. */
  current?: NavKey;
  /** The Home page uses the sage version of the logo, the other pages the gold one. */
  logoTone?: "gold" | "sage";
}};

// Inline styles that differ between the two header variants, as written in the design.
const VARIANTS = {json.dumps(variants, indent=2, ensure_ascii=False)};

const LOGOS = {{
  gold: {{
    wordmark: "/images/logo-gold-on-dark.png",
    symbol: "/images/symbol-gold-on-dark.png",
    menu: "/images/logo-gold.png",
  }},
  sage: {{
    wordmark: "/images/logo-sage-on-dark.png",
    symbol: "/images/symbol-sage-on-dark.png",
    menu: "/images/logo-green.png",
  }},
}};

const NAV_LINK = {json.dumps(nav_inactive, ensure_ascii=False)};
const NAV_LINK_ACTIVE = {json.dumps(nav_active, ensure_ascii=False)};
const navLink = (active: boolean) => (active ? NAV_LINK_ACTIVE : NAV_LINK);

export function SiteHeader({{ variant = "solid", current, logoTone = "gold" }}: SiteHeaderProps) {{
  const tr = useTranslate();
  const v = VARIANTS[variant];
  const logo = LOGOS[logoTone];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [settled, setSettled] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {{
    const onScroll = () => {{
      const past = window.scrollY > 40;
      setScrolled(past);
      if (past) setSettled(true);
    }};
    onScroll();
    window.addEventListener("scroll", onScroll, {{ passive: true }});
    return () => window.removeEventListener("scroll", onScroll);
  }}, []);

  // While the mobile menu is open, the page behind it must not scroll.
  useEffect(() => {{
    if (!menuOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {{
      root.style.overflow = previous;
    }};
  }}, [menuOpen]);

  return tr(
    <>
      {jsx(over)}
      {menu_portal}
    </>
  );
}}
'''
write("src/components/site/site-header.tsx", header_tsx)

# ------------------------------------------------------------------ footer
footer = node("Services", "footer")
for n in walk(footer):
    if n.tag == "img" and "77436f0e" in A(n).get("src", ""):
        drop_attr(n, "src")
        n.attrs.insert(0, ("__expr__src",
                           'logoTone === "sage" ? "/images/logo-sage-on-dark.png" : "/images/logo-gold-on-dark.png"'))
# the footer's "Accessibility" link (href="#" in the design) points at the accessibility statement page
for n in walk(footer):
    if n.tag == "a" and "".join(c for c in n.children if isinstance(c, str)).strip() == "Accessibility":
        n.attrs = [(k, "/accessibility" if k == "href" else v) for k, v in n.attrs]
# the design's static "English" button becomes the working language menu (src/components/site/lang-menu.tsx)
lang_btn = next(n for n in walk(footer) if n.tag == "button" and A(n).get("aria-label", "").startswith("Language"))
lang_btn.parent.children[lang_btn.parent.children.index(lang_btn)] = G.Raw("<LangMenu />", lang_btn.parent)
write("src/components/site/site-footer.tsx", f'''"use client";

import {{ LangMenu }} from "@/components/site/lang-menu";
import {{ useTranslate }} from "@/lib/i18n/context";

type SiteFooterProps = {{
  /** The Home page uses the sage version of the logo, the other pages the gold one. */
  logoTone?: "gold" | "sage";
}};

export function SiteFooter({{ logoTone = "gold" }}: SiteFooterProps) {{
  const tr = useTranslate();
  return tr(
    {jsx(footer)}
  );
}}
''')

# (The design's fixed mobile call bar is not used: the burger menu already holds those buttons.)

# ------------------------------------------------------------------ contact section
contact = node("Services", "contact")
gallery_contact = node("Gallery", "contact")
h2 = next(n for n in walk(contact) if n.tag == "h2")
title_default = "".join(c for c in h2.children if isinstance(c, str)).strip()
h2.children = [G.Raw("{title}", h2)]
par = h2.parent
lede = next(c for c in par.children if not isinstance(c, str) and c.tag == "p")
lede_default = " ".join("".join(c for c in lede.children if isinstance(c, str)).split())
lede.children = [G.Raw("{lede}", lede)]
g_ps = [n for n in walk(gallery_contact) if n.tag == "p" and "font-size: 26px" in A(n).get("style", "")]
appt = g_ps[0]
appt.children = [G.Raw("{appointment}", appt)]
appt_jsx = "{appointment && (" + jsx(appt) + ")}"
par.children.insert(par.children.index(lede) + 1, G.Raw(appt_jsx, par))

write("src/components/site/contact-section.tsx", f'''"use client";

import {{ useConsultationForm }} from "@/components/site/use-consultation-form";
import {{ useTranslate }} from "@/lib/i18n/context";

type ContactSectionProps = {{
  title?: string;
  lede?: string;
  /** Extra line shown under the lede on some pages (e.g. Gallery). */
  appointment?: string;
}};

/** "Let's work together" band with contact details and the free-consultation form. */
export function ContactSection({{
  title = {json.dumps(title_default, ensure_ascii=False)},
  lede = {json.dumps(lede_default, ensure_ascii=False)},
  appointment,
}}: ContactSectionProps) {{
  const submitForm = useConsultationForm();
  const tr = useTranslate();
  return tr(
    {jsx(contact)}
  );
}}
''')
