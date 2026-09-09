export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, performant, and accessible digital interfaces with modern React and clean JavaScript.",
    skills: [
      { name: "React", level: "Advanced", primary: true },
      { name: "JavaScript (ES6+)", level: "Advanced", primary: true },
      { name: "Responsive Design", level: "Advanced", primary: true },
      { name: "HTML5 & Semantic UI", level: "Advanced", primary: true },
      { name: "CSS3 & Tailwind CSS", level: "Advanced", primary: true },
      { name: "UI/UX & Component Architecture", level: "Proficient", primary: true },
      { name: "Web Accessibility (a11y)", level: "Proficient", primary: false },
      { name: "Vite & Modern Tooling", level: "Proficient", primary: false },
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Designing scalable REST APIs, real-time WebSocket conduits, and secure backend microservices.",
    skills: [
      { name: "Python", level: "Advanced", primary: true },
      { name: "FastAPI", level: "Advanced", primary: true },
      { name: "RESTful API Design", level: "Advanced", primary: true },
      { name: "WebSockets & Event Streams", level: "Proficient", primary: true },
      { name: "JWT & Authentication", level: "Proficient", primary: true },
      { name: "Microservices Architecture", level: "Proficient", primary: false },
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Structuring reliable document schemas, relational datasets, and indexing strategies.",
    skills: [
      { name: "MongoDB", level: "Advanced", primary: true },
      { name: "PostgreSQL", level: "Proficient", primary: true },
      { name: "SQL & Query Optimization", level: "Proficient", primary: true },
      { name: "Redis Caching", level: "Familiar", primary: false },
    ]
  },
  {
    id: "tools",
    title: "DevOps & Tooling",
    description: "Version control, automated pipelines, Linux server administration, and containerization.",
    skills: [
      { name: "Git & Version Control", level: "Advanced", primary: true },
      { name: "GitHub & CI Workflows", level: "Advanced", primary: true },
      { name: "Docker & Containerization", level: "Proficient", primary: true },
      { name: "Linux & Bash Shell", level: "Proficient", primary: true },
      { name: "Postman & API Testing", level: "Proficient", primary: false },
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Automation (Secondary)",
    description: "Exploring local model integration, automated pipelines, and intelligent developer tooling.",
    skills: [
      { name: "Python Scripting & Automation", level: "Advanced", primary: true },
      { name: "Local AI & Ollama", level: "Proficient", primary: true },
      { name: "ComfyUI Workflow Design", level: "Proficient", primary: true },
      { name: "AI Agent Orchestration", level: "Proficient", primary: false },
      { name: "Machine Learning Foundations", level: "Familiar", primary: false },
    ]
  }
];

