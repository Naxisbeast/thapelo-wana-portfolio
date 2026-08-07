export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  signal: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const profile = {
  name: 'Thapelo Kamogelo Wana',
  location: 'Rustenburg / Mahikeng, South Africa',
  degree: 'BSc Computer Science and Electronics at North-West University',
  email: 'wanakamogelo@gmail.com',
  github: 'https://github.com/Naxisbeast',
  linkedin: 'https://www.linkedin.com/in/thapelo-wana-55a42231a/',
  cv: '/Thapelo_Wana_CV_2026.pdf',
};

export const projects: Project[] = [
  {
    title: 'AURUM-1',
    description:
      'An autonomous algorithmic trading system for XAU/USD. 265 tests, 88.9% positive walk-forward windows across 11 years of data, and live paper trading on a cloud server with a real-time Streamlit dashboard.',
    tech: ['Python', 'Streamlit', 'SQLite', 'OANDA API', 'pytest'],
    github: 'https://github.com/Naxisbeast/AURUM-1',
    signal: 'QUANT_SYSTEMS',
  },
  {
    title: 'Clinic Appointment System',
    description:
      'A full-stack clinic appointment scheduling system with patient, doctor, and admin workflows, Supabase authentication, and a notification pipeline.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/Naxisbeast/Clinic-Appointment-System',
    signal: 'FULL_STACK_MODULE',
  },
  {
    title: 'CineBook',
    description:
      'An online movie ticket booking system built as an academic group project, with role-based dashboards and a relational MySQL/Oracle schema.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Oracle SQL'],
    github: 'https://github.com/Naxisbeast/CineBook-Group_4',
    signal: 'GROUP_BUILD',
  },
  {
    title: 'CS Foundations',
    description:
      'Consolidated data structures, OOP, structured programming, and Python basics across Java, C++, and Python — organised by concept, not by course.',
    tech: ['Java', 'C++', 'Python'],
    github: 'https://github.com/Naxisbeast/cs-foundations',
    signal: 'CS_FOUNDATION',
  },
  {
    title: 'Database & Systems Design',
    description:
      'SQL foundations, schema case studies from real projects, and software engineering templates — database design and system design together.',
    tech: ['SQL', 'System Design', 'Documentation'],
    github: 'https://github.com/Naxisbeast/database-and-systems-design',
    signal: 'DATA_LAYER',
  },
  {
    title: 'CMPG313 Artificial Intelligence',
    description:
      'AI coursework portfolio covering K-Means clustering, search algorithms, YOLOv8 object detection, and an ELIZA-vs-transformer NLP comparison.',
    tech: ['Python', 'YOLOv8', 'scikit-learn', 'NetworkX'],
    github: 'https://github.com/Naxisbeast/cmpg313-artificial-intelligence',
    signal: 'AI_LABS',
  },
  {
    title: 'Signals & Systems (ELYM316)',
    description:
      'MATLAB laboratory work on FFT analysis, probability distributions, radioactive decay, and LTI system responses. 94% lab average.',
    tech: ['MATLAB'],
    github: 'https://github.com/Naxisbeast/ELYM316-Introduction-to-Signals-and-Systems',
    signal: 'ELECTRONICS',
  },
  {
    title: 'Analogue Electronics (ELYM315)',
    description:
      'Op-amp circuits, feedback theory, and RC oscillators with MATLAB analysis. 80.02% module average with 98% on the oscillator report.',
    tech: ['MATLAB', 'Electronics'],
    github: 'https://github.com/Naxisbeast/ELYM315-Advanced-Analogue-Electronics',
    signal: 'ELECTRONICS',
  },
];

export const academicWork = [
  'K-Means Network Clustering',
  'AI Object Detection',
  'A* Search',
  'BFS / DFS',
  'NLP comparison (ELIZA vs transformer)',
];

export const portfolioSignals = [
  'Autonomous trading system with 265 tests',
  'Full-stack academic systems',
  'Consolidated CS foundations across Java, C++, Python',
  'AI academic labs',
  'Electronics and signals coursework',
  'Student Assistant technical support experience',
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Java', 'Python', 'C++', 'SQL', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'Web Systems',
    skills: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase'],
  },
  {
    label: 'Data & Systems',
    skills: ['MySQL', 'PostgreSQL', 'Git/GitHub', 'Database Design', 'System Design'],
  },
  {
    label: 'CS Foundations',
    skills: ['OOP', 'DSA', 'Software Engineering', 'MATLAB'],
  },
];

export const experience = {
  role: 'Student Assistant',
  team: 'Physics Department, North-West University',
  points: [
    'Support electronics and signals lab sessions.',
    'Help students debug circuits and understand practical lab work.',
    'Communicate technical concepts clearly under pressure.',
    'Work with academic staff to support lab sessions.',
  ],
};
