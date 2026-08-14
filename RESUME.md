# Evelyn The Sitter — Resume Prompt

## Quick Context

This project is a static HTML/CSS/JS facsimile of **sarahthesitter.com**, rebranded as **Evelyn The Sitter** ("Loving Cats and Dogs since 1976"). Built as an internal DIY learning prototype with potential for production.

**All project details, decisions, team profiles, content specs, and build status are documented in `WAYPOINT.md` in this folder.**

## Full Resumption Prompt

---

You are Claude Haiku 4.5, working on the **Evelyn The Sitter** website project in `/Users/edward/Projects/evelyn_the_sitter/`.

### Project Goal
Build a static HTML/CSS/JS website that is a pixel-for-pixel visual match to sarahthesitter.com, but rebranded for a fictional pet-sitting business called **Evelyn The Sitter** with the tagline **"Loving Cats and Dogs since 1976"**.

### Specifications

**Brand & Team:**
- Business: Evelyn The Sitter (fictional)
- Tagline: "Loving Cats and Dogs since 1976"
- Team: 4 fictional members (Evelyn Chen + Marcus Thompson + Priya Patel + Jordan Martinez) — see WAYPOINT.md for full bios
- Tone: Professional, warm, pet-focused

**Content:**
- All copy extracted from sarahthesitter.com and adapted for Evelyn
- Services: 6 identical offerings with exact Sarah's pricing (dog walks $32, cat visits $27, etc.)
- Testimonials: 4 new fictional client reviews (see WAYPOINT.md)
- About: Evelyn's fictional biography and philosophy
- All subpages: Team, Services, FAQs, Reviews, Contact, Join Our Team

**Technical Requirements:**
- Static HTML/CSS/JS only (no backend)
- Organized folder structure: /css, /js, /images, /pages
- Forms (New Client Request, Contact, Join Team): mock/placeholder with client-side success messages
- Responsive design (mobile-first)
- Proper SEO meta tags (title, description, og tags) on all pages
- Git repo initialized locally, ready for GitHub push
- Matching Sarah's design aesthetic pixel-for-pixel (warm, professional, clean layout)

**Images:**
- Replace all photos with public domain candid pet-care action shots (Unsplash, Pexels, Pixabay)
- Team photos: generic professional headshots
- Service/action photos: authentic pet-care moments (dogs walking, playing with cats, etc.)

**Build Status:**
- ✅ Folder structure created
- ✅ Git initialized
- ✅ WAYPOINT.md written
- ⏳ CSS stylesheet (style.css) — needs to match Sarah's design
- ⏳ index.html homepage
- ⏳ pages/team.html, pages/services.html, pages/faq.html, pages/reviews.html, pages/contact.html, pages/join.html
- ⏳ js/script.js for forms + interactivity
- ⏳ Public domain images integrated

### Next Task

Pick up where work left off:

1. **Build CSS stylesheet** (`css/style.css`) — analyze Sarah's design (colors, fonts, spacing, layout) and create a matching stylesheet
2. **Build index.html** — homepage with hero, about, team preview, services overview, testimonials section, and footer
3. **Build all subpages** (pages/team.html, pages/services.html, pages/faq.html, pages/reviews.html, pages/contact.html, pages/join.html) with matching styling
4. **Build js/script.js** — form handling (mock submit with success toast), mobile menu toggle, smooth scrolling
5. **Integrate public domain images** — search and replace placeholder paths with actual Unsplash/Pexels URLs
6. **Review responsive design** — test on mobile (iPhone/Android simulation)
7. **Finalize SEO** — audit all meta tags
8. **Final git commit & push** — prepare for GitHub

### Reference Files
- **WAYPOINT.md** — full project documentation, team profiles, content specs, design decisions
- **sarahthesitter.com** — source site for pixel-perfect design matching
- All extracted content (services, pricing, testimonials, bios) in WAYPOINT.md

### Key Details to Remember
- **Tagline:** "Loving Cats and Dogs since 1976" (not Sarah's "Est. 2019")
- **Team:** 4 fictional members (see WAYPOINT for full profiles)
- **Testimonials:** 4 new fictional ones (in WAYPOINT)
- **Services & Pricing:** Exact from Sarah's site (do not modify)
- **Design:** Match Sarah's pixel-for-pixel (warm colors, clean layout, professional tone)
- **Forms:** Mock/placeholder (no real backend; success message on client-side submit)
- **Images:** Public domain only (no Sarah's actual photos; replace with candid pet-care shots)

### Important Notes
- This is a facsimile for internal learning use; IP overlap review deferred until production decision
- Mobile responsiveness is critical
- All pages must have proper <title>, <meta description>, and Open Graph tags
- Forms should log to console on mock-submit and show success toast
- Git history should be clean commits for each major component (CSS, index, pages, js, images)

---

**When you're ready to continue:** Review WAYPOINT.md, start with CSS stylesheet, then build pages in order. Test as you go. Ask clarifying questions if needed.

**Current Working Directory:** `/Users/edward/Projects/evelyn_the_sitter/`

**Git Status:** Initialized with initial .gitignore commit; ready for feature commits.

---

*Resume prompt written 2026-08-13 by Claude Haiku 4.5*
