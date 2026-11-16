# V&C Cabinet Design Concept — information to verify

The site follows the specification, which forbids inventing projects, testimonials, certifications or
services. Wherever the real information is not available yet, the site shows a clearly marked
**placeholder** ("Sample content" badge, text in [brackets]). Each item below must be supplied or
confirmed by the client before launch.

## 1. Reviews (Home, right under the video)

Placeholders are shown in `src/content/reviews.ts` (`draft: true`). Please send **real reviews** (for
example from the Google Business profile, with the clients' permission): first name + last initial, city,
project type, rating and text — in the language they were written in. Also send the Google rating, the
review count and the profile link (shown next to the reviews once provided).

## 2. Realized projects (Kitchen and Bathroom pages)

Each page has two project slots (`src/content/projects.ts`, `draft: true`). For each real project:

- a **before** photo and an **after** photo taken from the same spot, same framing (they are overlaid
  by the before/after comparator);
- city; client's needs; initial state; work done; materials; methods and solutions; final result.

File names to use: see `docs/envato-media.md`, section 4.

## 3. Photos and video

Stock media (Envato Elements) to replace the temporary visuals: see **`docs/envato-media.md`** — hero
video, page banners, service cards and blog covers, with search terms and exact file names.

## 4. Contact details and company facts

| Item | Value on the site | Correct value |
| --- | --- | --- |
| Phone | 727-223-3490 | |
| Email | cabinetdesignconcept@gmail.com | |
| Address | 19046 Bruce B Downs Blvd, Ste B6, Tampa, FL 33647 | |
| Cities served | Tampa, Bradenton, Clearwater, St. Petersburg | |
| Facebook | https://www.facebook.com/vccabinetdesign (guessed) | |
| YouTube | https://www.youtube.com/@vccabinetdesign (guessed) | |
| LinkedIn | https://www.linkedin.com/company/vc-cabinet-design-concept (guessed) | |

The social links are not declared to search engines (`sameAs`) until confirmed.

## 5. Quote form — delivery of the requests

The form (`/fr/soumission`, `/en/get-a-quote`, `/es/cotizacion`) sends each request by e-mail through
[Resend](https://resend.com). Set these environment variables in Vercel (Project → Settings →
Environment Variables), then redeploy:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | API key of the Resend account |
| `QUOTE_NOTIFICATION_EMAIL` | Address that receives the requests (the company's inbox) |
| `QUOTE_FROM_EMAIL` | Sender, e.g. `V&C Cabinet Design <quotes@vccabinetdesign.com>` (domain verified in Resend). Default: Resend's test sender, which only delivers to the Resend account owner. |
| `NEXT_PUBLIC_SITE_URL` | Final address of the site, e.g. `https://vccabinetdesign.com` (canonical URLs, sitemap) |

Until `RESEND_API_KEY` and `QUOTE_NOTIFICATION_EMAIL` are set, the form shows an error with the phone
number instead of a false confirmation.

## 6. Other

- **Blog articles:** six starter articles (general advice, no invented facts) in the three languages.
  Please review them, or send your own topics.
- **Accessibility statement** and **privacy policy:** drafts online in the three languages; please
  confirm the contact details and the commitments they contain.
