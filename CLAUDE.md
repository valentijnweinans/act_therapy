# Anne Weinans — Praktijk Website

## Project
Single-page scroll-snap website for a psychosocial ACT therapist and coach.

## Tech Stack
- Vanilla HTML, CSS, JavaScript (no frameworks, no build tools)
- Served as static files (must work via `file://` and GitHub Pages)
- Google Fonts: Cormorant Garamond (accent), Playfair Display (headings), Nunito (body)
- Lucide icons via CDN

## File Structure
```
index.html    → Page structure and sections
styles.css    → All styling, mobile-first responsive
main.js       → Navigation, tabs, accordions, animations, content injection
content.js    → ALL website text content (editable by client)
```

## Color Palette
- Sage `#98A086` — primary/dominant color
- Rose `#A76D5E` — accent (buttons, CTA)
- Light brown `#DFCCB1`
- Tan brown `#C4A071`
- Dark brown `#846044`

## Key Conventions
- **Mobile-first**: design for phone first, enhance for tablet/desktop
- **Scroll-snap**: each section snaps to viewport (`scroll-snap-type: y mandatory`)
- **Content lives in `content.js`**: a `var SITE_CONTENT = {}` object. Client edits this file on GitHub. Don't hardcode text in HTML.
- **CSS uses custom properties**: all colors, fonts, spacing defined as `--variables` in `:root`
- **Separate files**: CSS and JS are always separate from HTML. No inline styles or scripts (except the content.js load-check in index.html).
- **Dutch language**: all UI text and comments are in Dutch
- **Code comments in Dutch** where they explain structure or editing instructions
- Use `var` (not `const`) for `SITE_CONTENT` so it's accessible globally

## Sections (scroll order)
1. Hero (name, intro, photo placeholder)
2. Behandelingen (tabs: Voor wie / Methoden / Traject)
3. Over mij (accordion)
4. Praktisch (info-list, always visible)
5. Contact (form + notices)
6. Kwaliteit (info-list, always visible, compact)
7. Footer

## Notes
- Praktisch and Kwaliteit use simple visible info-items, NOT accordions
- Over mij uses accordion (clickable expand/collapse)
- Behandelingen uses tab navigation (Voor wie / Methoden / Traject)
- Image placeholders exist for hero and over-mij — to be replaced with real photos
- Contact form currently shows a success message client-side only (no backend yet)
