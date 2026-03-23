import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (href) => {
    setMenuOpen(false)
    setActive(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-800/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#" onClick={() => setActive('')}
            className="text-xl font-bold font-mono text-gradient">
            &lt;HVC /&gt;
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? 'text-accent-400 bg-accent-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => handleLinkClick('#contact')}
              className="ml-3 btn-primary text-sm">
              Hire Me
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-dark-800/95 backdrop-blur-md border-b border-white/5 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                active === link.href ? 'text-accent-400 bg-accent-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => handleLinkClick('#contact')}
            className="mt-2 px-4 py-3 rounded-xl bg-accent-500 text-white text-sm font-semibold text-center">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
