# Shahnaii Marriage Hall — Digital Grandeur

## Project Overview
Ultra-luxury single-page landing website for Shahnaii Marriage Hall located at Motiganj Chauraha, Domariyaganj, Uttar Pradesh. Uses a "Modern Opulence" aesthetic — obsidian black (#050505) with champagne gold (#D4AF37) accents. **Strict dark-mode only.**

## Architecture
- **Frontend**: React + TypeScript + Vite
- **Backend**: Minimal Express.js (serving static frontend)
- **Styling**: Tailwind CSS with custom Obsidian & Gold theme
- **Animations**: CSS keyframes (Ken Burns, ticker scroll, fade-up)
- **Routing**: Wouter (single page — only / route)

## Design System
- **Primary Background**: Obsidian #050505
- **Accent**: Champagne Gold #D4AF37
- **Text**: Ivory #FCFBF7
- **Fonts**: Cinzel Decorative (headings), Cinzel (subheadings), Playfair Display (italic/quotes), Montserrat (body)
- **Dark Mode**: Forced via `document.documentElement.classList.add("dark")` in App.tsx

## Pages & Components
- `client/src/pages/home.tsx` — Main single-page layout
- `client/src/components/luxury-cursor.tsx` — Custom gold cursor (desktop only)
- `client/src/components/gold-ticker.tsx` — Fixed top scrolling announcements bar
- `client/src/components/glassmorphism-header.tsx` — Fixed nav that darkens on scroll
- `client/src/components/imperial-hero.tsx` — Full-height hero with Ken Burns images
- `client/src/components/experience-wings.tsx` — 3-column bento grid of venue spaces
- `client/src/components/why-shahnaii.tsx` — 6-card pillar grid of venue features
- `client/src/components/social-proof.tsx` — 4 verified testimonial cards
- `client/src/components/gallery-section.tsx` — Masonry photo grid
- `client/src/components/human-story.tsx` — Alternating image+text story cards
- `client/src/components/concierge-map.tsx` — Google Maps embed + contact info
- `client/src/components/royal-trio-nav.tsx` — Fixed mobile bottom nav (Location/Call/WhatsApp)
- `client/src/components/site-footer.tsx` — Footer with links and contact info

## Key Details
- Phone: 098111 13182
- WhatsApp: +919811113182
- Address: Motiganj Chauraha, Domariyaganj, Bhari, Uttar Pradesh 272194
- Gold Ticker is z-index 100, fixed at top
- Header is positioned below ticker (top: 28px)
- Royal Trio Nav is mobile-only (hidden on md+)
- All Intersection Observer scroll reveals for section animations
