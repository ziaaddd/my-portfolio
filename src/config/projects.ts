import { Project } from "@/types";
export const projects: Project[] = [
  {
    id: "inventory-billing-system",
    title: "Inventory & Billing Management System",
    slug: "inventory-billing-management-system",
    tagline:
      "Enterprise ERP platform for real-time inventory tracking, transactional billing & financial analytics.",
    description:
      "Full-stack business management suite featuring automated stock reconciliation, multi-party sales & purchase transactions, contact directory management, and interactive financial dashboards.",
    longDescription:
      "A production-ready inventory and billing system engineered to streamline supply chain and accounting workflows for small to mid-sized businesses. The platform automates stock adjustments during purchase/sale cycles, handles client & supplier ledgers, and delivers real-time profitability analytics. Built with a decoupled architecture leveraging a Next.js 15 frontend, an Express 5 REST API, and MongoDB with Mongoose ODM.",
    category: "Full Stack",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn/ui",
      "Docker",
    ],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://inventory-billing-management-system-mu.vercel.app",
    githubUrl: "https://github.com/ziaaddd/Inventory-Billing-Management-System",
    metrics: [
      { label: "Inventory Sync", value: "Real-time" },
      { label: "API Response Time", value: "< 50ms" },
      { label: "Availability", value: "99.9%" },
    ],
    keyFeatures: [
      "Automated stock reconciliation with instantaneous inventory deduction and restocking",
      "End-to-end transaction lifecycle covering vendor purchase orders and customer sales invoices",
      "Interactive business analytics and monthly profit/loss visualizations built with Recharts",
      "Enterprise security suite with JWT auth, Google OAuth 2.0, Helmet, CORS, and rate limiting",
    ],
    technologies: {
      frontend: [
        "Next.js 15 (Turbopack & App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/ui & Radix UI",
        "Recharts & Framer Motion",
        "React Hook Form & Zod",
      ],
      backend: [
        "Node.js (v18+)",
        "Express.js 5",
        "JWT & Passport.js (Google OAuth 2.0)",
        "Helmet.js & Express Rate Limit",
        "RESTful API Architecture",
      ],
      database: [
        "MongoDB 6.0+",
        "Mongoose ODM",
        "MongoDB Atlas",
        "Connect-Mongo Session Store",
      ],
      devops: [
        "Docker & Docker Compose",
        "Vercel Deployment",
        "GitHub Actions CI/CD",
        "Postman API Documentation",
      ],
    },
  },
  {
    id: "za-cart",
    title: "Za-Cart E-Commerce Platform",
    slug: "za-cart-ecommerce",
    tagline:
      "A full-stack storefront with account-backed shopping and webhook-verified Stripe payments.",
    description:
      "A React and TypeScript e-commerce app featuring product browsing, persistent carts and wishlists, user accounts, and secure hosted checkout in EGP.",
    longDescription:
      "Za-Cart is built with React, TypeScript, Vite, and Redux Toolkit. Supabase provides PostgreSQL data and authentication, while Supabase Edge Functions create Stripe Checkout sessions and process signed payment webhooks. The app includes category browsing, product filters, coupon discounts, Google sign-in, order history, profile management, and light and dark themes.",
    category: "Full Stack",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vite",
      "React Bootstrap",
    ],
    featured: true,
    image: "/images/projects/home.png",
    demoUrl: "https://za-cart-wpfj.vercel.app",
    githubUrl: "https://github.com/ziaaddd/Za-cart",
    metrics: [
      { label: "Supabase Edge Functions", value: "2" },
      { label: "Built-in coupon codes", value: "3" },
      { label: "Protected account areas", value: "4" },
    ],
    keyFeatures: [
      "Browse products by category with search, price, and sorting filters",
      "Manage a persistent cart and personal wishlist",
      "Apply coupon discounts and check out through Stripe's hosted payment page",
      "Create paid orders through signature-verified Stripe webhooks",
      "Register or sign in with email and password or Google",
      "View order history and edit profile details",
      "Switch between light and dark themes",
    ],
    technologies: {
      frontend: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "React Router",
        "React Bootstrap",
        "React Hook Form",
        "Zod",
      ],
      backend: [
        "Supabase Edge Functions",
        "Deno",
        "Supabase Auth",
        "Stripe Checkout",
      ],
      database: ["Supabase", "PostgreSQL"],
      devops: ["Vercel", "Supabase"],
    },
  },
  {
    id: "hemitey",
    title: "Hemitey — Egyptian Consumer Price & Quality Watch",
    slug: "hemitey-egyptian-consumer-price-quality-watch",
    tagline:
      " 'In Development' non-profit, shopping-free platform that protects Egyptian consumers from price gouging by publishing official and expected prices per governorate, with community reporting and honest product reviews.",
    description:
      " A non-profit, shopping-free platform that protects Egyptian consumers from price gouging by publishing official and expected prices per governorate, with community reporting and honest product reviews.",
    longDescription:
      "Hemitey is an impartial price and quality reference for Egyptian shoppers. Companies register their products with official prices and expected price ranges for every governorate. Consumers can check what a fair price is before buying, report sellers or locations that overcharge, and read other buyers' reviews. Reports are routed to the relevant company so it can take action against the violating seller. The platform deliberately has no checkout or shopping option, which keeps it neutral and free of any profit motive.",
    // status: "In Development",
    category: "Full Stack",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn/ui",
      "Docker",
    ],
    metrics: [
      { label: "Encryption Standard", value: "AES-256-GCM" },
      { label: "Sync Latency", value: "< 80ms" },
    ],
    keyFeatures: [
      "Automatic adaptive bitrate transcoding (1080p60 down to 360p)",
      "Global edge CDN routing with geodistributed media relays",
      "Interactive chat system with rate limiting and automated moderation",
    ],
    technologies: {
      frontend: [
        "Next.js 15 (Turbopack & App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/ui & Radix UI",
        "Recharts & Framer Motion",
        "React Hook Form & Zod",
      ],
      backend: [
        "Node.js (v18+)",
        "Express.js 5",
        "JWT & Passport.js (Google OAuth 2.0)",
        "Helmet.js & Express Rate Limit",
        "RESTful API Architecture",
      ],
      database: [
        "MongoDB 6.0+",
        "Mongoose ODM",
        "MongoDB Atlas",
        "Connect-Mongo Session Store",
      ],
      devops: [
        "Docker & Docker Compose",
        "Vercel Deployment",
        "GitHub Actions CI/CD",
        "Postman API Documentation",
      ],
    },

    image: "/images/projects/hemity.jpg",
    featured: true,
  },
];
