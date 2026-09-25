import type { ReactNode } from 'react'
import type { SimpleIcon } from 'simple-icons'
import {
  siApachekafka,
  siBox,
  siChartdotjs,
  siDjango,
  siDocker,
  siFastapi,
  siGit,
  siGnubash,
  siGooglegemini,
  siJavascript,
  siKeycloak,
  siKotlin,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNumpy,
  siOpenjdk,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siSpring,
  siSpringboot,
  siTensorflow,
} from 'simple-icons'
import { skillRows } from './data/content.ts'

const brandIcons: Record<string, SimpleIcon> = {
  Python: siPython,
  Java: siOpenjdk,
  Kotlin: siKotlin,
  JavaScript: siJavascript,
  Bash: siGnubash,
  Git: siGit,
  React: siReact,
  'Next.js': siNextdotjs,
  'Chart.js': siChartdotjs,
  Docker: siDocker,
  Django: siDjango,
  FastAPI: siFastapi,
  'Spring Boot': siSpringboot,
  'Spring Cloud Gateway': siSpring,
  Kafka: siApachekafka,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Keycloak: siKeycloak,
  PyTorch: siPytorch,
  TensorFlow: siTensorflow,
  NumPy: siNumpy,
  LangChain: siLangchain,
  Gemini: siGooglegemini,
  'Box AI': siBox,
}

const marks: Record<string, string> = {
  SQL: 'M4 6.5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 3.2v2.6c0 1.7 3.6 3 8 3s8-1.3 8-3V9.7c-1.6 1.2-4.6 1.8-8 1.8s-6.4-.6-8-1.8zm0 5.6v2.6c0 1.7 3.6 3 8 3s8-1.3 8-3v-2.6c-1.6 1.2-4.6 1.8-8 1.8s-6.4-.6-8-1.8z',
  'REST APIs':
    'M8.2 7.2 3.5 12l4.7 4.8 1.5-1.5L6.5 12l3.2-3.3-1.5-1.5zm7.6 0-1.5 1.5 3.2 3.3-3.2 3.3 1.5 1.5 4.7-4.8-4.7-4.8z',
  'Role-Based Authentication':
    'M12 2 5 5v6.2c0 4.3 2.9 8.2 7 9.8 4.1-1.6 7-5.5 7-9.8V5L12 2zm-1.1 11.2-2.2-2.2 1.2-1.2 1 1 2.6-2.6 1.2 1.2-3.8 3.8z',
  S3: 'M7 7h10l1.2 12H5.8L7 7zm1.2-3h7.6v2H8.2V4z',
  MySQL:
    'M12 3.2c2.6.1 4.8 1.6 5.8 3.8.5 1.1.6 2.3.3 3.4-1.2.5-2.1 1.5-2.4 2.8.3.5.4 1.1.4 1.7 0 2.3-2 4.1-4.4 4.1-1.3 0-2.5-.6-3.3-1.5-.6.4-1.3.6-2 .6-2.1 0-3.8-1.6-3.9-3.6-.2-1.2.8-2.4 2.2-2.7-.1-1.2.3-2.4 1.2-3.3C7.2 5.6 9.4 3.3 12 3.2z',
  'Copilot Studio':
    'M12 2.8 13.4 8 18.6 9.2 13.4 10.6 12 15.8 10.6 10.6 5.4 9.2 10.6 8 12 2.8zM18 14.5l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1z',
  LLMs: 'M12 2.5 13.8 8H19.5l-4.6 3.4 1.8 5.6L12 13.8 7.3 17l1.8-5.6L4.5 8h5.7L12 2.5z',
  'AI Agents':
    'M7.5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4.2 14.2A3 3 0 0 1 7.2 11h.6a3 3 0 0 1 3 3.2V20h-6.6v-5.8zm8.2 0a3 3 0 0 1 3-3.2h.6a3 3 0 0 1 3 3.2V20H12.4v-5.8z',
  'Prompt Engineering': 'M4 5h11v2.2H4V5zm0 5.4h16v2.2H4v-2.2zM4 16h8v2.2H4V16z',
  RAG: 'M6 3h9l4 4v14H6V3zm8 1.2V8h3.6L14 4.2zM8.5 12h7v1.8h-7V12zm0 3.4h7V17h-7v-1.6z',
  'Agent Orchestration':
    'M12 3.5a2.2 2.2 0 1 0 .1 4.4A2.2 2.2 0 0 0 12 3.5zM5 15.2a2.2 2.2 0 1 0 .1 4.4 2.2 2.2 0 0 0-.1-4.4zm14 0a2.2 2.2 0 1 0 .1 4.4 2.2 2.2 0 0 0-.1-4.4zM11 8h2v4h-2V8zM7.2 14.2l3.2-2.2 1 1.4-3.2 2.2-1-1.4zm9.6 0-1 1.4-3.2-2.2 1-1.4 3.2 2.2z',
  'Reinforcement Learning':
    'M12 4a8 8 0 1 1-7.2 4.5l1.8.8A6 6 0 1 0 12 6V4zm-1 0h5v2H11V4z',
  'Double DQN':
    'M8 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8 10h8v2H8v-2z',
  'Weighted A*':
    'M5 17 10 6h2l5 11h-2.1l-1-2.4H8.1L7.1 17H5zm3.6-4h4.8L12 8.6 8.6 13z',
  'OPC UA':
    'M12 3a3 3 0 1 0 .1 6A3 3 0 0 0 12 3zM5 15a3 3 0 1 0 .1 6A3 3 0 0 0 5 15zm14 0a3 3 0 1 0 .1 6A3 3 0 0 0 19 15zM10.6 8.4 6.8 14l1.6 1 3.8-5.6-1.6-1zm2.8 0 1.6 1-3.8 5.6-1.6-1 3.8-5.6z',
  'Data Mining':
    'M4 16.5 12 20l8-3.5v-3L12 17l-8-3.5v3zm0-5L12 15l8-3.5v-3L12 12 4 8.5v3zm8-8 8 3.5L12 10.5 4 7l8-3.5z',
  'Model Training': 'M5 16h3v4H5v-4zm5-5h3v9h-3V11zm5-4h3v13h-3V7z',
  'Document Extraction':
    'M6 3h8l4 4v14H6V3zm7 1.4V8h3.5L13 4.4zM8 12h8v1.6H8V12zm6.2 3.2 2.3 2.3-2.3 2.3-1.1-1.1 1.2-1.2-1.2-1.2 1.1-1.1z',
  'Similarity Search':
    'M10 4a6 6 0 1 0 3.6 10.8l4 4 1.4-1.4-4-4A6 6 0 0 0 10 4zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
  'Semantic Chunking':
    'M4 5h7v3.2H4V5zm9 0h7v3.2h-7V5zM4 10.4h16v1.4H4v-1.4zm0 4.4h7V18H4v-3.2zm9 0h7V18h-7v-3.2z',
  'Human-in-the-Loop Review':
    'M12 3.5a3 3 0 1 0 .1 6 3 3 0 0 0-.1-6zM6.5 13.2A3.5 3.5 0 0 1 10 9.7h1.2v2.2H10a1.4 1.4 0 0 0-1.4 1.4V20H6.5v-6.8zm7.2 1.6 1.2 1.2 2.8-2.8 1.3 1.3-4.1 4.1-2.5-2.5 1.3-1.3z',
  'Metadata-Aware Retrieval':
    'M4 7h9l2 2h5v9H4V7zm2 4v5h12v-4h-4.2L12.2 9H6v2z',
  'Embedding-Based Feature Representations':
    'M5 16V8h2v8H5zm4 2V6h2v12H9zm4-3v-6h2v6h-2zm4 3V5h2v13h-2z',
}

function SkillLogo({ name }: { name: string }) {
  const icon = brandIcons[name]
  let graphic: ReactNode = null
  if (icon) {
    graphic = <path d={icon.path} fill="currentColor" />
  } else if (name === 'AWS') {
    graphic = (
      <>
        <text
          x="12"
          y="11"
          textAnchor="middle"
          fill="currentColor"
          fontSize="8"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          aws
        </text>
        <path
          d="M4.2 15.2c3.4 2.5 12.2 2.5 15.6 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M17.4 13.6 20.2 15.1 17.8 17.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )
  } else if (name === 'EC2') {
    graphic = (
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3h16v5.2H4V3zm1.6 1.6h2v2h-2v-2zM4 9.4h16v5.2H4V9.4zm1.6 1.6h2v2h-2v-2zM4 15.8h16V21H4v-5.2zm1.6 1.6h2v2h-2v-2z"
      />
    )
  } else if (name === 'ChromaDB') {
    graphic = (
      <>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1" fill="currentColor" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1" fill="currentColor" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1" fill="currentColor" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" fill="currentColor" />
      </>
    )
  } else if (marks[name]) {
    graphic = <path d={marks[name]} fill="currentColor" />
  }

  return (
    <svg className="skill-logo" viewBox="0 0 24 24" aria-hidden="true">
      {graphic}
    </svg>
  )
}

function SkillChip({ name }: { name: string }) {
  return (
    <span className="skill-chip">
      <SkillLogo name={name} />
      <span>{name}</span>
    </span>
  )
}

function SkillRow({
  names,
  direction,
}: {
  names: readonly string[]
  direction: 'left' | 'right'
}) {
  return (
    <div className={`skill-row skill-row-${direction}`}>
      <div className="skill-track">
        <div className="skill-group">
          {names.map((name) => (
            <SkillChip key={name} name={name} />
          ))}
        </div>
        <div className="skill-group" aria-hidden="true">
          {names.map((name) => (
            <SkillChip key={`${name}-copy`} name={name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function SkillMarquee() {
  return (
    <div className="skill-marquee" aria-label="Skills">
      {skillRows.map((names, index) => (
        <SkillRow
          key={names[0]}
          names={names}
          direction={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  )
}
