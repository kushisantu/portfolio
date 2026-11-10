export const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'athletics', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
] as const

export const navSections = sections.filter((section) => section.id !== 'hero')

export const profile = {
  name: 'Kushi Santosh Khandoji',
  mark: 'KK',
  tagline: 'I build AI agents, RAG systems, and the software that makes them useful.',
  paragraphs: [
    'CS master’s student at George Washington University and former NCAA Division II tennis athlete. I like taking ideas from “could this work?” to something people actually use, and I bring an athlete’s discipline to getting it shipped.',
  ],
  seekingLabel: 'Seeking opportunities in:',
  seeking: ['AI Engineering', 'Forward Deployed Engineering', 'Software Engineering'],
  resumeHref: '/Kushi_Khandoji_Resume.pdf',
  resumeLabel: 'View Resume',
}

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

export type Project = {
  name: string
  /** The featured project shows every paragraph; the rest show the first one. */
  about: string[]
  tools: string[]
  github?: string
  /** YouTube, Vimeo, Loom or Google Drive share link, or a direct .mp4/.webm file */
  video?: string
}

export const projects: Project[] = [
  {
    name: 'AskWRI (AWS Breaking Barriers Hackathon Finalist)',
    about: [
      'AskWRI is an agentic research assistant built on 50 years of World Resources Institute research, and a finalist at the AWS Breaking Barriers Hackathon. It ingests the full PDF library, generates embeddings with Bedrock, and combines keyword and semantic retrieval in Aurora PostgreSQL with pgvector, so questions are answered from the research itself rather than a model’s guesswork.',
      'On top of retrieval, MCP-powered agents return multilingual answers where every claim is backed by a citation, with Bedrock Guardrails keeping responses safe and on topic. In evaluation it reached 92.6% retrieval recall and 100% claim citation coverage, and the whole stack is provisioned with Terraform.',
    ],
    tools: ['Bedrock', 'AgentCore', 'Bedrock Guardrails', 'pgvector', 'Terraform'],
    video: '/videos/askwri-demo.mp4',
  },
  {
    name: 'Flight Fare Prediction & Analytics',
    about: [
      'Fare search and prediction built on 30M+ U.S. DOT ticket records across 400+ airports. On 8M unseen tickets, estimates land within about $97 on average, with confidence checks to hold back unreliable ones.',
    ],
    tools: ['Python', 'FastAPI', 'React', 'NumPy', 'SQLite', 'pytest'],
    github: 'https://github.com/kushisantu/flight-price-tracker',
  },
  {
    name: 'Micro Marketplace',
    about: [
      'E-commerce microservices that check stock before accepting orders, then publish to Kafka for async notifications. Keycloak JWT auth, Resilience4j fault tolerance, and full observability across 16 Docker containers.',
    ],
    tools: ['Java', 'Spring Boot', 'Kafka', 'Keycloak', 'Docker', 'MongoDB'],
    github: 'https://github.com/kushisantu/micro-marketplace',
  },
  {
    name: 'Multi-Objective Carbon-Aware Logistics Routing',
    about: [
      'Reinforcement learning for freight routing that balances travel time against CO2. Agents trained on real transport and emissions data cut estimated emissions by 20% for only 5–10 extra minutes.',
    ],
    tools: ['Python', 'PyTorch', 'PPO', 'Double DQN', 'Weighted A*', 'OSMnx'],
    github:
      'https://github.com/kushisantu/Multi-Objective-Reinforcement-Learning-for-Carbon-Aware-Global-Logistics',
  },
  {
    name: 'AI Resume Optimizer',
    about: [
      'A Python tool that scores resumes for ATS compliance, spots keyword gaps, and generates ATS-friendly PDF and Word resumes, cutting prep time by 50%.',
    ],
    tools: ['Python', 'Streamlit', 'NLTK', 'spaCy'],
    github: 'https://github.com/kushisantu/ai-resume-optimizer',
  },
  {
    name: 'Research Paper Q&A Assistant',
    about: [
      'A RAG assistant for conversational Q&A across research papers, with semantic chunking, metadata-aware retrieval, and Gemini answers cited back to the source.',
    ],
    tools: ['Gemini', 'LangChain', 'ChromaDB', 'FastAPI', 'React'],
    github: 'https://github.com/kushisantu/research-rag',
  },
]

export const education = [
  {
    school: 'George Washington University',
    credential: 'M.S. in Computer Science',
    place: 'Washington, DC',
    dates: 'Fall 2025 – Present',
    gpa: '3.83',
    focus: ['Machine Learning', 'Generative AI', 'Data Mining', 'Algorithms'],
    highlights: [
      '3.90 first-semester GPA, focused on applying AI to real-world problems.',
      'Competing with GW Club Tennis alongside graduate studies.',
    ],
  },
  {
    school: 'Wilmington University',
    credential: 'B.S. in Computer Science (AI)',
    place: 'Wilmington, Delaware',
    dates: 'Graduated: May 2025',
    gpa: '4.00',
    award: 'Undergraduate Technology Award',
    focus: [
      'Artificial Intelligence',
      'Machine Learning',
      'Python',
      'Java',
      'Databases',
    ],
    highlights: [
      'Dean’s List every semester.',
      'NCAA Division II tennis scholarship athlete and 2× CACC Champion.',
    ],
  },
]

export const achievements = [
  {
    label: 'AWS Breaking Barriers Hackathon Finalist',
    when: '2026',
    detail: 'Finalist with AskWRI, an agentic RAG assistant over 50 years of WRI research.',
  },
  {
    label: 'Undergraduate Technology Award',
    when: '2025',
    detail: 'University award for top undergraduate student in current Computer Science cohort.',
  },
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

export const skillGroups = [
  {
    name: 'AWS & Cloud',
    skills: ['Bedrock', 'Bedrock Guardrails', 'AgentCore', 'EC2', 'S3', 'Terraform', 'Docker'],
  },
  {
    name: 'AI / ML',
    skills: ['LLMs', 'RAG', 'AI Agents', 'LangChain', 'PyTorch', 'TensorFlow', 'Reinforcement Learning', 'Gemini'],
  },
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'Kotlin', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    name: 'Backend & Data',
    skills: ['FastAPI', 'Django', 'Spring Boot', 'Kafka', 'Keycloak', 'PostgreSQL', 'pgvector', 'MongoDB'],
  },
  {
    name: 'Frontend & Tools',
    skills: ['React', 'Next.js', 'Chart.js', 'Git'],
  },
] as const

export const posts = [
  {
    title: 'Evaluating GPT’s Common Sense in Everyday Decision-Making',
    date: 'April 9, 2026',
    summary:
      'Three everyday decisions — an impulse buy, a vague social plan, and a month-long houseguest — and where GPT’s advice is useful, generic, or missing the personal context common sense needs.',
    href: 'https://medium.com/@kushi.khandoji/evaluating-gpts-common-sense-in-everyday-decision-making-15fba01e3f14',
  },
]

export const contact = {
  email: 'kushi.s.khandoji@gmail.com',
  location: 'Washington, DC',
  linkedin: 'https://www.linkedin.com/in/kushi-santosh-khandoji/',
  github: 'https://github.com/kushisantu',
}
