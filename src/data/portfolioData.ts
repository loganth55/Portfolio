export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  metrics: string;
  challenges: string;
  architecture: string;
  liveUrl?: string;
  githubUrl?: string;
  type: 'web' | 'mobile';
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  current?: boolean;
  bullets: string[];
  technologies: string[];
}

export interface TechItem {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'database' | 'tools';
  iconColor: string;
  description: string;
  level: string;
}

export const PERSONAL_INFO = {
  name: 'Loganth Pranav',
  firstName: 'Loganth',
  lastName: 'Pranav',
  initials: 'LP.',
  role: 'Full Stack Developer',
  badge: 'FULL STACK DEVELOPER',
  intro: "Hello, I'm",
  statement: 'I build practical web applications that solve real problems using React.js, Node.js and modern technologies.',
  tagline: 'I build practical web applications that solve real problems using React.js, Node.js and modern technologies.',
  editorialQuote: 'Turning ideas into useful and scalable products.',
  availability: 'Available for opportunities',
  aboutP1: "I'm a Junior Full Stack Developer with a strong interest in building practical web applications. I enjoy working across frontend and backend development, creating responsive user interfaces, building APIs and connecting applications with databases.",
  aboutP2: "Currently, I'm gaining professional experience through my internship while developing full-stack applications that strengthen my understanding of real-world software development.",
  email: 'loganthpranav.dev@gmail.com',
  github: 'https://github.com/loganthpranav',
  linkedin: 'https://linkedin.com/in/loganthpranav',
  location: 'Tamil Nadu, India',
  education: {
    degree: 'B.E. — Electronics and Communication Engineering',
    institution: 'Karpagam Institute of Technology',
    period: '2022 — 2026',
    details: 'CGPA: 8.4/10. Focus on embedded software, digital signal processing, algorithm design, and modern web application development.'
  },
  certification: {
    title: 'Full Stack Developer (MERN)',
    issuer: 'NCET Plus, MyAnatomy — 2025',
    year: '2025',
    credentialId: 'NCET-MERN-89240',
    skills: 'MongoDB, Express.js, React.js, Node.js, REST APIs, System Design fundamentals'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'ornaflow',
    number: '01',
    title: 'OrnaFlow',
    category: 'Gold & Jewellery Retail ERP',
    tagline: 'End-to-end ERP solution for gold and jewellery businesses, covering products, inventory, purchases, sales, billing and reporting.',
    description: 'End-to-end ERP solution for gold and jewellery businesses, covering products, inventory, purchases, sales, billing and reporting.',
    longDescription: 'OrnaFlow is an ERP solution currently under active development for gold and jewellery businesses, covering products, inventory, purchases, sales, billing and reporting. It is engineered with React.js, Node.js, Express.js and MySQL.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    features: [
      'Showroom gold bullion price feed and karat purity calculation',
      'Inventory weight discrepancy audits and hallmark compliance tracking',
      'Automated GST billing and receipt generation',
      'Role-based security for showroom cashiers and managers'
    ],
    metrics: 'Currently in active development; architecture verified with mock retail stress testing.',
    challenges: 'Handling floating-point precision for milligram bullion tolerances and ensuring transactional consistency in MySQL.',
    architecture: 'Decoupled React frontend with secured Express REST layer and MySQL transactional InnoDB engine.',
    type: 'web',
    githubUrl: 'https://github.com/loganthpranav/ornaflow-jewellery-erp',
  },
  {
    id: 'owezy',
    number: '02',
    title: 'Owezy',
    category: 'Debt & Shared Expense Management App',
    tagline: 'A full-stack shared expense management application for tracking expenses, debts, repayments, groups and transaction statements.',
    description: 'A full-stack shared expense management application for tracking expenses, debts, repayments, groups and transaction statements.',
    longDescription: 'Owezy solves the awkward and convoluted friction of group bills, shared apartments, travel trips, and friend circles. Built with a directed graph debt simplification algorithm, it minimizes the total number of transactions needed to settle all accounts between group members.',
    tags: ['React Native', 'Node.js', 'Express.js', 'MySQL'],
    features: [
      'Debt simplification graph algorithm reducing multi-party circular debts by up to 60%',
      'Flexible split options: Equal share, exact monetary amounts, or percentage-based weights',
      'Itemized bill breakdown with instant receipt photo attachments',
      'Automated transaction summary exports (PDF & CSV) with reconciliation timestamps',
      'Optimistic offline sync with local SQLite queue and background server sync'
    ],
    metrics: 'Tested across 200+ simulated group trips with 1,500+ payments with 100% mathematical zero-sum verification.',
    challenges: 'Resolving cyclic financial dependencies across multiple concurrent user splits while maintaining data consistency.',
    architecture: 'React Native frontend communicating with an Express.js microservice API, backed by MySQL relational tables with foreign keys and index optimization.',
    type: 'mobile',
    githubUrl: 'https://github.com/loganthpranav/owezy-expense-manager',
    liveUrl: 'https://owezy-app.example.com'
  },
  {
    id: 'devpulse',
    number: '03',
    title: 'DevPulse',
    category: 'Real-time API & Microservice Health Monitor',
    tagline: 'Lightweight latency monitor and webhook dispatcher for cloud developer microservices.',
    description: 'A high-performance monitoring tool providing instant uptime tracking, p99 latency heatmaps, and automated alert webhooks.',
    longDescription: 'DevPulse is a dedicated developer utility engineered to monitor REST endpoints, cron workers, and database health with zero bloat. Featuring configurable ping frequencies, payload inspection, and customizable incident status pages.',
    tags: ['React.js', 'Node.js', 'Tailwind CSS', 'MySQL'],
    features: [
      'Sub-minute HTTP/HTTPS and TCP endpoint health pingers',
      'Interactive latency percentile graphs (p50, p90, p99)',
      'Instant webhook notifications to Slack and Discord upon degraded responses',
      'Public read-only status page generator for transparency'
    ],
    metrics: 'Maintained 99.99% monitor uptime with sub-50ms query overhead.',
    challenges: 'Scheduling concurrent asynchronous socket probes without thread starvation in the Node runtime.',
    architecture: 'React dashboard with lightweight polling and Express background cron worker pool.',
    type: 'web',
    githubUrl: 'https://github.com/loganthpranav/devpulse-monitor',
    liveUrl: 'https://devpulse-demo.example.com'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'qugates-current',
    period: 'Mar 2026 — Present',
    role: 'Frontend Developer Intern',
    company: 'Qugates',
    location: 'Coimbatore, India',
    current: true,
    bullets: [
      'Developed responsive web interfaces using React.js, JavaScript, HTML5 and CSS3.',
      'Built reusable React components and implemented application routing and state management.',
      'Integrated frontend workflows with REST APIs and managed application data.',
      'Collaborated with team members on requirements, UI changes and code reviews.'
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs', 'Git']
  }
];

export const CORE_TECH = [
  { name: 'React.js', icon: 'react', color: '#38bdf8' },
  { name: 'Node.js', icon: 'node', color: '#22c55e' },
  { name: 'Express.js', icon: 'express', color: '#e2e8f0' },
  { name: 'MySQL', icon: 'mysql', color: '#38bdf8' },
  { name: 'Git', icon: 'git', color: '#f97316' },
  { name: 'Tailwind CSS', icon: 'tailwind', color: '#06b6d4' }
];

export const ALL_SKILLS: Record<string, string[]> = {
  Frontend: ['React.js', 'React Native', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive UI/UX', 'Component Architecture'],
  Backend: ['Node.js', 'Express.js', 'RESTful API Design', 'Authentication (JWT)', 'Middleware & Routing', 'Error Handling'],
  Database: ['MySQL', 'Relational Schema Design', 'Query Optimization', 'Indexes & Transactions', 'Database Normalization'],
  'Tools & Technologies': ['Git & GitHub', 'Postman', 'VS Code', 'Vite', 'npm / yarn', 'Linux CLI', 'Chrome DevTools']
};
