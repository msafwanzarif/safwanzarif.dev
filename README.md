# Safwan Zarif - Portfolio Website

## 🌐 Live Website
**Visit the live portfolio at: [https://safwanzarif.dev/](https://safwanzarif.dev/)**

---

## 📋 About
This is the source code for my personal portfolio website showcasing my experience as a Software Developer. The portfolio features a modern, responsive design with interactive elements and smooth animations.

## ✨ Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Components**: Collapsible project sections and animated elements
- **Modern Tech Stack**: Built with Astro, Vue.js, and Tailwind CSS
- **Performance Optimized**: Static site generation for fast loading
- **SEO Friendly**: Optimized meta tags and structured data

## 🛠️ Tech Stack
- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Frontend**: [Vue.js](https://vuejs.org/) - Component Framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: Bootstrap Icons
- **Deployment**: [Netlify](https://netlify.com/) with automatic CI/CD
- **Version Control**: Git & GitHub

## 📁 Project Structure
```
src/
├── components/          # Vue components
│   ├── ProfilePanel.vue      # Desktop profile sidebar
│   ├── MobileProfilePanel.vue # Mobile profile panel
│   ├── Navigation.vue         # Navigation component
│   ├── ExperienceSection.vue  # Work experience
│   ├── QualificationsSection.vue # Education & certifications
│   ├── ProjectsSection.vue    # Featured projects
│   └── ThemeToggle.vue       # Dark/light mode toggle
├── config/
│   └── portfolio.js     # Portfolio configuration & content
├── layouts/
│   └── PortfolioLayout.astro # Main layout template
├── pages/
│   └── index.astro      # Homepage
└── styles/
    └── global.css       # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/msafwanzarif/safwanzarif.dev.git
cd safwanzarif.dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 🧞 Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run deploy` | Deploy to Netlify production |
| `npm run deploy:preview` | Deploy to Netlify preview |

## ⚙️ Configuration
Portfolio content is managed through `src/config/portfolio.js`. Update this file to customize:
- Personal information
- Work experience
- Projects
- Skills
- Social links
- Contact information

## 🚀 Deployment
This site is automatically deployed to Netlify when changes are pushed to the main branch. The deployment configuration is managed through:
- `netlify.toml` - Netlify build configuration
- `astro.config.mjs` - Astro production settings

## 📱 Responsive Design
- **Desktop**: Fixed sidebar layout with smooth scrolling sections
- **Tablet**: Responsive grid layout with optimized spacing
- **Mobile**: Collapsible navigation with touch-friendly interface

## 🎨 Design Features
- **Gradient Avatars**: Custom gradient background for profile images
- **Smooth Animations**: Intersection Observer API for scroll animations
- **Interactive Elements**: Hover effects and collapsible content
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🤝 Contributing
While this is a personal portfolio, feedback and suggestions are welcome! Feel free to:
- Open an issue for bugs or suggestions
- Submit a pull request for improvements
- Share feedback on design or functionality

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact
- **Website**: [https://safwanzarif.dev/](https://safwanzarif.dev/)
- **Email**: [Contact through portfolio](mailto:msafwanzarif@gmail.com)
- **LinkedIn**: [Connect with me](https://www.linkedin.com/in/msafwanzarif)

---

⭐ **If you found this portfolio helpful or inspiring, please consider giving it a star!**
