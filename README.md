# Evelyn The Sitter

A static HTML/CSS/JS website for a fictional pet-sitting business. Built as a facsimile of sarahthesitter.com with the branding adapted to **Evelyn The Sitter** — *Loving Cats and Dogs since 1976*.

## Quick Start

```bash
cd ~/Projects/evelyn_the_sitter
# Open index.html in a browser
# Or run: python3 -m http.server 8000
# Then visit: http://localhost:8000
```

## Project Structure

```
├── index.html                # Homepage
├── css/style.css            # Stylesheet
├── js/script.js             # Interactivity
├── images/                  # Photos (placeholders for public domain images)
├── pages/                   # Subpages (team, services, faq, reviews, contact, join)
├── WAYPOINT.md              # Full project documentation
├── RESUME.md                # Resumption prompt
└── README.md                # This file
```

## Pages

- **index.html** — Homepage (hero, about, team, services overview, testimonials)
- **pages/team.html** — Detailed team profiles (Evelyn, Marcus, Priya, Jordan)
- **pages/services.html** — Full service menu with pricing
- **pages/faq.html** — FAQs & Policies
- **pages/reviews.html** — Client testimonials
- **pages/contact.html** — Contact form (mock)
- **pages/join.html** — Join Our Team application (mock)

## Features

- Responsive design (mobile-first)
- Mock forms with client-side success messages
- Clean, professional pet-care aesthetic
- Proper SEO meta tags on all pages
- Public domain images (candid pet-care action shots)

## Brand

**Evelyn The Sitter**  
*Loving Cats and Dogs since 1976*

### Services
- Dog Walk Visits ($32)
- Cat Care Visits ($27)
- Doggy Adventures ($70)
- Vacation Packages (custom)
- Specialty Animal Care (custom)
- House Sitting & Plant Care (custom)

### Team
- **Evelyn Chen** — Founder & Cuddles Captain
- **Marcus Thompson** — Lead Trainer & Senior Sitter
- **Priya Patel** — Cat Specialist & Operations Lead
- **Jordan Martinez** — Adventure Guide & Community Lead

## Technical Stack

- HTML5 (semantic markup)
- CSS3 (flexbox/grid, responsive)
- Vanilla JavaScript (forms, navigation, interactions)
- Static site (no backend required)

## Deployment

Ready for GitHub Pages or any static hosting:

```bash
git remote add origin https://github.com/YOUR_USERNAME/evelyn_the_sitter.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings (serve from `/` or `/docs`).

## Development Notes

- All forms are mocked; submit buttons show a success message without backend submission
- Images are placeholder paths; replace with actual public domain photos from Unsplash/Pexels/Pixabay
- CSS matches the warm, professional aesthetic of the source design
- Mobile testing recommended before production

## License

Internal use only. Facsimile created for learning/prototype purposes.

---

**Built with:** Claude Haiku 4.5  
**Last Updated:** 2026-08-13
