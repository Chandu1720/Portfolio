export const personalInfo = {
  name: "Chandu Kampasati",
  formalName: "Kampasati Chandu",
  role: "Frontend Developer / Consultant with Product & Business Analysis Experience",
  supportingRoles: [
    "Consultant",
    "React & TypeScript",
    "UI Development",
    "Workflow & Requirement Analysis"
  ],
  currentCompany: "AFORV Private Limited",
  currentRole: "Consultant",
  location: "Bengaluru, India",
  status: "Available for Frontend & Consulting Roles",
  shortIntro: "I work across the gap between business requirements and frontend implementation — understanding requirements, designing workflows, documenting functionality, and building responsive React applications that follow real business processes.",
  aboutParagraphs: [
    "My background started in Electronics and Communication Engineering (ECE) at Usha Rama College of Engineering and Technology, where I built strong analytical foundations. Over time, I transitioned into software development with a dedicated focus on building responsive web interfaces and business applications.",
    "Currently working as a Consultant at AFORV Private Limited in Bengaluru, I specialize in React.js, TypeScript, and modern frontend architecture. Beyond developing UI screens, my work actively involves understanding business logic, translating stakeholder requirements into functional specifications, and designing end-to-end workflows before writing code.",
    "I believe great frontend engineering lies at the intersection of clean code and deep domain understanding: validating business rules, handling complex asynchronous states, and delivering intuitive tools that simplify daily operations."
  ],
  contacts: {
    email: "chandukampasati.1@gmail.com",
    phone: "+91 89190 33989",
    location: "Bengaluru, India",
    linkedin: "https://linkedin.com/in/chandu-kampasati",
    github: "https://github.com/Chandu1720"
  },
  languagesSpoken: ["English", "Hindi", "Telugu"]
};

export const videoIntro = {
  // Option A: Local video file in the 'public' folder
  // Option B: Paste a YouTube / Loom embed URL, e.g. "https://www.youtube.com/embed/YOUR_ID"
  videoUrl: "/chandu.mp4",
  // duration: "1:15 min",
  title: "Introduction • Chandu Kampasati",
  subtitle: "Consultant & Frontend Developer"
};

export const productAnalysisData = {
  sectionTagline: "Bridging Business Logic & Technical Implementation",
  summary: "I don't simply implement what is visible on the screen; I understand the product requirements and business logic behind the application. Before writing frontend code, I help clarify business processes, model data flows, define validation rules, and document functional behavior.",
  
  collaborationFlow: [
    { step: "01", name: "Requirement", desc: "Understand business needs & interview stakeholders" },
    { step: "02", name: "Workflow", desc: "Map user actions, system triggers & dependencies" },
    { step: "03", name: "Documentation", desc: "Document functional specs, validation & business rules" },
    { step: "04", name: "UI Design", desc: "Build responsive, accessible React components" },
    { step: "05", name: "API Integration", desc: "Connect UI to RESTful endpoints with error states" },
    { step: "06", name: "Validation", desc: "Enforce domain constraints & client-side checks" },
    { step: "07", name: "Testing", desc: "Verify edge cases, async states & role views" },
    { step: "08", name: "Refinement", desc: "Address user feedback & eliminate workflow friction" }
  ],

  capabilities: {
    requirementGathering: {
      title: "Requirement Gathering",
      points: [
        "Understand business requirements from stakeholders, operational teams, and clients",
        "Convert open-ended discussions and business needs into clear, structured functional requirements",
        "Proactively identify missing information, undocumented scenarios, and boundary edge cases",
        "Clarify expected system behavior with cross-functional peers prior to frontend implementation",
        "Break down large, ambiguous requirements into bite-sized, deliverable feature increments",
        "Map dependencies across interconnected modules to prevent breaking changes"
      ]
    },
    workflowDesign: {
      title: "Workflow Design",
      description: "Designing end-to-end business workflows before writing code, detailing user actions, system actions, status transitions, approvals, exceptions, and cross-module data flow.",
      pipelines: [
        {
          title: "Procurement & Inwarding",
          flow: "Purchase Order → Receiving → Quality Control → Warehouse Approval → Inventory",
          note: "Enforces batch tracking, HSN verification, and partial backorder reconciliation."
        },
        {
          title: "Surgical Case Fulfillment",
          flow: "Case Booking → Inventory Arrangement → Field Shipment → Return / Adjustment",
          note: "Coordinates sterile surgical kits and unconsumed implant turnaround."
        },
        {
          title: "Doctor BD Settlement",
          flow: "Case Closure → BD Charges → BD Tracker Record → Payment Settlement",
          note: "Ensures ledger records persist even when customer payment cycles are asynchronous."
        },
        {
          title: "Advance Payment Reconciliation",
          flow: "Advance Payment → Doctor Allocation → Settlement Offset → Payment History",
          note: "Prevents duplicate balance deductions and ensures auditable financial trails."
        },
        {
          title: "Private Theatre Slot Booking (SkyLite)",
          flow: "Occasion/Hall Select → Slot Hold Timer → Add-on Packages → UPI Deposit / UTR → Staff Verification → iCal Export",
          note: "Enforces temporary slot-locking to prevent concurrent double-booking and validates 12-digit UTR references."
        }
      ]
    },
    functionalDocumentation: {
      title: "Functional Documentation",
      description: "Experience preparing clear, comprehensive documentation that aligns developers, QA, and business stakeholders:",
      documentTypes: [
        "Feature & Functional Requirements (FRDs)",
        "Module Scope & Responsibility Boundaries",
        "Business Workflows & Swimlane Diagrams",
        "Operational Process Documentation",
        "Client & Server-Side Validation Rules",
        "Business Rules & Constraint Matrices",
        "End-to-End User Flow Walkthroughs",
        "Change Requests & Scope Delta Tracking",
        "Technical Bug Descriptions & Reproduction Steps",
        "Enhancement Specifications & Backlog Items",
        "Backend Requirement Notes (Payloads & Contracts)",
        "User Story Acceptance Criteria (Gherkin/Checklists)"
      ]
    },
    businessRuleAnalysis: {
      title: "Business Rule Analysis",
      description: "Thinking deeply about system behavior beyond the visual layout. Here are real-world architectural questions I analyze and resolve:",
      scenarios: [
        {
          question: "What happens when payment is received before BD charges?",
          answer: "The case ledger holds customer receipts in escrow while keeping BD accrual open until case closure, preventing orphaned financial entries."
        },
        {
          question: "What happens when a quantity is partially received?",
          answer: "The system creates a split GRN (Goods Receipt Note), flags the balance as a backorder line, and prevents premature PO closure."
        },
        {
          question: "What happens when QC inspection fails?",
          answer: "Items are diverted to a quarantine virtual bin, defect photos are mandated, and vendor replacement or debit note workflows are initiated."
        },
        {
          question: "What happens when an entity branch changes?",
          answer: "Active transactions remain anchored to their origin branch for audit compliance, while future requisitions re-route to the newly assigned branch."
        },
        {
          question: "Which users should see specific branch or department records?",
          answer: "Role-based access control (RBAC) tokens filter data server-side and dynamically adapt UI navigation, action buttons, and query parameters."
        },
        {
          question: "How should document numbers behave across branches?",
          answer: "Prefixed sequence format (e.g., PO-BLR-2026-001) avoids collision across concurrent multi-location database writes."
        },
        {
          question: "What happens when required master data is missing?",
          answer: "Dynamic forms halt submission with actionable guidance to create prerequisite master records (e.g., HSN code or Doctor profile) in modal sub-flows."
        },
        {
          question: "How should advance payments affect settlements?",
          answer: "The settlement engine automatically calculates net payable by offsetting eligible unallocated advances against gross charges."
        }
      ]
    }
  },

  requirementToFeatureCaseStudy: {
    title: "Requirement-to-Feature Case Study",
    subtitle: "How a real-world business nuance was analyzed and transformed into a dependable software feature",
    steps: [
      {
        badge: "01. Business Requirement",
        heading: "Stakeholder Need",
        detail: "In surgical medical distribution, business development (BD) payments may need to be recorded before the customer or hospital settles their final invoice.",
        highlight: "BD payment may be entered before customer payment collection."
      },
      {
        badge: "02. Requirement Analysis",
        heading: "Logical Decoupling",
        detail: "The operational reality is asynchronous: hospital billing cycles take 30-90 days, but doctor coordination requires immediate accounting. The BD payment trigger must therefore be decoupled from the customer's payment collection status.",
        highlight: "Decouple BD record creation from customer accounts-receivable milestone."
      },
      {
        badge: "03. Workflow Modeling",
        heading: "Event Pipeline",
        detail: "Case Completion → Trigger Case Closure Event → Check / Prompt for BD Payment Entry → Generate Immutable BD Tracker Record → Stage for Settlement.",
        highlight: "Case Closure → BD Payment → BD Tracker Record → Settlement."
      },
      {
        badge: "04. Business Rule Definition",
        heading: "System Constraint",
        detail: "A BD tracking record must be generated when the case closure process is triggered, irrespective of whether the customer invoice is marked Paid, Partial, or Unpaid.",
        highlight: "Guaranteed record generation upon closure trigger."
      },
      {
        badge: "05. Frontend & System Implementation",
        heading: "End-to-End Delivery",
        detail: "Built React UI with dynamic case closure wizard, client-side validation alerting operators of unlinked BD fees, background API contract updates, and dedicated tracker dashboard visibility.",
        highlight: "React workflow wizard + validation checks + real-time status tracker."
      }
    ]
  }
};

export const skillsData = {
  languages: [
    { name: "JavaScript (ES6+)", level: "Core", note: "Modern syntax, async/await, closures" },
    { name: "TypeScript", level: "Production", note: "Type-safe interfaces, generics, reducing runtime bugs" },
    { name: "C (Fundamentals)", level: "Foundational", note: "Low-level memory & pointers" },
    { name: "C++ (Fundamentals)", level: "Foundational", note: "OOP principles & data structures" }
  ],
  frontend: [
    { name: "React.js (React 18)", level: "Core", note: "Functional components, custom hooks, context" },
    { name: "Redux", level: "Proficient", note: "Predictable centralized state management" },
    { name: "HTML5 & CSS3", level: "Core", note: "Semantic structure & responsive layouts" },
    { name: "Tailwind CSS", level: "Daily", note: "Modern utility styling & design systems" },
    { name: "Bootstrap", level: "Proficient", note: "Rapid responsive grid & component layouts" },
    { name: "React Router", level: "Core", note: "Client-side routing & route protection" },
    { name: "Axios", level: "Core", note: "RESTful HTTP communication & interceptors" }
  ],
  productAndAnalysis: [
    { name: "Requirement Gathering", note: "Stakeholder discussion to functional requirements" },
    { name: "Workflow Modeling", note: "Mapping user/system states before coding" },
    { name: "Functional Documentation", note: "Validation rules, user flows, acceptance criteria" },
    { name: "Business Rule Analysis", note: "Edge cases, partial actions, branch segregation" },
    { name: "Dynamic Data Grids", note: "Search, multi-filter, column controls, pagination" },
    { name: "Client-Side Export", note: "jsPDF, SheetJS (XLSX) formatted reports" }
  ],
  databaseAndTools: [
    { name: "MongoDB", note: "Document schemas, CRUD queries, backend data sync" },
    { name: "Git & GitHub", note: "Branching, PRs, code reviews, version control" },
    { name: "Jira", note: "Agile/Scrum sprint planning & ticket tracking" },
    { name: "Agile / Scrum", note: "Daily standups, sprint reviews & iterative delivery" }
  ]
};

export const projectsData = [
  {
    id: "skylite-theatre",
    title: "SkyLite Private Theatre | Booking & Celebrations",
    period: "Live Production Platform",
    role: "Frontend & Product Developer",
    tagline: "Luxury private theatre booking platform with real-time slot reservation, celebration add-ons, dynamic UPI QR engine, and administrative verification portal",
    liveClientUrl: "https://sky-lite-client.vercel.app/",
    liveAdminUrl: "https://sky-lite-client.vercel.app/admin",
    techStack: ["React 18", "Tailwind CSS", "Framer Motion", "Lucide React", "REST APIs", "Dynamic UPI QR Engine", "iCal (.ics)", "Vercel"],
    overview: "A comprehensive private luxury theatre reservation and event management system deployed live on Vercel. Features an intuitive 5-step customer booking flow with real-time slot locking, custom celebration packages (cakes, floral decor, neon themes), a dynamic UPI QR code generator for advance deposits, automated iCal calendar exports, and an administrative control panel for slot scheduling, UTR verification, and revenue management.",
    highlights: [
      "Engineered an interactive 5-step reservation pipeline with date picker, hall selection, occasion themes, and real-time slot availability.",
      "Implemented a temporary slot-hold countdown timer to prevent double-booking race conditions during active customer checkouts.",
      "Developed an online UPI payment engine generating dynamic QR codes, deep-linked UPI intent URIs (GPay, PhonePe, Paytm), and 12-digit UTR reference submissions with screenshot upload.",
      "Built an operational Admin Portal (/admin) for venue managers to verify UTR payments, confirm/cancel bookings, control slot schedules, and customize packages.",
      "Integrated real-time Booking Status Lookup allowing customers to query their reservation by Reference ID and mobile number.",
      "Automated calendar event creation generating downloadable .ics files and deep-linked WhatsApp concierge communications."
    ],
    modules: [
      "5-Step Customer Booking Engine",
      "Real-time Slot Locking & Countdown Timer",
      "Occasions & Thematic Decoration Packages",
      "Dynamic UPI QR & Intent Payment Gateway",
      "12-Digit UTR Verification & Receipt Upload",
      "Admin Dashboard & Slot Control (/admin)",
      "Live Booking Status Lookup (Ref + Phone)",
      "Downloadable .ics iCalendar Invitation",
      "WhatsApp Concierge Automation"
    ],
    workflowSteps: [
      { step: "01", name: "Occasion & Hall Selection", desc: "Choose celebration theme (Birthday, Anniversary, Romantic Date, Proposal) and acoustic lounge capacity." },
      { step: "02", name: "Live Slot Reservation", desc: "Real-time 30-day interactive calendar with temporary hold timer and cleaning buffer periods." },
      { step: "03", name: "Celebration Add-ons", desc: "Custom cakes, flower bouquets, neon lighting, photo sparklers, and gourmet snacks." },
      { step: "04", name: "UPI QR & UTR Payment", desc: "Dynamic UPI QR generation for advance/full payment with transaction reference submission." },
      { step: "05", name: "Confirmation & Calendar Export", desc: "Live status tracker, downloadable .ics calendar invite, and WhatsApp handshake." }
    ]
  },
  {
    id: "vinflux-dms",
    title: "Distribution Management System (DMS / Vinflux)",
    period: "Enterprise Medical ERP",
    role: "Frontend Developer (UI & Business Workflows)",
    tagline: "Custom enterprise web application for medical implant distribution, surgery tracking, and sales analytics",
    techStack: ["React 18", "TypeScript", "JavaScript", "REST APIs", "Git", "Tailwind CSS", "Axios"],
    overview: "Contributed to a production web application for a medical implant distributor. The platform coordinates surgery tracking, inventory dispatch, sales operations, and operational analytics used daily by internal teams, doctors, and coordinators.",
    highlights: [
      "Contributed to a custom web application for a medical implant distributor, supporting Surgery Tracking, Sales, and Analytics modules used by internal teams.",
      "Built type-safe, responsive UIs with React functional components and TypeScript, reducing runtime errors by ~30% and improving overall code reliability.",
      "Integrated RESTful APIs to fetch and manage operational and analytics data, enabling faster data visibility and smoother workflows.",
      "Applied React Hooks and strong typing patterns to improve code maintainability and scalability, accelerating team collaboration and feature development.",
      "Designed and documented multi-stage workflows including Procurement Inwarding (PO → Receiving → QC → Approval → Stock) and BD Doctor Settlements."
    ],
    modules: [
      "Surgery Tracking & Implant Allocation",
      "Sales Management & Purchase Invoicing",
      "Analytics & Operational Dashboards",
      "Procurement & Quality Control (QC)",
      "Warehouse Approval & Inventory Ledger",
      "BD Payment Tracker & Doctor Settlements"
    ],
    // The requested "From Requirement to Product" 7-step lifecycle for Vinflux
    fromRequirementToProduct: [
      {
        stage: "01",
        title: "Requirement Gathering",
        action: "Understand the business process",
        details: "Collaborated with field coordinators and warehouse heads to understand surgical kit dispatches, implant consumption in hospitals, and settlement timelines. Identified uncaptured edge cases in doctor commission workflows."
      },
      {
        stage: "02",
        title: "Workflow Design",
        action: "Define how users and systems interact",
        details: "Mapped out sequential state flows: Surgery Scheduled → Sterile Kit Dispatched → Procedure Logged → Unconsumed Items Returned → Case Closed → BD Triggered. Defined status change validations and approval gates."
      },
      {
        stage: "03",
        title: "Documentation",
        action: "Convert the workflow into clear functional requirements",
        details: "Drafted functional specification documents outlining required form inputs, HSN and batch validation rules, acceptance criteria, and JSON payload contracts for backend engineers."
      },
      {
        stage: "04",
        title: "Frontend Development",
        action: "Build forms, tables, dashboards and user flows",
        details: "Engineered responsive, type-safe interfaces using React 18, TypeScript, and Tailwind CSS. Built dynamic line-item forms, searchable data tables with column filters, and real-time operational KPI cards."
      },
      {
        stage: "05",
        title: "API Integration",
        action: "Connect the UI with backend services",
        details: "Integrated RESTful APIs using Axios. Built centralized error interceptors, loading skeletons, token-based authentication flows, and resilient pagination handling."
      },
      {
        stage: "06",
        title: "Validation & Business Rules",
        action: "Ensure the application behaves according to requirements",
        details: "Implemented strict client-side checks: ensuring expiry date thresholds are respected, preventing duplicate BD settlements, verifying HSN codes, and enforcing case-closure prerequisites."
      },
      {
        stage: "07",
        title: "Testing & Refinement",
        action: "Identify gaps, bugs and edge cases and refine the feature",
        details: "Identified and resolved asynchronous UI glitches during partial shipments. Iterated on form ergonomics based on field user feedback, reducing manual data entry friction."
      }
    ]
  },
  {
    id: "shop-management",
    title: "Shop Management Application",
    period: "Retail & POS System",
    role: "Frontend Developer",
    tagline: "Responsive inventory, product catalog, and transaction management system for retail operations",
    techStack: ["React.js", "MongoDB", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "REST APIs"],
    overview: "Designed and developed a responsive inventory and sales management application tailored for day-to-day retail shop operations. Streamlines catalog administration, sales recording, stock deductions, and persistent transaction history.",
    highlights: [
      "Designed and developed a responsive inventory and sales management application, streamlining day-to-day shop operations.",
      "Implemented dynamic React-based interfaces for managing products and transactions, reducing manual tracking effort by ~40%.",
      "Integrated MongoDB-backed APIs to enable persistent storage of product data and transaction history.",
      "Delivered real-time UI updates for inventory and sales records, improving data accuracy and usability for end users.",
      "Constructed reusable modal components, receipt layouts, and quick-filter search interfaces for high-frequency checkout counter use."
    ],
    modules: [
      "Product Catalog & Category Master",
      "Stock Inventory & Low-Stock Alerts",
      "Point of Sale / Transaction Billing",
      "Daily Sales History & Customer Ledger",
      "MongoDB Backend Data Synchronization",
      "Real-time Balance & Revenue Summaries"
    ]
  }
];

export const experienceData = [
  {
    company: "AFORV Private Limited",
    role: "Consultant",
    location: "Bengaluru, India",
    points: [
      "Developed responsive web pages and dashboards using React.js, TypeScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.",
      "Built type-safe, reusable React components with TypeScript, improving maintainability and reducing runtime errors.",
      "Integrated RESTful APIs using Axios, implementing full CRUD functionality with client-side validation.",
      "Collaborated with backend systems using MongoDB to ensure efficient data handling and seamless UI–data synchronization.",
      "Leveraged React Hooks for state and lifecycle management, simplifying component logic and improving performance.",
      "Worked in Agile/Scrum environments, using Git/GitHub for version control and Jira for sprint planning and task tracking."
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Technology (B-Tech)",
  field: "Electronics and Communication Engineering (ECE)",
  institution: "Usha Rama College of Engineering and Technology",
  graduation: "April 2024",
  location: "India"
};

export const problemSolvingData = {
  sectionTitle: "Real-Time Problem Solving & Engineering Scenarios",
  description: "Beyond theoretical puzzles, I solve critical state synchronization, concurrency, and business workflow challenges encountered in production applications.",
  scenarios: [
    {
      id: "slot-locking",
      title: "Concurrent Slot Reservation & Hold Expiry",
      system: "SkyLite Private Theatre",
      domain: "Event Booking & Real-Time State",
      problem: "During peak evening booking windows, multiple customers attempt to reserve the exact same private theatre hall and time slot simultaneously. If users abandon checkout mid-way, slots risk either double-booking or being locked permanently against legitimate paying customers.",
      solution: "Engineered an optimistic temporary slot reservation mechanism with an active 10-minute hold countdown timer synchronized across client and backend states. If UPI payment or 12-digit UTR confirmation is not received within the hold duration, the slot is automatically released back to the general availability pool without requiring manual administrator intervention.",
      outcome: "Completely eliminated double-booking collisions and maximized theatre hall occupancy during high-traffic booking rushes.",
      tags: ["Concurrency Handling", "Countdown Timers", "State Synchronization"]
    },
    {
      id: "async-bd-ledger",
      title: "Asynchronous Financial Ledger Reconciliation",
      system: "Distribution Management System (Vinflux)",
      domain: "Medical ERP & Accounting Rules",
      problem: "In medical implant distribution, doctor BD commissions must be recorded upon surgical case completion, but hospital accounts-receivable operates on 30-90 day credit cycles. If BD tracking is coupled to customer cash collection, commission entries get delayed, creating audit discrepancies and unrecorded business development liabilities.",
      solution: "Decoupled the financial milestone triggers: designed an asynchronous ledger state where the completion of the surgical case immediately registers a pending BD tracker record, regardless of whether the hospital invoice is Paid, Partial, or Unpaid. Implemented client-side validation preventing case closure without linked doctor allocations.",
      outcome: "Guaranteed 100% financial traceability between surgical procedure events and subsequent commission disbursements across multi-month fiscal cycles.",
      tags: ["Asynchronous Workflows", "Audit Trail", "Financial Integrity"]
    },
    {
      id: "partial-inwarding",
      title: "Split Procurement Inwarding & Backorder Math",
      system: "Procurement & Quality Control Pipeline",
      domain: "Supply Chain & Batch Verification",
      problem: "When a distributor orders 100 medical implant kits but the supplier delivers only 60 due to manufacturing delays, simple inventory systems either block the shipment or incorrectly mark the entire purchase order as fulfilled.",
      solution: "Built a dynamic line-item Goods Receipt Note (GRN) calculator supporting split receipts. The UI captures specific batch numbers, HSN codes, and expiry dates for the 60 received units, logs them directly into available stock, and automatically calculates the outstanding 40 units into an active backorder queue awaiting subsequent fulfillment.",
      outcome: "Prevented stock discrepancy, ensured regulatory batch compliance, and maintained real-time visibility on vendor delivery deficits.",
      tags: ["Dynamic Forms", "Batch Tracking", "Backorder Reconciliation"]
    },
    {
      id: "optimistic-checkout",
      title: "High-Frequency Retail POS & Optimistic Inventory Sync",
      system: "Shop Management Application",
      domain: "Retail Counter Operations",
      problem: "During fast-paced retail checkout counters, continuous network requests for every item scan caused noticeable UI lag, slow total recalculation, and cashier frustration.",
      solution: "Implemented optimistic client-side cart state reduction with local validation. Item quantities, sub-totals, and tax amounts recalculate instantaneously on the client, while inventory deductions and transaction logs are debounced and synced with the MongoDB-backed API in background micro-batches with rollback capability on failure.",
      outcome: "Reduced manual transaction tracking effort by ~40% and delivered a snappy, zero-latency checkout experience.",
      tags: ["Optimistic UI", "Debounced Sync", "Performance Tuning"]
    }
  ]
};

export const learningCoursesData = [
  {
    id: "ai-app-dev",
    title: "Artificial Intelligence Application Development",
    focus: "AI Concepts & Python Application Development",
    institution: "Technical Coursework / Specialized Learning",
    status: "Completed / Active Application",
    areas: [
      "Python programming fundamentals",
      "Algorithm design & structured problem solving",
      "Core AI concepts & data workflows",
      "Application development & programmatic integration"
    ],
    credentialNote: "Credential / course verification placeholder available upon recruiter request.",
    linkPlaceholder: "#"
  },
  {
    id: "react-typescript",
    title: "Modern React.js & TypeScript Engineering",
    focus: "Type-Safe Component Systems & Enterprise Architecture",
    institution: "Production Consulting & Enterprise Engineering",
    status: "Production Applied @ AFORV",
    areas: [
      "React functional components & custom hooks",
      "TypeScript interfaces, types & generics",
      "Centralized state management (Redux)",
      "RESTful API integration via Axios interceptors"
    ],
    credentialNote: "Demonstrated through production contributions at AFORV Private Limited.",
    linkPlaceholder: "#"
  },
  {
    id: "ece-degree",
    title: "Bachelor of Technology in Electronics and Communication Engineering",
    focus: "Engineering Fundamentals & Analytical Thinking",
    institution: "Usha Rama College of Engineering and Technology",
    status: "Graduated (B-Tech Degree)",
    areas: [
      "Analytical thinking and system design",
      "Digital electronics & microprocessor logic",
      "Engineering mathematics & logical analysis"
    ],
    credentialNote: "B-Tech Degree verified.",
    linkPlaceholder: "#"
  }
];

