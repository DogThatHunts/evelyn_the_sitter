# Evelyn The Sitter — Project Waypoint

**Project Date:** 2026-08-13  
**Status:** Initial build phase  
**Model:** Haiku 4.5  

## Project Overview

**Evelyn The Sitter** is a static HTML/CSS/JS facsimile of sarahthesitter.com, rebranded and adapted for a fictional pet-sitting business. Built as an internal DIY learning project with potential for production deployment.

### Brand Identity
- **Business Name:** Evelyn The Sitter
- **Tagline:** "Loving Cats and Dogs since 1976"
- **Service Areas:** Generic (not location-specific)
- **Team Size:** 4 fictional staff members (Evelyn + 3 team leads)
- **Aesthetic:** Pixel-for-pixel match to Sarah's design (warm, professional, pet-focused)

## Source Material

All content extracted from https://www.sarahthesitter.com on 2026-08-13, then adapted for Evelyn's fictional brand.

### Key Borrowed Elements
- **Services:** 6 identical offerings (dog walks, cat visits, adventures, vacation packages, specialty animals, house sitting)
- **Pricing Structure:** Exact pricing extracted from Sarah's site
- **Layout & Navigation:** Matching structure (hero, about, team, services, testimonials, footer)
- **Brand Voice:** Professional, pet-centric, emphasizing personalized care
- **All Subpages:** Team profiles, FAQs, Contact, Join Our Team, Client Reviews

### Adaptations
- **Team Profiles:** 4 new fictional characters replacing Sarah's 6 staff
  - Evelyn (Owner & founder)
  - Marcus (Lead Trainer & Senior Sitter)
  - Priya (Cat Specialist & Operations)
  - Jordan (Adventure Guide & Community Lead)
- **Testimonials:** New fictional client testimonials (4 total)
- **Credentials:** Generic credentials (CPR, bonded/insured, PetTech certifications) — same framework as Sarah's
- **About Section:** Evelyn's fictional biography and philosophy

## Folder Structure

```
evelyn_the_sitter/
├── index.html                 # Homepage (hero, about, team, services, testimonials)
├── css/
│   └── style.css             # Main stylesheet (all pages)
├── js/
│   └── script.js             # Forms, navigation, interactivity
├── images/
│   ├── team/                 # Placeholder names for public domain team photos
│   ├── services/             # Action shots (placeholder structure)
│   ├── logo.png              # Placeholder for Evelyn logo
│   └── favicon.ico
├── pages/
│   ├── team.html             # Detailed team profiles
│   ├── services.html         # Full service menu + pricing
│   ├── faq.html              # FAQs & Policies
│   ├── reviews.html          # Client testimonials
│   ├── contact.html          # Contact form (mock)
│   └── join.html             # Join Our Team recruitment
├── .gitignore
├── README.md                 # Project overview
├── WAYPOINT.md               # This file
└── RESUME.md                 # Resume prompt for continuation
```

## Build Status

### Completed
- [x] Folder structure & git initialization
- [x] Content extraction from sarahthesitter.com
- [x] Fictional team creation (4 members)
- [x] WAYPOINT.md documentation

### In Progress
- [ ] CSS stylesheet (style.css) — matching Sarah's design
- [ ] index.html — homepage build
- [ ] js/script.js — form handling + interactivity
- [ ] pages/team.html
- [ ] pages/services.html
- [ ] pages/faq.html
- [ ] pages/reviews.html
- [ ] pages/contact.html
- [ ] pages/join.html
- [ ] Public domain image research & integration

### To Do
- [ ] Replace placeholder image paths with actual public domain candid pet-care photos
- [ ] SEO meta tags audit & finalization
- [ ] Form validation & UX polish
- [ ] Mobile responsiveness review
- [ ] GitHub repo setup & initial push
- [ ] RESUME.md finalization

## Technical Decisions

**Static Site Approach:**
- No backend; all forms mock-submit with client-side success message
- New Client Request Form → console log + success toast
- Contact Form → console log + success toast
- Join Our Team form → same pattern

**Design System:**
- CSS: Custom stylesheet matching Sarah's warm, professional palette
- Layout: Responsive flexbox/grid (mobile-first approach)
- Forms: HTML5 validation + custom JS handlers
- Navigation: Sticky header with mobile hamburger menu

**Public Domain Images:**
- Team photos: Generic professional headshots (Unsplash/Pexels)
- Action shots: Candid pet-care moments (walking dogs, playing with cats)
- Service illustrations: Simple, warm imagery matching Sarah's tone

**SEO & Metadata:**
- Unique title + meta description per page
- Canonical URLs (placeholder structure)
- Open Graph tags for social sharing
- No analytics yet (static build)

## Fictional Team Profiles

### Evelyn Chen (Owner & Founder)
- **Title:** Founder & Cuddles Captain
- **Bio:** Founded Evelyn The Sitter in 1976 with a mission to provide loving, personalized pet care. Background in organizational psychology and animal behavioral science. Lifelong pet advocate with 4 rescue cats and 2 dogs.
- **Credentials:** Bonded & Insured, Animal Red Cross CPR, PetTech PetSaver
- **Philosophy:** "Every pet deserves a guardian who understands their unique personality."

### Marcus Thompson (Lead Trainer & Senior Sitter)
- **Title:** Lead Trainer & Senior Sitter
- **Since:** 2015
- **Bio:** 10+ years of professional pet care. Specializes in behavior training and anxious pet care. Marathon runner who brings adventure energy to every visit.
- **Credentials:** Professional Pet Sitter (ASPCA), CPR Certified, Anxiety-Focused Care Specialist

### Priya Patel (Cat Specialist & Operations Lead)
- **Title:** Cat Specialist & Operations Lead
- **Since:** 2018
- **Bio:** Former veterinary assistant with deep expertise in feline behavior and health. Multilingual (English, Spanish, Mandarin). Manages scheduling and client relations.
- **Credentials:** Bonded & Insured, Veterinary Assistant (5 years), PetTech Certified

### Jordan Martinez (Adventure Guide & Community Lead)
- **Title:** Adventure Guide & Community Lead
- **Since:** 2019
- **Bio:** Outdoor enthusiast with expertise in enrichment activities. Leads Evelyn's community outreach programs. Fluent in Spanish.
- **Credentials:** Bonded & Insured, Wilderness First Aid, Adventure Dog Trainer

## Content Specifications

### Services (Extracted Pricing from Sarah's Site)
1. **Dog Walk Visit** — $32 (40 min); $64 (80 min)
2. **Meow Meow Visit (Cat Care)** — $27 (25 min); $54 (50 min)
3. **Doggy Adventure Visit** — $70 (90 min)
4. **Vacation Visit Packages** — Custom (breakfast/midday/dinner/bedtime); Overnight $105 (M-Th) / $115 (F-Su)
5. **Specialty Animal Visits** — Custom quotes (rabbits, birds, bearded dragons, etc.); Medical care available
6. **House Sitting & Plant Care** — Custom quotes

**Additional Fees (Standard):**
- +$10 per additional dog
- +$5 per additional cat
- +$10 before 9am / after 5pm
- +$13 weekends
- +$16 holidays

### Testimonials (Fictional)
1. *"Evelyn was recommended by our vet and she's been a lifesaver during our travels. Our anxious dog is visibly calm and happy when she visits."* — Marcus, Columbus
2. *"Professional, trustworthy, and genuinely loves animals. We wouldn't trust anyone else with our three cats."* — The Johannsens
3. *"Best investment we've made for our pets' happiness. The team is incredible."* — Sarah K., Cincinnati
4. *"Our senior dog looks forward to adventure visits. Evelyn's care has added years of joy to his life."* — Robert M.

## Notes for Continuation

- **IP Overlap:** Content/structure mirrors Sarah's site; currently for internal use only. Review for any direct copy before production deployment.
- **Image Sourcing:** Prioritize Unsplash, Pexels, Pixabay for candid, authentic pet-care action shots.
- **Mobile Testing:** Test all pages on mobile (iPhone 12, Android Samsung) before GitHub push.
- **Form Behavior:** Mock forms currently log to console; can be wired to backend email service (Formspree, Basin) later.
- **Time To Pet Integration:** Currently listed as "Coming Soon" placeholder; can be added if real integration needed.

## Next Steps

1. Build CSS stylesheet (reference Sarah's design)
2. Create index.html homepage
3. Build all 6 subpages (team, services, faq, reviews, contact, join)
4. Integrate public domain images
5. Test form interactions
6. Review responsive design
7. Finalize SEO metadata
8. Git commit & push to GitHub

---

**Last Updated:** 2026-08-13  
**Maintained By:** Claude Haiku 4.5
