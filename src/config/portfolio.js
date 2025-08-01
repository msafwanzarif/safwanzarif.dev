// Portfolio Content Configuration
// Edit this file to update your portfolio content easily
let email = "safwanzarif.dev@gmail.com"
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Safwan Zarif",
    title: "Software Application Specialist",
    bio: "Problem-solving enthusiast with <b>over 5 years of experience</b> in Full-stack Software Application Development, <b>specializing in Web App Integration and Backend Development.</b>",
    email: email,
    phone: "018 6644 723",
    location: "Cyberjaya, Malaysia",
    profileImage: "/profile.jpg", // Add your profile image to /public folder
  },

  // Social Links
  socialLinks: [
    { platform: "Email", icon: "bi bi-envelope-at", url: `mailto:${email}` },
    { platform: "LinkedIn", icon: "bi bi-linkedin", url: "https://linkedin.com/in/msafwanzarif" },
    { platform: "resume", icon: "bi bi-file-earmark-person-fill", url: "/resume.pdf" },
    { platform: "GitHub", icon: "bi bi-github", url: "https://github.com/msafwanzarif" },
  ],

  // Core Skills (shown in profile panel)
  coreSkills: [
    "Node.js","Nest.js", "Vue.js", "React", 
    "MySQL", "MongoDB", "Python", "AWS"
  ],

  // Work Experience
  experiences: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "2022 - Present",
      description: "Led a team of 5 developers in building scalable web applications using modern JavaScript frameworks. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Ltd",
      duration: "2020 - 2022",
      description: "Developed responsive web applications and mobile-first interfaces. Collaborated with UX designers to create intuitive user experiences and implemented modern CSS frameworks.",
      technologies: ["React", "JavaScript", "SASS", "Redux", "Webpack", "Jest"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      duration: "2019 - 2020",
      description: "Started my professional journey building web applications from scratch. Gained experience in full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2015 - 2019",
      description: "Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude with honors."
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy Pro",
      year: "2019",
      description: "Intensive 12-week program covering modern web development technologies and best practices."
    }
  ],

  // Certifications
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022",
      skills: ["GCP", "Kubernetes", "DevOps", "Microservices"]
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      skills: ["Azure Services", "Cloud Computing", "DevOps"]
    }
  ],

  // Technical Skills with proficiency levels
  skillCategories: [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "Vue.js", level: 95 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 }
      ]
    },
    {
      name: "DevOps",
      icon: "🚀",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 83 },
        { name: "Kubernetes", level: 75 }
      ]
    },
    {
      name: "Tools",
      icon: "🔧",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Figma", level: 78 },
        { name: "Postman", level: 85 }
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      icon: "🛒",
      status: "Live",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/safwanzarif/ecommerce-platform",
      stats: {
        users: "2.5K",
        orders: "10K+",
        uptime: "99.9%"
      }
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting features.",
      icon: "📋",
      status: "Live",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/safwanzarif/task-manager",
      stats: {
        teams: "150+",
        tasks: "5K+",
        active: "24/7"
      }
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization platform for weather patterns with predictive analytics and interactive charts.",
      icon: "🌤️",
      status: "Beta",
      technologies: ["Python", "FastAPI", "D3.js", "PostgreSQL", "ML"],
      liveUrl: "https://weather-analytics.com",
      githubUrl: "https://github.com/safwanzarif/weather-dashboard",
      stats: {
        cities: "1K+",
        accuracy: "94%",
        data: "Real-time"
      }
    },
    {
      title: "Social Media Scheduler",
      description: "Multi-platform social media management tool with content planning, analytics, and automation features.",
      icon: "📱",
      status: "Development",
      technologies: ["Nuxt.js", "Express", "MongoDB", "Redis", "APIs"],
      githubUrl: "https://github.com/safwanzarif/social-scheduler",
      stats: {
        platforms: "6",
        posts: "∞",
        scheduling: "Auto"
      }
    },
    {
      title: "AI Code Assistant",
      description: "VS Code extension that provides intelligent code suggestions and automated refactoring using machine learning.",
      icon: "🤖",
      status: "Live",
      technologies: ["TypeScript", "VS Code API", "OpenAI", "Webpack"],
      liveUrl: "https://marketplace.visualstudio.com/items?itemName=safwanzarif.ai-assistant",
      githubUrl: "https://github.com/safwanzarif/ai-code-assistant",
      stats: {
        downloads: "10K+",
        rating: "4.8★",
        updates: "Weekly"
      }
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum with smart contracts and decentralized storage.",
      icon: "🗳️",
      status: "Research",
      technologies: ["Solidity", "Web3.js", "IPFS", "React", "Ethereum"],
      githubUrl: "https://github.com/safwanzarif/blockchain-voting",
      stats: {
        security: "100%",
        transparency: "Full",
        cost: "Low"
      }
    }
  ]
};

export default portfolioConfig;
