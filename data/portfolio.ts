export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  impact: string;
  stack: string[];
  architecture: string[];
  features: string[];
  visual: "vibrant" | "medical" | "api" | "concrebox" | "newsflow" | "agent";
  featured?: boolean;
  privateProject?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export const links = {
  email: "mailto:dh746925@gmail.com",
  github: "https://github.com/dhc0510",
  linkedin: "https://www.linkedin.com/in/diegoherrerachaves",
  resume: "/Diego-Herrera-Chaves-Resume.pdf",
};

export const metrics = [
  {
    value: "3+",
    label: "Full-stack applications",
    detail: "Built and deployed",
  },
  {
    value: "1K+",
    label: "Business records",
    detail: "Reliably managed",
  },
  {
    value: "AI",
    label: "Assisted platforms",
    detail: "Human-controlled workflows",
  },
  {
    value: "VPS",
    label: "Production deployments",
    detail: "Docker, Linux & Nginx",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    description: "Reliable application logic and secure service layers.",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "MVC Architecture",
    ],
  },
  {
    title: "Frontend",
    description: "Responsive, maintainable interfaces for web products.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Web Design",
    ],
  },
  {
    title: "Data",
    description: "Relational modeling for operational business systems.",
    skills: ["MySQL", "SQL Server", "SQLite", "MariaDB", "SQL", "Relational Database Design"],
  },
  {
    title: "Infrastructure",
    description: "From source control to stable production deployments.",
    skills: ["Docker", "Linux", "Nginx", "Git", "GitHub", "Maven", "npm", "Vercel", "Flyway", "Railway"],
  },
  {
    title: "Quality",
    description: "Clean architecture with testable, reusable code.",
    skills: ["JUnit", "API Testing", "Debugging"],
  },
  {
    title: "AI Development & Methodologies",
    description: "Specification-driven development and multi-agent workflows.",
    skills: ["Obsidian", "Specification-Driven Development (SDD)", "OpenCode", "Multi-agent Workflows", "Herdr"],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Inventory SaaS System",
    category: "Multi-tenant inventory and product management",
    summary:
      "A comprehensive SaaS platform for multiple companies to manage product inventory, stock control, and administrative workflows.",
    problem:
      "Multiple companies needed a scalable solution to manage products, inventory levels, stock control, and administrative operations across different tenants.",
    impact:
      "Built a multi-tenant architecture with Spring Boot and React, enabling companies to manage their entire product lifecycle from a single platform.",
    stack: ["Java Spring Boot", "React", "TypeScript", "Vite", "MySQL", "Docker", "Git"],
    architecture: [
      "Multi-tenant Spring Boot",
      "React frontend",
      "MySQL database",
      "Docker containerization",
    ],
    features: [
      "Product management",
      "Stock control",
      "Multi-tenant isolation",
      "Admin workflows",
      "Relational database design",
    ],
    visual: "vibrant",
    featured: true,
    privateProject: true,
  },
  {
    number: "02",
    title: "Medical Appointment SaaS",
    category: "Full-stack healthcare application",
    summary:
      "A reusable SaaS platform for medical offices to manage appointment scheduling, patient records, and administrative workflows.",
    problem:
      "Medical offices needed a dedicated system for scheduling appointments, managing patient information, and automating administrative tasks.",
    impact:
      "Delivered a responsive platform with Spring Boot backend, React frontend, authentication, and database-driven patient management.",
    stack: ["Java Spring Boot", "React", "TypeScript", "Vite", "MySQL", "Docker", "Git"],
    architecture: ["Spring Boot REST API", "React client", "MySQL", "Authentication layer"],
    features: [
      "Appointment scheduling",
      "Patient management",
      "Secure authentication",
      "Admin workflows",
      "Responsive interface",
    ],
    visual: "medical",
    privateProject: true,
  },
  {
    number: "03",
    title: "API Integration Platform",
    category: "Backend and integration engineering",
    summary:
      "A backend platform for consuming third-party APIs, handling authentication, error responses, and normalizing API outputs.",
    problem:
      "External services introduce inconsistent payloads, authentication challenges, and error handling complexity.",
    impact:
      "Designed a predictable integration layer that handles authentication, error responses, JSON parsing, and normalized API outputs.",
    stack: ["Spring Boot", "REST APIs", "JSON", "Authentication", "Error Handling"],
    architecture: [
      "External API consumption",
      "Integration service layer",
      "Error handling",
      "Response normalization",
    ],
    features: [
      "Third-party API consumption",
      "Authentication handling",
      "Error response management",
      "JSON parsing",
      "Normalized outputs",
    ],
    visual: "api",
  },
  {
    number: "04",
    title: "Vibrant Supplements Store",
    category: "Full-stack commerce application",
    summary:
      "A complete e-commerce platform for a gym supplements store, combining storefront experience with inventory and sales administration.",
    problem:
      "The store needed to sell products online while managing product catalog, inventory, payments, and purchasing workflows.",
    impact:
      "Built and deployed a full-featured e-commerce application with product catalog, shopping cart, and admin workflows on a Linux VPS.",
    stack: ["Java 17", "Maven", "JSF 2.3", "PrimeFaces 12", "MariaDB", "Linux VPS"],
    architecture: [
      "JSF + PrimeFaces",
      "Java EE services",
      "MariaDB database",
      "Linux VPS deployment",
    ],
    features: [
      "Product catalog",
      "Shopping cart functionality",
      "Inventory management",
      "Admin workflows",
      "Production VPS deployment",
    ],
    visual: "vibrant",
    privateProject: true,
  },
  {
    number: "05",
    title: "Concrebox Landing Page",
    category: "Next.js business landing page",
    summary:
      "A conversion-focused landing page for a modular housing company, presenting service offerings and driving qualified lead generation.",
    problem:
      "Potential clients needed a clear understanding of modular housing models, benefits, process, and investment options.",
    impact:
      "Delivered a responsive product narrative explaining benefits, models, process, and investment while directing leads to sales conversations.",
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    architecture: [
      "Next.js framework",
      "React components",
      "Responsive design",
      "Custom domain deployment",
    ],
    features: [
      "Service presentation",
      "Lead generation focus",
      "Responsive design",
      "Conversion optimization",
      "Mobile-friendly layout",
    ],
    visual: "concrebox",
    liveUrl: "https://concreboxpty.com/",
    githubUrl: "https://github.com/dhc0510/concrebox",
  },
  {
    number: "06",
    title: "NCR NewsFlow IA",
    category: "AI-assisted editorial operations platform",
    summary:
      "A private newsroom platform for NCR Noticias Costa Rica that supports article creation, source verification, editorial review, publishing workflows, and analytics with AI assistance.",
    problem:
      "Editorial teams need to move quickly while preserving human control over verification, review, publishing decisions, permissions, and source traceability.",
    impact:
      "Built a structured Spring Boot and React foundation for newsroom operations, including authentication, editorial workflows, source intelligence, recommendations, publishing, and analytics modules.",
    stack: ["Java 17", "Spring Boot", "React", "TypeScript", "Vite", "MySQL", "Flyway", "Docker"],
    architecture: [
      "Spring Boot REST API",
      "React + Vite frontend",
      "MySQL + Flyway migrations",
      "Docker Compose environment",
    ],
    features: [
      "AI-assisted news drafting",
      "Source verification pipeline",
      "Editorial review workflow",
      "Publishing hub",
      "Analytics and admin console",
    ],
    visual: "newsflow",
    privateProject: true,
  },
];

export const experience = [
  {
    period: "Oct 2024 — Present",
    role: "Freelance Full-Stack Software Developer",
    company: "Self-employed",
    summary:
      "Developing business applications from requirements through production deployment.",
    highlights: [
      "Built and deployed 3+ full-stack applications with Spring Boot, React and MySQL.",
      "Implemented relational data models, RBAC authentication, inventory, sales and reporting modules.",
      "Deployed production workloads with Docker, Linux VPS, Nginx and SSL.",
      "Translated operational needs into focused technical solutions.",
    ],
  },
  {
    period: "Dec 2023 — May 2025",
    role: "IT Systems Developer",
    company: "Herrera Arias Medical Office & Concrebox_PTY",
    summary:
      "Designed internal systems that made everyday administration faster and more dependable.",
    highlights: [
      "Developed management systems for appointment scheduling and inventory control.",
      "Automated administrative workflows for everyday business operations.",
      "Structured databases supporting more than 1,000 business records.",
    ],
  },
];
