# ⚡ Modern Next.js Full Stack Developer Portfolio

## 🌐 Live Demo

[View the live portfolio](https://my-portfolio-lyart-eight-31.vercel.app)

A production-grade, ultra-responsive **Full Stack Developer Portfolio** built with **Next.js 14 (App Router)**, **TypeScript**, **Framer Motion**, and a custom **Cyber-Obsidian Design System**.

---

## 🌟 Key Features

- ⚡ **Next.js 14 App Router Architecture**: Server & Client Components, Route Handlers (`/api/contact`, `/api/github`), dynamic Metadata & JSON-LD Structured Data.
- 🎨 **Sleek Obsidian & Cyber Aesthetics**: Glassmorphism (`backdrop-filter`), glowing neon accents, ambient mesh spotlights, and custom scrollbars.
- 💻 **Interactive Developer Terminal (CLI)**: Recruiter-friendly interactive terminal simulator supporting commands like `help`, `whoami`, `skills`, `projects`, `sudo hire-me`, and `contact`.
- 🚀 **Dynamic Project Showcase & Deep Architecture Modals**: Filterable by domain (*Full Stack*, *AI & Data*, *Backend & API*, *Cloud & DevOps*), featuring metric badges, full-stack architecture layers, live demos, and GitHub links.
- 📊 **Categorized Tech Stack Matrix**: Interactive proficiency meters with experience tags across *Frontend*, *Backend & API*, *Databases & Storage*, *DevOps & Cloud*, and *Architecture & Tools*.
- 💼 **Career Timeline**: Visual milestones showcasing engineering impact, quantifiable achievements, and technology tags.
- 📨 **Full-Stack Contact Form & API Handler**: Client and server-side validation with Zod, celebratory confetti animation (`canvas-confetti`), and clipboard copy utilities.
- 🔍 **Built-in SEO & Performance**: Automatic `sitemap.ts`, `robots.ts`, OpenGraph social preview tags, and Google Search JSON-LD schema.

---

## 🛠️ Tech Stack & Installed Packages

| Technology / Package | Purpose |
| :--- | :--- |
| **Next.js 14** | Core React framework with App Router, SSR, and API routes |
| **React 18** | Declarative component UI runtime |
| **TypeScript** | Strict static type checking and autocompletion |
| **Lucide React** (`lucide-react`) | Sleek, modern SVG icon library |
| **Framer Motion** (`framer-motion`) | Fluid layout animations, scroll transitions, and modal dynamics |
| **Zod** (`zod`) | Schema definition and runtime API validation |
| **Canvas Confetti** (`canvas-confetti`) | Micro-interaction celebration on contact form submission |
| **Vanilla CSS / Custom Tokens** | Zero runtime CSS overhead, maximum custom styling control |

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── projects/          # Project images and screenshots
│   │   └── avatar/            # Profile photo
│   └── resume.pdf             # Downloadable CV
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts   # Server-side Contact API handler
│   │   │   └── github/
│   │   │       └── route.ts   # Dynamic GitHub stats API
│   │   ├── projects/
│   │   │   └── page.tsx       # Dedicated Projects gallery page
│   │   ├── globals.css        # Design tokens, glowing accents, glassmorphism
│   │   ├── layout.tsx         # Root layout with SEO metadata and navigation
│   │   ├── not-found.tsx      # Custom 404 page
│   │   ├── page.tsx           # Main Single-Page Portfolio
│   │   ├── robots.ts          # Search engine indexing rules
│   │   └── sitemap.ts         # Dynamic XML Sitemap generator
│   ├── components/
│   │   ├── interactive/       # DeveloperTerminal, ProjectCard, ProjectModal
│   │   ├── layout/            # Navbar, MobileNav, Footer
│   │   ├── sections/          # Hero, About, TechStack, Projects, Experience, Terminal, Contact
│   │   ├── seo/               # StructuredData (JSON-LD)
│   │   └── ui/                # SectionHeading, GlowingOrb, Badge
│   ├── config/
│   │   ├── site.ts            # Bio, name, socials, and navigation items
│   │   ├── projects.ts        # Projects dataset (tech stack, metrics, links)
│   │   ├── skills.ts          # Categorized skills matrix
│   │   └── experience.ts      # Work history, roles, and achievements
│   ├── hooks/
│   │   ├── useActiveSection.ts # Scroll spy navigation hook
│   │   ├── useCopyToClipboard.ts
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   ├── utils.ts           # Class merging and string utilities
│   │   └── validations.ts     # Zod form schemas
│   └── types/
│       └── index.ts           # Shared TypeScript interfaces
├── .env.example
├── .gitignore
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Customization Guide

All portfolio content is decoupled from UI components and stored in `src/config/`:

1. **Personal Information & Social Links**: Edit `src/config/site.ts`.
2. **Projects & Architectural Diagrams**: Edit `src/config/projects.ts`.
3. **Tech Stack & Proficiencies**: Edit `src/config/skills.ts`.
4. **Career Timeline & Experience**: Edit `src/config/experience.ts`.
5. **Resume**: Replace `public/resume.pdf` with your actual CV file.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js and builds the project with zero configuration.

---

## 📄 License
MIT License. Built for developers who want a standout portfolio.
