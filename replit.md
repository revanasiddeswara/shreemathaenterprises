# Shree Matha Enterprises Website

## Overview
A professional business website for Shree Matha Enterprises, a multi-service engineering and water purification solutions company based in Karnataka, India. The website is designed to be clean, modern, mobile-first, and focused on generating enquiries through WhatsApp and phone calls.

## Business Services
1. **Domestic RO Water Purifiers** - 5L to 25L units for homes
2. **Commercial RO Plants** - 25 LPH to 5000 LPH for industries
3. **High Mast Light Solutions** - Supply, installation, and AMC
4. **Solar Solutions** - On-grid, off-grid, and hybrid systems

## Target Audience
Residential households, schools, hospitals, factories, apartments, farms, government projects, and local businesses in Karnataka.

## Service Areas
- Ballari (Headquarters)
- Vijayanagara
- Huvinahadagali
- Hospet
- Kampli
- Siruguppa

## Project Architecture

### Frontend (React + TypeScript)
- **Routing**: wouter for client-side routing
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Forms**: react-hook-form with zod validation

### Backend (Express + TypeScript)
- **API**: Express.js REST API
- **Storage**: In-memory storage (MemStorage)
- **Validation**: Zod schemas from drizzle-zod

### Pages
- `/` - Home page with hero, services overview, testimonials
- `/domestic-ro` - Domestic RO purifiers catalog
- `/commercial-ro` - Commercial RO plants information
- `/high-mast-lights` - High mast lighting solutions
- `/solar-solutions` - Solar power systems
- `/projects` - Project gallery with filtering
- `/about` - Company information and milestones
- `/contact` - Contact form and information

### Key Components
- `Header` - Navigation with mobile menu
- `Footer` - Contact info and quick links
- `EnquiryForm` - Lead capture form (reusable)
- `WhatsAppButton` - Floating CTA
- `ServiceCard` - Service showcase cards
- `ProjectCard` - Project gallery cards
- `CTASection` - Call-to-action sections

## API Endpoints
- `POST /api/enquiries` - Submit new enquiry
- `GET /api/enquiries` - Fetch all enquiries

## Design System
- **Colors**: Professional blue (#1d72b8) with white and grey
- **Typography**: Inter (headings), Open Sans (body)
- **Spacing**: Consistent 4/8/12/16/24/32 scale
- **Border Radius**: rounded-md (6px)

## Contact Information (Placeholder)
- Phone: +91 98765 43210
- WhatsApp: +91 98765 43210
- Email: info@shreematha.com
- Address: 123 Industrial Area, Ballari - 583101, Karnataka

## Development Notes
- Mobile-first responsive design
- SEO optimized with meta tags
- Accessibility compliant (WCAG)
- Click-to-call and WhatsApp integration
