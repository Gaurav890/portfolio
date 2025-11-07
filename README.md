# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16.0.1 with App Router
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.17
- **Animations:** Framer Motion 12.23.24
- **Icons:** Lucide React, React Icons
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Gaurav890/portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Available Scripts

```bash
npm run dev      # Start development server on port 3001
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── lib/                 # Utilities and data
│   ├── animations.ts    # Framer Motion variants
│   ├── data/           # Static content
│   └── types.ts        # TypeScript types
├── public/              # Static assets
└── vercel.json         # Deployment configuration
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/light mode support
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)
- ✅ TypeScript for type safety
- ✅ CI/CD with Vercel

## Deployment

Automatically deployed to Vercel on every push to `main` branch.

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## License

Copyright © 2025 Gaurav Chaulagain

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

**You are free to:**
- ✅ View and study the code
- ✅ Use for personal and educational purposes
- ✅ Modify and adapt the code
- ✅ Share with others

**Under the following terms:**
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **NonCommercial** — You may not use the material for commercial purposes

For commercial use inquiries, please contact the copyright holder.

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
