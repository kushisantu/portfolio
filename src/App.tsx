import { useEffect, useRef, useState } from 'react'
import {
  about,
  contact,
  education,
  experience,
  honors,
  navSections,
  profile,
  projects,
  sections,
} from './data/content.ts'
import { SkillMarquee } from './SkillMarquee.tsx'

type SectionId = (typeof sections)[number]['id']

function markerLine() {
  const header = document.querySelector('.site-header')
  const bottom = header?.getBoundingClientRect().bottom ?? 48
  return bottom + 32
}

function sectionAtMarker(): SectionId {
  const atEnd =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  if (atEnd) return sections[sections.length - 1].id

  const line = markerLine()
  let current: SectionId = sections[0].id
  for (const section of sections) {
    const node = document.getElementById(section.id)
    if (node && node.getBoundingClientRect().top <= line) {
      current = section.id
    }
  }
  return current
}

type Project = (typeof projects)[number]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<SectionId>('hero')
  const [openProject, setOpenProject] = useState<Project | null>(null)
  const lockedId = useRef<SectionId | null>(null)
  const closeProjectRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function sync() {
      const current = sectionAtMarker()
      if (lockedId.current && current !== lockedId.current) return
      lockedId.current = null
      setActiveId((prev) => (prev === current ? prev : current))
    }

    function releaseLock() {
      lockedId.current = null
      sync()
    }

    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('scrollend', releaseLock)
    window.addEventListener('wheel', releaseLock, { passive: true })
    window.addEventListener('touchmove', releaseLock, { passive: true })
    sync()

    return () => {
      window.removeEventListener('scroll', sync)
      window.removeEventListener('scrollend', releaseLock)
      window.removeEventListener('wheel', releaseLock)
      window.removeEventListener('touchmove', releaseLock)
    }
  }, [])

  useEffect(() => {
    if (!openProject) return
    const previous = document.activeElement
    closeProjectRef.current?.focus()
    document.body.style.overflow = 'hidden'

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenProject(null)
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [openProject])

  function selectSection(id: SectionId) {
    lockedId.current = id
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <div className="site">
      <header
        className={menuOpen ? 'site-header is-open' : 'site-header'}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setMenuOpen(false)
        }}
      >
        <div className="header-bar">
          <a
            className="brand"
            href="#hero"
            aria-label={profile.name}
            onClick={() => selectSection('hero')}
          >
            {profile.mark}
          </a>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <nav id="site-nav" aria-label="Page sections">
          <ul className="nav-list">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={activeId === section.id ? 'true' : undefined}
                  onClick={() => selectSection(section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="hero">
        <h1>{profile.name}</h1>
        <p>{profile.degreeLine}</p>
        <p>{profile.studentAthleteLine}</p>
        <p>
          <a className="text-link" href={profile.resumeHref} download>
            {profile.resumeLabel}
          </a>
        </p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>{about}</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        {experience.map((job) => (
          <article className="entry" key={job.role}>
            <h3>{job.role}</h3>
            <p className="meta">
              {job.org} · {job.dates}
            </p>
            <p className="meta">{job.tools}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectShot name={project.name} />
              <div className="project-copy">
                <div className="project-heading">
                  <h3>{project.name}</h3>
                  <button
                    type="button"
                    className="project-open"
                    aria-label={`More about ${project.name}`}
                    onClick={() => setOpenProject(project)}
                  >
                    <ExpandIcon />
                  </button>
                </div>
                <p>{project.summary}</p>
                <ul className="tech-list">
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {openProject ? (
          <div
            className="project-backdrop"
            onClick={() => setOpenProject(null)}
          >
            <div
              className="project-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              onClick={(event) => event.stopPropagation()}
            >
              <ProjectShot name={openProject.name} large />
              <div className="project-copy">
                <div className="project-heading">
                  <h3 id="project-dialog-title">{openProject.name}</h3>
                  <button
                    ref={closeProjectRef}
                    type="button"
                    className="project-open"
                    aria-label="Close project details"
                    onClick={() => setOpenProject(null)}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <p>{openProject.summary}</p>
                <ul className="project-points">
                  {openProject.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="tech-list">
                  {openProject.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      <section id="education">
        <h2>Education</h2>
        {education.map((school) => (
          <article className="entry" key={school.school}>
            <h3>{school.school}</h3>
            <p className="meta">
              {school.credential} · {school.dates}
            </p>
            <p>
              {school.place}. {school.detail}
            </p>
            {school.coursework ? <p>Coursework: {school.coursework}</p> : null}
          </article>
        ))}
      </section>

      <section id="athletics">
        <h2>Honors</h2>
        <p className="honor-lead">NCAA Division II women's tennis and academic honors.</p>
        <div className="honor-board">
          {[honors.slice(0, Math.ceil(honors.length / 2)), honors.slice(Math.ceil(honors.length / 2))].map(
            (column) => (
              <ul className="honor-list" key={column[0].label}>
                {column.map((item) => (
                  <li key={item.label} tabIndex={0}>
                    <span className="honor-label">{item.label}</span>
                    {item.when ? <span className="honor-when">{item.when}</span> : null}
                    <span className="honor-tip">{item.detail}</span>
                  </li>
                ))}
              </ul>
            ),
          )}
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <SkillMarquee />
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            <PinIcon />
            <span>{contact.location}</span>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <MailIcon />
              <span>{contact.email}</span>
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={contact.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

function PinIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5A12 12 0 0 0 8.2 23.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.2 4.8 18.2 5.1 18.2 5.1c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"
      />
    </svg>
  )
}

function ProjectShot({ name, large = false }: { name: string; large?: boolean }) {
  return (
    <div
      className={large ? 'project-shot is-large' : 'project-shot'}
      role="img"
      aria-label={`Placeholder image for ${name}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13zM6 16.5l3.2-3.2 2.1 2.1 3.4-3.9L18 16.5V7H6v9.5zM9 9.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"
        />
      </svg>
      <span>Placeholder</span>
    </div>
  )
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 5h6v2H7v4H5V5zm8 0h6v6h-2V7h-4V5zM5 13h2v4h4v2H5v-6zm12 4v-4h2v6h-6v-2h4z"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4 6.4 5z"
      />
    </svg>
  )
}

export default App
