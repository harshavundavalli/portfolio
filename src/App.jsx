import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p>
          Designed & Built by{' '}
          <span className="text-accent-400 font-medium">Harsha Vardhan Chowdary Vundavalli</span> — {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
