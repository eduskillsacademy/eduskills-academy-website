# EduSkills Academy — Bright Luxury Homepage Patch

This patch is designed for the existing React + Vite repository:
`eduskillsacademy/eduskills-academy-website`

## Files included

- `src/pages/Home.jsx` — redesigned homepage
- `src/components/Navbar.jsx` — matching responsive navigation
- `src/index.css` — Bright Luxury design system and homepage styling

## Apply the patch

1. Download and unzip this folder.
2. In your project, make a backup or create a new Git branch (recommended: `redesign/bright-luxury-home`).
3. Replace the three matching files with the files in this patch.
4. Keep `src/data/academy.js`, `src/App.jsx`, `src/pages/*` and all other existing files unchanged.
5. Run `npm install` if needed, then `npm run build`.
6. Preview locally before merging or deploying.

## Notes

- Existing routes and the current academy data module are reused.
- Enquiry, contact and WhatsApp routes remain in place.
- The homepage uses remotely hosted Unsplash images. Replace these with authentic academy/student photos before final launch.
- The existing programme data contains placeholder audience, duration, fee and testimonial fields. This homepage deliberately avoids publishing placeholder testimonials or unconfirmed fees.
- The academic section uses the academy's previously stated offering: Classes 1–10 (all subjects) and selected subjects for Classes 11–12. Confirm this wording before publishing.
- This is a source patch only. It does not modify GitHub, Vercel, DNS, or the live website.
