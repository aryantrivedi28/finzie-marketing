# ExecuMarketing - AI-Powered Talent Matching Platform

A modern Next.js TypeScript application for AI-powered matching between marketing businesses and verified freelance specialists. The platform features an interactive chat interface, comprehensive pages for businesses and freelancers, and a refined design system using Tailwind CSS.

## Features

- **Interactive Chat Interface**: Multi-step conversation flow for project briefing with AI-powered suggestions
- **Four Main Pages**: Home (with chat), For Business, For Freelancers, and About
- **AI Matching Visualization**: Display matched specialist cards with match percentages
- **Responsive Design**: Mobile-first approach with optimal desktop experience
- **Brand-Aligned Styling**: Custom color palette and typography following design guidelines
- **Smooth Navigation**: Seamless page transitions with smooth scrolling
- **Noise Overlay**: Subtle texture for visual depth

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library with shadcn/ui patterns
- **Fonts**: 
  - Cormorant Garamond (Display - Headlines)
  - Jost (Body - UI Elements)

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Warm Cream | #F4F0E4 | Primary background |
| Teal | #44A194 | Primary accent, CTAs |
| Steel Blue | #537D96 | Secondary accent |
| Soft Coral | #EC8F8D | Emotional accent, hover states |
| Night | #1C2321 | Headings, primary text |
| Carbon | #3a3a36 | Body text |
| Stone | #8a8a82 | Labels, meta text |
| White | #FFFFFF | Cards, surfaces |

### Typography

- **Headlines (H1, H2)**: Cormorant Garamond, 300wt, light and elegant
- **Display Numbers**: Cormorant Garamond, 300wt
- **Body & UI**: Jost, 300-500wt, clean and geometric
- **Labels/Nav**: Jost, 400wt, spaced uppercase

## Project Structure

```
/app
  /layout.tsx          # Root layout with custom fonts
  /globals.css         # Design tokens and base styles
  /page.tsx            # Main app page with navigation

/components
  /ui                  # Reusable UI components
    - Button.tsx
    - Badge.tsx
    - Card.tsx
    - Chip.tsx
    - Input.tsx
    - Section.tsx
    - ChatMessage.tsx
    - TypingIndicator.tsx
    - MatchCard.tsx
  /pages               # Page-specific components
    - HomePage.tsx
    - ForBusinessPage.tsx
    - ForFreelancersPage.tsx
    - AboutPage.tsx
  - Header.tsx         # Navigation header
  - Footer.tsx         # Footer
  - ChatInterface.tsx  # Interactive chat component

/lib
  - utils.ts           # Utility functions (cn helper)

/public
  - Icons and assets

/tailwind.config.ts    # Tailwind configuration
```

## Key Components

### ChatInterface
Interactive 5-step conversation flow:
1. **Welcome** - Select service type (Paid Ads, Social Media, SEO, CRM)
2. **Service** - Choose budget range
3. **Budget** - Select timeline
4. **Timeline** - Describe project details
5. **Match** - Display matched specialist cards

Features:
- Animated messages with typing indicators
- Suggestion chips for quick selection
- Text input for custom project descriptions
- Smooth state transitions
- Match card display with specialist info

### Pages

**Home Page**: Features the main ChatInterface with hero headline

**For Business Page**: 
- Overview of the service
- 3-step process flow with descriptions
- Key statistics (10K+ specialists, 4+ years, 24hr onboarding)
- CTA section

**For Freelancers Page**:
- Value proposition
- Benefits cards
- Specialist requirements
- Earnings information
- CTA

**About Page**:
- Mission statement
- Core values
- Company timeline
- Team bios
- Contact info

## Animations & Interactions

- **Fade Down**: Elements animate in from top (0.6s)
- **Dot Glow**: Status indicator pulses (2.4s loop)
- **Pulse Ring**: Loading animation for match phase
- **Hover Effects**: Cards lift, buttons change colors
- **Typing Indicator**: Animated dots while AI responds

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` in your browser.

## Customization

### Colors

Edit design tokens in `/app/globals.css`:
```css
:root {
  --cream: #F4F0E4;
  --teal: #44A194;
  /* ... more colors ... */
}
```

### Fonts

Add or modify fonts in `/app/layout.tsx`:
```tsx
const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
})
```

### Chat Flow

Modify conversation steps in `/components/ChatInterface.tsx`:
```tsx
const CONVERSATION_FLOW = {
  welcome: { prompt: "...", options: [...] },
  // ... more steps ...
}
```

## Component Library Usage

### Button

```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

Variants: `primary`, `secondary`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

### Badge

```tsx
<Badge variant="teal">AI-Powered</Badge>
```

Variants: `default`, `teal`, `coral`, `blue`

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Section

```tsx
<Section columns={2}>
  <div>Left column</div>
  <div>Right column</div>
</Section>
```

## Performance Optimizations

- Font optimization with Next.js Font API
- Component lazy loading with React.forwardRef
- Smooth scrolling via CSS
- Efficient animations using CSS transforms
- Responsive images and assets

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Supabase integration for data persistence
- Real AI model integration for matching
- User authentication and profiles
- Project management dashboard
- Real-time notifications
- Payment processing

## License

Private - ExecuMarketing

## Support

For questions or issues, contact: hello@execumarketing.com
