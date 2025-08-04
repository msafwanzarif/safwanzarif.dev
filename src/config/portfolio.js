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
    "Node.js","Nest.js", "Vue", "React", 
    "MySQL", "MongoDB", "Python", "AWS"
  ],

  // Work Experience
  experiences: [
    {
      title: "Software Application Specialist",
      company: "iLaunch Sdn Bhd, Shah Alam",
      duration: "February 2022 – Present",
      descriptions: [
        "Developed solutions for a <b>feedback management system</b> and a professional board's <b>forms and financial management system</b>, ensuring they meet web and mobile applications requirements",
        "Researched and developed solutions for <b>new feature requests</b>, including <b>custom implementations</b> and <b>third-party integrations</b>, and presented findings and proposals to team members",
        "Collaborated with project managers and analysts to <b>design effective data structures and UX approaches</b> for specific requirements, while actively identifying and discussing potential risks",
        "<b>Conducted a web development workshop as a trainer</b>, introducing the technologies used in our projects to the client",
      ],
      technologies: ["Vue", "Nest.js", "MySQL", "Spring", "Oracle DB", "Flutter", "SVN", "TypeScript","Java", "Dart", "Bootstrap", "NGINX"]
    },
    {
      title: "Interns Supervisor",
      company: "iLaunch Sdn Bhd, Shah Alam",
      duration: "March 2022 – April 2025",
      descriptions: [
        "Guided and managed <b>multiple groups of internship students</b> from various local universities throughout their training period",
        "Trained them on the <b>complete application development workflow</b>, including requirements gathering, full-stack development, testing, debugging, and deployment",
        "Assigned <b>real project tasks</b> and facilitated team progress using <b>agile methods</b>, ensuring hands-on experience while <b>supporting effective collaboration and timely milestone completion</b>"
      ],
      technologies: ["Vue", "Node.js", "Nest.js", "Flutter", "MySQL", "JIRA", "Notion", "Insomnia", "Netlify", "DigitalOcean", "SVN", "Bootstrap", "TypeScript", "Dart"]
    },
    {
      title: "Technical Team Lead",
      company: "Azure Innovations Sdn Bhd, Kuala Lumpur",
      duration: "April 2021 – January 2022",
      descriptions: [
        "Led a team of <b>multinational developers</b> in delivering new features and requirements while maintaining a suite of web and mobile applications for a <b>major Malaysian telco company</b>",
        "Reviewed and designed solutions involving <b>e-commerce implementation</b>, <b>ads and reward system</b>, <b>Buy Now Pay Later implementation</b> and <b>courier service integration</b>",
        "Collaborated closely with Project Managers to manage client technical requests and expectations, <b>providing effort estimations and risk analysis</b>",
      ],
      technologies: ["Node.js", "Laravel", "React", "React Native", "MySQL", "MongoDB","Postman","JIRA","AWS","Javascript","PHP","Bootstrap","IPay88"]
    },
    {
      title: "Backend Developer",
      company: "Azure Innovations Sdn Bhd, Kuala Lumpur",
      duration: "March 2020 – March 2021",
      descriptions: [
        "Focused on <b>data management and computation</b> for an inventory and content management system tailored for <b>B2B clients</b>",
        "Handled <b>on-call reports and incidents response</b>, providing prompt analysis and coming up with effective debugging strategy to be implemented"
      ],
      technologies: ["Laravel", "Node.js", "MySQL", "MongoDB", "Postman", "JIRA", "PHP", "Javascript"]
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Computer Science (Hons.) Specializing in Information System",
      institution: "Multimedia University, Cyberjaya",
      year: "2016 - 2020",
      result:"CGPA : 3.71",
      description: "Won Best Final Year Project. Focused on elective subjects with technical application including Artificial Intelligence, Algorithm, Compiler Design and Data Mining."
    },
    {
      degree: "International Baccalaureate (Engineering)",
      institution: "MARA College, Banting",
      result:"IB SCORE : 35",
      year: "2013",
      description: ""
    },
    {
      degree: "Sijil Pelajaran Malaysia (SPM)",
      institution: "SMS Selangor, Cheras",
      result:"6A+ 3A",
      year: "2010",
      description: ""
    }
  ],

  // Certifications
  certifications: [
    {
      name: "AWS Certified Solution Architect - Associate",
      issuer: "Amazon Web Services",
      year: "2022",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      skills: ["Azure Services", "Cloud Computing"]
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
      title: "Smart Parking System",
      description: "Final Year Project that Won Best Project in 2019. Designed a parking system that focus on Real Time Parking Map Status Display in collaboration with TM One",
      icon: "🛒",
      image: "", // Add your project screenshot here
      status: "Archived",
      technologies: ["Expo", "React Native", "Node.js", "PostgreSQL","Heroku"],
      githubUrl: "https://github.com/msafwanzarif/fypv0",
      
    },
    {
      title: "FOKUS",
      description: "Personal Timer with minimal design that aims to boost productivity. Based on Pomodoro Timer with more flexibility that cater to users' habits and behaviour",
      icon: "Car",
      image: "projects/image.png", // Add your project screenshot here
      status: "Live",
      technologies: ["Vue","Tauri","Bootstrap","Netlify"],
      liveUrl: "https://fokus.safwanzarif.dev",
      githubUrl: "https://github.com/msafwanzarif/fokus-masa-anda",
      
    },
  ]
};

export default portfolioConfig;
