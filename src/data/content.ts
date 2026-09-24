export const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'athletics', label: 'Athletics' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

export const profile = {
  name: 'Kushi Santosh Khandoji',
  shortName: 'Kushi Khandoji',
  degreeLine: 'M.S. Computer Science, George Washington University',
  studentAthleteLine: 'Student-athlete',
  resumeHref: '/Kushi_Khandoji_Resume_Latest.pdf',
  resumeLabel: 'Download resume',
}

export const about =
  'M.S. Computer Science student at George Washington University (GPA 3.9), with a B.S. in Computer Science, AI concentration, from Wilmington University (May 2025, GPA 4.0, Undergraduate Technology Award). The degree work has been alongside college athletics.'

export const experience = [
  {
    role: 'Student AI Solutions Specialist',
    org: 'George Washington University — GW IT',
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
    org: 'Fintellix — G2 Risk Solutions',
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
    name: 'Multi-Objective Carbon-Aware Logistics Routing',
    tools: 'Python, PyTorch, PPO, DQN, OSMnx',
    points: [
      'Built a multi-objective reinforcement learning system using PPO, Double DQN, and Weighted A* to optimize freight routing while balancing travel time and CO2 emissions.',
      'Integrated real-world transportation, elevation, and emissions datasets to train and evaluate routing agents, reducing estimated emissions by 20% while adding only 5–10 minutes to ETA.',
    ],
  },
  {
    name: 'Research Paper Q&A Assistant',
    tools: 'FastAPI, React, Gemini, LangChain, ChromaDB',
    points: [
      'Built a RAG-based question-answering system for research papers using Gemini, embeddings, and vector search to support conversational querying across multiple documents.',
      'Engineered an end-to-end pipeline for PDF ingestion, semantic chunking, metadata-aware retrieval, and citation-backed answer generation.',
    ],
  },
]

export const education = [
  {
    school: 'George Washington University',
    place: 'Washington, DC',
    credential: 'M.S. in Computer Science',
    dates: 'Expected May 2027',
    detail: 'GPA 3.9/4.0',
    coursework: 'Machine Learning, Trustworthy AI, Gen AI for Business',
  },
  {
    school: 'Wilmington University',
    place: 'Delaware',
    credential: 'B.S. in Computer Science (AI Concentration)',
    dates: 'Completed May 2025',
    detail: 'GPA 4.0/4.0 · Undergraduate Technology Award',
    coursework: '',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: 'Python, Java, Kotlin, SQL, JavaScript',
  },
  {
    label: 'AI/ML',
    items: 'LLMs, AI Agents, Prompt Engineering, RAG, LangChain, PyTorch, TensorFlow, NumPy',
  },
  {
    label: 'Frameworks and tools',
    items: 'React, Next.js, Django, AWS, ChromaDB, PostgreSQL, REST APIs, Git',
  },
]

export const contact = {
  email: 'kushi.s.khandoji@gmail.com',
  location: 'Washington, DC',
}
