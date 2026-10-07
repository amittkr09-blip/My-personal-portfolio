/**
 * Projects Data
 * Easy to edit, add, or replace project information
 */
export const projectsData = [
  {
    id: "movie-web-app",
    number: "01",
    title: "Movie & Entertainment App",
    category: "Web Application",
    description:
      "A responsive movie discovery interface with search, filtering, dynamic content and interactive UI.",
    longDescription:
      "Engineered with React.js and Tailwind CSS, this entertainment application connects to REST APIs to deliver instant search, genre-based browsing, detailed movie modals, and bookmarking functionality with fluid transitions.",
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Responsive UI",
    ],
    liveUrl: "https://github.com/amitt", // Replace with live URL if hosted
    githubUrl: "https://github.com/amitt",
    featured: true,
    year: "2025",
    themeColor: "#D35433",
    metrics: "Instant Debounced Search • API Integrated",
    highlights: [
      "Dynamic movie search with debounced input",
      "Categorized sliders for trending, top-rated, and genres",
      "Interactive modal with trailer previews and cast info",
      "Responsive layout optimized across all screen sizes",
    ],
  },
  {
    id: "employee-dashboard",
    number: "02",
    title: "Employee Management Dashboard",
    category: "Internal Tool / Dashboard",
    description:
      "A responsive dashboard interface for managing employees, tasks and application state.",
    longDescription:
      "A structured administrative dashboard that allows management teams to assign tasks, monitor team statuses, track ongoing deliverables, and persist employee profiles seamlessly via LocalStorage.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "LocalStorage",
      "State Management",
    ],
    liveUrl: "https://github.com/amitt",
    githubUrl: "https://github.com/amitt",
    featured: true,
    year: "2025",
    themeColor: "#2F5D62",
    metrics: "LocalStorage Sync • Role-Based Views",
    highlights: [
      "CRUD operations for employee records and assignments",
      "State persistence with robust LocalStorage synchronization",
      "Filterable task statuses: Completed, In Progress, Failed",
      "Clean visual indicators and responsive tables",
    ],
  },
  {
    id: "ecommerce-frontend",
    number: "03",
    title: "Modern E-Commerce Experience",
    category: "E-Commerce Platform",
    description:
      "A modern e-commerce frontend featuring product browsing, search, filtering, cart and wishlist functionality.",
    longDescription:
      "A high-conversion storefront interface built with modern React patterns. Features multi-attribute filtering, instant cart management with price calculations, persistent wishlist, and an effortless checkout simulation.",
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "LocalStorage",
      "UI Architecture",
    ],
    liveUrl: "https://github.com/amitt",
    githubUrl: "https://github.com/amitt",
    featured: true,
    year: "2025",
    themeColor: "#8D5B4C",
    metrics: "Cart State • Multi-faceted Filter",
    highlights: [
      "Real-time cart and quantity recalculations",
      "Multi-criteria filtering by category, price, and ratings",
      "Persistent user wishlist across sessions",
      "Accessible interactive modal for quick item preview",
    ],
  },
];

export const personalInfo = {
  name: "Amit",
  role: "Frontend Developer",
  shortRole: "Frontend Dev",
  status:
    "BCA student building real-world frontend projects & preparing for software engineering opportunities.",
  education: {
    degree: "BCA",
    institution: "Amity University Online",
    duration: "2026 — Present",
  },
  location: "India",
  availability: "Open to internships & freelance opportunities",
  bioShort:
    "Hi, I'm Amit — a BCA student and frontend developer focused on building responsive, interactive and user-friendly web experiences.",
  bioParagraphs: [
    "I work with React and Tailwind CSS on the frontend and Node.js, Express and MongoDB on the backend. I enjoy building complete web applications, from the interface to the database, with a focus on clean code and good user experience.",
    "My stack revolves around React and Tailwind CSS on the frontend, with Node.js, Express and MongoDB on the backend. I'm always improving my problem-solving skills..",
  ],
  links: {
    github: "https://github.com/amittkr09-blip",
    linkedin: "https://www.linkedin.com/in/amit-kumar-781b85311/",
    email: "mailto:amittkr09@gmail.com",
    emailAddress: "amittkr09@gmail.com",
  },
  timeline: [
    {
      period: "2026 — Present",
      title: "BCA",
      organization: "Amity University Online",
      description:
        "Pursuing Bachelor of Computer Applications with a focus on computer science fundamentals and software engineering.",
    },
    {
      period: "2025 — Present",
      title: "Full Stack Development",
      organization: "React, Node.js, MongoDB",
      description:
        "Building responsive web applications with React and Tailwind CSS, backed by REST APIs and databases using Node.js, Express and MongoDB.",
    },
    {
      period: "2025 — Present",
      title: "DSA & Problem Solving",
      organization: "Java",
      description:
        "Practicing data structures and algorithmic problem solving in Java to strengthen core computational thinking.",
    },
  ],
  skills: {
    frontend: [
      { name: "HTML", highlight: true },
      { name: "CSS", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "React.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "React Hooks", highlight: true },
      { name: "Redux", highlight: false },
      { name: "Zustand", highlight: false },
    ],
    tools: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code", highlight: false },
      { name: "Postman", highlight: false },
      { name: "Chrome DevTools", highlight: true },
      { name: "Vite", highlight: true },
    ],
    backendKnowledge: [
      { name: "Node.js", highlight: false },
      { name: "Express.js", highlight: false },
      { name: "MongoDB", highlight: false },
      { name: "Mongoose", highlight: false },
      { name: "REST APIs", highlight: true },
    ],
    other: [
      { name: "Responsive Design", highlight: true },
      { name: "API Integration", highlight: true },
      { name: "Authentication", highlight: false },
      { name: "Debugging", highlight: false },
      { name: "OOP Basics", highlight: false },
      { name: "DSA in Java", highlight: true },
    ],
  },
};
