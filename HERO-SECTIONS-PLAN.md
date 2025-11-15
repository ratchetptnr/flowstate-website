# FlowState Hero Sections Plan

## Overview
This document outlines the new hero section structure with scroll-based content swapping. The hero remains sticky while text and blob images change as the user scrolls through different sections.

## Design Concept
- **Fixed Elements**: Logo, "Book your session" button, blob shape
- **Dynamic Elements**: Top text, blob image/content, bottom text
- **Behavior**: As user scrolls, content smoothly transitions between sections

---

## Section Breakdown

### Section 1: Hero / Introduction
**Purpose**: Initial landing - introduce FlowState

- **Top Text**: "3-hour coworking sessions at Chennai's best cafés. Come alone, work with others, actually get shit done."
- **Blob Content**: Gradient/abstract visual
- **Bottom Text**: "Stop pretending your house is a workspace"
- **Image to Create**: Abstract gradient blob (blue-orange-gray blend) or decorative pattern

---

### Section 2: Problem
**Purpose**: Highlight the pain point of working from home

- **Top Text**: "Working from home isn't working"
- **Blob Content**: Visual of distracted person at home
- **Bottom Text**: "Distractions kill productivity"
- **Image to Create**: Photo or illustration showing:
  - Person at home surrounded by distractions
  - Messy home office
  - Family/pets interrupting
  - Phone notifications, TV in background

---

### Section 3: Solution
**Purpose**: Show FlowState as the answer

- **Top Text**: "FlowState changes that"
- **Blob Content**: Focused people working in a café
- **Bottom Text**: "Real work, real progress"
- **Image to Create**: Photo showing:
  - People focused on laptops in nice café setting
  - Clean, professional atmosphere
  - Good lighting, coffee cups
  - Collaborative but focused energy

---

### Section 4: Community
**Purpose**: Emphasize the community aspect

- **Top Text**: "Join Chennai's most focused community"
- **Blob Content**: Group photo of FlowState members
- **Bottom Text**: "Where work actually happens"
- **Image to Create**: Photo showing:
  - Group of FlowState members together
  - Diverse group of professionals
  - Friendly but professional vibe
  - Maybe at a café or event

---

### Section 5: Call to Action
**Purpose**: Convert visitors to book a session

- **Top Text**: "Ready to get shit done?"
- **Blob Content**: Calendar/booking visual or upcoming session preview
- **Bottom Text**: "Book your first session"
- **Image to Create**: Visual showing:
  - Calendar interface or schedule
  - Upcoming sessions preview
  - Or simple call-to-action graphic
  - Could be illustrated rather than photo

---

## Technical Implementation Notes

### Current Status
- ✅ Responsive blob component with space-filling logic
- ✅ Basic hero layout with proper typography
- ✅ Mint green background (#D8FFCD)
- ✅ Shrikhand font for logo
- ✅ Inter font for body text (Radix size 7)
- ❌ Scroll-based section detection (reverted - needs reimplementation)
- ❌ Content transition animations (needs reimplementation)
- ❌ Image assets for each section

### What Needs to Be Done

1. **Create/Source Images**
   - Section 1: Gradient image (can use existing gradient.png)
   - Section 2: Problem visual (needs photo/illustration)
   - Section 3: Solution visual (needs photo)
   - Section 4: Community photo (needs actual FlowState members photo)
   - Section 5: Calendar/CTA visual (needs design)

2. **Implement Scroll System**
   - Add scroll listener with section detection
   - Implement content swap animations
   - Configure section data array
   - Test smooth transitions

3. **Fine-tune**
   - Adjust transition timing
   - Test on mobile
   - Ensure blob images scale properly
   - Add loading states for images

### Code Location
- Hero component: `app/components/hero-section.tsx`
- Blob component: `app/components/responsive-blob.tsx`
- Fonts configured in: `app/layout.tsx`
- Tailwind config: `tailwind.config.ts`

### Design Specs
- Background: `#D8FFCD` (mint green)
- Logo color: `#2CAAC9` (blue)
- Text color: `#1C1C1C` (Radix neutral 11)
- Button: Black (#111111), fully rounded
- Padding: 64px all around (p-16)
- Gap between logo and text: 8px (gap-2)

---

## Next Steps

1. Review and approve this structure
2. Create/gather all image assets
3. Place images in `public/` folder with naming:
   - `gradient.png` (Section 1 - already exists)
   - `problem-home.png` or `.jpg` (Section 2)
   - `solution-cafe.png` or `.jpg` (Section 3)
   - `community-group.png` or `.jpg` (Section 4)
   - `cta-calendar.png` or `.jpg` (Section 5)
4. Implement scroll-based section swapping
5. Test and refine animations
6. Deploy to experimental branch

---

## File Location
**This file is saved at**: `/Users/praneethpotnuru/Everything/flowstate-website/HERO-SECTIONS-PLAN.md`

You can reference this document when implementing the new hero section structure.
