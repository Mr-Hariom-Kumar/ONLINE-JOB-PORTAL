import headerLogo from "./headerLogo.jpg";
import headerRight from "./headerRight.png";
import tcs from "./tcs.svg";
import ibm from "./ibm.png";
import wipro from "./wipro.png";
import cognizant from "./cognizant.svg";
import amazon from "./amazon.png";
import meta from "./meta.png";
import accenture from "./accenture.png";
import microsoft from "./microsoft.png";

export const companyInfo = [
  // ---------------- IT ----------------
  [
    {
      _id: "i1",
      name: "TCS",
      image: tcs,
      salary: "Rs. 3.5 LPA",
      position: "Assistant System Engineer",
      description: "Full Stack Developer",
      filter: "it",

      skillsRequired: [
        "Solid understanding of HTML, CSS, and modern JavaScript (ES6+)",
        "Hands-on with a front-end framework (React or Angular) and state management basics",
        "Server-side development with Node.js/Express or Java/Spring Boot",
        "RESTful API design, JSON handling, and basic authentication/authorization (JWT/OAuth)",
        "Database fundamentals (SQL with MySQL/PostgreSQL) and basic NoSQL exposure (MongoDB)",
        "Git/GitHub workflows (branching, PRs, code reviews)",
        "Basic testing (unit/integration) and debugging skills",
        "Knowledge of CI/CD concepts and build tools (npm, webpack, vite)",
        "Understanding of responsive design and accessibility fundamentals",
        "Clear communication, documentation habits, and team collaboration"
      ],

      education:
        "Bachelor’s degree (B.E/B.Tech) in Computer Science/IT or related; other branches welcome with strong programming fundamentals and web development exposure.",

      role: [
        "Work on full-stack modules—build responsive UIs and implement server-side APIs.",
        "Participate across SDLC phases: requirement understanding, design, coding, testing, deployment.",
        "Integrate front-end components with REST APIs and handle client-side state and routing.",
        "Write clean, modular, and reusable code with meaningful tests and comments.",
        "Contribute to database schemas, queries, and simple optimizations.",
        "Fix defects raised by QA/users; analyze logs and metrics to prevent regressions.",
        "Collaborate in code reviews, follow branching strategy, and adhere to coding standards.",
        "Participate in sprint ceremonies, plan tasks, and deliver within agreed timelines."
      ],

      details:
        "As an Assistant System Engineer at TCS in a full-stack track, you’ll contribute to enterprise web applications spanning UI, API, and database layers. You’ll learn industry-standard practices, collaborate in agile teams, and gradually take ownership of features—gaining breadth across technologies and depth in one primary stack."
    },
    {
      _id: "i2",
      name: "IBM",
      image: ibm,
      salary: "Rs. 12 LPA",
      position: "SDE",
      description: "Python Developer",
      filter: "it",

      skillsRequired: [
        "Strong Python fundamentals, OOP, and standard libraries",
        "Web frameworks knowledge (Django or Flask/FastAPI)",
        "REST API development, request handling, and serialization",
        "Working with relational databases (PostgreSQL/MySQL) and ORMs",
        "Data handling/pandas familiarity and basic scripting/automation",
        "Unit testing (pytest/unittest) and debugging proficiency",
        "Git workflows and code review best practices",
        "Basic containerization understanding (Docker) and virtual environments",
        "Security basics (input validation, secrets handling, auth flows)",
        "Clear documentation and stakeholder communication"
      ],

      education:
        "B.E/B.Tech in CS/IT/ECE or related fields; candidates from other branches with strong Python development skills are considered.",

      role: [
        "Design and implement Python services and APIs using Django/Flask/FastAPI.",
        "Write maintainable, testable code with clear separation of concerns.",
        "Model and query data via ORM; optimize slow queries and endpoints.",
        "Integrate with internal/external services (queues, caches, third-party APIs).",
        "Create automated tests, maintain CI pipelines, and improve code quality metrics.",
        "Troubleshoot production issues using logs/metrics; apply fixes and postmortems.",
        "Contribute to design discussions, technical documentation, and code reviews.",
        "Support iterative delivery in agile sprints with reliable estimates."
      ],

      details:
        "At IBM, Python SDEs build scalable microservices and data-driven features for enterprise clients. You’ll collaborate with architects, SREs, and product teams, focusing on reliability, security, and performance while steadily expanding your expertise in modern Python ecosystems."
    },
    {
      _id: "i3",
      name: "Wipro",
      image: wipro,
      salary: "Rs. 4.5 LPA",
      position: "Project Engineer",
      description: "Java Developer",
      filter: "it",

      skillsRequired: [
        "Core Java and OOP principles (collections, generics, exceptions)",
        "Java frameworks (Spring/Spring Boot) and dependency injection",
        "REST API design and JSON serialization",
        "SQL proficiency with MySQL/PostgreSQL and JPA/Hibernate basics",
        "Build tools (Maven/Gradle) and project structuring",
        "Unit/integration testing with JUnit/Mockito",
        "Version control with Git and collaborative workflows",
        "Understanding of HTTP, threading, and basic performance tuning",
        "Familiarity with microservices patterns is a plus",
        "Good problem solving and documentation"
      ],

      education:
        "B.E/B.Tech in CS/IT/ECE or related; non-CS branches considered with strong Java foundations.",

      role: [
        "Develop and maintain Java/Spring Boot services and supporting components.",
        "Participate in requirements clarification, design, coding, and test cycles.",
        "Fix issues reported by QA/users and improve code robustness.",
        "Write clean, readable, and reusable code aligned with company standards.",
        "Collaborate via code reviews and pair programming to ensure quality.",
        "Implement simple caching, error handling, and configuration management.",
        "Contribute to database schema updates and performance improvements.",
        "Deliver assigned tasks on schedule and communicate risks early."
      ],

      details:
        "Wipro Project Engineers contribute to large-scale enterprise solutions across development, testing, or support. Expect structured training, continuous upskilling, and exposure to real client environments where code quality, teamwork, and timely delivery matter most."
    },
    {
      _id: "i4",
      name: "Cognizant",
      image: cognizant,
      salary: "Rs. 4 LPA",
      position: "Programmer Analyst",
      description: "MERN Stack Developer",
      filter: "it",

      skillsRequired: [
        "Strong JavaScript/TypeScript and asynchronous programming",
        "React fundamentals (hooks, routing) and component design",
        "Node.js/Express for API development and middleware",
        "MongoDB modeling, indexing, and aggregation basics",
        "REST API design and Postman/Swagger usage",
        "State management (Context/Redux) and form handling",
        "Git workflows and collaborative reviews",
        "Basic testing with Jest/React Testing Library",
        "Responsive UI and accessibility awareness",
        "Understanding of deployment basics (env, build, logs)"
      ],

      education:
        "B.E/B.Tech in CS/IT or related disciplines; other branches acceptable with solid MERN skills.",

      role: [
        "Build responsive React interfaces and reusable components.",
        "Design and implement Express APIs and connect to MongoDB.",
        "Handle authentication, authorization, and protected routes.",
        "Optimize renders, API calls, and bundle sizes for performance.",
        "Create unit tests and help maintain CI pipelines.",
        "Participate in code reviews and contribute to documentation.",
        "Collaborate with designers and backend teams for feature delivery.",
        "Support releases, monitor issues, and roll out fixes quickly."
      ],

      details:
        "As a Programmer Analyst in a MERN track, you’ll deliver end-to-end features that span UI, API, and data layers. The role emphasizes rapid iteration, clean component architecture, and pragmatic API design within agile teams."
    },
    {
      _id: "i5",
      name: "Amazon",
      image: amazon,
      salary: "Rs. 28 LPA",
      position: "SDE-1",
      description: "Backend Developer",
      filter: "it",

      skillsRequired: [
        "Strong data structures, algorithms, and problem-solving",
        "Designing scalable, fault-tolerant distributed systems",
        "Backend development in Java/Go/Node/Python",
        "API design (REST/GraphQL) and service contracts",
        "Relational and NoSQL data modeling; caching strategies",
        "Testing (unit/integration) and code quality metrics",
        "Observability fundamentals (logging, metrics, tracing)",
        "Ownership mindset, bar-raiser quality standards",
        "Security, rate-limiting, and resilience patterns",
        "Excellent communication and design documentation"
      ],

      education:
        "B.E/B.Tech (CS/IT/ECE or related). Strong CS fundamentals and coding skills expected.",

      role: [
        "Design, implement, and operate backend services with high availability.",
        "Write robust, performant code and automate tests for reliability.",
        "Own services in production—monitor, on-call, and improve SLIs/SLOs.",
        "Participate in design docs, reviews, and deep dives.",
        "Collaborate with PMs and cross-functional teams to define scope.",
        "Continuously optimize latency, cost, and resource usage.",
        "Raise the bar in code reviews and mentoring peers.",
        "Drive iterative delivery with a customer-obsessed mindset."
      ],

      details:
        "Amazon SDE-1s build and own critical services at scale. You’ll work in a high-impact environment focused on operational excellence, measurable customer value, and continuous improvement across reliability, performance, and developer experience."
    },
    {
      _id: "i6",
      name: "Meta",
      image: meta,
      salary: "Rs. 35 LPA",
      position: "Software Engineer",
      description: "Frontend Developer",
      filter: "it",

      skillsRequired: [
        "Expert-level JavaScript/TypeScript and browser APIs",
        "React, performance profiling, and rendering optimization",
        "Design systems, accessibility (a11y), and UX collaboration",
        "State management patterns and data fetching strategies",
        "Testing (Jest/RTL) and CI integration",
        "Build tooling (Vite/Webpack) and bundling optimizations",
        "Security basics (XSS/CSRF) and input validation",
        "GraphQL basics and client caching (optional)",
        "Strong product sense and experimentation mindset",
        "Clear, async-friendly communication"
      ],

      education:
        "Bachelor’s degree in CS/IT or equivalent experience with a strong portfolio of UI work.",

      role: [
        "Build high-quality, performant React features and micro-frontends.",
        "Collaborate with design and research to refine UX flows.",
        "Instrument analytics, logs, and experiments to inform decisions.",
        "Ensure accessibility and internationalization standards.",
        "Write automated tests and keep regressions near zero.",
        "Contribute to design systems and shared component libraries.",
        "Review code for performance, readability, and consistency.",
        "Partner with backend teams to shape APIs and contracts."
      ],

      details:
        "Meta frontend engineers craft user experiences at massive scale. You’ll focus on performance, accessibility, and product iteration speed, leveraging metrics and experiments to ship impactful UI changes quickly and safely."
    },
    {
      _id: "i7",
      name: "Accenture",
      image: accenture,
      salary: "Rs. 4.5 LPA",
      position: "Application Development Analyst",
      description: "Cloud Developer",
      filter: "it",

      skillsRequired: [
        "Understanding of at least one cloud (AWS/Azure/GCP)",
        "Microservices fundamentals and container basics (Docker)",
        "CI/CD pipelines and Infrastructure-as-Code (Terraform basics)",
        "REST APIs, JSON, and event-driven concepts",
        "Scripting (Python/Node) for automation tasks",
        "Monitoring/alerting basics and log analysis",
        "Security basics (IAM, secrets, least privilege)",
        "Git workflows and collaborative development",
        "Basic networking (VPC, subnets, security groups)",
        "Good documentation and stakeholder communication"
      ],

      education:
        "B.E/B.Tech in CS/IT/ECE or similar; cloud certifications are a plus but not mandatory.",

      role: [
        "Develop cloud-native services and automate deployments.",
        "Write infrastructure definitions and manage environments.",
        "Implement APIs, integrate third-party services, and handle configs.",
        "Contribute to observability (dashboards, alerts) and SRE hygiene.",
        "Fix defects and improve reliability through post-incident actions.",
        "Participate in agile ceremonies and maintain delivery cadence.",
        "Review peers’ changes for security, scalability, and cost.",
        "Document runbooks and handover notes for smooth operations."
      ],

      details:
        "At Accenture, cloud developers build and maintain resilient services for diverse clients. Expect strong process discipline, exposure to multiple stacks, and a focus on automation, observability, and cost-effective design."
    },
    {
      _id: "i8",
      name: "Microsoft",
      image: microsoft,
      salary: "Rs. 30 LPA",
      position: "SDE-1",
      description: "Software Engineer",
      filter: "it",

      skillsRequired: [
        "Strong CS fundamentals (DSA, OS, networks, DBMS)",
        "Proficiency in one modern language (C#/Java/C++/Python/TypeScript)",
        "Design and implement reliable APIs/services",
        "Testing discipline (unit/integration) and CI familiarity",
        "Data modeling, indexing, and query optimization basics",
        "Debugging complex issues using logs, dumps, and profilers",
        "Secure coding practices and threat awareness",
        "Design documentation and effective code reviews",
        "Ownership and collaboration across teams",
        "Growth mindset and learning agility"
      ],

      education:
        "Bachelor’s degree in CS/IT or equivalent with strong programming experience.",

      role: [
        "Design and implement features/services with high code quality.",
        "Collaborate on technical designs and peer reviews.",
        "Write automated tests and maintain healthy pipelines.",
        "Measure and improve performance, reliability, and cost.",
        "Participate in on-call/operational excellence where applicable.",
        "Work with PM/design/data to define and deliver value.",
        "Document decisions, APIs, and troubleshooting steps.",
        "Contribute to team culture of learning and excellence."
      ],

      details:
        "Microsoft SDE-1 engineers build robust, user-focused software with strong engineering rigor. You’ll learn to ship predictably, operate services responsibly, and iterate based on telemetry and customer feedback."
    }
  ],

  // --------------- FINANCE ---------------
  [
    {
      _id: "f1",
      name: "State Bank of India (SBI)",
      image: tcs,
      salary: "Rs. 6 - 8 LPA",
      position: "Account Manager",
      description: "Financial Account Operations",
      filter: "finance",

      skillsRequired: [
        "Strong understanding of banking products (CASA, loans, deposits)",
        "Customer relationship management and upselling/cross-selling",
        "Basic financial analysis and reconciliation skills",
        "MS Excel proficiency (pivot tables, VLOOKUP) and reporting",
        "KYC/AML norms and regulatory awareness",
        "Communication, negotiation, and complaint resolution",
        "Attention to detail and documentation accuracy",
        "Working knowledge of core banking systems",
        "Time management and target-driven approach",
        "Ethical conduct and customer-first mindset"
      ],

      education:
        "Bachelor’s degree in Commerce/Finance/Business Administration or related; banking certifications are advantageous.",

      role: [
        "Manage customer accounts, resolve queries, and ensure timely service.",
        "Cross-sell suitable products (cards, loans, insurance) based on profiles.",
        "Maintain accurate documentation as per KYC/AML and compliance standards.",
        "Prepare daily/weekly MIS and support audits and reconciliations.",
        "Coordinate with branch operations, credit, and sales teams.",
        "Handle escalations professionally and ensure high CSAT.",
        "Track targets, plan outreach activities, and report progress.",
        "Promote digital banking adoption and guide customers on usage."
      ],

      details:
        "SBI Account Managers act as primary relationship owners for retail and small business customers. The role blends service excellence with sales responsibility, adherence to regulatory norms, and proactive engagement to deepen customer value."
    },
    {
      _id: "f2",
      name: "HDFC Bank",
      image: ibm,
      salary: "Rs. 5 - 9 LPA",
      position: "Financial Analyst",
      description: "Client Portfolio Management",
      filter: "finance",

      skillsRequired: [
        "Financial modeling and valuation basics (DCF, multiples)",
        "Strong Excel/PowerPoint and data presentation",
        "Understanding of mutual funds, bonds, equities, and insurance",
        "Risk profiling and asset allocation fundamentals",
        "Research and report-writing skills",
        "Regulatory awareness (SEBI/RBI basics) and compliance",
        "Numerical accuracy and analytical thinking",
        "Client communication and stakeholder management",
        "Problem solving with attention to detail",
        "Ethical standards and confidentiality"
      ],

      education:
        "Bachelor’s in Finance/Commerce/Economics; MBA/CFP/NISM certifications are a plus.",

      role: [
        "Analyze client portfolios and suggest rebalancing recommendations.",
        "Prepare investment reports, fact sheets, and performance summaries.",
        "Support relationship managers with research and client proposals.",
        "Track market movements and assist in thematic insights.",
        "Ensure documentation compliance and process adherence.",
        "Coordinate with product and risk teams for portfolio suitability.",
        "Respond to client queries and maintain meeting notes.",
        "Contribute to periodic MIS and performance dashboards."
      ],

      details:
        "HDFC Financial Analysts provide research-backed advice to improve client portfolios within defined risk profiles. The role emphasizes disciplined analysis, compliant processes, and high-quality client communication."
    },
    {
      _id: "f3",
      name: "ICICI Bank",
      image: wipro,
      salary: "Rs. 6 - 10 LPA",
      position: "Relationship Manager",
      description: "Corporate Banking and Advisory",
      filter: "finance",

      skillsRequired: [
        "B2B relationship building and stakeholder engagement",
        "Understanding of corporate lending products and trade finance",
        "Credit appraisal basics and documentation",
        "Negotiation, presentation, and proposal drafting",
        "Pipeline management and CRM usage",
        "Regulatory and compliance awareness",
        "Analytical thinking and financial statement reading",
        "Time management and target orientation",
        "Cross-functional coordination skills",
        "Professional communication and etiquette"
      ],

      education:
        "Bachelor’s degree in Commerce/Business/Finance; MBA (Finance/Marketing) preferred for corporate roles.",

      role: [
        "Acquire and manage corporate clients; understand banking needs.",
        "Coordinate product fitment—working capital, term loans, treasury.",
        "Liaise with credit and operations for smooth deal execution.",
        "Prepare proposals, term sheets, and client presentations.",
        "Monitor account health, limits, and compliance requirements.",
        "Drive cross-sell across cash management, FX, and trade products.",
        "Track revenue targets and report pipeline regularly.",
        "Ensure documentation quality and audit readiness."
      ],

      details:
        "ICICI Relationship Managers act as strategic partners to corporate clients, orchestrating solutions across lending, trade, and transaction banking while upholding compliance and service standards."
    },
    {
      _id: "f4",
      name: "Axis Bank",
      image: cognizant,
      salary: "Rs. 4 - 7 LPA",
      position: "Credit Analyst",
      description: "Loan & Credit Risk Management",
      filter: "finance",

      skillsRequired: [
        "Financial statement analysis and ratio interpretation",
        "Credit risk concepts and underwriting basics",
        "Industry analysis and client due diligence",
        "Excel proficiency and report preparation",
        "Documentation checks and policy adherence",
        "Attention to detail and critical thinking",
        "Understanding of collateral and security valuation",
        "Regulatory knowledge (RBI guidelines) at a high level",
        "Communication with sales/ops for clarifications",
        "Integrity and objectivity in recommendations"
      ],

      education:
        "Bachelor’s in Finance/Commerce/Economics; PG in Finance or NPA/credit certifications are advantageous.",

      role: [
        "Analyze borrower financials, cash flows, and repayment capacity.",
        "Prepare credit notes with risk assessment and mitigants.",
        "Coordinate queries with RM/sales and obtain documentation.",
        "Recommend appropriate structures, limits, and covenants.",
        "Work with legal/valuation partners for collateral checks.",
        "Track portfolio early warning signals and exceptions.",
        "Support audits and ensure policy/regulatory compliance.",
        "Maintain accurate MIS and TAT for applications."
      ],

      details:
        "Axis Bank Credit Analysts safeguard portfolio quality by conducting thorough financial assessments and structuring prudent credit proposals aligned with policy and risk appetite."
    },
    {
      _id: "f5",
      name: "Kotak Mahindra Bank",
      image: amazon,
      salary: "Rs. 5 - 8 LPA",
      position: "Branch Operations Executive",
      description: "Bank Operations & Support",
      filter: "finance",

      skillsRequired: [
        "Branch operations workflows and SOP adherence",
        "KYC/AML compliance and documentation accuracy",
        "Cash management and reconciliation basics",
        "Core banking system usage and ticket handling",
        "Customer service and query resolution",
        "MS Office proficiency for daily MIS",
        "Attention to detail with error-free processing",
        "Team coordination and escalation handling",
        "Time management and multi-tasking",
        "Professional etiquette and confidentiality"
      ],

      education:
        "Bachelor’s degree in Commerce/Business/Finance or equivalent.",

      role: [
        "Execute teller/back-office activities per SOP and TAT.",
        "Validate documents for account opening and service requests.",
        "Perform end-of-day checks, reconciliations, and MIS.",
        "Support audits and implement corrective actions.",
        "Handle customer requests and escalate complex cases.",
        "Coordinate with sales, credit, and IT support when needed.",
        "Promote digital channels and reduce manual interventions.",
        "Maintain high accuracy and service quality scores."
      ],

      details:
        "Branch Operations Executives at Kotak ensure smooth day-to-day banking by balancing compliance, accuracy, and efficient customer service, directly impacting overall branch performance."
    },
    {
      _id: "f6",
      name: "Yes Bank",
      image: meta,
      salary: "Rs. 4 - 7 LPA",
      position: "Investment Advisor",
      description: "Wealth and Portfolio Advisory",
     

      skillsRequired: [
        "Knowledge of mutual funds, bonds, equities, and insurance products",
        "Client risk profiling and suitability assessment",
        "Goal-based planning and asset allocation",
        "NISM/AMFI certifications (preferred/required as per role)",
        "Excel/reporting and presentations",
        "Sales acumen with ethical advisory approach",
        "Regulatory and compliance awareness",
        "Strong communication and relationship skills",
        "Market awareness and product comparison ability",
        "Follow-up discipline and pipeline management"
      ],

      education:
        "Bachelor’s in Finance/Commerce/Economics; relevant certifications (NISM/AMFI/CFP) preferred.",

      role: [
        "Conduct risk profiling and propose suitable investment plans.",
        "Explain product features, costs, and risks transparently.",
        "Track portfolio performance and recommend rebalancing.",
        "Ensure documentation and compliance for each transaction.",
        "Engage clients via reviews, events, and advisory sessions.",
        "Coordinate with product and research teams for insights.",
        "Manage sales pipelines and meet activity/Revenue targets.",
        "Maintain detailed records and after-sales service."
      ],

      details:
        "Yes Bank Investment Advisors guide clients toward long-term goals using compliant, research-led recommendations. Success depends on trust-building, periodic reviews, and clear communication of risks and returns."
    },
    {
      jid: "j0001",
      name: "Punjab National Bank (PNB)",
      image: accenture,
      salary: "Rs. 4 - 6 LPA",
      position: "Clerk / PO",
      description: "Banking Customer Service & Operations",
      domain: "finance",

      skillsRequired: [
        "Customer handling and communication skills",
        "Basic banking product knowledge and processes",
        "Data entry accuracy and documentation",
        "KYC/AML awareness and compliance",
        "Cash handling and reconciliation basics (for clerk roles)",
        "MS Office and basic reporting",
        "Queue and time management",
        "Team coordination and escalation handling",
        "Problem solving and patience",
        "Ethical conduct and confidentiality"
      ],

      education:
        "Bachelor’s degree in any discipline; banking certifications and exam clearances as applicable for role.",

      role: [
        "Serve customers at counters and via digital channels.",
        "Process account services, deposits, withdrawals, and requests.",
        "Maintain records, verify documents, and ensure KYC compliance.",
        "Support branch operations and assist seniors during rush hours.",
        "Promote digital solutions and help customers adopt them.",
        "Handle complaints professionally and escalate where needed.",
        "Support audits and maintain hygiene of records and cash.",
        "Meet service quality benchmarks and TAT."
      ],

      details:
        "PNB Clerk/PO roles focus on dependable customer service, operational accuracy, and adherence to policies. Growth comes with performance, exams, and cross-functional exposure within the bank."
    }
  ],
  
  // --------------- LAW ---------------
  [
    {
      _id: "l1",
      name: "High Court",
      image: tcs,
      salary: "Rs. 4 - 7 LPA",
      position: "Junior Legal Associate",
      description: "Legal research and drafting.",
      filter: "law",

      skillsRequired: [
        "Strong legal research using SCC/Manupatra/HeinOnline",
        "Drafting petitions, affidavits, written submissions, and notices",
        "Understanding of CPC, CrPC, Evidence Act, and constitutional law",
        "Case law analysis and brief preparation",
        "Court procedure familiarity and filing norms",
        "Attention to detail and citation accuracy",
        "Client interviewing and note-taking discipline",
        "Time management across multiple matters",
        "Professional ethics and confidentiality",
        "Clear written and verbal communication"
      ],

      education:
        "LL.B. from a recognized university; enrollment with State Bar Council preferred. Internships or moot court experience at litigation offices is an advantage.",

      role: [
        "Conduct legal research and prepare concise research notes and draft memos.",
        "Assist seniors in drafting petitions, replies, rejoinders, and applications.",
        "Prepare case briefs, list of dates, and compilation of judgments.",
        "Coordinate filings, vakalatnamas, and ensure procedural compliance.",
        "Attend court hearings for matter updates and assist with arguments prep.",
        "Liaise with clients and clerks for documents, signatures, and logistics.",
        "Maintain matter trackers, deadlines, and cause list schedules.",
        "Support seniors during urgent listings and last-minute drafting."
      ],

      details:
        "A High Court junior associate role centers on research-heavy litigation support and precise drafting. You’ll learn court craft, procedure, and strategy while working closely with seniors on fast-moving matters."
    },
    {
      _id: "l2",
      name: "Supreme Court Clerkship",
      image: ibm,
      salary: "Rs. 6 - 10 LPA",
      position: "Legal Clerk",
      description: "Assist judges with case studies.",
      filter: "law",

      skillsRequired: [
        "Exceptional legal research and reasoning",
        "Advanced drafting and editing skills",
        "Familiarity with constitutional and administrative law",
        "Ability to synthesize large records into concise briefs",
        "Citation standards and Bluebook/Indian citation formats",
        "Discretion, integrity, and high professional ethics",
        "Analytical thinking and structured writing",
        "Time-bound task execution under pressure",
        "Stakeholder coordination with registry/advocates",
        "Proficiency with legal databases and MS Office"
      ],

      education:
        "LL.B. with excellent academic credentials; publications, moots, research assistantships are strong pluses. Eligibility norms as per the Court’s clerkship scheme apply.",

      role: [
        "Summarize pleadings, evidence, and case records for chambers.",
        "Prepare bench memoranda and research notes on legal propositions.",
        "Assist in drafting orders and verifying citations/precedents.",
        "Maintain databases of relevant judgments and issue-wise trackers.",
        "Coordinate with registry and counsel chambers when required.",
        "Fact-check and proofread drafts with rigorous attention to detail.",
        "Manage deadlines aligned with cause lists and bench schedules.",
        "Uphold confidentiality and neutrality at all times."
      ],

      details:
        "A Supreme Court clerkship offers unmatched exposure to constitutional questions and pan-India jurisprudence. It demands precision, speed, and absolute adherence to confidentiality."
    },
    {
      _id: "l3",
      name: "Legal Consultancy Firm",
      image: wipro,
      salary: "Rs. 4 - 8 LPA",
      position: "Corporate Lawyer",
      description: "Contract review & company law compliance.",
      filter: "law",

      skillsRequired: [
        "Contract drafting and redlining (MSAs, NDAs, SLAs, vendor/customer contracts)",
        "Companies Act, FEMA, SEBI basics and corporate governance",
        "Transaction structuring fundamentals and due diligence",
        "Negotiation support and risk issue-spotting",
        "Compliance calendars and secretarial documentation",
        "Legal research and advisory note preparation",
        "Stakeholder communication and meeting minutes",
        "Data room organization and version control",
        "Excel/Word/Track Changes proficiency",
        "Professional etiquette and client orientation"
      ],

      education:
        "LL.B. (preferably with corporate law electives). CS/LL.M. or relevant certifications are advantageous for compliance-oriented roles.",

      role: [
        "Draft, review, and negotiate standard commercial agreements.",
        "Prepare compliance trackers, secretarial documents, and board minutes.",
        "Conduct due diligence and compile red flag reports.",
        "Assist in policy drafting (privacy, ethics, whistleblower, IT).",
        "Summarize legal positions into clear, actionable notes for clients.",
        "Coordinate with finance/HR/ops teams to implement compliance steps.",
        "Maintain clause libraries and playbooks to streamline reviews.",
        "Support partner/counsel in client meetings and closings."
      ],

      details:
        "Corporate roles in consultancy blend contract work with pragmatic compliance advisory. You’ll develop a commercial mindset—balancing legal risk with business outcomes."
    },
    {
      _id: "l4",
      name: "District Court",
      image: cognizant,
      salary: "Rs. 3 - 6 LPA",
      position: "Advocate Assistant",
      description: "Case filing & court appearance support.",
      filter: "law",

      skillsRequired: [
        "Knowledge of local court procedures and filing norms",
        "Drafting plaints, written statements, and applications",
        "Client interaction and affidavit preparation",
        "Coordination with notaries, stamp vendors, and clerks",
        "Record management and date diary maintenance",
        "Basic translation/typing and formatting skills",
        "Time and queue management on hearing days",
        "Evidence handling and exhibit preparation",
        "Negotiation and settlement assistance",
        "Professional conduct and diligence"
      ],

      education:
        "LL.B. with enrollment at the State Bar preferred. Prior internships with trial court practitioners are beneficial.",

      role: [
        "Assist with drafting and filing of pleadings in civil/criminal matters.",
        "Appear with seniors for call outs, adjournments, and short submissions.",
        "Prepare affidavits, vakalatnamas, and coordinate attestations.",
        "Maintain cause list calendars, case bundles, and service reports.",
        "Follow up on certified copies and process service updates.",
        "Liaise with clients for documents and keep them informed.",
        "Organize evidence, witness lists, and examination notes.",
        "Support mediation/settlement discussions as directed."
      ],

      details:
        "District Court practice builds courtroom confidence, procedure mastery, and client empathy. The work is hands-on, fast-paced, and highly practical."
    },
    {
      _id: "l5",
      name: "Law Research Institute",
      image: amazon,
      salary: "Rs. 5 - 9 LPA",
      position: "Legal Research Analyst",
      description: "Case study & legislative research.",
      filter: "law",

      skillsRequired: [
        "Research methodology and literature review",
        "Statutory interpretation and policy analysis",
        "Data collection (qualitative/quantitative) and ethics",
        "Citation management and report structuring",
        "Survey tools and basic statistics familiarity",
        "Academic writing and editing",
        "Presentation skills and stakeholder outreach",
        "Time-bound deliverables and project tracking",
        "Team collaboration across disciplines",
        "Attention to accuracy and neutrality"
      ],

      education:
        "LL.B. or LL.M. with demonstrable research experience. Publications or RA roles are a plus.",

      role: [
        "Conduct doctrinal/empirical research on assigned themes.",
        "Draft literature reviews, syntheses, and policy briefs.",
        "Assist in study designs, interviews, and survey instruments.",
        "Compile databases of cases, statutes, and secondary sources.",
        "Present findings to partners, funders, or academic forums.",
        "Maintain research ethics, consent, and data protection norms.",
        "Coordinate timelines, budgets, and deliverables with leads.",
        "Contribute to grant proposals and project documentation."
      ],

      details:
        "Research roles emphasize rigor and clarity. You’ll convert legal complexity into structured insights for academia, policy stakeholders, and civil society."
    },
    {
      _id: "l6",
      name: "Corporate Law Firm",
      image: meta,
      salary: "Rs. 7 - 15 LPA",
      position: "Associate Lawyer",
      description: "Mergers, acquisitions, & compliance.",
      filter: "law",

      skillsRequired: [
        "M&A/PE basics and transaction lifecycle understanding",
        "Due diligence and report writing",
        "Shareholders’ agreements and SPAs—clause-level familiarity",
        "Companies Act, FEMA, competition law basics",
        "Cap table modeling and closing mechanics",
        "Data room hygiene and tracker management",
        "Negotiation support and drafting precision",
        "Client communication and expectation alignment",
        "Team coordination and long-hour stamina",
        "Professional discretion and responsiveness"
      ],

      education:
        "LL.B. from a reputed institution; internships at corporate firms and strong drafting samples preferred.",

      role: [
        "Support diligence workstreams and consolidate red flags.",
        "Draft/review transaction documents under guidance.",
        "Prepare conditions precedent checklists and closing deliverables.",
        "Coordinate with tax, finance, and secretarial counterparts.",
        "Update trackers, version control, and signature packets.",
        "Research specific transaction issues and propose solutions.",
        "Assist in negotiations and turn drafts quickly with accuracy.",
        "Maintain client-ready documentation and closing binders."
      ],

      details:
        "Corporate firm associates navigate complex deals with precision and pace. You’ll learn negotiation dynamics and transaction structuring while honing drafting excellence."
    },
    {
      _id: "l7",
      name: "Public Sector Legal Office",
      image: accenture,
      salary: "Rs. 5 - 11 LPA",
      position: "Legal Advisor",
      description: "Government legal advisory work.",
      filter: "law",

      skillsRequired: [
        "Administrative and constitutional law understanding",
        "Policy drafting and vetting government notifications",
        "RTI/contract vetting and procurement familiarity",
        "Litigation coordination with government counsel",
        "File noting and official correspondence",
        "Compliance with government manuals and procedures",
        "Stakeholder management across departments",
        "Recordkeeping and audit readiness",
        "Objectivity and public interest orientation",
        "Strong drafting and clarity of expression"
      ],

      education:
        "LL.B.; prior exposure to government work or public policy is an advantage. Knowledge of local language may be required.",

      role: [
        "Vet contracts, MoUs, and policy drafts for legal sufficiency.",
        "Coordinate litigation and prepare para-wise comments for counsel.",
        "Review tender documents and procurement terms for compliance.",
        "Maintain case registers, legal opinions, and precedent archives.",
        "Assist in disciplinary proceedings and service rules queries.",
        "Ensure timely responses to audit/RTI queries.",
        "Advise departments on statutory obligations and risks.",
        "Promote transparency and procedural fairness."
      ],

      details:
        "Public sector advisory focuses on process integrity, compliance, and citizen-centric outcomes. Work involves careful drafting and cross-department coordination."
    },
    {
      _id: "l8",
      name: "NGO Law Cell",
      image: microsoft,
      salary: "Rs. 3 - 6 LPA",
      position: "Public Interest Lawyer",
      description: "Human rights & public welfare litigation.",
      filter: "law",

      skillsRequired: [
        "Public law and human rights frameworks",
        "Field research and stakeholder engagement",
        "Drafting PILs, representations, and complaints",
        "Evidence collection and documentation",
        "Community outreach and awareness sessions",
        "Networking with authorities and institutions",
        "Impact-oriented project planning",
        "Grant/report writing basics",
        "Language skills and cultural sensitivity",
        "Resilience and ethical dedication"
      ],

      education:
        "LL.B.; prior internships with NGOs, legal aid, or human rights organizations are valuable.",

      role: [
        "Draft petitions, representations, and RTI applications.",
        "Conduct field visits, interviews, and fact-finding missions.",
        "Coordinate with communities, activists, and authorities.",
        "Assist counsel in hearings and maintain case files.",
        "Prepare impact reports, briefs, and donor updates.",
        "Run legal awareness workshops and training modules.",
        "Track compliance with court directions and policies.",
        "Document learnings and best practices for scale."
      ],

      details:
        "NGO law work blends litigation with grassroots engagement. It’s mission-driven, requiring empathy, patience, and tenacity to achieve sustainable impact."
    }
  ],

  // --------------- CIVIL ---------------
  [
    {
      _id: "c1",
      name: "L&T Construction",
      image: tcs,
      salary: "Rs. 4 - 7 LPA",
      position: "Site Engineer",
      description: "Monitoring construction site activities.",
      filter: "civil",

      skillsRequired: [
        "Reading drawings, BOQs, and construction specs",
        "Site execution planning and daily progress tracking",
        "Quality control tests (slump, cube strength, NDT basics)",
        "Safety practices and toolbox talks (EHS awareness)",
        "Vendor/contractor coordination and measurement books",
        "Material management and inventory basics",
        "MS Excel reports and site documentation",
        "Surveying basics and layout checks",
        "Problem solving under time constraints",
        "Communication with PMs and consultants"
      ],

      education:
        "B.E./B.Tech in Civil Engineering or equivalent diploma with relevant site experience.",

      role: [
        "Supervise daily site activities and ensure work as per drawings/QAP.",
        "Track progress, prepare DPRs/MPRs, and highlight bottlenecks.",
        "Coordinate labour, subcontractors, and site resources.",
        "Ensure safety compliance and conduct basic quality checks.",
        "Verify measurements for billing and maintain site records.",
        "Raise RFIs and resolve technical queries with consultants.",
        "Plan micro-schedules to meet milestones.",
        "Support inspections, audits, and handover documentation."
      ],

      details:
        "As a Site Engineer at L&T, you’ll drive on-ground execution with focus on quality, safety, and timelines, collaborating closely with planning, QA/QC, and procurement teams."
    },
    {
      _id: "c2",
      name: "Tata Projects",
      image: ibm,
      salary: "Rs. 5 - 8 LPA",
      position: "Structural Engineer",
      description: "Building structure design & analysis.",
      filter: "civil",

      skillsRequired: [
        "Structural analysis and design (STAAD/ETABS basics)",
        "Reinforced concrete and steel design fundamentals",
        "IS codes familiarity (IS 456, IS 800, IS 1893 etc.)",
        "Detailing and drawing review/markups",
        "Load calculations and foundation checks",
        "Report writing and design calculation notes",
        "Coordination with architects and MEP teams",
        "Constructability and value engineering mindset",
        "QA/QC awareness and peer review etiquette",
        "Proficiency in Excel and CAD"
      ],

      education:
        "B.E./B.Tech in Civil; M.Tech in Structures is a plus for design roles.",

      role: [
        "Assist in analysis/design of structural members as per codes.",
        "Prepare calculation sheets, design reports, and GA drawings review.",
        "Coordinate with drafting teams for rebar/connection detailing.",
        "Perform basic checks for lateral loads and serviceability.",
        "Issue RFIs and resolve clashes with other disciplines.",
        "Support design changes from site feedback and value engineering.",
        "Participate in design reviews and quality audits.",
        "Maintain document control and revision histories."
      ],

      details:
        "Structural roles emphasize code-compliant, constructible designs. You’ll translate architectural intent into safe, efficient structural solutions aligned with project constraints."
    },
    {
      _id: "c3",
      name: "GMR Infrastructure",
      image: wipro,
      salary: "Rs. 4 - 6 LPA",
      position: "Civil Planning Engineer",
      description: "Project planning & execution control.",
      filter: "civil",

      skillsRequired: [
        "Project planning (Primavera/MS Project basics)",
        "Work breakdown structure and micro-scheduling",
        "Resource planning and productivity tracking",
        "Progress S-curves and dashboards in Excel",
        "Coordination with site, procurement, and QS",
        "Risk identification and mitigation tracking",
        "Change management and baseline control",
        "Documentation and meeting minutes",
        "Analytical thinking and attention to detail",
        "Clear written and verbal updates"
      ],

      education:
        "B.E./B.Tech in Civil Engineering; planning certifications are a plus.",

      role: [
        "Develop and update schedules, highlighting critical paths.",
        "Monitor progress vs. baseline and propose catch-up plans.",
        "Coordinate inputs from site/QS/procurement for accuracy.",
        "Prepare dashboards, S-curves, and management reports.",
        "Track risks, constraints, and issue logs with owners.",
        "Support contractual claims with time impact analysis.",
        "Facilitate review meetings with crisp status summaries.",
        "Maintain audit-ready planning documentation."
      ],

      details:
        "Planning engineers enable predictable delivery. The role blends scheduling discipline with cross-functional coordination to safeguard milestones and costs."
    },
    {
      _id: "c4",
      name: "Shapoorji Pallonji",
      image: cognizant,
      salary: "Rs. 5 - 9 LPA",
      position: "Construction Manager",
      description: "Supervising construction & labor.",
      filter: "civil",

      skillsRequired: [
        "Project execution leadership and resource planning",
        "Contractor management and labour productivity",
        "Quality and safety oversight (QMS/EHS)",
        "Billing measurements and RA bill verification",
        "Material approvals and inspections",
        "Conflict resolution and stakeholder management",
        "Regulatory compliance and permits awareness",
        "Risk/issue tracking with mitigation plans",
        "Strong reporting and communication",
        "Decision-making under time pressure"
      ],

      education:
        "B.E./B.Tech in Civil with site execution experience; PMP/PM certifications are a plus.",

      role: [
        "Lead day-to-day execution to meet quality, safety, and schedule.",
        "Coordinate contractors, materials, and equipment mobilization.",
        "Review drawings, method statements, and ITPs with QA/QC.",
        "Conduct progress reviews; remove bottlenecks proactively.",
        "Verify measurements, certify bills, and control wastage.",
        "Engage with consultants and clients for inspections and approvals.",
        "Manage site documentation and compliance audits.",
        "Mentor engineers and foster a safety-first culture."
      ],

      details:
        "Construction Managers orchestrate people, materials, and methods to deliver predictable outcomes. The role is hands-on and impact-oriented with clear leadership expectations."
    }
  ],

  // --------------- MECHANICAL ---------------
  [
    {
      _id: "m1",
      name: "Bajaj Motors",
      image: amazon,
      salary: "Rs. 4 - 6 LPA",
      position: "Production Engineer",
      description: "Manufacturing & production workflow control.",
      filter: "mechanical",

      skillsRequired: [
        "Production planning and control (PPC) basics",
        "Lean, 5S, and basic Kaizen methods",
        "Process capability (Cp/Cpk) and basic stats",
        "Work instructions and SOP drafting",
        "Line balancing and takt-time awareness",
        "Quality checks and defect analysis (7 QC tools)",
        "Root cause analysis (5-Why, Ishikawa)",
        "ERP/MES familiarity and Excel reporting",
        "Safety practices and PPE compliance",
        "Cross-functional coordination"
      ],

      education:
        "B.E./B.Tech in Mechanical/Production/Industrial Engineering or equivalent.",

      role: [
        "Execute daily production plans and monitor line performance.",
        "Reduce downtime through quick changeovers and SMED basics.",
        "Track quality metrics and drive defect reduction initiatives.",
        "Update SOPs, work instructions, and skill matrices.",
        "Coordinate with maintenance, quality, and stores.",
        "Implement lean improvements for throughput and space.",
        "Report shift summaries and escalate bottlenecks.",
        "Support audits and compliance documentation."
      ],

      details:
        "Production Engineers ensure stable, efficient manufacturing lines. The role emphasizes takt-time adherence, waste reduction, and cross-team coordination."
    },
    {
      _id: "m2",
      name: "Tata Motors",
      image: meta,
      salary: "Rs. 5 - 9 LPA",
      position: "Design Engineer",
      description: "Mechanical CAD designing (AutoCAD/CATIA).",
      filter: "mechanical",

      skillsRequired: [
        "CAD proficiency (CATIA/Creo/SolidWorks/AutoCAD)",
        "GD&T fundamentals and tolerance stacks",
        "DFM/DFA principles and manufacturability checks",
        "Material selection and basic FEM awareness",
        "BOM management and revision control",
        "Drawing standards and release processes",
        "Cross-functional collaboration with manufacturing",
        "Problem-solving and quick iteration",
        "PLM tools familiarity",
        "Documentation and version hygiene"
      ],

      education:
        "B.E./B.Tech in Mechanical/Automobile; CAD certifications are advantageous.",

      role: [
        "Create/modify 3D models, assemblies, and detailed drawings.",
        "Apply GD&T and ensure compliance with standards.",
        "Collaborate with manufacturing to resolve feasibility issues.",
        "Support design reviews, checklists, and DVP planning.",
        "Maintain PLM/BOM and change management records.",
        "Assist with prototype builds and engineering trials.",
        "Address ECNs quickly with accurate updates.",
        "Prepare documentation for releases and audits."
      ],

      details:
        "Design Engineers convert requirements into manufacturable designs. You’ll iterate rapidly with manufacturing and quality teams to balance cost, performance, and reliability."
    },
    {
      _id: "m3",
      name: "Mahindra & Mahindra",
      image: accenture,
      salary: "Rs. 4 - 8 LPA",
      position: "Quality Engineer",
      description: "Product testing and quality assurance.",
      filter: "mechanical",

      skillsRequired: [
        "Incoming/in-process/FG quality checks",
        "SPC, MSA basics and control charts",
        "PPAP/APQP documentation exposure",
        "8D, CAPA and containment actions",
        "Root cause analysis and problem-solving",
        "Gauge R&R and calibration coordination",
        "Supplier quality coordination",
        "Audit readiness and ISO/IATF awareness",
        "Reporting and presentation skills",
        "Attention to detail and discipline"
      ],

      education:
        "B.E./B.Tech in Mechanical/Production/Industrial or equivalent.",

      role: [
        "Monitor process quality and initiate corrective actions.",
        "Lead 8D problem-solving with cross-functional teams.",
        "Prepare PPAP documents and maintain quality records.",
        "Coordinate gauge calibration and MSA studies.",
        "Support supplier development and incoming quality.",
        "Analyze defects and drive PPM reduction.",
        "Prepare daily/weekly quality reports for reviews.",
        "Ensure compliance with ISO/IATF standards."
      ],

      details:
        "Quality Engineers safeguard customer experience by stabilizing processes and driving systemic fixes. The role is analytical, documentation-heavy, and highly collaborative."
    },
    {
      _id: "m4",
      name: "Maruti Suzuki",
      image: microsoft,
      salary: "Rs. 5 - 7 LPA",
      position: "Maintenance Engineer",
      description: "Machine maintenance & process control.",
      filter: "mechanical",

      skillsRequired: [
        "Preventive and predictive maintenance planning",
        "TPM pillars and OEE improvement basics",
        "Hydraulics/pneumatics and mechanical assemblies",
        "CMMS usage and spare management",
        "Root cause analysis for breakdowns",
        "Safety LOTO procedures and compliance",
        "Basic electrical/PLC awareness for coordination",
        "Documentation and shift reporting",
        "Vendor coordination and AMC oversight",
        "Cost-conscious decision making"
      ],

      education:
        "B.E./B.Tech in Mechanical/Mechatronics or related; maintenance exposure preferred.",

      role: [
        "Execute PM schedules and minimize breakdowns.",
        "Diagnose issues and implement sustainable fixes.",
        "Maintain spares inventory and AMC adherence.",
        "Track OEE, MTTR/MTBF and drive improvement actions.",
        "Coordinate with production and quality on recurring issues.",
        "Update CMMS records and maintain audit-ready logs.",
        "Enforce safety and conduct toolbox talks.",
        "Support commissioning of new equipment."
      ],

      details:
        "Maintenance Engineers keep production reliable and safe. Success is measured by uptime, rapid troubleshooting, and disciplined documentation."
    }
  ],

  // --------------- ELECTRICAL ---------------
  [
    {
      _id: "e1",
      name: "Adani Power",
      image: tcs,
      salary: "Rs. 5 - 8 LPA",
      position: "Electrical Engineer",
      description: "Substation & transmission supervision.",
      filter: "electrical",

      skillsRequired: [
        "Power systems basics (generation, transmission, distribution)",
        "Substation equipment (transformers, breakers, relays) familiarity",
        "Protection coordination basics and relay setting awareness",
        "Single-line diagrams and schematics reading",
        "Testing/commissioning basics and safety procedures",
        "Documentation and permit-to-work processes",
        "SCADA awareness and alarm handling",
        "Vendor coordination and inspection reports",
        "MS Office/Excel-based reporting",
        "EHS compliance and risk assessment"
      ],

      education:
        "B.E./B.Tech in Electrical/Electrical & Electronics Engineering or equivalent.",

      role: [
        "Supervise substation operations with adherence to safety standards.",
        "Assist in testing/commissioning of protection and control systems.",
        "Review SLDs, wiring diagrams, and as-built documentation.",
        "Coordinate with O&M teams for planned shutdowns and maintenance.",
        "Prepare daily/weekly performance and incident reports.",
        "Liaise with contractors/vendors for inspections and repairs.",
        "Monitor asset health and raise preventive actions.",
        "Support audits and compliance checks."
      ],

      details:
        "The role focuses on reliable and safe operation of high-voltage assets. You’ll gain hands-on exposure to protection, control, and field coordination."
    },
    {
      _id: "e2",
      name: "NTPC Ltd",
      image: ibm,
      salary: "Rs. 6 - 10 LPA",
      position: "Power Plant Engineer",
      description: "Power generation & safety operations.",
      filter: "electrical",

      skillsRequired: [
        "Power plant systems (boiler, turbine, generator, switchyard) overview",
        "HT/LT systems, motors, drives, and starters",
        "Protection schemes and interlocks familiarity",
        "Instrumentation/control basics for coordination",
        "SOPs, LOTO, and safety culture",
        "Shift operations and log-keeping discipline",
        "Troubleshooting and RCA documentation",
        "Energy efficiency and loss reduction mindset",
        "Reporting and coordination with multi-disciplinary teams",
        "Regulatory/environmental compliance awareness"
      ],

      education:
        "B.E./B.Tech in Electrical/Energy/Power; exposure to thermal/renewable plants is a plus.",

      role: [
        "Monitor and operate plant electrical systems per SOPs.",
        "Coordinate planned shutdowns and startups safely.",
        "Assist in testing protection devices and auxiliaries.",
        "Maintain accurate shift logs and parameters.",
        "Diagnose faults and implement corrective actions.",
        "Work with mechanical/controls teams for reliability.",
        "Contribute to energy-saving and improvement projects.",
        "Participate in safety drills and compliance checks."
      ],

      details:
        "NTPC plant engineers ensure consistent generation while maintaining rigorous safety and reliability standards. The environment is structured, data-driven, and team-oriented."
    },
    {
      _id: "e3",
      name: "Siemens India",
      image: wipro,
      salary: "Rs. 7 - 12 LPA",
      position: "Automation Engineer",
      description: "PLC / SCADA system operations.",
      filter: "electrical",

      skillsRequired: [
        "PLC programming basics (Siemens/Allen-Bradley) and ladder logic",
        "SCADA/HMI configuration and alarms/trends setup",
        "Field instrumentation and industrial communication protocols",
        "Electrical panels and wiring practices",
        "Troubleshooting control loops and I/O mapping",
        "Documentation—FDS, FAT/SAT, and as-built drawings",
        "Version control and change management for logic",
        "Safety interlocks and functional testing",
        "Client communication and training support",
        "On-site commissioning discipline"
      ],

      education:
        "B.E./B.Tech in Electrical/Electronics/Instrumentation; automation coursework or internships preferred.",

      role: [
        "Configure PLC/SCADA applications per functional specs.",
        "Conduct FAT/SAT, generate reports, and close punch points.",
        "Integrate field instruments and validate I/O.",
        "Troubleshoot issues during commissioning and go-live.",
        "Document logic changes and maintain version histories.",
        "Train operators and hand over O&M manuals.",
        "Coordinate with mechanical/process teams for logic tuning.",
        "Support service calls and periodic maintenance."
      ],

      details:
        "Automation Engineers translate process needs into reliable control logic. The role spans development, testing, commissioning, and customer enablement."
    },
    {
      _id: "e4",
      name: "BHEL",
      image: cognizant,
      salary: "Rs. 6 - 9 LPA",
      position: "Testing Engineer",
      description: "Electrical equipment inspection & testing.",
      filter: "electrical",

      skillsRequired: [
        "Knowledge of transformers, generators, switchgear, and motors",
        "Testing procedures (insulation resistance, tan delta, HV tests)",
        "Standards familiarity (IS/IEC) and acceptance criteria",
        "Test report writing and documentation",
        "Calibration and instrument handling",
        "Root cause analysis for failures",
        "Safety compliance and test lab discipline",
        "Coordination with design/manufacturing teams",
        "Quality systems and audit readiness",
        "Attention to detail and accuracy"
      ],

      education:
        "B.E./B.Tech in Electrical or related; exposure to testing/QA is beneficial.",

      role: [
        "Execute routine and type tests as per standards and specs.",
        "Record measurements accurately and prepare test reports.",
        "Coordinate with production for rework or corrective actions.",
        "Maintain calibration status of instruments and fixtures.",
        "Support customer inspections and address observations.",
        "Ensure safety protocols throughout testing operations.",
        "Analyze failures and recommend preventive measures.",
        "Maintain tidy, audit-ready test documentation."
      ],

      details:
        "Testing Engineers at BHEL ensure equipment meets performance and safety standards before dispatch. The job demands precision, rigor, and cross-team coordination."
    }
  ]


];

export const assets = {
  headerLogo,
  headerRight,
  tcs,
};
