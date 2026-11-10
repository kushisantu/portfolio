import { createElement, useEffect, useRef, useState, type AllHTMLAttributes, type ChangeEvent, type CSSProperties, type FormEvent, type ReactNode } from 'react'
import {
  contact,
  education,
  experience,
  honors,
  navSections,
  posts,
  profile,
  projects,
  sections,
} from './data/content.ts'
import { SkillGrid } from './SkillGrid.tsx'

type SectionId = (typeof sections)[number]['id']

function sectionInView(): SectionId {
  const atEnd =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  if (atEnd) return sections[sections.length - 1].id

  const header = document.querySelector('.site-header')
  const top = header?.getBoundingClientRect().bottom ?? 0
  const bottom = window.innerHeight
  let current: SectionId = sections[0].id
  let most = -1

  for (const section of sections) {
    const node = document.getElementById(section.id)
    if (!node) continue
    const rect = node.getBoundingClientRect()
    const visible = Math.min(rect.bottom, bottom) - Math.max(rect.top, top)
    if (visible > most) {
      most = visible
      current = section.id
    }
  }

  return current
}

function videoEmbedUrl(url: string) {
  const youtube = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/)
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}?rel=0`
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  const loom = url.match(/loom\.com\/(?:share|embed)\/([\w-]+)/)
  if (loom) return `https://www.loom.com/embed/${loom[1]}`
  const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/)
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`
  return null
}

function ProjectVideo({ url, title }: { url: string; title: string }) {
  const embed = videoEmbedUrl(url)
  return (
    <div className="project-video">
      {embed ? (
        <iframe
          src={embed}
          title={`${title} demo`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        // Without a start offset, some browsers show a black box instead of the first frame.
        <video src={`${url}#t=0.1`} controls preload="metadata" playsInline>
          <a href={url}>Watch the {title} demo</a>
        </video>
      )}
    </div>
  )
}

function TechList({ tools }: { tools: readonly string[] }) {
  return (
    <ul className="tech-list">
      {tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
  )
}

function GitHubLink({ href, name, compact }: { href: string; name: string; compact?: boolean }) {
  return (
    <a
      className={compact ? 'project-link is-compact' : 'project-link'}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name} on GitHub`}
      title={compact ? 'View on GitHub' : undefined}
    >
      <GitHubIcon />
      {compact ? null : 'GitHub'}
    </a>
  )
}

function useRise<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function check() {
      if (reduce || element!.getBoundingClientRect().top < window.innerHeight - 24) {
        setShown(true)
        window.removeEventListener('scroll', check)
      }
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return { ref, shown }
}

function riseClass(className: string | undefined, shown: boolean) {
  return [className, 'rise', shown ? 'is-in' : ''].filter(Boolean).join(' ')
}

function Rise({
  as: Tag = 'div',
  className,
  delay,
  style,
  children,
  ...rest
}: {
  as?: 'div' | 'h1' | 'h2' | 'p' | 'article' | 'button' | 'form'
  delay?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
} & Omit<AllHTMLAttributes<HTMLElement>, 'className' | 'style'>) {
  const { ref, shown } = useRise<HTMLElement>()
  return createElement(
    Tag,
    {
      ...rest,
      ref,
      className: riseClass(className, shown),
      style: delay ? { ...style, transitionDelay: delay } : style,
    },
    children,
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<SectionId>('hero')
  const [showAllProjects, setShowAllProjects] = useState(false)
  const lockedId = useRef<SectionId | null>(null)
  const [featured, ...otherProjects] = projects
  const listedProjects = showAllProjects ? otherProjects : otherProjects.slice(0, 4)

  useEffect(() => {
    function sync() {
      const current = sectionInView()
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
    <div className="site">
      <header
        className={menuOpen ? 'site-header is-open' : 'site-header'}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setMenuOpen(false)
        }}
      >
        <a
          className="brand"
          href="#hero"
          aria-label={profile.name}
          onClick={() => selectSection('hero')}
        >
          {profile.mark}
        </a>
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
        <div className="header-tools">
          <ThemeToggle />
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <section id="hero">
        <div className="hero-copy">
          <Rise as="h1">{profile.name}</Rise>
          <Rise as="p" className="hero-tagline">
            {profile.tagline}
          </Rise>
          {profile.paragraphs.map((paragraph) => (
            <Rise as="p" key={paragraph}>
              {paragraph}
            </Rise>
          ))}
          <Rise className="hero-seeking">
            <p className="hero-seeking-label">{profile.seekingLabel}</p>
            <ul className="tech-list hero-roles">
              {profile.seeking.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </Rise>
          <Rise as="p" className="hero-actions">
            <a
              className="button-primary"
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              {profile.resumeLabel}
            </a>
            <a className="button-secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a className="button-secondary" href={contact.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
              GitHub
            </a>
          </Rise>
        </div>
      </section>

      <section id="experience">
        <Rise as="h2">Experience</Rise>
        <Rise className="row-panel">
          {experience.map((job) => (
            <article className="exp-row" key={job.role}>
              <div className="exp-meta">
                <p className="exp-dates">{job.dates}</p>
                <p className="exp-place">{job.place}</p>
              </div>
              <div className="exp-body">
                <h3>{job.role}</h3>
                <p className="exp-org">{job.org}</p>
                <ul className="exp-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <TechList tools={job.tools.split(', ')} />
              </div>
            </article>
          ))}
        </Rise>
      </section>

      <section id="projects">
        <Rise as="h2">Projects</Rise>
        <Rise className="project-panel">
          <article className="featured-project">
            <div className="featured-copy">
              <p className="project-eyebrow">Featured project</p>
              <h3>{featured.name}</h3>
              {featured.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <TechList tools={featured.tools} />
              {featured.github ? <GitHubLink href={featured.github} name={featured.name} /> : null}
            </div>
            {featured.video ? <ProjectVideo url={featured.video} title={featured.name} /> : null}
          </article>
          <div className="project-cells">
            {listedProjects.map((project) => (
              <article className="project-cell" key={project.name}>
                <div className="project-cell-head">
                  <h3>{project.name}</h3>
                  {project.github ? (
                    <GitHubLink href={project.github} name={project.name} compact />
                  ) : null}
                </div>
                <p>{project.about[0]}</p>
                <TechList tools={project.tools} />
              </article>
            ))}
          </div>
        </Rise>
        {otherProjects.length > 4 ? (
          <Rise
            as="button"
            type="button"
            className="project-more"
            aria-expanded={showAllProjects}
            onClick={() => setShowAllProjects((open) => !open)}
          >
            {showAllProjects ? 'Show less' : 'Show more'}
          </Rise>
        ) : null}
      </section>

      <section id="education">
        <Rise as="h2">Education</Rise>
        <Rise className="edu-grid">
          {education.map((school) => (
            <article className="edu-card" key={school.school}>
              <div className="edu-head">
                <div>
                  <h3>{school.school}</h3>
                  <p className="edu-degree">{school.credential}</p>
                  <p className="edu-meta">{school.place}</p>
                </div>
                <div className="edu-side">
                  <p className="edu-dates">{school.dates}</p>
                  <p className="edu-gpa">
                    GPA <span className="edu-gpa-value">{school.gpa}</span>
                  </p>
                  {'award' in school ? (
                    <p className="edu-award">
                      <AwardIcon />
                      {school.award}
                    </p>
                  ) : null}
                </div>
              </div>
              <p className="edu-kicker">Focus areas</p>
              <ul className="tech-list">
                {school.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="edu-kicker">Highlights</p>
              <ul className="edu-points">
                {school.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </Rise>
      </section>

      <section id="athletics">
        <Rise as="h2">Honors</Rise>
        <Rise as="p" className="honor-lead">
          Hackathon, NCAA Division II women's tennis, and academic honors.
        </Rise>
        <Rise className="honor-grid">
          {honors.map((item) => (
            <article className="honor-card" key={item.label}>
              <div className="honor-card-top">
                <span className="honor-label">{item.label}</span>
                {item.when ? <span className="honor-when">{item.when}</span> : null}
              </div>
              <p>{item.detail}</p>
            </article>
          ))}
        </Rise>
      </section>

      <section id="skills">
        <Rise as="h2">Skills</Rise>
        <Rise>
          <SkillGrid />
        </Rise>
      </section>

      <section id="blog">
        <Rise as="h2">Writing</Rise>
        <Rise className="blog-list">
          {posts.map((post) => (
            <article className="blog-card" key={post.href}>
              <div className="blog-copy">
                <p className="blog-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
              <a className="blog-open" href={post.href} target="_blank" rel="noreferrer">
                Read on Medium
              </a>
            </article>
          ))}
        </Rise>
      </section>

      <section id="contact">
        <div className="contact-layout">
          <Rise>
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
          </Rise>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

const contactFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', error: 'Name is required' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com', error: 'Email is required' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?", error: 'Subject is required' },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell me about your project or opportunity...',
    error: 'Message is required',
  },
] as const

type ContactName = (typeof contactFields)[number]['name']

function ContactForm() {
  const [values, setValues] = useState<Record<ContactName, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const { ref: formRef, shown: formShown } = useRise<HTMLFormElement>()
  function fieldError(name: ContactName) {
    const value = values[name].trim()
    if (!value) return contactFields.find((field) => field.name === name)?.error ?? ''
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email'
    return ''
  }

  const ready = contactFields.every((field) => !fieldError(field.name))
  const emailError = values.email.trim() ? fieldError('email') : ''

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!ready) return

    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
  }

  return (
    <form
      ref={formRef}
      className={formShown ? 'contact-form rise is-in' : 'contact-form rise'}
      noValidate
      onSubmit={onSubmit}
      style={{ transitionDelay: '90ms' }}
    >
      <h3>Connect with me</h3>
      {contactFields.map((field) => {
        const error = field.name === 'email' ? emailError : ''
        const inputId = `contact-${field.name}`
        const errorId = `${inputId}-error`
        const shared = {
          id: inputId,
          name: field.name,
          placeholder: field.placeholder,
          value: values[field.name],
          required: true,
          'aria-invalid': error ? true : undefined,
          'aria-describedby': error ? errorId : undefined,
          onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValues((current) => ({ ...current, [field.name]: event.target.value }))
          },
        }

        return (
          <div className="contact-field" key={field.name}>
            <label htmlFor={inputId}>
              {field.label} <span aria-hidden="true">*</span>
            </label>
            {field.type === 'textarea' ? <textarea {...shared} rows={5} /> : <input {...shared} type={field.type} />}
            {error ? (
              <p className="contact-error" id={errorId} role="alert">
                {error}
              </p>
            ) : null}
          </div>
        )
      })}
      <button className="contact-submit" type="submit" disabled={!ready}>
        Connect!
      </button>
    </form>
  )
}

type Theme = 'light' | 'dark'

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  function toggle() {
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked (e.g. private mode); the theme still applies for this visit.
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      onClick={toggle}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7z" />
    </svg>
  )
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a6 6 0 0 0-3.6 10.8L7 22l5-2.6 5 2.6-1.4-9.2A6 6 0 0 0 12 2zm0 2.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"
      />
    </svg>
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

export default App
