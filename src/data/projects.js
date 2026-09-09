export const projects = [
  {
    id: "smart-queue",
    slug: "smart-queue-management",
    title: "Smart Queue Management System",
    subtitle: "Real-time digital queue management platform with WebSocket synchronization",
    description: "A production-grade, real-time digital queue platform streamlining service distribution, live wait times, and queue management with sub-100ms WebSocket updates.",
    featured: true,
    category: "Full-Stack System",
    technologies: ["React", "FastAPI", "MongoDB", "WebSockets", "JWT", "Tailwind CSS"],
    github: "https://github.com/udaydev/smart-queue",
    demo: "https://queue.uday.dev",
    stats: {
      latency: "<100ms sync",
      uptime: "99.9%",
      scalability: "10k+ concurrent tokens"
    },
    overview: "Built to eliminate physical bottlenecks and waiting congestion, Smart Queue connects customer-facing live display terminals with real-time operator kiosks through persistent WebSocket channels.",
    problem: "Traditional queue systems suffer from latency, desynchronized displays across service counters, and heavy polling overhead that degrades backend performance.",
    solution: "Engineered an asynchronous architecture using FastAPI and WebSockets backed by MongoDB change streams, featuring a reactive React client and secure JWT counter authentication.",
    architecture: [
      "React SPA client with optimistic UI updates and reconnection handlers",
      "FastAPI asynchronous event broker managing live counter sessions",
      "MongoDB distributed datastore with TTL queue states and audit logs",
      "Token-based counter authorization with role segregation"
    ],
    challenges: [
      "Handling network drops gracefully with seamless state rehydration",
      "Maintaining ordered FIFO ticket resolution across concurrent teller windows"
    ],
    results: "Achieved instantaneous multi-counter sync with zero display drift and 70% reduction in server load compared to legacy polling models."
  },
  {
    id: "dev-analytics-hub",
    slug: "dev-analytics-hub",
    title: "Developer Metrics & Telemetry Hub",
    subtitle: "High-performance dashboard for API performance and CI/CD metrics",
    description: "Interactive observability dashboard delivering real-time telemetry, error tracking, and visual API health monitors with instant query filters.",
    featured: true,
    category: "Frontend & APIs",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Chart.js"],
    github: "https://github.com/udaydev/dev-metrics-hub",
    demo: "https://telemetry.uday.dev",
    stats: {
      render: "60 FPS graphs",
      responseTime: "Instant filtering",
      dataPoints: "50k+ rendered smoothly"
    },
    overview: "A lightweight, modular developer telemetry console that consumes high-frequency logs and turns them into digestible performance graphs and alert timelines.",
    problem: "Existing enterprise observability suites are overly complex, bloated, and slow to load for rapid daily engineering triage.",
    solution: "Designed a clean, keyboard-friendly interface with virtualized tables, instant search, and customizable metric widgets.",
    architecture: [
      "Modular React dashboard widgets with custom hook-based state management",
      "Client-side caching layer minimizing redundant API calls",
      "Accessible color palette optimized for high-contrast triage"
    ],
    challenges: [
      "Rendering dense data sets without freezing the main browser thread"
    ],
    results: "Reduced triage time for API errors by 40% with an ultra-responsive interface under 45kb gzipped."
  },
  {
    id: "automata-workflow-engine",
    slug: "automata-workflow-engine",
    title: "Automata Workflow Orchestrator",
    subtitle: "Visual node-based pipeline builder for webhook events and data tasks",
    description: "Interactive visual workflow builder enabling developers to chain APIs, scheduled tasks, and automated scripts through an intuitive canvas interface.",
    featured: true,
    category: "Full-Stack & Automation",
    technologies: ["React", "JavaScript", "Python", "FastAPI", "Docker"],
    github: "https://github.com/udaydev/automata-engine",
    demo: "https://automata.uday.dev",
    stats: {
      execution: "Parallel workers",
      integrations: "20+ endpoints",
      format: "JSON pipeline schema"
    },
    overview: "Automata gives engineers an interactive canvas to construct, inspect, and test background automation pipelines without touching boilerplate code.",
    problem: "Setting up repetitive cron jobs, API syncs, and data extraction pipelines often leads to fragmented scripts that are hard to audit.",
    solution: "Created a unified DAG-based execution engine with visual status indicators, retry policies, and execution history.",
    architecture: [
      "Interactive SVG/DOM node graph with drag-and-drop wiring",
      "FastAPI task execution pipeline with async worker queuing",
      "Containerized sandbox for script execution and safety"
    ],
    challenges: [
      "Detecting circular dependencies and validating pipeline schema at edit-time"
    ],
    results: "Enabled rapid prototyping of automated workflows with real-time execution logs and instant error highlighting."
  }
];

