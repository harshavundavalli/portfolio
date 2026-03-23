import { useIntersection } from '../hooks/useIntersection'
import { experience, certifications } from '../data/portfolio'

export default function Experience() {
  const ref = useIntersection()

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">05. Experience</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14">
          Where I've <span className="text-gradient">worked</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <div key={item.role}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}>

                <div className={`w-full md:w-[calc(50%-2rem)] ${item.side === 'left' ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-6 rounded-2xl bg-dark-700 border border-white/5 hover:border-accent-500/25 transition-all duration-300 group hover:-translate-y-0.5"
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(99,102,241,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20 text-xs font-mono mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-0.5">{item.role}</h3>
                    <p className="text-accent-400 text-sm font-medium mb-3">{item.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-dark-600 text-gray-400 text-xs border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500 border-4 border-dark-900 top-6 z-10 glow-sm" />

                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">05b. Certifications</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map(cert => (
              <div key={cert.name}
                className="p-5 rounded-xl bg-dark-700 border border-white/5 hover:border-accent-500/25 transition-all duration-200 group">
                <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="text-white font-medium text-sm mb-1">{cert.name}</p>
                <p className="text-gray-500 text-xs mb-2">{cert.issuer}</p>
                <span className="text-accent-400 font-mono text-xs">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
