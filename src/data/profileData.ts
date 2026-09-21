export interface CareerItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  category: 'simulation' | 'engine' | 'enterprise' | 'author';
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
  badgeType: 'unreal' | 'systems' | 'data' | 'hardware';
}

export const PROFILE_DATA = {
  name: "Bruce Wade",
  title: "Systems Engineer • Simulation & Tools • Founder",
  headline: "Engineering Determinism for Physical AI, Robotics QA & High-Performance Engines",
  location: "Vancouver, British Columbia, Canada",
  email: "bruce.wade@gmail.com",
  linkedin: "https://www.linkedin.com/in/brucelwade",
  warplyUrl: "https://warplydesigned.com",
  status: "Available for High-Impact Advisory & Systems Engineering Roles",
  timezone: "America/Vancouver",
  
  bio: [
    "I’ve always gravitated toward complex systems — simulation, engine internals, tooling, compilers, and the technical spaces where clarity, determinism, and rigorous architecture matter most.",
    "Recently, my work has focused on robotics synthetic data generation and Physical AI through consulting engagements requiring rapid ramp-up in NVIDIA Isaac Sim and the OpenUSD ecosystem. That revealed a massive industry bottleneck: how autonomous systems validate edge-case behaviors and achieve high-confidence deployment.",
    "Whether architecting pipeline automation, building dual-window C++ Unreal rendering systems, or authoring 12 technical books, my methodology is grounded in deep understanding, low-level precision, and tools that drive measurable outcomes."
  ],

  stats: [
    { label: "Years Engineering Complex Systems", value: "15+" },
    { label: "Technical Books Authored / Reviewed", value: "12" },
    { label: "Database Query Reduction Achieved", value: "85%" },
    { label: "Core Focus", value: "Physical AI & Simulation" },
  ],

  pillars: [
    {
      title: "Physical AI & Robotics Simulation",
      subtitle: "Deterministic Synthetic Data & Scenario Generation",
      description: "Building production pipelines in NVIDIA Isaac Sim and NVIDIA Kit. Automating CAD-to-USD conversion, domain randomization, and high-fidelity sensor simulation for autonomous systems QA.",
      icon: "Cpu",
      accentColor: "#00f5a0",
    },
    {
      title: "Game Engine Internals & C++",
      subtitle: "Unreal Engine, Multi-Window & Hardware SDKs",
      description: "Engineering dual-window coordinated Unreal simulation systems, headless VR tracker input, real-time material calculations, shader pipelines (DirectX/OpenGL/C++), and proprietary console SDK integration.",
      icon: "Layers",
      accentColor: "#00d2ff",
    },
    {
      title: "OpenUSD & Pipeline Automation",
      subtitle: "High-Throughput Ingestion & Asset Tooling",
      description: "Developing automated ingestion, validation, and transformation tools for massive engineering datasets across OpenUSD, glTF, Blender custom plugins, and Perforce pipelines.",
      icon: "GitBranch",
      accentColor: "#a855f7",
    },
    {
      title: "Scalable Enterprise & Cloud Infrastructure",
      subtitle: "High-Concurrence Python, Django & Fast Tooling",
      description: "Architecting backend systems, automated distributed task queues (Celery/RabbitMQ), C# desktop deployment automation launchers, and cloud microservices designed for 99.9% uptime.",
      icon: "Server",
      accentColor: "#f59e0b",
    }
  ],

  experience: [
    {
      id: "warply",
      role: "Founder & President",
      company: "Warply Designed Inc.",
      period: "Sep 2012 - Present",
      location: "British Columbia, Canada",
      category: "simulation",
      description: "Directing high-stakes technical consulting across Unreal Engine, Python simulation tooling, Physical AI automation, and cloud microservices.",
      highlights: [
        "Led specialized consulting engagements spanning Unreal Engine, NVIDIA Kit/Isaac Sim, C++, Python, and SwiftUI.",
        "Engineered custom pipeline tools and automated verification harnesses that maximized client team throughput.",
        "Architected high-throughput backend services using Django and FastAPI for low-latency scalability.",
        "Passed the official Unreal Technical Art Exam on behalf of a key client to secure their Unreal Service Partner designation."
      ],
      techStack: ["Unreal Engine", "Isaac Sim", "OpenUSD", "Python", "C++", "FastAPI", "Django", "SwiftUI"],
      impactMetric: "14+ Years of Technical Excellence"
    },
    {
      id: "theory-studios",
      role: "Pipeline & Tools Developer (Simulation & USD)",
      company: "Theory Studios",
      period: "Mar 2025 - Aug 2026",
      location: "Remote",
      category: "simulation",
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
      category: "engine",
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
      role: "Release Engineer III (Tools)",
      company: "Salesforce",
      period: "May 2021 - Jan 2023",
      location: "Vancouver - Remote",
      category: "enterprise",
      description: "Core tooling and stability engineer for the mission-critical Field Service Mobile iOS Application.",
      highlights: [
        "Diagnosed and patched complex bugs in the Field Service Mobile iOS codebase across C++, Objective-C, Swift, and JavaScript.",
        "Enhanced cross-functional developer tooling, reducing release friction across multi-national engineering squads.",
        "Constructed custom automation utilizing Salesforce Flow, LWC (Lightning Web Components), and SOQL."
      ],
      techStack: ["C++", "Objective-C", "Swift", "JavaScript", "Salesforce Flow", "LWC", "SOQL", "CI/CD"],
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
      category: "enterprise",
      description: "Directed mobile and server architecture spanning Swift iOS, Kotlin Android, and Django backend services.",
      highlights: [
        "Engineered native iOS app in Swift/SwiftUI and orchestrated full CI/CD deployment pipelines to App Store and Google Play.",
        "Collaborated directly with executive leadership on core product roadmaps and technical scalability milestones."
      ],
      techStack: ["Swift", "SwiftUI", "Kotlin", "Django", "PostgreSQL", "Docker", "Fastlane"],
      impactMetric: "End-to-End Mobile & Cloud Architecture"
    },
    {
      id: "recruitology",
      role: "Senior Software Engineer (Consultant)",
      company: "Recruitology U.S.",
      period: "Jan 2017 - Feb 2019",
      location: "San Francisco Bay Area - Remote",
      category: "enterprise",
      description: "High-performance backend and ML pipeline engineering for large-scale recruitment distribution networks.",
      highlights: [
        "Engineered an innovative UI versioning engine for job listings that reduced Django ORM query load by 85%.",
        "Integrated heterogeneous 3rd-party candidate resume databases into a unified, high-speed query interface.",
        "Automated candidate matching pipelines with RabbitMQ, Celery, and custom in-house Machine Learning models."
      ],
      techStack: ["Django", "Python", "RabbitMQ", "Celery", "Machine Learning", "Docker", "GCP", "PostgreSQL"],
      impactMetric: "85% Database ORM Query Reduction"
    },
    {
      id: "venturelab",
      role: "Senior Software Engineer (Consultant)",
      company: "ventureLab Growth Partners",
      period: "Oct 2015 - Sep 2017",
      location: "San Francisco Bay Area - Remote",
      category: "enterprise",
      description: "Engineered fintech and proptech platforms including PropertyHedge and 8Spaces booking platforms.",
      highlights: [
        "Engineered PropertyHedge using Angular, AWS, and Django to enable mortgage-free residential investments.",
        "Solely created the 8Spaces iOS and web applications for flexible on-demand office workspace booking.",
        "Implemented high-throughput Adcoin ad-serving APIs and low-latency snippet generation engines."
      ],
      techStack: ["Angular", "Django", "Swift iOS", "AWS", "REST APIs"],
      impactMetric: "Shipped Scaled Fintech & Proptech Platforms"
    },
    {
      id: "youadworld",
      role: "Technical Manager & Lead Python Developer",
      company: "YouAdWorld",
      period: "Aug 2011 - Aug 2012",
      location: "Burnaby, BC",
      category: "enterprise",
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
      category: "engine",
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
      id: "dual-window-unreal",
      title: "Dual-Window Unreal Simulation Engine",
      category: "Simulation & C++",
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
      category: "Robotics & Physical AI",
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
      featured: true
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
      featured: true
    },
    {
      id: "apress-books",
      title: "12x Swift & Cloud Architecture Books",
      category: "Publications & Architecture",
      tagline: "Author of 'OS X App Development with CloudKit' and technical reviewer for 11 books",
      description: "Authored and technically reviewed 12 published books for Apress (Springer Nature), establishing standard design patterns for Apple platforms, CloudKit data replication, and modern Swift development.",
      architectureDetails: [
        "Authored 'OS X App Development with CloudKit and Swift' detailing asynchronous cloud syncing patterns.",
        "Reviewed 11 books spanning beginner to advanced Swift, Objective-C, and iOS architectural paradigms.",
        "Standardized sample code repositories for millions of developers worldwide."
      ],
      metrics: [
        { label: "Total Books", value: "12 Published Volumes" },
        { label: "Publisher", value: "Apress / Springer Nature" },
        { label: "Global Readership", value: "Tens of Thousands" }
      ],
      tags: ["Swift", "CloudKit", "macOS", "iOS", "Apress", "Books"],
      status: "Published",
      featured: true
    },
    {
      id: "recruitology-ml-orm",
      title: "Recruitology Query Engine & ML Pipeline",
      category: "Enterprise Cloud & ML",
      tagline: "High-throughput distributed candidate matching with 85% query reduction",
      description: "Engineered a custom UI versioning and query optimization layer for job distribution networks, drastically reducing relational database overhead while running automated candidate scoring through RabbitMQ and Celery ML workers.",
      architectureDetails: [
        "Devised a structural query caching and batching architecture cutting ORM load by 85%.",
        "Built distributed worker consumers on Celery and RabbitMQ for asynchronous ML model inferences.",
        "Integrated heterogeneous third-party candidate resume APIs into normalized schemas."
      ],
      metrics: [
        { label: "ORM Load Reduction", value: "85% Fewer Queries" },
        { label: "Queue Infrastructure", value: "Celery + RabbitMQ" },
        { label: "Scale", value: "Millions of Job Posts" }
      ],
      tags: ["Django", "Python", "Celery", "RabbitMQ", "Machine Learning", "Docker"],
      status: "Shipped",
      featured: false
    },
    {
      id: "warply-custom-tools",
      title: "Warply Designed Automation & Studio Systems",
      category: "Tools & Consulting",
      tagline: "Bespoke studio pipeline automation, plugins, and cloud backends",
      description: "Created customized Python automation scripts, Blender plugins, FastAPI services, and desktop launchers that streamlined content generation and engineering workflows across diverse client teams.",
      architectureDetails: [
        "Automated asset processing pipelines with Python and Blender headless scripts.",
        "Configured robust CI/CD and deployment scripts for Unreal Engine projects.",
        "Implemented high-reliability client microservices with FastAPI and Django."
      ],
      metrics: [
        { label: "Client Impact", value: "Multi-Studio Acceleration" },
        { label: "Tooling Core", value: "Python / FastAPI / C++" }
      ],
      tags: ["Python", "FastAPI", "Blender Plugins", "Automation", "CI/CD"],
      status: "Production",
      featured: false
    }
  ] as ProjectItem[],

  skills: {
    simulationAndRobotics: [
      { name: "NVIDIA Isaac Sim", level: 95 },
      { name: "OpenUSD (Universal Scene Description)", level: 92 },
      { name: "glTF & CAD Ingestion", level: 90 },
      { name: "Synthetic Data Generation", level: 94 },
      { name: "Robotics QA & Scenario Generation", level: 90 },
      { name: "NVIDIA Kit Applications", level: 88 },
    ],
    engineAndGraphics: [
      { name: "Unreal Engine (C++ / Blueprints)", level: 96 },
      { name: "Virtual Production & ICVFX", level: 88 },
      { name: "Dual-Window & Multi-Viewport Rendering", level: 95 },
      { name: "Shader Programming (DirectX / OpenGL)", level: 85 },
      { name: "Proprietary Console SDKs", level: 86 },
      { name: "VR & Hardware Tracker Ingestion", level: 90 },
    ],
    languagesAndTools: [
      { name: "C++ (Modern C++17/20)", level: 94 },
      { name: "Python (Async, FastAPI, Scrapy, ML)", level: 98 },
      { name: "Swift & SwiftUI", level: 92 },
      { name: "C# / .NET Tools", level: 88 },
      { name: "Perforce & Git", level: 95 },
      { name: "Docker & Linux Systems", level: 90 },
    ],
    enterpriseAndCloud: [
      { name: "Django & REST Framework", level: 96 },
      { name: "PostgreSQL & Database Optimization", level: 92 },
      { name: "Celery & RabbitMQ Task Pipelines", level: 90 },
      { name: "AWS & Google Cloud Platform", level: 86 },
      { name: "CI/CD & Deployment Automation", level: 92 },
      { name: "Salesforce Flow & LWC", level: 82 },
    ]
  },

  certifications: [
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
