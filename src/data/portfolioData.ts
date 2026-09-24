import { ContactInfo, ExperienceItem, ProjectItem, SkillCategory, EducationItem } from '../types';

export const PERSONAL_INFO: ContactInfo = {
  name: 'Neha Sain',
  title: 'Python FullStack Developer',
  location: 'Gurgaon, Haryana, India',
  phone: '+91-9509961811',
  email: 'nehasain7180@gmail.com',
  linkedin: 'https://linkedin.com/in/neha-sain-888672211',
  github: 'https://github.com/Neha10Sain',
  portfolioUrl: 'https://neha10sain.github.io/Portfolio-Neha-Sain/',
  summary:
    'Results-driven Python FullStack Developer with 2+ years of enterprise experience and a track record of delivering web and data applications for 10+ freelance clients as well as enterprise production ETL pipelines and databases for Nokia Networks. Hands-on with Python (Flask, Pandas, NumPy), JavaScript, React, PostgreSQL, MySQL, and MongoDB for end-to-end web applications, automated alerting, and KPI scorecards.',
  availableForHire: true,
};

export const CORE_METRICS = [
  { label: 'Freelance Clients', value: '10+', suffix: 'Clients', sublabel: 'Web & data solutions delivered' },
  { label: 'Years of Experience', value: '2+', suffix: 'Years', sublabel: 'Enterprise Production' },
  { label: 'Manual Effort Reduction', value: '80%', suffix: 'Reduction', sublabel: 'Automated Power BI & ETL' },
  { label: 'Enterprise Applications', value: '4+', suffix: 'Shipped', sublabel: 'Nokia & Cloud Platforms' },
  { label: 'Global Cross-Region Support', value: '3+', suffix: 'Regions', sublabel: 'India, Sri Lanka, Bangladesh' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'teleindia-nokia',
    role: 'Python Developer (Full Stack)',
    company: 'Teleindia Telecom Services',
    clientAccount: 'Deployed on Client Account: Nokia Networks',
    period: 'Aug 2024 – Present',
    location: 'Gurgaon, India',
    highlight: true,
    description: [
      'Build end-to-end ETL pipelines with Python (Pandas, NumPy), integrating with PostgreSQL for downstream analytics and real-time operational reporting.',
      'Developed a PMO KPI Application (Python, Flask, PostgreSQL) that transforms multi-project cost data into drill-down dashboards, activity logs, and automated email alerts — reviewed directly in Nokia’s monthly account reviews.',
      'Design internal automation and data-visualization tools using Python, Power BI, and Power Automate, replacing slow manual Excel-based workflows.',
      'Automate report generation and multi-level approval workflows in Python, cutting turnaround time by 80% and eliminating manual data-entry errors.',
      'Manage source control, versioning, and release workflows for production services using Git and GitHub.',
      'Serve as primary technical point of contact for Nokia’s cross-functional teams across international regions including Sri Lanka and Bangladesh, translating ambiguous business requirements into robust, data-driven solutions.',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'PostgreSQL',
      'Flask',
      'Power BI',
      'Power Automate',
      'AWS',
      'Git / GitHub',
      'RBAC',
      'SMTP',
    ],
    metrics: [
      { label: 'Manual Time Saved', value: '80%' },
      { label: 'Regions Supported', value: '3+' },
      { label: 'Data Accuracy', value: '99.9%' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'neupac-surgical',
    title: 'Neupac Packaging & Surgical Solutions',
    subtitle: 'Enterprise Corporate Catalog & Medical Equipment Web System',
    category: 'Enterprise Website',
    period: 'Client Freelance Project',
    featured: true,
    link: 'https://www.neupacksurgical.com/',
    image: '/neupac-surgical-preview.svg',
    badge: 'Live Client Production',
    description:
      'Designed and developed a comprehensive corporate catalog application for a leading manufacturer of industrial packaging machinery and surgical medical products. Implemented dynamic backend components utilizing Python Flask to manage multiple inventory categories.',
    bulletPoints: [
      'Designed and developed a comprehensive corporate catalog application for a leading manufacturer of industrial packaging machinery and surgical medical products.',
      'Implemented dynamic backend components utilizing Python Flask to manage multiple inventory categories.',
      'Engineered structured layout, dynamic contact request processing, separate catalogs for machinery and medical products, and responsive grids.',
    ],
    technologies: ['HTML5', 'CSS3', 'Vanilla JS', 'Python Flask', 'Gunicorn', 'Responsive UI'],
    metrics: [
      { label: 'Industry', value: 'Packaging & Surgical' },
      { label: 'Backend Stack', value: 'Python Flask' },
      { label: 'Web Status', value: 'Live Production' },
    ],
    architecture: {
      frontend: 'Structured semantic HTML5, modern CSS3, and Vanilla JavaScript with responsive product grids',
      backend: 'Python Flask lightweight web service served with Gunicorn WSGI server',
      database: 'Categorized inventory architecture separating industrial packaging machinery and sterile surgical lines',
      security: 'Contact form input sanitization, spam mitigation, and HTTPS deployment',
      reporting: 'Direct client inquiry notification pipeline for commercial sales teams',
    },
  },
  {
    id: 'finance-cost-tracking',
    title: 'Finance Cost Tracking & Project Health Analysis',
    subtitle: 'Enterprise Financial Analytics with RBAC & Automated Sync',
    category: 'Enterprise Systems',
    period: 'Sep 2025 – Present',
    featured: true,
    description:
      'A comprehensive full-stack enterprise platform enabling RBAC-controlled multi-step approval workflows for financial data review, interactive cost auditing, and automated real-time synchronization with Power BI.',
    bulletPoints: [
      'Built full-stack application with React, Node.js, and PostgreSQL enabling rigorous RBAC-controlled, multi-tier approval workflows for financial auditing.',
      'Engineered save/review/submit functionality via high-density interactive data tables, cutting manual Excel work by 80%.',
      'Automated bidirectional Power BI cost updates, scheduled backups/sync routines, and SMTP email notifications for approval milestones.',
    ],
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Power BI', 'RBAC', 'SMTP', 'Tailwind CSS', 'REST API'],
    metrics: [
      { label: 'Excel Work Cut', value: '80%' },
      { label: 'Security Model', value: 'Multi-Role RBAC' },
      { label: 'Alerting', value: 'Automated SMTP' },
    ],
    architecture: {
      frontend: 'React.js with dynamic data tables & responsive status trackers',
      backend: 'Node.js REST API with JWT authorization & audit logging',
      database: 'PostgreSQL with relational constraint integrity and sync triggers',
      security: 'RBAC with strict tenant isolation and approval audit trail',
      reporting: 'Automated Power BI data sync and scheduled report exports',
    },
  },
  {
    id: 'inventory-deployment-tracking',
    title: 'Inventory Deployment Tracking Application',
    subtitle: 'Hybrid SQL/NoSQL Telecom Material Movement & Site Readiness System',
    category: 'Full Stack',
    period: 'Mar 2025 – Jul 2025',
    featured: true,
    description:
      'High-throughput full-stack platform built to track telecom equipment movement, inventory logistics, and site readiness milestones across complex nationwide deployment stages.',
    bulletPoints: [
      'Built and deployed a full-stack tracking application to monitor equipment dispatch, transit logs, and on-site readiness metrics.',
      'Developed an interactive dashboard for plan-vs-actual progress monitoring with real-time milestone filtering.',
      'Implemented hybrid data architecture using MySQL for ACID transactional inventory tracking and MongoDB for dynamic document and bill-of-materials storage.',
    ],
    technologies: ['React.js', 'Node.js', 'MySQL', 'MongoDB', 'REST APIs', 'Express', 'Tailwind CSS'],
    metrics: [
      { label: 'Architecture', value: 'Hybrid SQL + NoSQL' },
      { label: 'Visibility', value: 'Real-time Site Status' },
      { label: 'Tracking Mode', value: 'Plan vs Actual' },
    ],
    architecture: {
      frontend: 'React with interactive milestone filters & logistics visualizers',
      backend: 'Express.js microservices coordinating dual-database updates',
      database: 'MySQL (transactional order flow) + MongoDB (flexible spec documents)',
      security: 'Token-based session management and route protection',
    },
  },
  {
    id: 'nokia-pmo-kpi',
    title: 'PMO KPI Analytics & Reporting Application',
    subtitle: 'Live Monthly Business Review Dashboard for Nokia Networks',
    category: 'Data Engineering & ETL',
    period: 'Aug 2024 – Present',
    featured: true,
    description:
      'Production Python & Flask data transformation platform converting multi-project operational costs into interactive drill-down dashboards, anomaly detection logs, and automated stakeholder alerts.',
    bulletPoints: [
      'Engineered automated ETL pipelines parsing heterogeneous project spreadsheets and data streams into unified PostgreSQL analytics schemas.',
      'Developed interactive drill-down scorecards and cost variation logs reviewed in monthly Nokia regional leadership meetings.',
      'Integrated threshold-based automated SMTP email alerts to immediately notify project managers of cost overrun risks.',
    ],
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Pandas', 'NumPy', 'Power BI', 'Power Automate', 'SMTP'],
    metrics: [
      { label: 'Adoption', value: 'Nokia PMO Core' },
      { label: 'Coverage', value: 'Multi-Project Analytics' },
      { label: 'Alert Latency', value: '< 60 Seconds' },
    ],
    architecture: {
      frontend: 'Embedded Power BI visualizers + Custom Flask responsive views',
      backend: 'Python Flask ETL engine powered by Pandas & NumPy pipelines',
      database: 'PostgreSQL analytical warehouse with indexed historical metrics',
      security: 'Strict internal network access control and role authorization',
      reporting: 'Automated executive PDF/Excel scorecard exports via Power Automate',
    },
  },
  {
    id: 'nicare-elearning',
    title: 'NI Care Enterprise E-Learning Platform',
    subtitle: 'Cloud E-Learning Infrastructure with AWS & Dynamic Content Mapping',
    category: 'Cloud & Web',
    period: 'Nov 2024 – Feb 2025',
    featured: false,
    link: 'https://nicarelearning.com',
    description:
      'Scalable cloud e-learning platform architected for enterprise client organizations to provide customized training modules, reducing expensive on-site vendor reliance.',
    bulletPoints: [
      'Built and maintained a scalable e-learning platform for corporate clients, directly lowering reliance on on-site vendor training sessions.',
      'Implemented customer-specific content mapping logic and an enforced 120-day password expiration security lifecycle.',
      'Deployed on AWS cloud using scalable storage, high-availability architecture, and CloudFront content delivery.',
    ],
    technologies: ['React.js', 'Python', 'AWS (EC2, S3, CloudFront)', 'PostgreSQL', 'Security Policies'],
    metrics: [
      { label: 'Domain', value: 'nicarelearning.com' },
      { label: 'Cloud Host', value: 'AWS EC2 + S3' },
      { label: 'Security Policy', value: '120-Day Rotation' },
    ],
    architecture: {
      frontend: 'Responsive React learning interface with progress state tracking',
      backend: 'Python API for course progression and role-based enrollment',
      database: 'PostgreSQL for learner analytics and course completion logs',
      security: 'Custom content isolation per enterprise tenant',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: 'Programming & Core Languages',
    description: 'Foundational languages for robust systems, data science, and web applications',
    skills: [
      { name: 'Python', level: 95, tags: ['Pandas', 'NumPy', 'Flask', 'Django'], isKeySkill: true },
      { name: 'SQL', level: 92, tags: ['PostgreSQL', 'MySQL', 'Complex Queries', 'Indexing'], isKeySkill: true },
      { name: 'JavaScript / TypeScript', level: 88, tags: ['ES6+', 'React.js', 'Node.js'], isKeySkill: true },
      { name: 'Bash / Shell Scripting', level: 80, tags: ['Automation', 'Cron Jobs', 'Linux'] },
    ],
  },
  {
    categoryName: 'Data Engineering & ETL Pipelines',
    description: 'Transforming raw disparate datasets into clean, reliable, high-speed data warehouses',
    skills: [
      { name: 'ETL Pipeline Development', level: 94, tags: ['Data Ingestion', 'Validation', 'Loading'], isKeySkill: true },
      { name: 'Data Transformation (Pandas & NumPy)', level: 92, tags: ['Data Cleaning', 'Aggregation', 'Profiling'], isKeySkill: true },
      { name: 'Workflow Automation', level: 90, tags: ['Power Automate', 'Python Scripts', 'CRON'], isKeySkill: true },
      { name: 'Data Segregation & Hygiene', level: 88, tags: ['Multi-Tenant Policies', 'Sanitization'] },
    ],
  },
  {
    categoryName: 'Databases & Data Storage',
    description: 'Relational ACID integrity combined with dynamic unstructured document storage',
    skills: [
      { name: 'PostgreSQL', level: 92, tags: ['Relational Schemas', 'Views', 'Triggers', 'Indexing'], isKeySkill: true },
      { name: 'MySQL', level: 90, tags: ['Transactional Consistency', 'Query Optimization'] },
      { name: 'MongoDB (NoSQL)', level: 85, tags: ['Document Stores', 'Aggregation Pipelines'] },
      { name: 'Database Backups & Sync', level: 88, tags: ['Scheduled Backups', 'Disaster Recovery'] },
    ],
  },
  {
    categoryName: 'Business Intelligence & Reporting',
    description: 'Bridging technical engineering with executive decision-making scorecards',
    skills: [
      { name: 'Power BI', level: 92, tags: ['DAX', 'Data Modeling', 'Drill-Down Dashboards'], isKeySkill: true },
      { name: 'KPI Dashboards & Scorecards', level: 90, tags: ['Variance Tracking', 'PMO Analytics'], isKeySkill: true },
      { name: 'Power Automate', level: 86, tags: ['Notification Flows', 'Approval Routines'] },
      { name: 'Excel Migration & Automation', level: 95, tags: ['Replacing Manual Workbooks'] },
    ],
  },
  {
    categoryName: 'Backend & Full Stack Development',
    description: 'Modern REST APIs, reactive client interfaces, and microservices architecture',
    skills: [
      { name: 'React.js', level: 88, tags: ['Hooks', 'Interactive Tables', 'Modern UI'], isKeySkill: true },
      { name: 'Flask / Django', level: 88, tags: ['Python APIs', 'ORM', 'Routing'], isKeySkill: true },
      { name: 'Node.js & Express', level: 86, tags: ['Async Handlers', 'Middleware', 'REST'], isKeySkill: true },
      { name: 'Tailwind CSS', level: 90, tags: ['Responsive Design', 'Glassmorphism', '3D UI'] },
    ],
  },
  {
    categoryName: 'Cloud, DevOps & Security',
    description: 'Enterprise deployment standards, role-based controls, and security hygiene',
    skills: [
      { name: 'AWS Cloud Services', level: 84, tags: ['EC2', 'S3', 'CloudFront', 'Deployment'], isKeySkill: true },
      { name: 'Role-Based Access Control (RBAC)', level: 92, tags: ['Multi-tier Approvals', 'JWT'], isKeySkill: true },
      { name: 'Git & GitHub Release Pipelines', level: 90, tags: ['Version Control', 'Branching', 'Code Review'] },
      { name: 'SMTP & Alert Integrations', level: 92, tags: ['Automated Email Triggers', 'Alert Logs'] },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Laxmi Devi Institute of Engineering and Technology',
    period: 'Jul 2020 – Jun 2024',
    location: 'Alwar, Rajasthan, India',
    gpa: '7.5 / 10.0',
    highlights: [
      'Comprehensive coursework in Data Structures, Algorithms, Database Management Systems, Operating Systems, and Software Engineering.',
      'Part member and coordinator of "Blind Coding" in all technical tasks in college.',
      'Final year capstone focused on data-driven enterprise architectures and automated data processing.',
      'Active participant in technical symposiums, coding competitions, and open-source contributions.',
    ],
  },
];
