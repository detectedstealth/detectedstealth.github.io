export interface CareerItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  category: 'python' | 'mobile' | 'automation' | 'systems' | 'author';
  description: string;
  highlights: string[];
  techStack: string[];
  impactMetric?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  architectureDetails: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  status: 'Production' | 'Shipped' | 'Active R&D' | 'Published';
  link?: string;
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  badgeType: 'unreal' | 'systems' | 'data' | 'hardware' | 'cloud' | 'ai';
}

export const PROFILE_DATA = {
  name: "Bruce Wade",
  title: "Principal Systems & Software Engineer • Python • Mobile Architecture • Automation",
  headline: "Architecting Scalable Python Backends, Native Mobile Systems & Production Automation Pipelines",
  location: "Vancouver, British Columbia, Canada",
  email: "hello@brucewade.dev",
  linkedin: "https://www.linkedin.com/in/brucelwade",
  warplyUrl: "https://warplydesigned.com",
  status: "Available for Principal Systems, Backend & Mobile Architecture Roles",
  timezone: "America/Vancouver",
  
  bio: [
    "Over 15+ years architecting high-throughput backend systems, mission-critical mobile applications, and resilient end-to-end automation pipelines across enterprise and startup environments.",
    "Specialized in Python distributed microservices (Django, FastAPI, Celery/RabbitMQ, achieving 85% relational query optimization), native Apple platform architecture (author of 12 published Apress Swift books & Salesforce Field Service Mobile), and production CI/CD orchestration with GitHub Actions, Jenkins, and Fastlane.",
    "Equally adept in low-level C++ systems, OpenTelemetry observability (Loki, Tempo, Prometheus, Grafana), Agentic AI workflow orchestration, and high-fidelity simulation engineering (Unreal Engine & NVIDIA Isaac Sim)."
  ],

  stats: [
    { label: "Years Engineering Complex Systems", value: "15+" },
    { label: "Technical Books Authored / Reviewed", value: "12" },
    { label: "Database Query Reduction Achieved", value: "85%" },
    { label: "Core Pillars", value: "Python • Mobile • Auto • Sim" },
  ],

  pillars: [
    {
      title: "High-Throughput Python & Distributed Systems",
      subtitle: "Django, FastAPI, Async Queues & 85% Query Optimization",
      description: "Architecting high-concurrency microservices, distributed worker task queues (Celery/RabbitMQ), PostgreSQL query optimization (85% reduction), web scrapers (Scrapy), and OpenTelemetry observability.",
      icon: "Server",
      accentColor: "#00f5a0",
    },
    {
      title: "Native Mobile & Apple Platform Architecture",
      subtitle: "Swift, SwiftUI, Objective-C, Kotlin & 12 Apress Books",
      description: "Engineering enterprise iOS systems (Salesforce Field Service), cross-platform architectures (Dibiup Swift/Kotlin), automated App Store release pipelines (Fastlane), and authoring 12 technical Swift publications.",
      icon: "Smartphone",
      accentColor: "#00d2ff",
    },
    {
      title: "End-to-End Automation, CI/CD & Agentic AI",
      subtitle: "GitHub Actions, Jenkins, Fastlane, Docker, K8s & LLM Agents",
      description: "Automating multi-stage build matrices, containerized deployments (Docker/K8s), headless ingestion pipelines, desktop automation launchers (C#/Python), and structured Agentic AI workflow tooling.",
      icon: "GitBranch",
      accentColor: "#a855f7",
    },
    {
      title: "Low-Level Systems, Engine & Simulation Tooling",
      subtitle: "Modern C++, Unreal Engine, OpenUSD & Isaac Sim",
      description: "Developing dual-window C++ simulation viewports, headless VR tracker telemetry, proprietary console platform SDK adaptations, and NVIDIA Isaac Sim / OpenUSD CAD automated ingestion pipelines.",
      icon: "Cpu",
      accentColor: "#f59e0b",
    }
  ],

  experience: [
    {
      id: "warply",
      role: "Founder & Principal Systems Consultant",
      company: "Warply Designed Inc.",
      period: "Sep 2012 - Present",
      location: "British Columbia, Canada",
      category: "automation",
      description: "Directing high-stakes technical consulting across Python backends, CI/CD automation, mobile architecture, and simulation systems.",
      highlights: [
        "Architected high-throughput backend services using Django and FastAPI with Redis and Celery distributed queues.",
        "Engineered end-to-end automation pipelines, web scrapers (Scrapy), and custom desktop deployment launchers (C#/Python).",
        "Led specialized simulation and systems engagements spanning Unreal Engine C++, NVIDIA Kit/Isaac Sim, and OpenUSD.",
        "Passed the official Unreal Technical Art Exam on behalf of a key client to secure their Unreal Service Partner designation."
      ],
      techStack: ["Python", "FastAPI", "Django", "Celery", "CI/CD", "Docker", "Unreal Engine", "C++", "SwiftUI"],
      impactMetric: "14+ Years of Enterprise Consulting & Systems Delivery"
    },
    {
      id: "theory-studios",
      role: "Pipeline & Tools Developer (Simulation & USD)",
      company: "Theory Studios",
      period: "Mar 2025 - Aug 2026",
      location: "Remote",
      category: "systems",
      description: "Spearheaded production pipelines, automated simulation workflows, and console SDK integrations for enterprise simulation and interactive graphics.",
      highlights: [
        "USD & CAD Automation: Developed internal tooling in Isaac Sim & NVIDIA Kit automating CAD asset conversion into USD/glTF formats, streamlining multi-gigabyte dataset ingestion.",
        "Dual-Window Unreal Simulation: Served as lead engineer & sole C++ developer on a multi-window simulation system with touch-screen interaction, headless VR tracker input, and real-time coverage calculations.",
        "Deployment Automation: Built a C# launcher application automating environment setup, hardware initialization, and VR tracker configuration for zero-friction client deployments.",
        "Proprietary Console SDK Integration: Brought interactive simulation workflows to proprietary console platforms via low-level SDKs and investigated next-gen hardware migration paths."
      ],
      techStack: ["OpenUSD", "glTF", "Unreal Engine (VR/Console)", "Isaac Sim", "NVIDIA Kit", "C++", "Python", "C#", "Perforce", "Blender"],
      impactMetric: "Sole C++ Lead on Dual-Window Unreal Sim"
    },
    {
      id: "cg-pro",
      role: "Teaching Assistant - Unreal for Filmmakers",
      company: "CG Pro (Connectors Program 24)",
      period: "Aug 2024 - Oct 2024",
      location: "Remote",
      category: "systems",
      description: "Mentored technical artists and directors on virtual production, ICVFX stage operations, and real-time Unreal Engine cinematics.",
      highlights: [
        "Guided industry professionals through real-time camera tracking, nDisplay setup, and virtual stage workflows.",
        "Troubleshooted complex shader, lighting, and performance bottlenecks on virtual production stages."
      ],
      techStack: ["Unreal Engine 5", "ICVFX", "Virtual Production", "nDisplay", "Live Link"],
      impactMetric: "Top Tier Virtual Production Training"
    },
    {
      id: "salesforce",
      role: "Release Engineer III (Mobile & Tools)",
      company: "Salesforce",
      period: "May 2021 - Jan 2023",
      location: "Vancouver - Remote",
      category: "mobile",
      description: "Core tooling and stability engineer for the mission-critical Field Service Mobile iOS Application.",
      highlights: [
        "Diagnosed and patched complex bugs in the Field Service Mobile iOS codebase across Swift, Objective-C, C++, and JavaScript.",
        "Enhanced cross-functional developer tooling and CI/CD pipelines, reducing release friction across multi-national engineering squads.",
        "Constructed custom automation utilizing Salesforce Flow, LWC (Lightning Web Components), and SOQL."
      ],
      techStack: ["Swift", "Objective-C", "C++", "JavaScript", "Salesforce Flow", "LWC", "SOQL", "CI/CD", "Fastlane"],
      impactMetric: "Enterprise Mobile Infrastructure for Global Scale"
    },
    {
      id: "apress",
      role: "Technical Reviewer & Author",
      company: "Apress (Springer Nature)",
      period: "Oct 2014 - Jun 2020",
      location: "Remote",
      category: "author",
      description: "Authored and technically reviewed 12 Swift and macOS/iOS engineering books distributed globally.",
      highlights: [
        "Authored 'OS X App Development with CloudKit and Swift', establishing authoritative architectural patterns for Apple ecosystem developers.",
        "Technically reviewed industry-standard books including 'Swift 5 For Absolute Beginners' and 'Beginning iPhone Development with Swift 4'.",
        "Ensured rigorous code accuracy, idiomatic patterns, and memory safety practices across dozens of published volumes."
      ],
      techStack: ["Swift", "macOS", "iOS", "CloudKit", "Xcode", "Technical Writing", "Architecture Design"],
      impactMetric: "12 Published Books & Industry Guides"
    },
    {
      id: "dibiup",
      role: "Head of Development (Consultant)",
      company: "Dibiup",
      period: "Mar 2019 - Apr 2020",
      location: "Los Angeles, CA (Remote Vancouver)",
      category: "mobile",
      description: "Directed mobile and server architecture spanning Swift iOS, Kotlin Android, and Django backend services.",
      highlights: [
        "Engineered native iOS app in Swift/SwiftUI and Android in Kotlin with shared API specifications.",
        "Orchestrated full CI/CD deployment pipelines to App Store and Google Play using Fastlane and Docker.",
        "Architected scalable Django REST APIs backed by PostgreSQL with real-time push notifications."
      ],
      techStack: ["Swift", "SwiftUI", "Kotlin", "Django", "PostgreSQL", "Docker", "Fastlane", "CI/CD"],
      impactMetric: "End-to-End Mobile & Cloud Architecture"
    },
    {
      id: "recruitology",
      role: "Senior Software Engineer (Consultant)",
      company: "Recruitology U.S.",
      period: "Jan 2017 - Feb 2019",
      location: "San Francisco Bay Area - Remote",
      category: "python",
      description: "High-performance backend and ML pipeline engineering for large-scale recruitment distribution networks.",
      highlights: [
        "Engineered an innovative UI versioning engine for job listings that reduced Django ORM query load by 85%.",
        "Integrated heterogeneous 3rd-party candidate resume databases into a unified, high-speed query interface.",
        "Automated candidate matching pipelines with RabbitMQ, Celery, and custom in-house Machine Learning models."
      ],
      techStack: ["Django", "Python", "RabbitMQ", "Celery", "PostgreSQL", "Machine Learning", "Docker", "GCP"],
      impactMetric: "85% Database ORM Query Reduction"
    },
    {
      id: "venturelab",
      role: "Senior Software Engineer (Consultant)",
      company: "ventureLab Growth Partners",
      period: "Oct 2015 - Sep 2017",
      location: "San Francisco Bay Area - Remote",
      category: "python",
      description: "Engineered fintech and proptech platforms including PropertyHedge and 8Spaces booking platforms.",
      highlights: [
        "Engineered PropertyHedge using Django, Angular, and AWS to enable mortgage-free residential investments.",
        "Solely created the 8Spaces iOS and web applications for flexible on-demand office workspace booking.",
        "Implemented high-throughput Adcoin ad-serving APIs and low-latency snippet generation engines."
      ],
      techStack: ["Python", "Django", "Swift iOS", "Angular", "AWS", "REST APIs", "PostgreSQL"],
      impactMetric: "Shipped Scaled Fintech & Proptech Platforms"
    },
    {
      id: "youadworld",
      role: "Technical Manager & Lead Python Developer",
      company: "YouAdWorld",
      period: "Aug 2011 - Aug 2012",
      location: "Burnaby, BC",
      category: "python",
      description: "Managed infrastructure, defeated critical DDoS attacks, and led core platform architecture.",
      highlights: [
        "Successfully mitigated a massive distributed DDoS attack in December 2011, restoring 100% service uptime.",
        "Trained legacy PHP/Java developers in modern Python and Pyramid web frameworks.",
        "Architected database replication and local staging environments for rapid continuous integration."
      ],
      techStack: ["Python", "Pyramid", "High-Availability Infrastructure", "DDoS Mitigation", "PostgreSQL"],
      impactMetric: "100% DDoS Mitigation & Team Upskilling"
    },
    {
      id: "early-systems",
      role: "Systems & Graphics Programmer",
      company: "Chipkin Automation / Game Dev Freelance",
      period: "Jan 2008 - Aug 2011",
      location: "Vancouver, BC",
      category: "systems",
      description: "Foundational low-level systems programming in C/C++, Win32 APIs, DirectX 9, OpenGL, and automation tools.",
      highlights: [
        "Developed shader frameworks in C++ and MFC with OpenGL pixel drawing and geometry scripting.",
        "Built 2D game side-scrollers in Win32 API with custom C# tile editors, and 3D DirectX 9 interactive games.",
        "Constructed automated website generation utilities in C# and automation tools in C/C++."
      ],
      techStack: ["C++", "C", "DirectX 9", "OpenGL", "Win32 API", "C#", "Shader Programming", "Panda3D"],
      impactMetric: "Low-Level Shaders & Engine Foundations"
    }
  ] as CareerItem[],

  projects: [
    {
      id: "recruitology-ml-orm",
      title: "Recruitology Query Engine & ML Task Pipeline",
      category: "Python & Distributed Systems",
      tagline: "High-throughput distributed candidate matching with 85% relational query reduction",
      description: "Engineered a custom UI versioning and query optimization architecture for job distribution networks, drastically reducing relational database overhead while running automated candidate scoring through RabbitMQ and Celery ML workers.",
      architectureDetails: [
        "Devised a structural query caching and batching architecture cutting Django ORM load by 85%.",
        "Built distributed worker consumers on Celery and RabbitMQ for asynchronous ML model inferences.",
        "Integrated heterogeneous third-party candidate resume APIs into normalized schemas.",
        "Instrumented service telemetry, database pooling, and asynchronous failure recovery."
      ],
      metrics: [
        { label: "ORM Load Reduction", value: "85% Fewer Queries" },
        { label: "Queue Infrastructure", value: "Celery + RabbitMQ" },
        { label: "Scale", value: "Millions of Records" }
      ],
      tags: ["Python", "Django", "Celery", "RabbitMQ", "PostgreSQL", "Machine Learning", "Docker", "GCP"],
      status: "Shipped",
      featured: true
    },
    {
      id: "enterprise-mobile-books",
      title: "Native Mobile Systems & 12x Swift Books",
      category: "Mobile Architecture & Apple Platforms",
      tagline: "Enterprise iOS architecture (Salesforce / Dibiup) and 12 published Apple platform volumes",
      description: "Authored 'OS X App Development with CloudKit and Swift' and reviewed 11 technical books for Apress (Springer Nature), coupled with leading enterprise iOS mobile development for Salesforce Field Service and Dibiup cross-platform mobile apps.",
      architectureDetails: [
        "Authored 'OS X App Development with CloudKit and Swift' detailing asynchronous cloud syncing patterns.",
        "Reviewed 11 industry-standard books spanning Swift, Objective-C, and iOS architectural paradigms.",
        "Diagnosed and resolved critical performance issues in Salesforce Field Service Mobile iOS.",
        "Orchestrated Fastlane automated signing, TestFlight, and Google Play multi-track release pipelines."
      ],
      metrics: [
        { label: "Published Books", value: "12 Apress Volumes" },
        { label: "Mobile Scope", value: "Enterprise Scale iOS/Android" },
        { label: "Automation", value: "Fastlane & CI/CD" }
      ],
      tags: ["Swift", "SwiftUI", "Objective-C", "Kotlin", "CloudKit", "Fastlane", "CI/CD", "Apress"],
      status: "Published",
      featured: true
    },
    {
      id: "warply-custom-tools",
      title: "Warply Designed Automation & Studio Systems",
      category: "Automation, CI/CD & Observability",
      tagline: "Bespoke studio pipeline automation, Scrapy bots, CI/CD pipelines, and cloud backends",
      description: "Created customized Python automation scripts, Scrapy web scrapers, Blender headless plugins, FastAPI services, and C# desktop deployment launchers that streamlined asset generation and deployment across multi-studio teams.",
      architectureDetails: [
        "Automated asset processing pipelines with Python and Blender headless scripts.",
        "Configured robust GitHub Actions and Jenkins CI/CD deployment pipelines.",
        "Built resilient web scrapers and data ingestion bots using Scrapy and asyncio.",
        "Implemented high-reliability client microservices with FastAPI and Django."
      ],
      metrics: [
        { label: "Client Impact", value: "Multi-Studio Acceleration" },
        { label: "Tooling Core", value: "Python / FastAPI / CI/CD" },
        { label: "Automation Scope", value: "100% Headless Batch Ingestion" }
      ],
      tags: ["Python", "FastAPI", "Scrapy", "GitHub Actions", "Jenkins", "Docker", "Blender Plugins"],
      status: "Production",
      featured: true
    },
    {
      id: "dual-window-unreal",
      title: "Dual-Window Unreal Simulation Engine",
      category: "Low-Level Systems & C++",
      tagline: "Coordinated touch-screen UI & headless VR tracking simulation architecture",
      description: "Architected a dual-window C++ Unreal Engine application synchronizing a physical touch-screen dashboard with a real-time 3D simulation window, featuring headless 6DoF hardware tracker ingestion, real-time material coating simulation, and sub-millisecond state replication.",
      architectureDetails: [
        "Sole C++ developer responsible for multi-viewport orchestration and thread-safe IPC state syncing.",
        "Implemented headless VR tracker integration receiving hardware telemetry without requiring full HMD rendering overhead.",
        "Engineered real-time geometric coverage and material coating algorithmic calculations.",
        "Built companion C# launcher with automated hardware telemetry diagnostics and one-click environment bootstrap."
      ],
      metrics: [
        { label: "Rendering Architecture", value: "Dual Coordinated Viewports" },
        { label: "Input Telemetry", value: "Headless 6DoF Trackers" },
        { label: "Core Language", value: "C++ / Unreal Engine" }
      ],
      tags: ["Unreal Engine", "C++", "Simulation", "VR Trackers", "Multi-Window", "C#"],
      status: "Production",
      featured: true
    },
    {
      id: "isaac-sim-pipeline",
      title: "NVIDIA Isaac Sim Synthetic Data & Robotics QA",
      category: "Simulation & Physical AI",
      tagline: "High-fidelity synthetic scenario generation & automated CAD-to-USD ingestion",
      description: "Designed automated pipeline tooling within Isaac Sim and NVIDIA Kit to ingest large enterprise CAD assemblies, sanitize hierarchy semantics, generate deterministic OpenUSD assets, and construct domain-randomized synthetic data for training and evaluating autonomous robotic perception systems.",
      architectureDetails: [
        "Automated batch CAD conversion into OpenUSD and glTF with metadata preservation.",
        "Constructed custom NVIDIA Kit extensions for dataset validation and physics schema conformance.",
        "Implemented domain randomization pipelines (lighting, material perturbation, camera sensor noise) for physical AI training.",
        "Pioneered scenario-generation paradigms for rigorous edge-case robotics validation."
      ],
      metrics: [
        { label: "Pipeline Scale", value: "Multi-GB Engineering CAD Assets" },
        { label: "Standard", value: "OpenUSD & NVIDIA Omniverse" },
        { label: "Domain", value: "Physical AI & Robotics QA" }
      ],
      tags: ["Isaac Sim", "NVIDIA Kit", "OpenUSD", "glTF", "Python", "Robotics QA", "Synthetic Data"],
      status: "Production",
      featured: false
    },
    {
      id: "console-sdk-integration",
      title: "Proprietary Console SDK & Platform Porting",
      category: "Low-Level & Platforms",
      tagline: "Hardware-constrained engine adaptation and low-level SDK optimization",
      description: "Adapted interactive simulation and game experiences onto proprietary console platforms, navigating low-level platform APIs, memory constraints, and specialized hardware pipelines with custom build and deployment automation.",
      architectureDetails: [
        "Interfaced with native platform SDK tooling and non-public runtime constraints.",
        "Profiled frame-budget allocations, draw-call batches, and memory footprint across restricted hardware.",
        "Formulated migration pathways for porting heavy simulation workloads onto next-generation architectures."
      ],
      metrics: [
        { label: "Target", value: "Proprietary Console Platforms" },
        { label: "Tooling", value: "Custom SDK & Perforce CI" },
        { label: "Performance", value: "Locked Frame Budgets" }
      ],
      tags: ["Console Dev", "C++", "Platform SDKs", "Optimization", "Perforce"],
      status: "Production",
      featured: false
    }
  ] as ProjectItem[],

  skills: {
    pythonAndAi: [
      { name: "Python (Async, FastAPI, Django, Scrapy)", level: 98 },
      { name: "Celery & RabbitMQ Task Pipelines", level: 94 },
      { name: "PostgreSQL & Database Query Optimization (85% reduction)", level: 95 },
      { name: "Agentic AI Workflows & LLM Tool Calling", level: 92 },
      { name: "RESTful APIs & Microservice Architecture", level: 95 },
      { name: "Machine Learning & Ingestion Pipelines", level: 88 },
    ],
    mobileAndApple: [
      { name: "Swift & SwiftUI (iOS / macOS)", level: 96 },
      { name: "Objective-C & Native iOS Internals", level: 90 },
      { name: "Kotlin (Android Development)", level: 86 },
      { name: "CloudKit & Mobile Data Synchronization", level: 92 },
      { name: "Mobile Release Automation (Fastlane)", level: 94 },
      { name: "Enterprise Mobile Architecture (Salesforce)", level: 90 },
    ],
    automationAndDevops: [
      { name: "CI/CD & Pipeline Orchestration (GitHub Actions, Jenkins)", level: 95 },
      { name: "Observability (OpenTelemetry, Loki, Tempo, Prometheus, Grafana)", level: 92 },
      { name: "Docker, Kubernetes & Containerization", level: 90 },
      { name: "Custom CLI Tools & Desktop Launchers (C# / Python)", level: 94 },
      { name: "Web Scraping & Real-Time Ingestion (Scrapy)", level: 92 },
      { name: "Perforce & Git Branching Workflows", level: 95 },
    ],
    systemsAndEngines: [
      { name: "Modern C++ (C++17/20, Win32, Systems)", level: 94 },
      { name: "Unreal Engine (C++ / Blueprints / ICVFX)", level: 95 },
      { name: "NVIDIA Isaac Sim & OpenUSD", level: 92 },
      { name: "Dual-Window & Multi-Viewport Rendering", level: 94 },
      { name: "Shader Programming (DirectX / OpenGL)", level: 86 },
      { name: "Console Platform SDKs & Hardware Ingestion", level: 88 },
    ]
  },

  certifications: [
    {
      name: "OpenTelemetry in Practice: The Complete Observability Course",
      issuer: "LM Academy",
      badgeType: "data"
    },
    {
      name: "AI Coding & Agentic Systems Development",
      issuer: "Ed Donner / Udemy",
      badgeType: "ai"
    },
    {
      name: "Helix Core and Unreal Engine in Virtual Production",
      issuer: "Perforce Software",
      badgeType: "unreal"
    },
    {
      name: "Unreal Engine ICVFX for Tech Artists (and Broadcast)",
      issuer: "CG Pro",
      badgeType: "unreal"
    },
    {
      name: "Unreal Engine Game Development Program",
      issuer: "Vertex School",
      badgeType: "unreal"
    },
    {
      name: "Unreal Engine For Filmmakers Connectors Program",
      issuer: "CG Pro",
      badgeType: "unreal"
    },
    {
      name: "The Complete SQL Bootcamp 2022: Go from Zero to Hero",
      issuer: "Udemy / Global Certification",
      badgeType: "data"
    },
    {
      name: "Indian Motorcycle Public Level 2 - Maintenance",
      issuer: "Indian Motorcycle Academy",
      badgeType: "hardware"
    },
    {
      name: "Indian Motorcycle Public Level 1 - Systems Basics",
      issuer: "Indian Motorcycle Academy",
      badgeType: "hardware"
    }
  ] as Certification[],

  education: [
    {
      school: "CG Pro",
      degree: "Unreal Engine ICVFX & Virtual Production Connectors",
      year: "2024",
      focus: "In-Camera VFX, Stage Operations & Real-Time Production"
    },
    {
      school: "Vertex School",
      degree: "Unreal Engine Game Development Program",
      year: "2023",
      focus: "Advanced C++ Engine Architecture & Real-Time Graphics"
    },
    {
      school: "The Art Institute of Vancouver",
      degree: "VGP (Visual & Game Programming)",
      year: "2008 - 2009",
      focus: "3D Math, Shaders, C++, OpenGL, DirectX & Game Engines"
    },
    {
      school: "DeVry Institute of Technology",
      degree: "BS in Computer Information Systems (CIS)",
      year: "2002 - 2005",
      focus: "Systems Architecture, Networking, Database Design & Software Engineering"
    }
  ]
};
