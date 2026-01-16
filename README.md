# Thomson | Full Stack Developer Portfolio

A premium, high-performance personal portfolio website built with **Next.js 14**, **TypeScript**, and **Framer Motion**.  
Designed to showcase advanced UI/UX capabilities through modern animations, interactive elements, and a polished dark-themed aesthetic.

![Portfolio Preview](public/assets/hero-preview.png)

---

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Email** | [Nodemailer](https://nodemailer.com/) |
| **Font** | [Inter](https://fonts.google.com/specimen/Inter) |

---

## 🎨 Design System & UI Styles

### Color Palette

#### Dark Theme (Default)
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#0b0422` | Page background |
| `--bg-card` | `#150d2e` | Card backgrounds |
| `--border-color` | `rgba(255, 255, 255, 0.1)` | Borders |
| `--text-main` | `#FFFFFF` | Primary text |
| `--text-muted` | `#b9b6c6` | Secondary text |

#### Light Theme
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#f8f7ff` | Page background |
| `--bg-card` | `#ffffff` | Card backgrounds |
| `--border-color` | `rgba(0, 0, 0, 0.1)` | Borders |
| `--text-main` | `#1a1a2e` | Primary text |
| `--text-muted` | `#64648c` | Secondary text |

#### Primary Colors
| Token | Value | Description |
|-------|-------|-------------|
| `primary.DEFAULT` | `#8247FF` | Main purple accent |
| `primary.hover` | `#703BF7` | Hover state |
| `primary.light` | `#A78BFA` | Light variation |
| `text.accent` | `#C4B5FD` | Accent text color |

### Gradients

```css
/* Primary gradient for buttons/CTAs */
bg-gradient-primary: linear-gradient(90deg, #8247FF 0%, #6E26D9 100%)

/* Hero section glow effect */
bg-hero-glow: radial-gradient(circle at 50% 50%, rgba(130, 71, 255, 0.18) 0%, rgba(11, 4, 34, 0) 50%)
```

### Shadows & Glow Effects

| Class | Value | Usage |
|-------|-------|-------|
| `shadow-glow-sm` | `0 0 20px -5px rgba(130, 71, 255, 0.5)` | Subtle glow |
| `shadow-glow-lg` | `0 0 50px -10px rgba(130, 71, 255, 0.6)` | Prominent glow |

### Typography

```css
font-family: 'Inter', sans-serif;
font-weights: 300, 400, 500, 600, 700, 800
```

### Animations

| Animation | Duration | Description |
|-----------|----------|-------------|
| `fade-in-up` | 0.8s | Elements fade in from bottom |
| `shimmer` | 2s infinite | Shimmer effect on skill bars |
| `spin` | continuous | Avatar ring rotation |

### Spacing & Layout

```css
/* Section padding utility */
.section-padding: py-24 md:py-32 (96px / 128px)
```

---

## ✨ Features Implemented

### 1. 🎨 Animated Backgrounds
Dynamic, layered background effects that create depth without impacting performance.
- **FloatingParticles**: Interactive canvas-based particle system
- **GradientOrbs**: Slowly moving ambient light orbs
- **GridPattern**: Subtle geometric overlay for structure
- **NoiseTexture**: Film-grain effect for texture consistency

### 2. 🧭 Smart Navigation
A responsive, sticky navigation bar with advanced behaviors.
- **Glassmorphism**: Backdrop blur effect (`backdrop-blur-lg`)
- **Scroll Detection**: Changes appearance on scroll (transparent → glassy)
- **Active State**: Automatically highlights the current section while reading
- **ScrollProgress**: A slim progress bar at the top indicating reading position
- **Mobile Menu**: Smooth collapsible menu for smaller screens
- **ThemeToggle**: Dark/Light mode switcher

### 3. ⚡ Micro-Interactions
Delightful details that respond to user actions.
- **Typewriter**: Dynamic text cycling for headlines
- **Counter**: Numbers that count up when scrolled into view
- **FadeIn**: Staggered animations as elements appear
- **TextReveal**: Text reveal animation effects

### 4. 🖼️ Visual Enhancements
High-quality visual components.
- **Avatar**: Profile picture with animated gradient ring
- **BlurImage**: Optimized image loading with blur placeholder
- **ProjectImage**: Browser mockup frames for project screenshots
- **CursorSpotlight**: Spotlight effect following cursor
- **CustomCursor**: Custom cursor design

### 5. 🖱️ Interactive Elements
Engaging components that react to mouse movement.
- **MagneticButton**: Buttons that "stick" to and follow the cursor slightly
- **TiltCard**: Cards that tilt based on mouse position for a 3D effect
- **ParallaxSection**: Parallax scrolling effects
- **BackToTop**: Smooth scroll-to-top button

### 6. 💼 Professional Sections
A complete structure for a professional portfolio.
- **Hero**: Impactful introduction with CTAs
- **About**: Personal summary and animated stats
- **Skills**: Grid layout with animated skill bars
- **Experience**: Vertical timeline of career history
- **Projects**: Showcase with tilt cards and mockups
- **Blog**: Blog/Articles section
- **Testimonials**: Client/Peer feedback section
- **Contact**: Contact form with email integration

---

## 📂 Project Structure

```bash
src/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form email endpoint
│   ├── globals.css           # Global styles & CSS variables
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
│
├── components/
│   ├── sections/             # Main page sections
│   │   ├── About.tsx         # About section with stats
│   │   ├── Blog.tsx          # Blog/Articles section
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Experience.tsx    # Timeline experience
│   │   ├── Hero.tsx          # Hero introduction
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── Skills.tsx        # Skills grid
│   │   └── Testimonials.tsx  # Client testimonials
│   │
│   ├── ui/                   # Reusable UI components
│   │   ├── Avatar.tsx        # Animated avatar component
│   │   ├── BackToTop.tsx     # Scroll to top button
│   │   ├── Badge.tsx         # Badge component
│   │   ├── BlurImage.tsx     # Optimized image loader
│   │   ├── Button.tsx        # Button component
│   │   ├── Card.tsx          # Card component
│   │   ├── Container.tsx     # Container wrapper
│   │   ├── Counter.tsx       # Animated counter
│   │   ├── CursorSpotlight.tsx # Cursor spotlight effect
│   │   ├── CustomCursor.tsx  # Custom cursor
│   │   ├── FadeIn.tsx        # Fade in animation wrapper
│   │   ├── FloatingParticles.tsx # Particle background
│   │   ├── GradientOrbs.tsx  # Gradient orb background
│   │   ├── GridPattern.tsx   # Grid pattern overlay
│   │   ├── MagneticButton.tsx # Magnetic hover button
│   │   ├── MotionWrapper.tsx # Motion animation wrapper
│   │   ├── NoiseTexture.tsx  # Noise grain overlay
│   │   ├── PageLoader.tsx    # Page loading animation
│   │   ├── PageTransition.tsx # Page transition effect
│   │   ├── ParallaxSection.tsx # Parallax scroll effect
│   │   ├── ProjectImage.tsx  # Project image component
│   │   ├── ScrollProgress.tsx # Scroll progress bar
│   │   ├── SectionHeader.tsx # Section title component
│   │   ├── SkillBar.tsx      # Animated skill bar
│   │   ├── TextReveal.tsx    # Text reveal animation
│   │   ├── ThemeToggle.tsx   # Dark/Light mode toggle
│   │   ├── TiltCard.tsx      # 3D tilt card effect
│   │   └── Typewriter.tsx    # Typewriter text effect
│   │
│   ├── JsonLd.tsx            # SEO structured data
│   ├── Navbar.tsx            # Main navigation
│   └── Providers.tsx         # Context providers
│
├── context/                  # React Context
│   └── ThemeContext.tsx      # Theme state management
│
└── data/                     # Static data
    └── index.ts              # Portfolio content data
```

---

## ⚙️ Configuration Files

### tailwind.config.js
```javascript
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: 'var(--bg-primary)',
          card: 'var(--bg-card)',
          border: 'var(--border-color)',
        },
        primary: {
          DEFAULT: '#8247FF',
          hover: '#703BF7',
          light: '#A78BFA',
        },
        text: {
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
          accent: '#C4B5FD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #8247FF 0%, #6E26D9 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(130, 71, 255, 0.18) 0%, rgba(11, 4, 34, 0) 50%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(130, 71, 255, 0.5)',
        'glow-lg': '0 0 50px -10px rgba(130, 71, 255, 0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'shimmer': 'shimmer 2s infinite',
      },
    },
  },
}
```

### globals.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root, .dark {
    --bg-primary: #0b0422;
    --bg-card: #150d2e;
    --border-color: rgba(255, 255, 255, 0.1);
    --text-main: #FFFFFF;
    --text-muted: #b9b6c6;
  }

  .light {
    --bg-primary: #f8f7ff;
    --bg-card: #ffffff;
    --border-color: rgba(0, 0, 0, 0.1);
    --text-main: #1a1a2e;
    --text-muted: #64648c;
  }

  html { scroll-behavior: smooth; }
  body { @apply bg-dark-bg text-text-main font-sans antialiased; }
}

@layer components {
  .section-padding { @apply py-24 md:py-32; }
}

/* Custom Animations */
@keyframes spin { /* Avatar ring rotation */ }
@keyframes shimmer { /* Skill bar shimmer */ }
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ThomsonSimbolon/portofolio-v3-soft-purple.git
   cd portofolio-v3-soft-purple
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with your email configuration:
   ```env
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email
   SMTP_PASS=your-password
   CONTACT_EMAIL=your-contact-email
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Open [http://localhost:5173](http://localhost:5173) to see the result.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 5173 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📦 Dependencies

### Production
| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.2.21 | React framework |
| react | 18.3.1 | UI library |
| react-dom | 18.3.1 | React DOM |
| framer-motion | 12.26.2 | Animations |
| lucide-react | 0.562.0 | Icons |
| nodemailer | 7.0.12 | Email sending |

### Development
| Package | Version | Purpose |
|---------|---------|---------|
| typescript | 5.7.3 | Type safety |
| tailwindcss | 3.4.17 | Styling |
| eslint | 8.57.0 | Code linting |
| autoprefixer | 10.4.20 | CSS prefixes |
| postcss | 8.5.1 | CSS processing |

---

## 📄 License

[MIT](LICENSE) © 2024 Thomson

---

## 📝 Changelog

### v1.0.0 (January 2026)
- Initial release with all core features
- Dark/Light theme support
- Animated components and backgrounds
- Contact form with email integration
- Responsive design for all devices
