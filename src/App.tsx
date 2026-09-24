import { useEffect, useRef, useState } from 'react'
import {
  about,
  contact,
  education,
  experience,
  profile,
  projects,
  sections,
  skillGroups,
} from './data/content.ts'

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<SectionId>('hero')
  const lockedId = useRef<SectionId | null>(null)

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

  function selectSection(id: SectionId) {
    lockedId.current = id
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={menuOpen ? 'site-header is-open' : 'site-header'}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setMenuOpen(false)
        }}
      >
        <div className="header-bar">
          <a className="brand" href="#hero" onClick={() => selectSection('hero')}>
            {profile.shortName}
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
            {sections.map((section) => (
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
        {projects.map((project) => (
          <article className="entry" key={project.name}>
            <h3>{project.name}</h3>
            <p className="meta">{project.tools}</p>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
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
        <h2>Athletics</h2>
        <h3>Certifications</h3>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        {skillGroups.map((group) => (
          <p key={group.label}>
            <span className="label">{group.label}.</span> {group.items}
          </p>
        ))}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>{contact.location}</p>
        <p>
          <a className="text-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>
      </section>
    </>
  )
}

export default App
