"""Rewrite internal <a href="/..."> elements in TSX files to next/link <Link>."""
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")


def opening_end(s, i):
    """Index just past the '>' that closes the opening tag starting at s[i] == '<'."""
    depth = 0
    q = None
    j = i + 1
    while j < len(s):
        ch = s[j]
        if q:
            if ch == "\\":
                j += 2
                continue
            if ch == q:
                q = None
        elif ch in "\"'`" and depth >= 0:
            q = ch
        elif ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
        elif ch == ">" and depth == 0:
            return j + 1
        j += 1
    raise ValueError("unterminated tag")


def convert(src):
    out = []
    stack = []
    i = 0
    changed = 0
    pat = re.compile(r"<a(?=[\s>/])|</a>")
    while True:
        m = pat.search(src, i)
        if not m:
            out.append(src[i:])
            break
        out.append(src[i:m.start()])
        if m.group(0) == "</a>":
            internal = stack.pop()
            out.append("</Link>" if internal else "</a>")
            i = m.end()
            continue
        end = opening_end(src, m.start())
        tag = src[m.start():end]
        internal = bool(re.search(r'\shref="/(?!/)', tag)) and "target=" not in tag
        selfclosing = tag.rstrip(">").rstrip().endswith("/")
        if internal:
            tag = "<Link" + tag[2:]
            changed += 1
        if not selfclosing:
            stack.append(internal)
        out.append(tag)
        i = end
    res = "".join(out)
    if changed and 'from "next/link"' not in res:
        # insert import after "use client" directive / at top
        lines = res.split("\n")
        k = 0
        if lines and lines[0].startswith('"use client"'):
            k = 1
            while k < len(lines) and lines[k].strip() == "":
                k += 1
        lines.insert(k, 'import Link from "next/link";')
        res = "\n".join(lines)
    return res, changed


if __name__ == "__main__":
  for path in sys.argv[1:]:
    s = open(path, encoding="utf8").read()
    r, n = convert(s)
    if n:
        open(path, "w", encoding="utf8").write(r)
    print(path, n)
