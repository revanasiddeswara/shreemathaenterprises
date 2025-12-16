# Design Guidelines: Shree Matha Enterprises Website

## Design Approach

**Framework**: Hybrid approach drawing from professional service industry leaders (SunPower, Pentair, industrial solution providers) combined with Material Design principles for clean, trustworthy presentation.

**Core Principles**:
- Trust-first design with clear hierarchy
- Conversion-optimized layouts
- Technical credibility through structured information
- Mobile-first responsive patterns

---

## Typography System

**Font Families** (via Google Fonts CDN):
- **Primary**: Inter (headings, UI elements)
- **Secondary**: Open Sans (body text, descriptions)

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold
- H2 (Section): text-4xl md:text-5xl, font-bold
- H3 (Subsection): text-2xl md:text-3xl, font-semibold
- H4 (Card titles): text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, font-normal
- Small text: text-sm, font-normal
- CTA buttons: text-base md:text-lg, font-semibold

---

## Layout & Spacing System

**Tailwind Units**: Use 4, 8, 12, 16, 20, 24, 32 as primary spacing units
- Component padding: p-4, p-8, p-12
- Section spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-8 md:gap-12
- Container max-width: max-w-7xl

**Grid Patterns**:
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Project gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features: grid-cols-1 md:grid-cols-3
- Specifications: grid-cols-1 md:grid-cols-2

---

## Page-Specific Components

### Home Page
**Hero Section**: Full-width with large hero image (industrial/engineering aesthetic - factory, solar panels, or water purification plant). Height: min-h-[600px] md:min-h-[700px]
- Overlay with blurred button backgrounds
- Headline + subheadline + 3 CTA buttons (Call, WhatsApp, Quote)
- Buttons arranged horizontally on desktop, stacked on mobile

**Services Overview**: 4-column grid (stacks on mobile)
- Icon + title + brief description + "Learn More" link per service
- Cards with subtle elevation

**Why Choose Us**: 3-column feature grid
- Icon, headline, description format
- Certifications, experience years, warranty badges

**Testimonials**: 2-column grid with customer quotes, names, locations

**Recent Projects**: 3-column gallery preview with "View All Projects" CTA

### Service Pages (RO Domestic, Commercial, High-Mast, Solar)
**Page Hero**: Smaller than homepage (h-[400px])
- Service-specific image
- Title + description + WhatsApp CTA

**Product/Service Showcase**: Card grid layout
- Product image, specifications table, features list
- "Get Quote" button per product

**Technical Specifications**: Two-column comparison tables

**Process Timeline**: Horizontal stepper on desktop, vertical on mobile

**CTA Section**: Full-width with form (2-column: form fields left, contact info right)

### Projects Gallery
**Filter Navigation**: Horizontal tabs (All, RO Plants, Solar, High-Mast)

**Gallery Grid**: Masonry-style or uniform grid
- Project image, title, location, capacity/specs overlay
- Lightbox on click

### About Us
**Company Story**: Single column, max-w-4xl centered text

**Mission/Vision**: 2-column cards

**Service Areas Map**: Embedded Google Maps with location pins

**Team Section**: Optional 3-4 column grid with photos

### Contact Page
**Two-Column Layout**:
- Left: Contact form (name, phone, email, service interest dropdown, message)
- Right: Contact details (phone with click-to-call, WhatsApp link, address, business hours)

**Embedded Map**: Full-width below form section

---

## Core UI Components

**Navigation**:
- Desktop: Horizontal menu with dropdowns for services
- Mobile: Hamburger with slide-out menu
- Sticky header with Call/WhatsApp buttons always visible

**Buttons**:
- Primary CTA: Large, rounded-lg, px-8 py-4
- Secondary: Outlined variant
- Floating WhatsApp: Fixed bottom-right, rounded-full, z-50

**Cards**:
- Elevation: shadow-md hover:shadow-xl
- Rounded corners: rounded-xl
- Padding: p-8

**Forms**:
- Input fields: Full-width, rounded-lg, p-4, border
- Labels: text-sm font-semibold, mb-2
- Submit button: Full-width on mobile, auto on desktop

**Footer**:
- 4-column grid: Services, Quick Links, Contact, Social
- Bottom bar: Copyright, certifications logos

---

## Images Strategy

**Hero Images**: Required on all pages
- Homepage: Wide industrial/facility shot or composite of all services
- Service pages: Specific to each service (RO plant, solar panels, high-mast lights)

**Product Images**: Professional product photography with neutral backgrounds

**Gallery Images**: Real installation photos showcasing completed projects

**Trust Badges**: Certification logos, warranty seals (use placeholder comments if not provided)

**Icons**: Use Heroicons via CDN for all UI icons

---

## Accessibility & Mobile Optimization

- Click-to-call links: `tel:` protocol
- WhatsApp links: `https://wa.me/` with pre-filled message
- Form validation with clear error states
- Touch-friendly button sizes (min h-12)
- Readable contrast ratios throughout
- Alt text for all images

---

## Animations

**Minimal, purposeful only**:
- Smooth scroll behavior
- Fade-in on scroll for section entries
- Button hover states (slight scale or shadow increase)
- No distracting parallax or complex transitions