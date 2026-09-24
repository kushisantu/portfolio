import { useEffect, useRef, useState } from 'react'

const sections = [
  {
    id: 'hero',
    label: 'Hero',
    heading: 'Kushi Santosh Khandoji',
    text: 'M.S. Computer Science, George Washington University',
  },
  {
    id: 'about',
    label: 'About',
    heading: 'About',
    text: 'A short introduction will go here.',
  },
  {
    id: 'experience',
    label: 'Experience',
    heading: 'Experience',
    text: 'Experience entries will go here.',
  },
  {
    id: 'projects',
    label: 'Projects',
    heading: 'Projects',
    text: 'Project entries will go here.',
  },
  {
    id: 'education',
    label: 'Education',
    heading: 'Education',
    text: 'Education entries will go here.',
  },
  {
    id: 'athletics',
    label: 'Athletics',
    heading: 'Athletics',
    text: 'Athletics entries will go here.',
  },
  {
    id: 'skills',
    label: 'Skills',
    heading: 'Skills',
    text: 'Skills will go here.',
  },
  {
    id: 'contact',
    label: 'Contact',
    heading: 'Contact',
    text: 'Contact details will go here.',
  },
] as const

type SectionId = (typeof sections)[number]['id']

function markerLine() {
  const header = document.querySelector('.site-header')
  const bottom = header?.getBoundingClientRect().bottom ?? 48
  return bottom + 32
}

function sectionAtMarker(): SectionId {
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
            Kushi Khandoji
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

      {sections.map((section) => {
        const Heading = section.id === 'hero' ? 'h1' : 'h2'
        return (
          <section id={section.id} key={section.id}>
            <Heading>{section.heading}</Heading>
            <p>{section.text}</p>
          </section>
        )
      })}
    </>
  )
}

export default App
