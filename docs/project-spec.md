# Portfolio Website Specification
## Gaurav Chaulagain - Product Manager Portfolio

**Domain:** gauravhchaulagain.com  
**Tech Stack:** Next.js 15, React, Tailwind CSS, Aceternity UI, Framer Motion  
**Hosting:** Vercel (with Namecheap domain)  
**Timeline:** Launch within few days

---

## 🎨 Design System

### Color Palette (Option 1: Cool Professional)
```
Primary Colors:
- Base White: #FFFFFF
- Cream Background: #F8F9FA
- Ocean Blue (Accent): #0EA5E9
- Deep Black (Text): #0A0A0A
- Soft Blue (Highlights): #DBEAFE

Supporting Colors:
- Light Gray (Borders): #E5E7EB
- Medium Gray (Secondary Text): #6B7280
```

### Typography
```
Font Family: Inter or similar sans-serif
Headings: Bold, 600-700 weight
Body: Regular, 400 weight
Code: Monospace for tech stack
```

### Design Principles
- **Style:** Clean, minimal, professional
- **Vibe:** Trust, clarity, technical competence
- **Target:** Startup PMs, TPM roles, tech recruiters
- **Key Goal:** Make visitors say "WOW" immediately

---

## 📐 Site Structure

### Navigation Bar (Fixed/Sticky)
**Position:** Top of page, sticky on scroll  
**Items:**
- Logo/Name (left)
- Home
- Case Studies
- Projects
- Blog (links to Medium)
- Resume (download button)
- Contact links (right): Email, LinkedIn, GitHub, Calendly

**Design:**
- Transparent on hero, becomes solid white with shadow on scroll
- Mobile: Hamburger menu

**Note:** No separate About page - Homepage contains all about content (intro, experience, highlights)

---

## 🏠 Homepage Structure

### 1. Hero Section
**Layout:** Full viewport height (100vh)  
**Background:** Gradient (white → cream with subtle blue hints)  

**Content:**
- Name: Large, bold text with fade-in animation
- Tagline: [TO BE FILLED] (e.g., "AI Product Manager turning data into delightful experiences")
- CTA Buttons:
  - Primary: "View Projects" (blue, with subtle glow)
  - Secondary: "Download Resume" (outline, blue border)

**Animation:**
- Text: Fade in on load (0.5s delay)
- Buttons: Fade in + slide up (0.8s delay)
- CTA hover: Subtle lift (translateY -2px) + glow effect

---

### 2. About Section
**Layout:** Centered, max-width 800px  
**Background:** Plain/subtle (visual break from hero)

**Content:**
- Heading: "About Me"
- Description: 3-4 lines about Gaurav
  - [TO BE FILLED] - PM experience + AI focus + technical background
- Optional: Profile photo (circular, subtle border)

**Animation:**
- Text reveal animation on scroll
- Fade in when 30% visible

---

### 3. Experience Timeline Section
**Layout:** Full width with horizontal scroll or vertical timeline  
**Background:** Light cream (#F8F9FA)

**Content:**
- Heading: "Experience"
- Timeline items (condensed view):
  - Company logo
  - Job title
  - Company name
  - Duration (dates)
  - 1-2 line description

**Companies to include:**
- fAIshion Inc. (AI Product Manager)
- [Previous roles - TO BE FILLED]

**Animation:**
- Animated timeline line drawing on scroll
- Cards appear with stagger effect
- Interactive hover: Card lifts, logo glows
- On click: Modal popup with **FULL** role details
  - Modal content: Complete responsibilities, achievements, tech stack used, projects delivered
  - This modal contains ALL experience detail - no separate About page needed

**Modal Design:**
- Overlay with blur background
- White card with shadow
- Close button (X)
- Smooth fade-in animation
- Scrollable if content is long

---

### 4. Featured Case Studies Section
**Layout:** Grid (3-4 cards), responsive (1 col mobile, 2 cols tablet, 3 cols desktop)  
**Background:** White

**Content:**
- Heading: "Case Studies"
- Subheading: "Product work from companies I've worked with"
- Case study cards (3-4 featured work projects):
  - Featured: fAIshion, Ironfish, Flare HR
  - Each card includes:
    - Hero image/mockup (placeholder for now)
    - Project title
    - Company name
    - One-line description
    - Key metric highlight (e.g., "+39% traffic growth")
    - Tags (role, industry)
    - "Read Case Study" button

**Animation:**
- Cards: Staggered fade-in on scroll
- Hover: Lift effect (translateY -8px) + shadow increase
- Click: Smooth page transition to /case-studies/[slug]

---

### 5. Featured Projects Section
**Layout:** Grid (2-3 cards), responsive (1 col mobile, 2 cols tablet, 2-3 cols desktop)  
**Background:** Light cream (#F8F9FA)

**Content:**
- Heading: "Projects"
- Subheading: "Personal projects and side builds"
- Project cards (2-3 featured personal projects):
  - Featured: ELDA.AI, BridgeChild
  - Third project: [TO BE ADDED LATER]
  - Each card includes:
    - Hero image/screenshot (placeholder for now)
    - Project title
    - One-line description
    - Tags (tech stack, type)
    - Award/recognition (if applicable)
    - "View Project" button

**Animation:**
- Cards: Staggered fade-in on scroll
- Hover: Lift effect (translateY -8px) + shadow increase
- Click: Smooth page transition to /projects/[slug]

---

### 6. Highlights Section
**Layout:** Grid (2x2 or 4 columns), responsive  
**Background:** Soft blue highlight (#DBEAFE)

**Content:**
- Heading: "Highlights & Achievements"
- 4 Categories (with icons):
  1. 🏆 **Hackathons**
     - Cal Hacks 12.0 Winner - "Best Use of Claude"
     - ELDA.ai project
     - [Other hackathons - TO BE FILLED]
  
  2. 🎤 **Speaking** (if applicable)
     - [TO BE FILLED or skip if none]
  
  3. 📜 **Certifications**
     - Top 2-3 certifications
     - [TO BE FILLED]
  
  4. 🤝 **Mentoring**
     - Brief description
     - [TO BE FILLED]

**Animation:**
- Grid items: Fade in + scale on scroll
- Staggered timing for each item

---

### 7. CTA / Contact Section
**Layout:** Centered, full width  
**Background:** Gradient (cream → white)

**Content:**
- Heading: "Let's Connect"
- Subheading: "Open to Product Manager & Technical PM opportunities"
- Contact links (large, clickable):
  - Email: [TO BE FILLED]
  - LinkedIn
  - GitHub
  - Calendly (schedule a call)
- Secondary CTA: "Download Resume" button

**Animation:**
- Fade in on scroll
- Contact icons: Hover scale + color change

---

## 📄 Separate Pages

### /case-studies - All Case Studies Page
**Layout:** Grid of case study cards (work-related projects from companies)  
**Content:**
- Page heading: "Case Studies"
- Subheading: "Product work from my professional experience"
- Filter/sort options (optional): By company, date, impact area
- Case study cards grid (6 total):
  1. fAIshion.AI
  2. Ironfish
  3. Flare HR
  4. Lawyerly
  5. RTO Works
  6. Tile Factory Outlet
  - Each card: Image, title, company, one-line description, key metric, tags, link

---

### /case-studies/[slug] - Individual Case Study Page
**Layout:** Single column, max-width 1000px, centered

**Structure:**
1. **Hero Section**
   - Large hero image/mockup (full width)
   - Case study title (overlay or below image)
   - Company name + timeframe

2. **Overview Section**
   - **Context:** Brief company/situation background
   - **My Role:** Your position and responsibilities
   - **Timeline:** Duration
   - **Team:** Team size/composition (if relevant)

3. **The Real Problem**
   - Problem statement
   - Why this mattered
   - User/business pain points
   - Constraints and challenges

4. **How I Thought About It**
   - Your reasoning and framework
   - Trade-offs considered
   - Strategic decisions
   - Mental models applied

5. **Execution**
   - How you solved it
   - Process/methodology
   - **Visuals:** Wireframes, user flows, diagrams, screenshots
   - Key actions taken
   - Cross-functional collaboration

6. **Outcome & Impact**
   - Results achieved
   - Metrics with visual representation (graphs, charts)
   - Business impact
   - User impact
   - Before/After comparisons

7. **Reflection**
   - Key learnings
   - What you'd do differently
   - Broader insights

8. **Navigation**
   - "Back to Case Studies" button
   - "Next Case Study" / "Previous Case Study" links

---

### /projects - All Projects Page
**Layout:** Grid of project cards (personal/side projects)  
**Content:**
- Page heading: "Projects"
- Subheading: "Personal builds, hackathons, and side projects"
- Filter/sort options (optional): By tech stack, type, date
- Project cards grid:
  1. ELDA.AI (Cal Hacks 12.0 winner)
  2. BridgeChild (Capstone project)
  3. [TO BE ADDED LATER]
  4. [Additional projects...]
  - Each card: Image, title, description, tech stack tags, awards, link

---

### /projects/[slug] - Individual Project Page
### /projects/[slug] - Individual Project Page
**Layout:** Single column, max-width 1000px, centered

**Structure:**
1. **Hero Section**
   - Large hero image/screenshot (full width)
   - Project title

2. **Overview Section**
   - **What it is:** Brief project description
   - **Role:** Your contribution
   - **Timeline:** When built
   - **Tech Stack:** Technologies used
   - **Links:** GitHub, demo, etc. (if applicable)
   - **Awards:** Recognition received (if applicable)

3. **The Problem**
   - What problem this solves
   - Why you built it
   - Target users

4. **The Solution**
   - How it works
   - Key features
   - **Visuals:** Screenshots, diagrams, demo videos
   - Architecture/design decisions

5. **Technical Implementation** (optional)
   - Interesting technical challenges
   - How you solved them
   - Code snippets (if relevant)

6. **Results & Learnings**
   - What you achieved
   - What you learned
   - Future improvements

7. **Navigation**
   - "Back to Projects" button
   - "Next Project" / "Previous Project" links

**Design Notes:**
- More technical, less business-focused than case studies
- Can include code examples
- Focus on building and learning process
- Showcase creativity and technical skills

---

### /blog - Blog Page
**Option 1:** Redirect to Medium profile  
**Option 2:** List of Medium articles with:
- Article title
- Publication date
- Excerpt
- "Read on Medium" link
- Embedded Medium feed (if possible)

**Recommendation:** Simple redirect or embedded Medium RSS feed

---

## 🛠️ Technical Requirements

### Folder Structure
```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   ├── case-studies/
│   │   ├── page.tsx (all case studies)
│   │   └── [slug]/
│   │       └── page.tsx (individual case study)
│   ├── projects/
│   │   ├── page.tsx (all projects)
│   │   └── [slug]/
│   │       └── page.tsx (individual project)
│   └── blog/
│       └── page.tsx
├── components/
│   ├── ui/ (Aceternity UI components)
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceTimeline.tsx
│   ├── ExperienceModal.tsx
│   ├── FeaturedCaseStudies.tsx
│   ├── FeaturedProjects.tsx
│   ├── CaseStudyCard.tsx
│   ├── ProjectCard.tsx
│   ├── HighlightsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   ├── data/
│   │   ├── case-studies.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── content.ts
│   └── utils.ts
├── public/
│   ├── images/
│   ├── case-studies/ (case study images)
│   ├── projects/ (project images)
│   └── resume.pdf
├── styles/
│   └── globals.css
└── package.json
```

### Key Dependencies
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "tailwindcss": "^3.4.0",
    "aceternity-ui": "latest",
    "@radix-ui/react-dialog": "^1.0.0" (for modals),
    "lucide-react": "latest" (for icons)
  }
}
```

### Component Library
- **Aceternity UI:** Use for hero effects, cards, timelines, modals
- **Custom components:** Built on top of Aceternity for specific needs

### Animation Library
- **Framer Motion:** For scroll animations, page transitions, hover effects
- Keep animations subtle and performant

### Responsive Breakpoints
```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

---

## 📝 Content Management

**All content (copy, descriptions, project details) is managed in separate files:**  
→ See `portfolio-content.md` for all text content, taglines and other descriptions  
→ See `case-studies.md` for all case study content, descriptions, and project details.

This specification document focuses solely on structure, design, and technical implementation.

---

## 🚀 Development Phases

### Phase 1: Setup & Structure (Day 1)
- [ ] Initialize Next.js project
- [ ] Install dependencies (Aceternity UI, Framer Motion, Tailwind)
- [ ] Set up folder structure
- [ ] Configure Tailwind with color palette
- [ ] Create base layout and navigation

### Phase 2: Homepage Components (Day 1-2)
- [ ] Hero section with animations
- [ ] About section
- [ ] Experience timeline with modal
- [ ] Featured case studies grid
- [ ] Featured projects grid
- [ ] Highlights section
- [ ] Contact/CTA section
- [ ] Footer

### Phase 3: Case Studies & Projects Pages (Day 2-3)
- [ ] All case studies page (grid view)
- [ ] Individual case study template
- [ ] All projects page (grid view)
- [ ] Individual project template
- [ ] Create 2-3 sample case studies with placeholder content
- [ ] Create 2 sample projects with placeholder content
- [ ] Test navigation and transitions

### Phase 4: Additional Pages & Polish (Day 3-4)
- [ ] Blog page (redirect or embedded)
- [ ] 404 page
- [ ] Loading states

### Phase 5: Polish & Deploy (Day 4)
- [ ] Add all animations and transitions
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Deploy to Vercel
- [ ] Connect Namecheap domain

---

## 🎯 Success Criteria

### User Experience
- [ ] Loads in < 2 seconds
- [ ] Smooth animations (60fps)
- [ ] Mobile-friendly
- [ ] Accessible (WCAG AA)
- [ ] Clear navigation

### Visual Design
- [ ] Consistent color palette usage
- [ ] Professional typography
- [ ] High-quality images (even placeholders)
- [ ] Cohesive design system

### Content
- [ ] Clear value proposition
- [ ] Compelling project case studies
- [ ] Easy to contact
- [ ] Downloadable resume

### Technical
- [ ] SEO optimized
- [ ] Fast load times
- [ ] No console errors
- [ ] Works on all modern browsers

---

## 📌 Notes & Reminders

- **Placeholders:** Use high-quality placeholder images from Unsplash or similar
- **Resume:** Upload PDF to /public/resume.pdf
- **Blog:** Confirm Medium profile URL
- **Analytics:** Consider adding Google Analytics or Vercel Analytics
- **Domain:** Configure DNS in Namecheap to point to Vercel

---

## 🔗 External Links & Resources

- **Aceternity UI Docs:** https://ui.aceternity.com/
- **Framer Motion Docs:** https://www.framer.com/motion/
- **Next.js 15 Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Deployment:** https://vercel.com/docs
- **Namecheap DNS Setup:** https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-vercel/

---

**Last Updated:** [Current Date]  
**Status:** Design & Structure Finalized - Ready for Development  
**Next Steps:** Fill in content placeholders, begin Phase 1 development