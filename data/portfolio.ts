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
  visual: "vibrant" | "medical" | "api" | "monarca" | "concrebox";
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
    value: "40%",
    label: "Less manual work",
    detail: "Through automation",
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
      "JWT",
      "RBAC",
      "MVC",
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
    ],
  },
  {
    title: "Data",
    description: "Relational modeling for operational business systems.",
    skills: ["MySQL", "SQL Server", "SQLite", "Database Design"],
  },
  {
    title: "Infrastructure",
    description: "From source control to stable production deployments.",
    skills: ["Docker", "Linux", "Nginx", "Git", "Maven", "npm"],
  },
  {
    title: "Quality",
    description: "Clean architecture with testable, reusable code.",
    skills: ["JUnit", "API Testing", "Responsive QA"],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Vibrant Commerce Platform",
    category: "Full-stack commerce and inventory system",
    summary:
      "A complete online store for a fitness boutique, combining the customer shopping experience with inventory and commercial administration.",
    problem:
      "Vibrant needed one system to sell products online while keeping its catalog, categories, inventory, payments and purchasing workflows organized.",
    impact:
      "Connected the storefront and internal operations in a server-rendered Java application packaged as a WAR and deployed on a VPS.",
    stack: [
      "Java 17",
      "Maven",
      "Java EE / Jakarta EE",
      "JSF 2.3",
      "PrimeFaces 12",
      "XHTML",
      "CDI / Weld",
      "Servlet API",
      "MariaDB",
      "WAR",
    ],
    architecture: [
      "JSF + PrimeFaces",
      "CDI / Weld",
      "Java EE services",
      "MariaDB",
      "WAR on VPS",
    ],
    features: [
      "Product catalog",
      "Shopping cart",
      "Inventory management",
      "Categories and filters",
      "Payment workflows",
      "Store administration",
    ],
    visual: "vibrant",
    featured: true,
    privateProject: true,
  },
  {
    number: "02",
    title: "Medical Appointment System",
    category: "Full-stack healthcare application",
    summary:
      "A full-stack appointment and administrative platform designed around the daily workflow of a medical office.",
    problem:
      "Appointment coordination and administrative tracking depended on repetitive, disconnected manual processes.",
    impact:
      "Centralized scheduling and operational records through a responsive React interface and a structured Spring Boot backend.",
    stack: ["React", "TypeScript", "Spring Boot", "MySQL", "REST APIs"],
    architecture: ["React client", "REST API", "Spring Boot", "MySQL"],
    features: [
      "Appointment scheduling",
      "Secure authentication",
      "Administrative dashboard",
      "Relational data model",
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
      "A backend-focused platform for consuming external APIs, processing JSON responses and exposing reliable application data.",
    problem:
      "External services can introduce inconsistent payloads, authentication requirements, latency and recoverable failures.",
    impact:
      "Designed a predictable integration layer that separates API communication, validation, error handling and data processing.",
    stack: ["Spring Boot", "REST APIs", "JSON", "Authentication"],
    architecture: [
      "External APIs",
      "Integration service",
      "Data processing",
      "Application layer",
    ],
    features: [
      "API consumption",
      "Authentication handling",
      "Error handling",
      "JSON processing",
      "Response normalization",
    ],
    visual: "api",
  },
  {
    number: "04",
    title: "Monarca Swimwear",
    category: "Vanilla frontend landing page",
    summary:
      "A polished landing page for a Costa Rican swimwear brand inspired by the ocean, tropical freedom and natural elegance.",
    problem:
      "Monarca needed a premium digital presence that communicates its identity and guides visitors toward its collections and catalog.",
    impact:
      "Delivered a responsive, lightweight brand experience with focused storytelling and clear paths to the external shop.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    architecture: [
      "Semantic HTML",
      "Responsive CSS",
      "Vanilla JavaScript",
      "Static deployment",
    ],
    features: [
      "Collection showcase",
      "Brand storytelling",
      "Responsive design",
      "Catalog calls to action",
      "FAQ section",
    ],
    visual: "monarca",
    liveUrl: "https://monarca-alpha.vercel.app/",
    githubUrl: "https://github.com/dhc0510/monarca",
  },
  {
    number: "05",
    title: "Concrebox",
    category: "Next.js business landing page",
    summary:
      "A conversion-focused landing page for a Panamanian company that designs and manufactures customized modular homes.",
    problem:
      "Potential clients needed a clear way to understand the modular housing offer, compare models and start a sales conversation.",
    impact:
      "Created a responsive product narrative that explains benefits, models, process and investment while directing qualified leads to WhatsApp.",
    stack: ["Next.js", "React", "Responsive CSS", "Vercel"],
    architecture: [
      "Next.js",
      "React components",
      "Responsive UI",
      "Vercel deployment",
    ],
    features: [
      "Modular home models",
      "Benefits and process",
      "Investment information",
      "FAQ section",
      "WhatsApp conversion flow",
    ],
    visual: "concrebox",
    liveUrl: "https://concrebox.vercel.app/",
    githubUrl: "https://github.com/dhc0510/concrebox",
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
      "Automated workflows that reduced manual administrative tasks by 40%.",
      "Structured databases supporting more than 1,000 business records.",
    ],
  },
];
