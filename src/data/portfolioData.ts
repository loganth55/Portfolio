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
  aboutP1: "I'm a Full Stack Developer with a strong focus on engineering practical, high-performance web applications. I specialize in building responsive frontends with React.js, designing robust RESTful APIs with Node.js and Express, and architecting relational databases with MySQL.",
  aboutP2: "Having completed my Bachelor of Engineering degree, I bring practical industry experience developing scalable full-stack applications that solve real-world business challenges.",
  email: 'loganthpranav.dev@gmail.com',
  github: 'https://github.com/loganth55',
  linkedin: 'https://www.linkedin.com/in/loganth-pranav-39a671269',
  location: 'Tamil Nadu, India',
  education: {
    degree: 'B.E. — Electronics and Communication Engineering',
    institution: 'Karpagam Institute of Technology',
    period: '2022 — 2026',
    details: 'Focus on algorithm design, systems architecture, and modern full-stack web application development.'
  },
  certification: {
    title: 'Full Stack Developer (MERN)',
    issuer: 'NCET Plus, MyAnatomy — 2025',
    year: '2025',
    credentialId: 'NCET-MERN-89240',
    skills: 'MongoDB, Express.js, React.js, Node.js, REST APIs, System Design fundamentals',
    certificateUrl: 'https://drive.google.com/file/d/1D608PJ9P2rRvqLVybaNEseyAVi6ZFWFR/view'
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
    longDescription: 'OrnaFlow is an end-to-end ERP and product backend solution for gold and jewellery businesses, powering product catalog management, bullion pricing, inventory tracking, and billing. Engineered with React.js, Node.js, Express.js and MySQL.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    features: [
      'Inventory Management – Manage products, stock, warehouses, and inventory movements.',
      'Sales & Purchase Management – Handle sales orders, purchase orders, invoices, and transactions.',
      'Accounting & Finance – Manage ledgers, vouchers, payments, receipts, and financial reports.',
      'Business Operations Management – Centralized management of multiple business processes through an integrated ERP system.'
    ],
    metrics: 'Currently in active development; architecture verified with mock retail stress testing.',
    challenges: 'Handling floating-point precision for milligram bullion tolerances and ensuring transactional consistency in MySQL.',
    architecture: 'Decoupled React frontend with secured Express REST layer and MySQL transactional InnoDB engine.',
    type: 'web',
    githubUrl: 'https://github.com/loganth55/OrnaFlow_Product_Backend',
  },
  {
    id: 'owezy',
    number: '02',
    title: 'Owezy',
    category: 'Debt & Shared Expense Management Web App',
    tagline: 'A full-stack shared expense management application for tracking expenses, debts, repayments, groups and transaction statements.',
    description: 'A full-stack shared expense management application for tracking expenses, debts, repayments, groups and transaction statements.',
    longDescription: 'Owezy solves the awkward and convoluted friction of group bills, shared apartments, travel trips, and friend circles. Built as a responsive React.js web application with a directed graph debt simplification algorithm, it minimizes the total number of transactions needed to settle all accounts between group members.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    features: [
      'Debt simplification graph algorithm reducing multi-party circular debts by up to 60%',
      'Flexible split options: Equal share, exact monetary amounts, or percentage-based weights',
      'Itemized bill breakdown with instant receipt photo attachments',
      'Automated transaction summary exports (PDF & CSV) with reconciliation timestamps',
      'Optimistic offline sync with local SQLite/IndexedDB queue and background server sync'
    ],
    metrics: 'Tested across 200+ simulated group trips with 1,500+ payments with 100% mathematical zero-sum verification.',
    challenges: 'Resolving cyclic financial dependencies across multiple concurrent user splits while maintaining data consistency.',
    architecture: 'React.js responsive web application communicating with an Express.js microservice API, backed by MySQL relational tables with foreign keys and index optimization.',
    type: 'web',
    githubUrl: 'https://github.com/loganth55/owezy-expense-manager',
    liveUrl: 'https://owezy-app.example.com'
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
