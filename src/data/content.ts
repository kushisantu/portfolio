export const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'athletics', label: 'Honors' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

export const navSections = sections.filter((section) => section.id !== 'hero')

export const profile = {
  name: 'Kushi Santosh Khandoji',
  mark: 'KK',
  degreeLine: 'M.S. Computer Science, George Washington University',
  studentAthleteLine: 'Student-athlete',
  resumeHref: '/Kushi_Khandoji_Resume_Latest.pdf',
  resumeLabel: 'Download resume',
}

export const about =
  'M.S. Computer Science student at George Washington University (cumulative GPA 3.83), with a B.S. in Computer Science, AI concentration, from Wilmington University (May 2025, institutional GPA 4.0, Undergraduate Technology Award). The degree work has been alongside college athletics.'

export const experience = [
  {
    role: 'Student AI Solutions Specialist',
    org: 'George Washington University – GW IT',
    place: 'Washington, DC',
    dates: 'July 2026 – Present',
    tools: 'LLMs, AI Agents, Prompt Engineering, RAG, Agent Orchestration',
    points: [
      'Designed and deployed LLM-powered AI agents for 10+ university workflows, automating repetitive processes and eliminating 20+ hours of manual work per week across student services, financial and administrative operations.',
      'Built document extraction and metadata workflows for university contracts, transforming unstructured information into structured data and interactive dashboards with customizable filters for instant stakeholder analysis.',
      'Evaluated models, prompts, knowledge sources, and agent workflows across Copilot Studio, Gemini, Box AI, and GW Chat to improve information extraction, response accuracy, and task performance.',
      'Partnered with faculty and staff across 4+ university teams to identify automation opportunities, design AI-driven workflows, and deliver technical demonstrations tailored to stakeholder needs.',
    ],
  },
  {
    role: 'AI Engineer Intern',
    org: 'Fintellix – G2 Risk Solutions',
    place: 'Bengaluru, India',
    dates: 'June 2024 – December 2024',
    tools: 'Python, Java, ReactJS, JavaScript, Next.js, Django, NumPy, PostgreSQL',
    points: [
      'Developed an AI-driven regulatory mapping system using embedding-based feature representations and similarity search to automatically map client data fields to regulatory fields, achieving 97% accuracy.',
      'Implemented automated validation and human-in-the-loop review processes for low-confidence predictions, reducing manual compliance preparation time by 30 hours per month.',
      'Designed a responsive multi-page React interface and integrated AI-generated mapping recommendations with a Django backend, reducing workflow completion time by 3 minutes.',
    ],
  },
  {
    role: 'Software Development Intern',
    org: 'EnerMAN Technologies',
    place: 'Bengaluru, India',
    dates: 'June 2023 – July 2023',
    tools: 'Python, python-opcua, Bash, GitHub, Visual Studio Code',
    points: [
      'Engineered an end-to-end OPC UA client in Python for real-time acquisition of Solar PV plant data, supporting an AI/ML-enabled SCADA monitoring system.',
      'Designed parsers for complex, multi-format data streams, improving processing efficiency by 40% and reducing integration errors by 25% through validation against internal and simulated servers.',
    ],
  },
]

export const projects = [
  {
    name: 'Research Paper Q&A Assistant',
    summary:
      'Question answering across research papers, with citation-backed answers drawn from the documents.',
    tools: ['FastAPI', 'React', 'Gemini', 'LangChain', 'ChromaDB'],
    points: [
      'Built a RAG-based question-answering system for research papers using Gemini, embeddings, and vector search to support conversational querying across multiple documents.',
      'Engineered an end-to-end pipeline for PDF ingestion, semantic chunking, metadata-aware retrieval, and citation-backed answer generation.',
    ],
  },
  {
    name: 'Multi-Objective Carbon-Aware Logistics Routing',
    summary:
      'Freight routing that balances travel time and CO2 emissions, reducing estimated emissions by 20%.',
    tools: ['Python', 'PyTorch', 'PPO', 'DQN', 'OSMnx'],
    points: [
      'Built a multi-objective reinforcement learning system using PPO, Double DQN, and Weighted A* to optimize freight routing while balancing travel time and CO2 emissions.',
      'Integrated real-world transportation, elevation, and emissions datasets to train and evaluate routing agents, reducing estimated emissions by 20% while adding only 5–10 minutes to ETA.',
    ],
  },
  {
    name: 'Flight Price Tracker',
    summary:
      'A flight price aggregator on AWS that tracks fares across airlines and dates, with alerts and trend charts.',
    tools: ['React', 'FastAPI', 'AWS', 'Docker', 'PostgreSQL', 'Chart.js'],
    points: [
      'Developed and deployed a full-stack flight aggregator on AWS (EC2, S3) with a Dockerized FastAPI backend and React frontend, integrating third-party APIs to track prices across multiple airlines and dates.',
      'Implemented real-time price tracking, custom alerts, and interactive trend visualizations with Chart.js to help users identify cost-saving booking opportunities.',
    ],
  },
  {
    name: 'Micro Marketplace',
    summary:
      'E-commerce services for products, orders, inventory, and notifications, with event-driven updates and role-based authentication.',
    tools: [
      'Java',
      'Spring Boot',
      'Kafka',
      'Spring Cloud Gateway',
      'Keycloak',
      'MySQL',
      'MongoDB',
    ],
    points: [
      'Designed and developed a scalable e-commerce microservices platform with modular Product, Order, Inventory, and Notification services, supporting real-time order processing and inventory updates through event-driven communication.',
      'Implemented secure role-based authentication and system monitoring dashboards to ensure service reliability and performance.',
    ],
  },
]

export const education = [
  {
    school: 'George Washington University',
    credential: 'M.S. in Computer Science',
    place: 'Washington, DC',
    dates: 'Fall 2025 – Present',
    gpa: '3.83',
    focus: ['Machine Learning', 'Generative AI', 'Trustworthy AI', 'Data Mining', 'Algorithms'],
    highlights: [
      '3.83 cumulative GPA with a 3.90 first-semester GPA, with coursework spanning Machine Learning, Trustworthy AI, Algorithms, Systems, and Generative AI.',
      'Pursuing graduate studies while competing with GW Club Tennis, with a focus on applying AI to real-world and business applications.',
    ],
  },
  {
    school: 'Wilmington University',
    credential: 'B.S. in Computer Science, Artificial Intelligence',
    place: 'Wilmington, Delaware',
    dates: 'Graduated: May 2025',
    gpa: '4.00',
    focus: [
      'Artificial Intelligence',
      'Machine Learning',
      'Python',
      'Java',
      'Algorithms',
      'Computer Vision',
      'Databases',
    ],
    highlights: [
      '4.00 GPA, Dean’s List, and recipient of the Undergraduate Technology Award while earning a B.S. in Computer Science with an AI concentration.',
      'NCAA Division II tennis scholarship athlete and 2× CACC Champion, balancing collegiate athletics with a rigorous CS/AI curriculum.',
    ],
  },
]

export const honors = [
  {
    label: 'CACC Conference Champions',
    when: '2023, 2024',
    detail: "Central Atlantic Collegiate Conference Women's Tennis Champions.",
  },
  {
    label: 'NCAA Regional Tournament',
    when: '2024, 2025',
    detail: "NCAA Division II Women's Tennis Regional Tournament (Top 32).",
  },
  {
    label: 'CACC First-Team All-Conference',
    when: '2024',
    detail: "Named to CACC's First-Team Singles with a 12-0 record at #4 singles.",
  },
  {
    label: 'CACC Second-Team All-Conference',
    when: '2023',
    detail: "Named to CACC's Second-Team Singles with a 6-4 record at #1 singles.",
  },
  {
    label: 'ITA Scholar-Athlete',
    when: '2023–2025',
    detail:
      'Intercollegiate Tennis Association honor for student-athletes with a 3.5 GPA or higher.',
  },
  {
    label: 'CSC All-District Team',
    when: '2023',
    detail:
      'College Sports Communicators pick top student-athletes for exceptional performance in the classroom and on the court.',
  },
  {
    label: "Dean's List",
    when: 'Every semester',
    detail: 'Recognized for strong academic standing every undergraduate semester.',
  },
  {
    label: 'Undergraduate Technology Award',
    when: '2025',
    detail: 'University award for top undergraduate student in current Computer Science cohort.',
  },
  {
    label: 'Calculus Award',
    when: '2023',
    detail: 'University award for top calculus student.',
  },
  {
    label: 'Student Commencement Speaker',
    when: '',
    detail: 'Selected to speak at the Wilmington University Commencement Ceremony.',
  },
]

export const skillRows = [
  [
    'Python',
    'Java',
    'Kotlin',
    'JavaScript',
    'SQL',
    'Bash',
    'Git',
    'React',
    'Next.js',
    'Chart.js',
    'Docker',
    'REST APIs',
  ],
  [
    'Django',
    'FastAPI',
    'Spring Boot',
    'Spring Cloud Gateway',
    'Kafka',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Keycloak',
    'Role-Based Authentication',
    'AWS',
    'EC2',
    'S3',
  ],
  [
    'PyTorch',
    'TensorFlow',
    'NumPy',
    'LangChain',
    'Gemini',
    'Copilot Studio',
    'Box AI',
    'ChromaDB',
    'LLMs',
    'AI Agents',
    'Prompt Engineering',
    'RAG',
    'Agent Orchestration',
  ],
  [
    'Reinforcement Learning',
    'Double DQN',
    'Weighted A*',
    'OPC UA',
    'Data Mining',
    'Model Training',
    'Document Extraction',
    'Similarity Search',
    'Semantic Chunking',
    'Human-in-the-Loop Review',
    'Metadata-Aware Retrieval',
    'Embedding-Based Feature Representations',
  ],
] as const

export const skillGroups = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'Kotlin', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Chart.js'],
  },
  {
    name: 'Backend',
    skills: ['Django', 'FastAPI', 'Spring Boot', 'Spring Cloud Gateway', 'REST APIs'],
  },
  {
    name: 'Libraries',
    skills: ['PyTorch', 'TensorFlow', 'NumPy', 'LangChain'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB'],
  },
  {
    name: 'AI Tools',
    skills: ['Gemini', 'Copilot Studio', 'Box AI'],
  },
  {
    name: 'AI Systems',
    skills: ['LLMs', 'AI Agents', 'Prompt Engineering', 'RAG', 'Agent Orchestration'],
  },
  {
    name: 'Document AI',
    skills: [
      'Document Extraction',
      'Semantic Chunking',
      'Similarity Search',
      'Metadata-Aware Retrieval',
      'Embedding-Based Feature Representations',
      'Human-in-the-Loop Review',
    ],
  },
  {
    name: 'Machine Learning',
    skills: ['Reinforcement Learning', 'Double DQN', 'Weighted A*', 'Data Mining', 'Model Training'],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'EC2', 'S3', 'Docker', 'Git'],
  },
  {
    name: 'Infra/Messaging/Auth',
    skills: ['Kafka', 'Keycloak', 'Role-Based Authentication', 'OPC UA'],
  },
] as const

export const contact = {
  email: 'kushi.s.khandoji@gmail.com',
  location: 'Washington, DC',
  linkedin: 'https://www.linkedin.com/in/kushi-santosh-khandoji/',
  github: 'https://github.com/kushisantu',
}
