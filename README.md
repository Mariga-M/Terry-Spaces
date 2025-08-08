# Terry Spaces - Studio Rental Website

A modern, responsive website for Terry Spaces - a premium studio rental space located in Komarock, Nairobi. Built with React, TypeScript, and Tailwind CSS.

## 🏢 About Terry Spaces

Terry Spaces is a versatile open studio space perfect for:
- Office work and remote meetings
- Private business meetings
- Event hosting and workshops
- Catering services

**Location:** Komarock, Along Kangaru Street, Nairobi, Kenya  
**Contact:** +254 733 937 955

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light/System Theme** - Automatic theme switching based on user preference
- **Modern Animations** - Smooth micro-interactions and hover effects
- **Professional Layout** - Clean, production-ready design
- **Accessibility** - WCAG compliant with proper focus states

### 🚀 Technical Features
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and building
- **Custom Animations** - Hand-crafted keyframe animations
- **Google Maps Integration** - Interactive location display
- **Contact Form** - Professional inquiry system
- **SEO Optimized** - Proper meta tags and structure

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with contact info
2. **Services** - Office space, meetings, catering, events
3. **Amenities** - WiFi, washroom, tiled floors, parking
4. **Pricing** - Flexible hourly, daily, and package options
5. **Location** - Interactive Google Maps with directions
6. **Contact** - Professional inquiry form
7. **Footer** - Complete contact information

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Deployment:** Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd terry-spaces-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The website uses a red-based color scheme defined in `tailwind.config.js`:
- Primary colors: Red shades (50-900)
- Supports both light and dark modes

### Animations
Custom animations are defined in the Tailwind config:
- `bounce-gentle` - Subtle bouncing effect
- `pulse-slow` - Gentle pulsing
- `slide-in-left/right` - Entrance animations
- `scale-in` - Growing entrance effect
- `wiggle` - Playful rotation animation

### Theme System
The website includes a custom theme system (`src/hooks/useTheme.ts`) that supports:
- Light mode
- Dark mode  
- System preference (automatic)

## 📍 Google Maps Setup

To display the exact location:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update the map URL in `src/components/Location.tsx`
3. Replace the demo coordinates with your exact location

## 📱 Contact Information

Update contact details in these files:
- `src/components/Hero.tsx` - Phone number in hero section
- `src/components/Contact.tsx` - Contact form and info
- `src/components/Footer.tsx` - Footer contact details
- `src/components/Location.tsx` - Location details

## 🌐 Deployment

The website is deployed on Netlify. To deploy your own version:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service

### Netlify Deployment
- Automatic deployments from Git
- Custom domain support
- SSL certificates included
- Global CDN

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimized for excellent user experience
- **Bundle Size:** Optimized with Vite's tree shaking
- **Images:** Optimized placeholder images from Pexels

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is proprietary software for Terry Spaces.

## 🤝 Contributing

This is a private project for Terry Spaces. For any modifications or updates, please contact the development team.

## 📞 Support

For technical support or questions about the website:
- Email: info@terryspaces.com
- Phone: +254 733 937 955

---

**Built with ❤️ for Terry Spaces**