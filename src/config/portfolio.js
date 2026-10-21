// Portfolio Content Configuration
// Edit this file to update your portfolio content easily
let email = "safwanzarif.dev@gmail.com"
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Safwan Zarif",
    title: "Full Stack Software Developer",
    bio: "Problem-solving enthusiast with <b>over 6 years of experience</b> in Full-stack Software Development, <b>specializing in RESTful API Development, Backend Systems and Web App Integration.</b>",
    email: email,
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
    "Nest.js", "Node.js", "TypeScript", "Vue",
    "Angular", "MySQL", "Docker", "AWS"
  ],

  // Work Experience
  experiences: [
    {
      title: "Full Stack Developer",
      company: "Siiru Tech Sdn Bhd (Remote)",
      duration: "October 2025 – Present",
      descriptions: [
        "<b>Design, develop and maintain the backend of a multi-vendor booking service</b> on Siiru's microservices architecture, covering <b>six vastly different product types</b> (Mutawwif, Transport, Waqaf, Visa, Insurance, Qurban), each with at least one vendor and more in development, including <b>third-party integrations</b>",
        "Build and maintain <b>500+ API endpoints and 8 cron jobs</b>; keep simple queries <b>under 100 ms</b> and heavy join and aggregate queries over thousands of records <b>under 500 ms</b>, including bulk inserts of 600+ rows in a single API call",
        "Protect data integrity across multi-step booking flows with <b>ACID-compliant transactions</b>, and prevent double-booking of limited vendor inventory with <b>locking and idempotency keys</b> so concurrent and retried requests do not create duplicate bookings",
        "Secure APIs with <b>JWT and OAuth</b> authentication and <b>role-based access control</b> for three groups: Admin, App User (customer), and Vendor/Operator (Mutawwif, driver, transport company, Qurban vendor, Waqaf vendor, insurance admin)",
        "Tuned a heavy query from <b>almost 2 seconds to under 500 ms</b> by redesigning it with effective subqueries",
        "Develop the new <b>vendor CMS</b> (Vue, TypeScript; 65+ pages, 40+ reusable components), maintain the <b>Angular admin CMS</b> (100+ pages, 40+ reusable components; 10+ pages built personally), and integrate the APIs with both and the Siiru mobile application (Angular, Ionic)",
        "Maintain <b>20+ repositories</b>, each a microservice node with its own <b>CI/CD pipeline</b>; cut full deployment time from push to live from <b>10–15 minutes to under 2 minutes</b>, with rollback through Docker image replacement in Kubernetes",
        "Use <b>AI-assisted tools</b> in the workflow: Claude for planning, and Codex and Antigravity for executing implementation from pseudocode, boilerplating, building MVPs and writing tests",
        "Review colleagues' code, and write and maintain the <b>Swagger (OpenAPI) documentation</b> that team members and contract freelancers rely on to build against the platform",
        "Use <b>Drizzle ORM</b> for the vendor booking APIs and <b>TypeORM</b> across many of the other backend microservices, on MySQL",
        "Work with the design team in grooming sessions to keep UX implementation robust and aligned with technical requirements, raising gaps with clear options and plans",
      ],
      technologies: ["Nest.js", "TypeScript", "MySQL", "Drizzle", "TypeORM", "Vue", "Angular", "Ionic", "Swagger", "Docker", "Kubernetes", "GitHub Actions", "DigitalOcean"]
    },
    {
      title: "Full Stack Developer",
      company: "iLaunch Sdn Bhd, Shah Alam",
      duration: "February 2022 – October 2025",
      descriptions: [
        "<b>Led developer teams as Scrum Master </b>, improving team cohesion, enhancing communication with the project manager, and increasing velocity by 10%",
        "Developed solutions for a <b>feedback management system</b> and a professional board's <b>forms and financial management system</b>, ensuring they meet web and mobile applications requirements, with <b>Prisma ORM</b> for data modelling and querying",
        "<b>Built testing into every project</b>, reviewed colleagues' code, and ran an <b>application testing workshop on Selenium IDE</b>",
        "Researched and developed solutions for <b>new feature requests</b>, including <b>custom implementations</b> and <b>third-party integrations</b>, and presented findings and proposals to team members; shared internal how-to guides that cut team development time by 20%",
        "Collaborated with project managers and analysts to <b>design effective data structures and UX approaches</b> for specific requirements, while actively identifying and discussing potential risks",
        "<b>Conducted a web development workshop as a trainer</b>, introducing the technologies used in our projects to the client",
        "Reduced <b>user-tested rejection rate by 75% by clearly identifying and communicating</b> design limitations as well as outlining its advantages to clients, offering effective alternatives where needed",
        "<b>Managed and trained five groups of internship students</b> from various local universities on the complete application development workflow, including requirements gathering, full-stack development, manual and automated testing, debugging, and deployment",
      ],
      technologies: ["Vue", "Nest.js", "Node.js", "Prisma", "MySQL", "Spring", "Oracle DB", "Flutter", "Selenium", "SVN", "TypeScript", "Java", "Dart", "Bootstrap", "NGINX", "Netlify", "DigitalOcean", "JIRA", "Notion"]
    },
    {
      title: "Technical Team Lead",
      company: "Azure Innovations Sdn Bhd, Kuala Lumpur",
      duration: "April 2021 – January 2022",
      descriptions: [
        "Led a team of <b>multinational developers</b>, working with colleagues in <b>Pakistan and the Philippines</b>, in delivering new features and requirements while maintaining a suite of web and mobile applications for a <b>major Malaysian telco company</b>",
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
        "Handled <b>on-call reports and incidents response</b>, providing prompt analysis and coming up with effective debugging strategy to be implemented, meeting 100% of deadlines and SLAs"
      ],
      technologies: ["Laravel", "Node.js", "MySQL", "MongoDB", "Postman", "JIRA", "PHP", "Javascript"]
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Computer Science (Hons.) Specializing in Information System",
      institution: "Multimedia University, Cyberjaya",
      year: "2016 - 2021",
      result:"CGPA : 3.71",
      description: "Won Best Final Year Project and the Book Award. Focused on elective subjects with technical application including Artificial Intelligence, Algorithm, Compiler Design and Data Mining."
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

  // Featured Projects
  projects: [
    {
      title: "Conteng | Papan Putih Untuk Cikgu",
      description: "A Live whiteboard for any teachers or tutors that conduct classes using a digital whiteboard. Packed with features that will enhance students engagement as well as teachers' ability to monitor their  progress",
      features:[
        "Automatic access control that separate the teacher and students ability to modify the board.",
        "Easy and intuitive UX for teacher to manage their pupils. Allow a pupil to write with one click of a button.",
        "Students will not be able to disrupt the teacher or any other students' work with granular control.",
        "'Exercise' mode at any state of the board. Instantly duplicating the board for each student, allowing them to write on their own space.",
        "Ability to save and load the board state.",
        "Add a grid to the board for easier drawing.",
        "Undo or Redo any changes made to the board.",
        "Announcements from teacher to students",
      ],
      futurePlans:[
        "More accessible UX for using a smartphone or tablet",
        "'Homework' mode that allows teacher to assign a task to students and collect their work after class",
        "More whiteboard tools such as shapes, textbox, and more",
      ],
      icon: "🖊️",
      image: "projects/conteng.png",
      status: "Live",
      private:true,
      technologies: ["Vue","Node.js","Nest.js","MongoDB","Websocket","Bootstrap","Netlify","AWS EC2","Git","Jenkins"],
      liveUrl: "https://conteng.safwanzarif.dev",
      //githubUrl: "https://github.com/msafwanzarif",
      
    },
    {
      title: "SZUtils.vue",
      description: "An NPM package that is developed to have multiple useful Vue composables to be reused in multiple future projects to simplify common and repetitive computations. Published with documentation and comprehensive Demo.Started with productivity focused features.",
      features:[
        "useDuration - A reactive Luxon-based stopwatch/timer with real-time tracking support",
        "useDurationDisplay - Format and display durations in a readable way",
        "DurationDisplay - Packaged useDurationDisplay as a renderless component for quicker simple usage on UI",
        "useTimeTracker - Track how much time has been spent doing something — session-by-session or continuously",
        "useHabitTracker - A powerful daily/weekly/monthly habit tracker with goal setting, breaks, off-days, and personal best tracking",
        "useMetas - Reactive metadata management for composables and utilities",
        "useTimer - Simple interval-based timer composable",
        "useTimeTick - Reactive ticking composable for time-based updates",
        "useTimeTickShared - Shared ticking composable for global time updates across components",
        "useFirebaseDb - Firebase Firestore database integration composable",
        "useFirebaseDoc - Reactive Firestore document management composable with real-time synchronization",
        "generateId - Utility function to generate unique IDs",
      ],
      futurePlans:[
        "useCountdown, usePiniaSync",
        "Package more composable as renderless components",
      ],
      icon: "📦",
      image: "projects/szutils.png", // Add your project screenshot here
      status: "Published",
      private: false,
      technologies: ["Vue", "NPM", "Firebase", "Cloud Firestore","Luxon", "Bootstrap"],
      githubUrl: "https://github.com/msafwanzarif/szutils.vue",
      liveUrl: "https://www.npmjs.com/package/szutils.vue",
      
    },
    {
      title: "FOKUS",
      description: "Personal Timer with minimal design that aims to boost productivity. Based on Pomodoro Timer with more flexibility that cater to users' habits and behaviour",
      features:[
        "Minimalist design for distraction-free focus",
        "Customizable timer settings compatible with <i>Pomodoro</i> template",
        "Focus and Break time with <i>Overtime</i> flexibility",
        "Notifications between sessions",
        "Daily automatic reset and Motivational Quote",
        "Closable persistent timer",
        "Set up PWA so users can install it on their devices",
        "Syncing of timer data across devices with Google Login",
        "Goal module where users can set and track their productivity goals"
      ],
      futurePlans:[
        "More Goal Modules feature like adding custom goals and setting time off",
        "Social sharing of status and achievements",
      ],
      icon: "🕒",
      image: "projects/fokus.png",
      status: "Live",
      private:false,
      technologies: ["Vue","Tauri","Bootstrap","Netlify"],
      liveUrl: "https://fokus.safwanzarif.dev",
      githubUrl: "https://github.com/msafwanzarif/fokus-masa-anda",
      
    },
    {
      title: "JemputDatang.my",
      description: "For my wedding, I decided to build my own e-invitation card, with added features on top of the normal e-card features we see out there. The most important feature is the personalized RSVP card for invited guests",
      features:[
        "E-card of the same design but with variation for the bride and groom for our combined event. <a class='text-dev-accent' href='https://jemputan.safwanzarif.dev/safwan' target='_blank'>Groom Card</a> | <a class='text-dev-accent' href='https://jemputan.safwanzarif.dev/ahza' target='_blank'>Bride Card</a>",
        "Conventional e-card features including RSVP, Guestbook, Location",
        "Guestbook with specific recipient and ability to make it private",
        "Specialized RSVP card for specific invited guest, with simple UX to manage them. <a class='text-dev-accent' href='https://jemputan.safwanzarif.dev/jemputan' target='_blank'>See it in action</a>",
        "Easy sharing of the e-card link through WhatsApp with a mobile layout 'Invite Dashboard'. <a class='text-dev-accent' href='https://jemputan.safwanzarif.dev/invite' target='_blank'>See it in action</a>",
        "Configured the thumbnail and preview for the e-card link to be shared on WhatsApp",
      ],
      futurePlans:[
        "Ability to customize content and deploy your own e-card following the same template",
        "Gift registry feature"
      ],
      icon: "💌",
      image: "projects/jemputan.png",
      status: "Live",
      private:false,
      technologies: ["Vue","Vike","Bootstrap","Firestore","Netlify"],
      liveUrl: "https://jemputan.safwanzarif.dev"
    },
    {
      title: "Smart Parking System",
      description: "Won the faculty's Best Final Year Project in 2019. Designed a smart parking system that focus on Real Time Parking Map Status Display for admins and users. This project is in collaboration with TM One",
      features:[
        "Real-time parking map display",
        "Usage of users' QR code to access parking area",
        "Admin dashboard to add new parking, and manage their fees, availability and status",
        "Dashboard display to monitor parking and vehicle entries",
        "Automated calculation of parking fees",
      ],
      icon: "🚗",
      image: "projects/smart_parking.png", // Add your project screenshot here
      status: "Archived",
      private: false,
      technologies: ["Expo", "React Native", "Node.js", "PostgreSQL","Heroku"],
      githubUrl: "https://github.com/msafwanzarif/fypv0",
      
    },
  ]
};

export default portfolioConfig;