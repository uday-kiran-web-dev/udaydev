# UDAY.DEV — Interactive Web Developer Portfolio (v2)

> Premium, interactive, and high-performance developer portfolio showcasing modern React engineering, clean JavaScript, responsive interfaces, full-stack systems, and upcoming 3D workspace experiences.

---

## 🚀 Primary Positioning
- **Primary Role**: **Web Developer**
- **Secondary Stack**: React • JavaScript • Python • FastAPI • MongoDB • WebSockets • AI & Automation
- **Design Ethos**: Professional + Interactive + Minimal + Technical + Creative

---

## 🛠️ Technology Architecture
- **Language**: 100% JavaScript (ES6+) & JSX (Zero TypeScript overhead)
- **Frontend Framework**: React 18.3 + Vite
- **Routing**: React Router DOM (Single-page app with deep section anchors and case studies)
- **Styling**: Tailwind CSS with custom design tokens (`--background`, `--foreground`, `--accent`, `--card`, `--border`)
- **3D Graphics (Upcoming Phase 4)**: Three.js + React Three Fiber + Drei
- **Icons**: Lucide React
- **Deployment**: Multi-stage Docker + Nginx

---

## 📂 Project Structure
```
udaydev/
├── public/
│   ├── icons/          # Favicons and SVG markers
│   ├── images/         # Optimized screenshots and diagrams
│   ├── models/         # 3D assets (GLTF/GLB)
│   ├── resume/         # Downloadable CV documents
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ui/         # Buttons, Badges, Cards, Containers
│   │   ├── navigation/ # Sticky glass Navbar, Mobile drawer
│   │   ├── projects/   # Interactive cards and metric visualizers
│   │   ├── contact/    # Contact form state machine
│   │   └── common/     # Section headings, Footers
│   ├── sections/       # Hero, About, Projects, Skills, Experience, Education, Lab, Contact
│   ├── three/          # 3D workspace scene, lighting, camera controls
│   ├── pages/          # Home and ProjectDetails case study pages
│   ├── data/           # Structured JavaScript data layers (profile, projects, skills, etc.)
│   ├── utils/          # Class merging (cn) and helpers
│   ├── App.jsx         # Application shell and routing
│   ├── main.jsx        # Root entrypoint
│   └── index.css       # Token definitions & global utility classes
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📦 Getting Started

### Prerequisites
- Node.js `v18+` or `v20+` (tested with Node `v24.19.0`)
- npm `10+`

### Installation
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
Verify static compilation and bundling:
```bash
npm run build
npm run preview
```

### Docker Deployment
```bash
docker compose up --build -d
```
Access the containerized site at `http://localhost:8080`.

---

## ♿ Accessibility & Performance
- Standard semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- Full keyboard tab navigation with visible focus rings.
- `prefers-reduced-motion` detection disabling animations for sensitive users.
- Near-black high contrast dark theme optimized for readability.

