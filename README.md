# Sujal Pradeep Hadge – Professional Developer Portfolio Website

A premium, interactive developer portfolio website designed with design system consistency, subtle spotlight gradients, responsive animated lists, and modular type safety.

Built on Next.js 15+ App Router, React 19, TypeScript, and Tailwind CSS.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescript.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: `canvas-confetti`

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js router pages, sitemaps, layouts, global styles
├── components/           # UI section & interactive feature components
│   ├── common/           # JSON-LD SEO markup
│   ├── effects/          # Ambient grid animations, spot glows
│   ├── layout/           # Sticky nav, footer, sections framework
│   └── sections/         # Hero, About, Skills, Experience, Projects, Contact
├── data/                 # Externalized resume data mapping (single source of truth)
├── lib/                  # Classname merging and utility definitions
├── providers/            # Theme toggling context wrappers
└── types/                # Component typing contracts
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
Run the package installation:
```bash
npm install
```

### 2. Run the Development Server
Launch the local sandbox dev environment:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 3. Production Build
Verify static compilation and production integrity:
```bash
npm run build
```

---

## 🚀 Deployment on Vercel

The application is configured out-of-the-box for instant static deployment on Vercel.

1. **GitHub Upload**: Push the repository contents to a public or private GitHub repository.
2. **Import Project**: Log in to [Vercel](https://vercel.com/) and click **New Project** to import the repository.
3. **Deploy**: Select defaults (Vercel automatically detects Next.js configurations) and hit **Deploy**.
