import { useIntersection } from '../hooks/useIntersection'
import { projects } from '../data/portfolio'

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  const ref = useIntersection()

  return (
    <section id="projects" ref={ref} className="section-padding bg-dark-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">04. Projects</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Things I've <span className="text-gradient">built</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl">
          Selected projects — each one solving a real problem with clean architecture and modern tooling.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <article key={project.title}
              className="group flex flex-col rounded-2xl bg-dark-700 border border-white/5 overflow-hidden card-hover">

              {/* Gradient header */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-bold text-white text-base drop-shadow">{project.title}</span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag}
                      className="px-2 py-0.5 rounded-md bg-accent-500/10 text-accent-400 text-xs font-medium border border-accent-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
                    <GitHubIcon /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-accent-400 text-sm transition-colors ml-auto">
                    Live Demo <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
