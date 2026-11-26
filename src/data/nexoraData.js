export const NAV_LINKS = [
  { id: 'services', label: 'Capabilities' },
  { id: 'architecture', label: 'Process' },
  { id: 'work', label: 'Case Studies' },
  { id: 'engagement', label: 'Models' },
  { id: 'contact', label: 'Contact' },
]

export const SCOPE_OPTIONS = [
  'Custom Enterprise Software',
  'AI Agents & LLM Systems',
  'Cloud-Native & DevOps',
  'Web, Mobile & Design Systems',
  'Zero-Trust Cybersecurity',
  'Real-Time Data Platforms',
]

export const HERO_METRICS = [
  { value: 240, suffix: '+', label: 'Enterprise Systems Shipped' },
  { value: 99.99, decimals: 2, suffix: '%', label: 'Production Uptime SLA' },
  { value: 42, suffix: 'ms', label: 'Global Edge P95 Latency' },
  { value: 18, suffix: '+', label: 'Countries Served Worldwide' },
]

export const TECH_STACK_ROW_1 = [
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React & Next.js', category: 'Frontend' },
  { name: 'Go & Rust', category: 'Systems' },
  { name: 'AWS & Azure', category: 'Cloud' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'PostgreSQL', category: 'Data' },
  { name: 'GraphQL', category: 'API Layer' },
]

export const TECH_STACK_ROW_2 = [
  { name: 'PyTorch & LLMs', category: 'AI Systems' },
  { name: 'Apache Kafka', category: 'Streaming' },
  { name: 'Docker', category: 'Containers' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Redis Cluster', category: 'Caching' },
  { name: 'Zero-Trust IAM', category: 'Security' },
  { name: 'OpenTelemetry', category: 'Observability' },
  { name: 'Snowflake', category: 'Warehousing' },
]

export const SERVICES = [
  {
    id: 'enterprise-software',
    badge: 'Core Engineering',
    title: 'Custom Enterprise Software',
    shortDesc:
      'Mission-critical ERP, SaaS platforms, and distributed backends engineered for high concurrency and zero technical debt.',
    fullDesc:
      'We architect modular, domain-driven enterprise applications that replace brittle legacy monoliths. Every system is built with strict type safety, automated contract testing, and resilient event-driven microservices.',
    accent: 'cyan',
    span: 'lg:col-span-2',
    deliverables: [
      'Domain-Driven Microservices & API Gateways',
      'Legacy System Modernization & Zero-Downtime Migration',
      'Multi-Tenant B2B SaaS Core Architecture',
      'Automated CI/CD & Integration Test Harnesses',
    ],
    metrics: [
      { label: 'Release Velocity', value: '4.2x faster' },
      { label: 'Code Coverage', value: '94%+' },
    ],
    visualType: 'architecture',
  },
  {
    id: 'ai-engineering',
    badge: 'Applied Intelligence',
    title: 'AI Agents & LLM Systems',
    shortDesc:
      'Production-grade RAG pipelines, autonomous workflow agents, and fine-tuned enterprise intelligence layers.',
    fullDesc:
      'From vector knowledge graphs to deterministic tool-calling agents with strict guardrails and evaluation suites, we turn generative AI into measurable operational leverage.',
    accent: 'indigo',
    span: 'lg:col-span-1',
    deliverables: [
      'Enterprise RAG & Hybrid Vector Search',
      'Multi-Agent Workflow Orchestration',
      'LLM Evaluation, Guardrails & Cost Routing',
      'Private VPC Model Deployment',
    ],
    metrics: [
      { label: 'Task Automation', value: '68% reduction' },
      { label: 'Hallucination Rate', value: '<0.8%' },
    ],
    visualType: 'neural',
  },
  {
    id: 'cloud-devops',
    badge: 'Infrastructure',
    title: 'Cloud-Native & DevOps',
    shortDesc:
      'Multi-region Kubernetes clusters, Terraform infrastructure-as-code, and resilient FinOps automation.',
    fullDesc:
      'We design self-healing cloud topologies across AWS, GCP, and Azure with immutable infrastructure, automated canary rollouts, and real-time OpenTelemetry observability.',
    accent: 'emerald',
    span: 'lg:col-span-1',
    deliverables: [
      'Multi-Region Kubernetes (EKS/GKE) Foundations',
      'GitOps Pipelines with ArgoCD & Terraform',
      'FinOps Cloud Cost Optimization (30–45% savings)',
      '24/7 SRE Observability & Incident Automation',
    ],
    metrics: [
      { label: 'Infra Cost Saved', value: '38% avg' },
      { label: 'Deploy Frequency', value: '50+ / day' },
    ],
    visualType: 'cloud',
  },
  {
    id: 'web-mobile',
    badge: 'Digital Products',
    title: 'Web, Mobile & Design Systems',
    shortDesc:
      'Fluid, accessible web applications and native-speed mobile experiences crafted with sub-second interactions.',
    fullDesc:
      'Our product engineers and motion designers pair tokenized design systems with edge-rendered React, Next.js, and React Native architectures that delight users on every viewport.',
    accent: 'sky',
    span: 'lg:col-span-2',
    deliverables: [
      'Edge-Rendered Web Apps (React / Next.js)',
      'Cross-Platform iOS & Android Apps',
      'Accessible Enterprise Design Systems',
      'Core Web Vitals & Motion Performance Tuning',
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '99 / 100' },
      { label: 'User Retention', value: '+47%' },
    ],
    visualType: 'interface',
  },
  {
    id: 'cybersecurity',
    badge: 'Security & Compliance',
    title: 'Zero-Trust Cybersecurity',
    shortDesc:
      'End-to-end encryption, SOC2/ISO-ready DevSecOps pipelines, identity federation, and continuous threat modeling.',
    fullDesc:
      'Security is embedded into every pull request. We enforce SAST/DAST scanning, mTLS service meshes, hardware-backed secrets management, and compliance telemetry.',
    accent: 'violet',
    span: 'lg:col-span-1',
    deliverables: [
      'Zero-Trust Network & mTLS Service Mesh',
      'SOC2 Type II, HIPAA & GDPR Engineering Controls',
      'Automated Vulnerability & SBOM Scanning',
      'Penetration Testing & Red-Team Remediation',
    ],
    metrics: [
      { label: 'Mean Time to Patch', value: '<4 hours' },
      { label: 'Audit Readiness', value: '100%' },
    ],
    visualType: 'shield',
  },
  {
    id: 'data-engineering',
    badge: 'Data & Analytics',
    title: 'Real-Time Data Platforms',
    shortDesc:
      'High-throughput streaming pipelines, lakehouse architectures, and executive telemetry dashboards.',
    fullDesc:
      'Unify fragmented operational silos into sub-second streaming pipelines built on Kafka, dbt, and modern cloud data warehouses for instant operational clarity.',
    accent: 'teal',
    span: 'lg:col-span-2',
    deliverables: [
      'Event Streaming (Kafka / Flink) Backbones',
      'Modern Data Lakehouse & dbt Transformations',
      'Executive BI & Anomaly Detection Engines',
      'Data Governance, Lineage & Quality SLAs',
    ],
    metrics: [
      { label: 'Events / Second', value: '1.4M+' },
      { label: 'Query Speedup', value: '12x faster' },
    ],
    visualType: 'pipeline',
  },
]

export const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Architectural Discovery',
    duration: 'Weeks 1–2',
    summary:
      'Deep technical audit, domain modeling, threat mapping, and ROI-driven system specification.',
    deliverables: [
      'System Context & C4 Architecture Blueprints',
      'Cloud Cost & Scalability Forecast',
      'API Contracts & Data Schema Specification',
    ],
    artifact: 'architecture-blueprint.md',
    status: 'Verified by Principal Architect',
  },
  {
    step: '02',
    title: 'Interactive Prototyping',
    duration: 'Weeks 2–4',
    summary:
      'High-fidelity clickable systems, design tokens, and proof-of-concept benchmarks for critical paths.',
    deliverables: [
      'Interactive Design System & Motion Specs',
      'Core Infrastructure Sandbox Provisioned',
      'Load & Latency Benchmark Baseline',
    ],
    artifact: 'nexora-design-tokens.json',
    status: 'Stakeholder Sign-Off',
  },
  {
    step: '03',
    title: 'Agile Pod Execution',
    duration: '2-Week Sprints',
    summary:
      'Dedicated full-stack, cloud, and QA engineers shipping production increments every single week.',
    deliverables: [
      'Weekly Staging Releases & Live Demos',
      'Automated Unit, E2E & Contract Test Suites',
      'Transparent Velocity & Burn-Up Telemetry',
    ],
    artifact: 'sprint-release-v2.4.log',
    status: 'CI/CD Pipeline Green',
  },
  {
    step: '04',
    title: 'Hardening & Security',
    duration: 'Pre-Launch',
    summary:
      'Chaos engineering, penetration testing, load simulations at 5x peak traffic, and compliance checks.',
    deliverables: [
      '5x Peak Traffic Stress & Failover Validation',
      'OWASP & Dependency SBOM Security Audit',
      'Runbooks, Alerting & On-Call Playbooks',
    ],
    artifact: 'security-attestation.pdf',
    status: 'Zero Critical Findings',
  },
  {
    step: '05',
    title: 'Zero-Downtime Scale',
    duration: 'Continuous',
    summary:
      'Canary production rollouts, 24/7 SRE telemetry, FinOps tuning, and continuous feature evolution.',
    deliverables: [
      'Blue/Green & Progressive Canary Rollouts',
      '99.99% Uptime SLA & Real-Time Tracing',
      'Quarterly Architecture Optimization Reviews',
    ],
    artifact: 'sre-uptime-report.json',
    status: 'Live in Multi-Region Prod',
  },
]

export const CASE_STUDIES = [
  {
    id: 'finpulse-core',
    title: 'FinPulse Real-Time Clearing Mesh',
    client: 'Global Tier-2 Settlement Network',
    category: 'FinTech / Enterprise',
    year: '2026',
    headlineMetric: '1.2M tx/min',
    metricLabel: 'Peak Clearing Throughput',
    summary:
      'Re-architected a 14-year-old monolithic ledger into a fault-tolerant Go + Kafka event mesh processing cross-border settlements with sub-40ms finality.',
    challenge:
      'Legacy batch settlement windows caused 18-hour reconciliation delays and frequent lock contention during market surges.',
    solution:
      'Implemented deterministic event sourcing with idempotent state machines, multi-region PostgreSQL Citus sharding, and real-time OpenTelemetry anomaly alerts.',
    stack: ['Go', 'Apache Kafka', 'PostgreSQL', 'Kubernetes', 'Terraform'],
    results: [
      { label: 'Settlement Latency', value: '18h → 38ms' },
      { label: 'Infra Overhead', value: '-41%' },
      { label: 'Availability', value: '99.998%' },
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: 'aether-ai-ops',
    title: 'Aether Autonomous ITSM Copilot',
    client: 'Fortune 500 Logistics Group',
    category: 'AI Systems',
    year: '2026',
    headlineMetric: '71% Auto-Resolved',
    metricLabel: 'Tier-1 & Tier-2 Incidents',
    summary:
      'Built a private VPC multi-agent AI triage and remediation platform integrated across Jira, ServiceNow, and Kubernetes runbooks.',
    challenge:
      'Over 28,000 monthly infrastructure tickets overwhelmed SRE teams, driving mean-time-to-resolution above 4.5 hours.',
    solution:
      'Deployed hybrid semantic + graph RAG over internal incident postmortems with human-in-the-loop approval gates and deterministic audit trails.',
    stack: ['Python', 'PyTorch', 'Qdrant', 'React', 'AWS Bedrock'],
    results: [
      { label: 'MTTR Reduction', value: '4.5h → 11m' },
      { label: 'Annual Savings', value: '$3.4M' },
      { label: 'Accuracy Score', value: '97.4%' },
    ],
    gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent',
  },
  {
    id: 'vanguard-cloud',
    title: 'Helios Multi-Cloud SaaS Control Plane',
    client: 'Helios Health Informatics',
    category: 'Cloud & DevOps',
    year: '2025',
    headlineMetric: '4x Faster Deploys',
    metricLabel: 'Across 14 Global Regions',
    summary:
      'Unified fragmented regional deployments into an automated GitOps platform with HIPAA-compliant tenant isolation and zero-touch disaster recovery.',
    challenge:
      'Manual environment provisioning took 3 weeks per enterprise customer onboarding and suffered from configuration drift.',
    solution:
      'Created composable Terraform modules, ArgoCD progressive delivery pipelines, and an internal developer portal for one-click compliant environments.',
    stack: ['Terraform', 'ArgoCD', 'EKS', 'TypeScript', 'Datadog'],
    results: [
      { label: 'Tenant Onboarding', value: '21d → 25m' },
      { label: 'Security Compliance', value: 'SOC2 + HIPAA' },
      { label: 'Cloud Spend', value: '-36%' },
    ],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'kinetix-commerce',
    title: 'Kinetix Composable B2B Portal',
    client: 'Kinetix Industrial Supply',
    category: 'FinTech / Enterprise',
    year: '2025',
    headlineMetric: '+64% Conversion',
    metricLabel: 'Enterprise Self-Serve Orders',
    summary:
      'Engineered an edge-rendered B2B procurement platform featuring real-time ERP inventory sync, custom contract pricing, and instant 3D CAD previews.',
    challenge:
      'Distributors relied on fax/email spreadsheets because the legacy portal took 9+ seconds to load multi-thousand SKU catalogs.',
    solution:
      'Built a Next.js + Rust search edge layer backed by Typesense and Redis, achieving instant sub-60ms faceted filtering across 1.8M SKUs.',
    stack: ['Next.js', 'TypeScript', 'Rust', 'Redis', 'GraphQL'],
    results: [
      { label: 'Catalog Search', value: '9.2s → 48ms' },
      { label: 'Order Volume', value: '+$48M ARR' },
      { label: 'Core Web Vitals', value: '99/100' },
    ],
    gradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
  },
]

export const ENGAGEMENT_MODELS = [
  {
    id: 'dedicated-pod',
    name: 'Dedicated Engineering Pod',
    tagline: 'Scale velocity with an embedded autonomous squad',
    idealFor: 'Growing SaaS & Enterprise Product Teams',
    timeline: 'Ongoing • Launch in 10 Days',
    composition: [
      '1 Principal Tech Lead / Architect',
      '3–5 Senior Full-Stack & Cloud Engineers',
      '1 Product Designer + 1 QA Automation Lead',
    ],
    highlights: [
      'Direct Slack & Jira integration with your leadership',
      'Weekly production-ready sprint demos',
      'Full IP ownership & zero vendor lock-in',
    ],
    badge: 'Most Popular',
  },
  {
    id: 'turnkey-build',
    name: 'Turnkey Platform Build',
    tagline: 'End-to-end delivery from blueprint to production launch',
    idealFor: 'New Platforms, AI Products & Legacy Rebuilds',
    timeline: '8–16 Weeks Fixed Milestones',
    composition: [
      'Fixed-scope architectural roadmap & SLA',
      'UI/UX Design System + Full-Stack Build',
      'Security Hardening & Production Handover',
    ],
    highlights: [
      'Predictable milestone-based investment',
      'Includes load testing & DevSecOps setup',
      '90-day post-launch hypercare warranty',
    ],
    badge: 'Fixed Scope',
  },
  {
    id: 'advisory',
    name: 'Cloud & AI Architecture Sprint',
    tagline: 'De-risk critical technical decisions in 3 weeks',
    idealFor: 'CTOs, Enterprise Modernization & AI Readiness',
    timeline: '2–4 Weeks Intensive',
    composition: [
      'Principal Systems & Cloud Architects',
      'Security, FinOps & Bottleneck Diagnostics',
      'Executable Proof-of-Concept & Roadmap',
    ],
    highlights: [
      'Comprehensive codebase & cloud cost audit',
      'Working AI or microservice PoC validated on your data',
      'Board-ready modernization & ROI blueprint',
    ],
    badge: 'Strategic',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Nexora Technologies didn’t just write code—they re-engineered our entire clearing backbone. We went from nightly batch bottlenecks to real-time global settlement with zero downtime during cutover.',
    author: 'Elena Vance',
    role: 'Chief Technology Officer, FinPulse Global',
    metric: '99.998% Production Uptime',
  },
  {
    quote:
      'Their AI engineering squad delivered a compliant, private-VPC copilot in ten weeks that now resolves over 70% of our tier-1 infrastructure incidents automatically. Best engineering partner we have worked with.',
    author: 'Marcus Chen',
    role: 'VP of Platform Engineering, Aether Logistics',
    metric: '$3.4M Annual OpEx Saved',
  },
  {
    quote:
      'From the precision of their design system to the discipline of their Terraform GitOps pipelines, Nexora operates at a caliber rarely seen outside top Silicon Valley engineering orgs.',
    author: 'Dr. Priya Nair',
    role: 'Head of Digital Systems, Helios Health',
    metric: '4x Faster Global Releases',
  },
]
