/**
 * Centralized Portfolio Data for Vishal Yadav
 * Resume-backed profile content. Update claims when supporting evidence changes.
 * Zero fabricated statistics, zero invented metrics, zero fake testimonials.
 */

export const personalInfo = {
  name: "Vishal Yadav",
  photoPath: "/vishal-yadav.jpeg",
  title: "Software Developer | Full-Stack Developer",
  secondaryTitle: "Backend-Oriented Full-Stack Developer",
  location: "Ghaziabad / Delhi NCR, India",
  graduation: "Expected July 2027",
  timezone: "IST (UTC+5:30)",
  availability: "Open to discussing internships and graduate opportunities",
  status: "B.Tech Computer Science & Engineering (2023 – 2027)",
  institution: "IMS Engineering College, Ghaziabad",
  gpa: "7.5 / 10",
  email: "vishalyadv7999@gmail.com",
  github: "https://github.com/vishalyadv7999",
  linkedin: "https://www.linkedin.com/in/vishal-yadav-b1a384320/",
  resumePath: "/resume.pdf",
  bio: "Computer Science undergraduate building full-stack web applications and backend services with React, Node.js, Express, MongoDB, and SQL.",
  recruiterIntro: "Entry-level Software Developer with hands-on experience across 3 full-stack applications and 2 technical internships. Strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Database Design, and MERN-stack architecture."
};

export const quantifiedScope = [
  { value: "3", label: "Full-Stack Applications", desc: "MERN, PHP/MySQL, Real-Time" },
  { value: "2", label: "Technical Internships", desc: "IBM PBEL AI & Unified Mentors" },
  { value: "7", label: "Assistance Workflows", desc: "Towing, Repair, Jump-Start, Fuel" },
  { value: "3", label: "Application RBAC Roles", desc: "User, Partner & Admin" },
  { value: "6", label: "Backend API Modules", desc: "Modular route & controller packages" },
  { value: "5", label: "Core Data Entities", desc: "Normalized schemas in MongoDB" }
];

export const capabilities = [
  {
    id: "full-stack",
    title: "Full-Stack Web Applications",
    description: "Building complete frontend-to-backend web applications with responsive React interfaces, robust Node.js/Express servers, and scalable databases.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    icon: "Layers"
  },
  {
    id: "backend-apis",
    title: "RESTful API Development",
    description: "Designing modular REST API endpoints, structured routing pipelines, request validation, error-handling middleware, and Postman API testing.",
    technologies: ["Node.js", "Express.js", "REST APIs", "CRUD", "Postman"],
    icon: "Server"
  },
  {
    id: "auth-security",
    title: "Authentication & Authorization",
    description: "Implementing secure JWT (JSON Web Tokens) lifecycle, token verification middleware, password hashing, and Role-Based Access Control (RBAC).",
    technologies: ["JWT", "RBAC", "Middleware", "Session Security"],
    icon: "ShieldCheck"
  },
  {
    id: "realtime",
    title: "Real-Time Systems",
    description: "Building bi-directional event-driven real-time communication for live status updates and interactive client-server workflows.",
    technologies: ["Socket.io", "WebSockets", "Event Handlers"],
    icon: "Radio"
  },
  {
    id: "databases",
    title: "Database Architecture",
    description: "Modeling structured relational data with MySQL and flexible document schemas with MongoDB, indexing keys, and ensuring data consistency.",
    technologies: ["MongoDB", "MySQL", "SQL", "DBMS"],
    icon: "Database"
  },
  {
    id: "core-cs",
    title: "Core CS & Problem Solving",
    description: "Applying Data Structures & Algorithms, Object-Oriented Programming principles, Operating System concepts, and clean coding practices.",
    technologies: ["DSA", "OOP", "Java", "C++", "Python"],
    icon: "Cpu"
  }
];

export const projects = [
  {
    id: "roadside-assistance",
    preview: "/projects/roadside.png",
    previewAlt: "Roadside Assistance landing page with service choices and request tracking preview",
    previewCaption: "Live application — public landing page",
    walkthrough: ["Explore assistance categories on the public homepage.", "Create an account to access booking workflows.", "Use the repository to inspect JWT roles and Socket.io integration."],
    limitations: "Active development. Booking requires an account; no public guest credentials are provided.",
    rank: 1,
    title: "Roadside Assistance Platform",
    subtitle: "Flagship Full-Stack On-Demand Assistance System",
    duration: "June 2026 – Present",
    tagline: "Full-stack vehicle assistance and mechanic/towing booking platform with multi-role authentication, modular REST APIs, MongoDB data modeling, and real-time Socket.io workflows.",
    status: "Active Development",
    featured: true,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    tags: ["Flagship #1", "MERN Stack", "Socket.io", "JWT & RBAC", "6 Backend Modules"],
    liveDemo: "https://roadside-assistance-taupe.vercel.app/",
    github: "https://github.com/vishalyadv7999/Roadside-Assistance",
    hasLiveDemo: true,
    hasGithub: true,
    summary: {
      problem: "When a vehicle breaks down on the road, drivers face major friction locating nearby qualified mechanics, estimating turnaround times, and communicating their exact service needs (such as towing, tire repairs, battery jump-starts, or fuel delivery).",
      solution: "Engineered a unified multi-role web platform that connects stranded vehicle owners with verified nearby service partners, featuring a seven assistance workflows, role-based dashboards, and live tracking."
    },
    workflows: [
      { name: "Mechanic Discovery", desc: "Locate verified nearby automotive mechanics based on service category." },
      { name: "Service Booking", desc: "Structured booking requests with vehicle details and problem descriptions." },
      { name: "Towing Assistance", desc: "Specialized tow truck dispatch workflow for disabled vehicles." },
      { name: "Breakdown Repair", desc: "On-site mechanical diagnostics and emergency breakdown repair." },
      { name: "Battery Jump-Start", desc: "Rapid dispatch for dead battery recharge and jump-start services." },
      { name: "Flat-Tire Repair", desc: "Emergency tire puncture repair and spare wheel replacement." },
      { name: "Fuel Delivery", desc: "Emergency fuel delivery for out-of-gas situations." }
    ],
    backendModules: [
      { name: "Authentication", desc: "User authentication with JWT and role-based authorization." },
      { name: "Vehicle management", desc: "Vehicle information used in assistance requests." },
      { name: "Bookings", desc: "Creating and managing assistance bookings." },
      { name: "Partner verification", desc: "Administrative verification of service partners." },
      { name: "Service workflows", desc: "Handling the stages of a roadside assistance request." },
      { name: "CRUD operations", desc: "Creating, reading, updating and deleting application records." }
    ],
    roles: [
      { role: "User", capabilities: "Create vehicle profiles, request roadside assistance, track status, review services." },
      { role: "Partner", capabilities: "Manage service categories, accept/reject nearby jobs, update live job progress, view earnings." },
      { role: "Admin", capabilities: "Verify partner credentials, manage platform users, inspect dispute logs, view analytics reports." }
    ],
    architecture: {
      client: "React.js + Tailwind CSS UI",
      apiLayer: "Express.js RESTful API & Middleware (CORS, JWT Auth Guard, Role Checker)",
      realtime: "Socket.io Bi-directional WebSocket server for live status updates",
      controllers: "Backend logic for authentication, vehicles, bookings and service workflows",
      database: "MongoDB data models for users, vehicles and service requests"
    },
    interviewPoints: [
      {
            "question": "How are users and permissions handled?",
            "answer": "The platform uses JWT authentication and role-based authorization for User, Partner and Admin workflows."
      },
      {
            "question": "What updates in real time?",
            "answer": "Socket.io supports service tracking updates between the backend and React clients."
      },
      {
            "question": "How is the backend organized?",
            "answer": "The resume groups the backend into six areas: authentication, vehicle management, bookings, partner verification, service workflows and CRUD operations."
      }
],
    challenges: [
      "Designing role-based middleware to cleanly isolate User, Partner, and Admin workflows without route duplication.",
      "Managing service request state transitions (REQUESTED -> ACCEPTED -> IN_PROGRESS -> COMPLETED) to prevent invalid state jumps.",
      "Structuring modular backend architecture (6 backend modules) to maintain code clarity and testability."
    ]
  },
  {
    id: "learn-nexus",
    preview: "/projects/learnnexus.png",
    previewAlt: "LearnNexus sign-in page describing its guided study workspace",
    previewCaption: "Live application — sign-in screen; workspace requires an account",
    walkthrough: ["Open the study workspace sign-in page.", "Create an account to explore personalized learning tools.", "Review the repository for task, resource and progress data models."],
    limitations: "The study workspace requires an account. The public preview shows the sign-in screen.",
    rank: 2,
    title: "LearnNexus",
    subtitle: "Smart Study Guidance Platform",
    duration: "October 2025 – May 2026",
    tagline: "Centralized study planning and roadmap platform with user-specific productivity flows, personalized study plans, task management, and resource aggregation.",
    status: "Completed",
    featured: true,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    tags: ["Flagship #2", "MERN Stack", "Productivity", "5 Data Entities"],
    liveDemo: "https://learn-nexus-client.vercel.app/",
    github: "https://github.com/vishalyadv7999/LearnNexus",
    hasLiveDemo: true,
    hasGithub: true,
    summary: {
      problem: "Engineering students frequently struggle with organizing dispersed study materials, designing structured learning roadmaps, tracking task progress across multiple courses, and maintaining consistent study habits.",
      solution: "Built LearnNexus as a centralized full-stack workspace that unifies roadmap creation, personalized study plan scheduling, milestone task management, and resource bookmarking into a single cohesive interface."
    },
    coreModules: [
      { name: "Personalized Study Plans", desc: "Generate custom study schedules tailored to academic subjects and target deadlines." },
      { name: "Learning Roadmaps", desc: "Structured milestone tracks breaking complex technical topics into sequential phases." },
      { name: "Task Management", desc: "Actionable study task tracking with priority flags, due dates, and completion status." },
      { name: "Centralized Resources", desc: "Categorized repositories for documentation, video tutorials, notes, and study links." },
    ],
    dataEntities: [
      { name: "Users", desc: "User identity, credentials, academic profile, and system preferences." },
      { name: "Learning Activities", desc: "Logged study sessions with timestamps, durations, and subject tags." },
      { name: "Tasks", desc: "Milestones, deadline dates, priority indicators, and binary completion flags." },
      { name: "Resources", desc: "Reference links, uploaded notes, tags, and course associations." },
      { name: "Progress Tracking", desc: "Calculated completion percentages and historical streak analytics." }
    ],
    architecture: {
      client: "Modular React.js UI with reusable card, list, and form components",
      apiLayer: "Express.js RESTful API endpoints handling JSON payloads",
      controllers: "Business logic controllers for Plan Generator, Task Tracker, and Resource Manager",
      database: "MongoDB collections with relational object referencing"
    },
    interviewPoints: [
      {
            "question": "What does LearnNexus organize?",
            "answer": "Personalized study plans, learning roadmaps, tasks and centralized learning resources."
      },
      {
            "question": "How do the frontend and backend work together?",
            "answer": "Reusable React components communicate with a Node.js/Express backend through REST APIs. MongoDB stores user, learning activity, task, resource and progress data."
      }
],
    challenges: [
      "Structuring MongoDB data relationships across 5 core entities (Users, Activities, Tasks, Resources, Progress) while keeping query latency low.",
      "Building a responsive task manager interface that stays smooth during rapid task creation, filtering, and status updates."
    ]
  },
  {
    id: "parking-management",
    walkthrough: ["Open the PHP/MySQL repository.", "Review parking discovery, reservation and cancellation code."],
    limitations: "Source code is available; a working public demo is not currently linked. Concurrency guarantees have not been established.",
    rank: 3,
    title: "Online Parking Management System",
    subtitle: "Parking Search & Reservation System",
    duration: "December 2025 – January 2026",
    tagline: "Full-stack parking reservation system enabling location-based parking discovery, live slot availability, booking availability checks, and Google Maps integration.",
    status: "Completed",
    featured: false,
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    tags: ["Supporting #3", "PHP & MySQL", "Google Maps API", "Availability Checks"],
    liveDemo: null,
    github: "https://github.com/ManikantVerma/Parking",
    repositoryOwner: "ManikantVerma",
    hasLiveDemo: false,
    hasGithub: true,
    summary: {
      problem: "Drivers need a way to find parking, check availability and manage reservations.",
      solution: "Built PHP/MySQL workflows for parking search, reservations, payments and cancellations, with Google Maps and GPS integration for discovery and navigation."
    },
    coreWorkflows: [
      { name: "Parking Discovery", desc: "Search parking slots by city, area, landmark, and GPS coordinates." },
      { name: "Space Listing", desc: "Hosts list spaces with dimensions, vehicle type support (compact, sedan, SUV, bus, bike), security features, and pricing." },
      { name: "Reservation Engine", desc: "Drivers reserve designated time slots with instant confirmation." },
      { name: "Availability Checks", desc: "Parking availability and database updates to reduce double-booking risk." },
      { name: "Google Maps / GPS", desc: "Embedded navigation links and geographic pinpoints for easy driver arrival." }
    ],
    databaseEntities: [
      { name: "parking_listings", desc: "Stores title, rent, deposit, building type, vehicle image flags, address, latitude, longitude, security and access features." },
      { name: "reservations", desc: "Tracks user_id, listing_id, booking start/end times, payment status, and cancellation records." }
    ],
    architecture: {
      client: "HTML5, CSS3 and JavaScript interface for parking discovery and reservations",
      backend: "PHP request handling for parking search, reservations, payments and cancellations",
      database: "MySQL relational database running on Apache/MySQL server"
    },
    interviewPoints: [
      {
            "question": "How does the project reduce booking conflicts?",
            "answer": "Parking availability checks and database updates reduce double-booking risk. An availability check alone does not establish safe behavior for simultaneous reservations."
      },
      {
            "question": "Which workflows are covered?",
            "answer": "The resume describes parking search, reservations, payments and cancellation, alongside Google Maps and GPS integration."
      }
],
    challenges: [
      "Keeping availability information consistent with reservation and cancellation updates.",
      "Connecting location-based discovery with parking reservation workflows."
    ]
  }
];

export const projectEvolution = [
  {
    step: "01",
    phase: "Web Fundamentals & Relational Storage",
    project: "Online Parking Management System",
    period: "Dec 2025 – Jan 2026",
    stack: "HTML5, CSS3, JS, PHP, MySQL",
    focus: "Form processing, MySQL relational tables, availability checks to reduce booking conflicts, and Google Maps GPS integration.",
    demonstrates: "Core backend request handling, SQL query modeling, and location API integration."
  },
  {
    step: "02",
    phase: "Product-Driven Full-Stack & State Architecture",
    project: "LearnNexus Platform",
    period: "Oct 2025 – May 2026",
    stack: "React.js, Node.js, Express, MongoDB",
    focus: "Reusable React component trees, REST API endpoints, 5 relational MongoDB entities, and dynamic progress calculation.",
    demonstrates: "Component modularity, document schema design, and asynchronous state synchronization."
  },
  {
    step: "03",
    phase: "Advanced Event-Driven Systems & Multi-Role Security",
    project: "Roadside Assistance Platform",
    period: "June 2026 – Present",
    stack: "React.js, Node.js, Express, MongoDB, Socket.io, JWT",
    focus: "Role-Based Access Control (User, Partner, Admin), 6 backend modules, and Socket.io live tracking streams.",
    demonstrates: "MERN application architecture, token lifecycle security, and bi-directional WebSocket orchestration."
  }
];

export const engineeringWorkflow = [
  { step: "01", title: "Problem Analysis", desc: "Deconstructing user workflows, constraints, and operational requirements before writing code." },
  { step: "02", title: "Architecture Design", desc: "Structuring frontend-to-backend boundaries, REST endpoint contracts, and data flow patterns." },
  { step: "03", title: "Component Hierarchy", desc: "Building modular, reusable UI components in React with clean prop interfaces." },
  { step: "04", title: "API Development", desc: "Implementing Express routes, controllers, middleware guards, and Postman test collections." },
  { step: "05", title: "Database Modeling", desc: "Designing normalized schemas in MongoDB/MySQL with primary keys, indexes, and relations." },
  { step: "06", title: "Auth & Security", desc: "Securing routes with JWT token verification, bcrypt hashing, and RBAC authorization." },
  { step: "07", title: "Testing & Debugging", desc: "Validating API responses, debugging edge cases, and testing cross-browser responsiveness." },
  { step: "08", title: "Deployment & Iteration", desc: "Configuring production environment variables, build optimization, and performance audits." }
];

export const engineeringPrinciples = [
  {
    title: "Build for the User",
    desc: "Understand the concrete problem and user workflow before writing application code."
  },
  {
    title: "Keep Systems Modular",
    desc: "Strictly separate frontend UI, controller logic, middleware security, and database models."
  },
  {
    title: "Validate Before Shipping",
    desc: "Rigorously test API response envelopes, verify role boundaries, and eliminate edge-case bugs."
  },
  {
    title: "Learn Through Projects",
    desc: "Strengthen full-stack and backend engineering depth by building real, production-style applications."
  }
];

export const technologyDetails = {
  languages: [
    { name: "Java", role: "Core Foundation", context: "Object-oriented programming, data structures, and algorithmic problem solving." },
    { name: "C++", role: "DSA & Problem Solving", context: "Optimized algorithmic implementations, memory models, and competitive programming." },
    { name: "JavaScript (ES6+)", role: "Full-Stack Development", context: "Primary language for React frontend, Node.js backend, and async event loops." },
    { name: "Python", role: "AI & Scripting", context: "Used during IBM PBEL internship for Generative AI prompt workflows and validation scripts." },
    { name: "SQL", role: "Relational Queries", context: "Table joins, indexing, and transactional data integrity in MySQL." }
  ],
  frontend: [
    { name: "React.js", role: "Component Architecture", context: "Used across Roadside Assistance and LearnNexus for component trees and state management." },
    { name: "HTML5", role: "Semantic Markup", context: "Structuring accessible, SEO-compliant DOM hierarchies with ARIA standards." },
    { name: "CSS3", role: "Modern Layouts", context: "Flexbox, CSS Grid, media queries, and responsive design systems." },
    { name: "Tailwind CSS", role: "Utility-First Design", context: "High-contrast technical design systems, custom themes, and responsive utility classes." },
    { name: "Responsive Web Design", role: "Mobile-First UX", context: "Ensuring seamless viewport scaling from 320px mobile to 1920px desktop." }
  ],
  backend: [
    { name: "PHP", role: "Server-Side Development", context: "Parking search, reservations and cancellation workflows in the PHP/MySQL parking project." },
    { name: "Node.js", role: "Runtime Environment", context: "Asynchronous I/O runtime powering REST backends and WebSocket servers." },
    { name: "Express.js", role: "REST API Framework", context: "Building modular routing pipelines, middleware stacks, and JSON response envelopes." },
    { name: "RESTful APIs", role: "API Architecture & CRUD", context: "Designing clean HTTP methods (GET, POST, PUT, PATCH, DELETE) and error handlers." },
    { name: "JWT Authentication", role: "Token-Based Security", context: "Stateless token issuance, secret signing, and authorization header verification." },
    { name: "Role-Based Access Control", role: "RBAC Middleware", context: "Isolating User, Partner, and Admin permissions across protected API routes." },
    { name: "Socket.io", role: "Real-Time Event Streams", context: "Bi-directional WebSocket communication for live mechanic dispatch tracking." }
  ],
  databases: [
    { name: "MongoDB", role: "Document Modeling & NoSQL", context: "MongoDB schemas for Roadside Assistance and LearnNexus." },
    { name: "MySQL", role: "Relational Schemas & Joins", context: "Relational table schemas, foreign keys, and booking availability checks in Parking System." },
    { name: "DBMS", role: "Database Management Systems", context: "Database normalization, transaction ACID properties, and relational algebra." }
  ],
  fundamentals: [
    { name: "Data Structures & Algorithms", role: "Arrays, Trees, Graphs, DP", context: "Applying algorithmic complexity (Time & Space) to solve computational problems." },
    { name: "Object-Oriented Programming (OOP)", role: "Inheritance, Encapsulation", context: "Clean class design, modularity, polymorphism, and abstraction." },
    { name: "Operating Systems", role: "Processes, Threads, Memory", context: "Concurrency, process scheduling, synchronization, and virtual memory." },
    { name: "Computer Networks", role: "HTTP/S, TCP/IP, DNS, Sockets", context: "Network protocol stack, client-server communication, and WebSocket handshakes." }
  ],
  tools: [
    { name: "Git", role: "Version Control", context: "Branch management, atomic commits, merge conflict resolution, and version history." },
    { name: "GitHub", role: "Collaborative Repositories", context: "Hosting open source codebases, issue tracking, and repository documentation." },
    { name: "VS Code", role: "Primary Development IDE", context: "Configured development environment with debugging and linting extensions." },
    { name: "Postman", role: "API Testing & Documentation", context: "Testing REST endpoints, validating payload schemas, and verifying auth tokens." }
  ]
};

// Aliases for backwards compatibility
export const skills = technologyDetails;

export const experience = [
  {
    id: "ibm-pbel",
    role: "AI Intern — IBM-AKTU PBEL Program",
    company: "IBM PBEL",
    period: "June 2026 – Present",
    type: "Institutional internship program",
    location: "Virtual / Institutional",
    summary: "Selected for a 60-hour IBM-AKTU PBEL internship program focused on enterprise AI application development, generative AI, and prompt engineering.",
    highlights: [
      "Engineered Python-based AI application workflows utilizing Generative AI and systematic prompt engineering methodologies.",
      "Conducted iterative prompt design, testing, and output validation to ensure reliable AI responses.",
      "Applied structured Software Development Life Cycle (SDLC) practices including problem analysis, implementation, debugging, and project delivery."
    ],
    technologies: ["Python", "Generative AI", "Prompt Engineering", "SDLC Workflows", "Testing & Validation"]
  },
  {
    id: "unified-mentors",
    role: "Web Development Intern",
    company: "Unified Mentors Private Limited",
    period: "June 2026 – July 2026",
    type: "Internship",
    location: "Virtual",
    summary: "Contributed to front-end development, building accessible, mobile-responsive web interfaces and ensuring high functional reliability.",
    highlights: [
      "Developed and styled responsive web interfaces using HTML5, CSS3, and modern JavaScript.",
      "Ensured mobile responsiveness, usability standards, and seamless cross-browser rendering.",
      "Executed feature development, systematic cross-browser testing, debugging, and defect resolution."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Cross-Browser Testing", "Debugging"]
  }
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "IMS Engineering College, Ghaziabad",
  period: "October 2023 – July 2027",
  gpa: "7.5 / 10",
  highlights: [
    "Comprehensive curriculum covering core Computer Science theory, advanced data structures, and hands-on software development.",
    "Active member of the College Gaming Club, organizing e-sports tournaments, student coordination, and logistics."
  ]
};

export const extracurricular = {
  title: "College Gaming Club",
  role: "Active Member & Event Organizer",
  description: "Contributed to tournament organization, event planning, and student participation for competitive campus gaming events."
};
