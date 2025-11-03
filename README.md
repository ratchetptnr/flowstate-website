# FlowState Marketing Website

A modern, animated marketing website for FlowState - coworking sessions at Chennai's best cafés.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives (Accordion for FAQ)
- **Lucide React** - Beautiful icon library

## Features

- ✨ Smooth scroll animations using Framer Motion
- 📱 Fully responsive design
- ♿ Accessible components with Radix UI
- 🎨 Clean, modern design with Tailwind CSS
- 🎯 Optimized for performance
- 📋 Interactive FAQ accordion section

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── components/          # All section components
│   ├── hero-section.tsx
│   ├── problem-section.tsx
│   ├── solution-section.tsx
│   ├── how-it-works.tsx
│   ├── why-flowstate.tsx
│   ├── what-we-offer.tsx
│   ├── where-we-meet.tsx
│   ├── who-this-is-for.tsx
│   ├── flowstate-promise.tsx
│   ├── pricing-section.tsx
│   ├── booking-app-section.tsx
│   ├── final-cta.tsx
│   └── footer.tsx
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx            # Home page

components/ui/           # Reusable UI components (if needed)
```

## Sections Overview

1. **Hero** - Eye-catching headline with CTA
2. **Problem** - Addresses pain points
3. **Solution** - Introduces FlowState's offering
4. **How It Works** - 3-step process
5. **Why FlowState** - Value proposition
6. **What We Offer** - Different session types
7. **Where We Meet** - Partner cafés
8. **Who This Is For** - Target audience
9. **Promise** - Core values
10. **Pricing** - Clear pricing structure
11. **Upcoming Sessions** - Placeholder for booking system
12. **Final CTA** - Strong call to action
13. **FAQ** - Frequently asked questions with accordion
14. **Footer** - Links and contact info

## Animations

All sections use Framer Motion for smooth entrance animations:
- Fade in from bottom on scroll
- Hover effects on interactive elements
- Staggered animations for lists and grids
- Smooth page transitions

## Customization

### Colors
Edit the color scheme in `app/globals.css` under the `:root` CSS variables.

### Content
All content is directly in the component files for easy editing. Simply modify the text in each component file.

### Animations
Adjust animation timing and effects in the Framer Motion variants at the top of each component file.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

All rights reserved - FlowState
