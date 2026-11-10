import type { SimpleIcon } from 'simple-icons'
import {
  siApachekafka,
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
  siOpenjdk,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siSpringboot,
  siTensorflow,
  siTerraform,
} from 'simple-icons'
import { skillGroups } from './data/content.ts'

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
  Terraform: siTerraform,
  Django: siDjango,
  FastAPI: siFastapi,
  'Spring Boot': siSpringboot,
  Kafka: siApachekafka,
  PostgreSQL: siPostgresql,
  pgvector: siPostgresql,
  MongoDB: siMongodb,
  Keycloak: siKeycloak,
  PyTorch: siPytorch,
  TensorFlow: siTensorflow,
  LangChain: siLangchain,
  Gemini: siGooglegemini,
}

const marks: Record<string, string> = {
  Bedrock:
    'M12 3 3 7.5 12 12l9-4.5L12 3zm-9 8 9 4.5 9-4.5v2.4L12 17.9 3 13.4V11zm0 4.6 9 4.5 9-4.5V18L12 22.5 3 18v-2.4z',
  'Bedrock Guardrails':
    'M12 2 5 5v6.2c0 4.3 2.9 8.2 7 9.8 4.1-1.6 7-5.5 7-9.8V5L12 2zm-1.1 11.2-2.2-2.2 1.2-1.2 1 1 2.6-2.6 1.2 1.2-3.8 3.8z',
  AgentCore:
    'M8 2h2v2.5h4V2h2v2.5h1.5A1.5 1.5 0 0 1 19 6v1.5h2.5v2H19v5h2.5v2H19V18a1.5 1.5 0 0 1-1.5 1.5H16V22h-2v-2.5h-4V22H8v-2.5H6.5A1.5 1.5 0 0 1 5 18v-1.5H2.5v-2H5v-5H2.5v-2H5V6a1.5 1.5 0 0 1 1.5-1.5H8V2zm1 7.5v5h6v-5H9z',
  EC2: 'M4 3h16v5.2H4V3zm1.6 1.6h2v2h-2v-2zM4 9.4h16v5.2H4V9.4zm1.6 1.6h2v2h-2v-2zM4 15.8h16V21H4v-5.2zm1.6 1.6h2v2h-2v-2z',
  S3: 'M7 7h10l1.2 12H5.8L7 7zm1.2-3h7.6v2H8.2V4z',
  SQL: 'M4 6.5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 3.2v2.6c0 1.7 3.6 3 8 3s8-1.3 8-3V9.7c-1.6 1.2-4.6 1.8-8 1.8s-6.4-.6-8-1.8zm0 5.6v2.6c0 1.7 3.6 3 8 3s8-1.3 8-3v-2.6c-1.6 1.2-4.6 1.8-8 1.8s-6.4-.6-8-1.8z',
  LLMs: 'M12 2.5 13.8 8H19.5l-4.6 3.4 1.8 5.6L12 13.8 7.3 17l1.8-5.6L4.5 8h5.7L12 2.5z',
  RAG: 'M6 3h9l4 4v14H6V3zm8 1.2V8h3.6L14 4.2zM8.5 12h7v1.8h-7V12zm0 3.4h7V17h-7v-1.6z',
  'AI Agents':
    'M7.5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4.2 14.2A3 3 0 0 1 7.2 11h.6a3 3 0 0 1 3 3.2V20h-6.6v-5.8zm8.2 0a3 3 0 0 1 3-3.2h.6a3 3 0 0 1 3 3.2V20H12.4v-5.8z',
  'Reinforcement Learning':
    'M12 4a8 8 0 1 1-7.2 4.5l1.8.8A6 6 0 1 0 12 6V4zm-1 0h5v2H11V4z',
}

function SkillLogo({ name }: { name: string }) {
  const brand = brandIcons[name]
  const path = brand?.path ?? marks[name]
  if (!path) return null

  return (
    <svg className="skill-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill="currentColor" fillRule={brand ? undefined : 'evenodd'} />
    </svg>
  )
}

export function SkillGrid() {
  return (
    <div className="skill-grid">
      {skillGroups.map((group) => (
        <section className="skill-group" key={group.name}>
          <h3>{group.name}</h3>
          <ul className="skill-items">
            {group.skills.map((name) => (
              <li key={name}>
                <SkillLogo name={name} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
