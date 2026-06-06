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
    title: 'Clinic Appointment System',
    description:
      'A clinic appointment scheduling system with patient, doctor, and admin workflows.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/Naxisbeast/Clinic-Appointment-System',
    signal: 'FULL_STACK_MODULE',
  },
  {
    title: 'CineBook',
    description:
      'An online movie ticket booking system built as an academic group project.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Oracle SQL'],
    github: 'https://github.com/Naxisbeast/CineBook-Group_4',
    signal: 'GROUP_BUILD',
  },
  {
    title: 'Data Structures and Algorithms Java',
    description:
      'Java DSA foundation repo covering linked lists, stacks, queues, recursion, and complexity analysis.',
    tech: ['Java'],
    github: 'https://github.com/Naxisbeast/data-structures-and-algorithms-java',
    signal: 'CS_FOUNDATION',
  },
  {
    title: 'Database Systems SQL',
    description:
      'SQL database foundation repo covering schema design, joins, constraints, relationships, and normalization.',
    tech: ['SQL'],
    github: 'https://github.com/Naxisbeast/database-systems-sql',
    signal: 'DATA_LAYER',
  },
  {
    title: 'Object-Oriented Programming Java',
    description:
      'Java OOP foundation repo covering classes, encapsulation, inheritance, polymorphism, abstraction, and interfaces.',
    tech: ['Java'],
    github: 'https://github.com/Naxisbeast/object-oriented-programming-java',
    signal: 'OOP_CORE',
  },
  {
    title: 'Software Engineering System Design',
    description:
      'Software engineering repo with requirements notes, UML concepts, testing templates, risk planning, and academic case studies.',
    tech: ['Markdown', 'Documentation', 'System Design'],
    github: 'https://github.com/Naxisbeast/software-engineering-system-design',
    signal: 'DESIGN_DOCS',
  },
];

export const academicWork = [
  'Python Intro Programming',
  'C++ Structured Programming',
  'KMeans Network Clustering',
  'AI Object Detection',
];

export const portfolioSignals = [
  'Curated GitHub repositories',
  'Full-stack academic systems',
  'Java, Python, C++, SQL foundations',
  'AI academic labs',
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
    label: 'Data & Tools',
    skills: ['MySQL', 'Git/GitHub', 'Database Design', 'AI basics'],
  },
  {
    label: 'CS Foundations',
    skills: ['OOP', 'DSA', 'Software Engineering'],
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
