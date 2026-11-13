"""Parse a design artboard export and find its shared blocks."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import dc2jsx as D  # noqa: E402


def parse(path):
    s = open(path, encoding="utf8").read()
    i = s.find("</helmet>") + len("</helmet>")
    j = s.find('<script type="text/x-dc"')
    p = D.P()
    p.feed(s[i:j].replace("</x-dc>", ""))
    return p.root


def walk(n):
    if isinstance(n, str):
        return
    yield n
    for c in n.children:
        yield from walk(c)


def find(root, pred):
    return next((n for n in walk(root) if pred(n)), None)


def A(n):
    return dict(n.attrs)


preds = {
    "header": lambda n: n.tag == "header" and any(
        x.tag == "nav" and "nav-d" in A(x).get("class", "") for x in walk(n)),
    "menu": lambda n: n.tag == "sc-if" and "menuOpen" in A(n).get("value", ""),
    "footer": lambda n: n.tag == "footer",
    "sticky": lambda n: n.tag == "div" and A(n).get("class") == "sticky-m",
    "contact": lambda n: n.tag == "section" and A(n).get("id") == "contact",
}
