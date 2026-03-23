import { useIntersection } from '../hooks/useIntersection'
import { education } from '../data/portfolio'

function GraduationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )
}

export default function Education() {
  const ref = useIntersection()

  return (
    <section id="education" ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">02. Education</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Academic <span className="text-gradient">background</span>
        </h2>

        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <div key={edu.school}
              className="relative p-6 sm:p-8 rounded-2xl bg-dark-700 border border-white/5 hover:border-accent-500/25 transition-all duration-300 group hover:-translate-y-0.5"
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(99,102,241,0.12)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-gradient-to-b from-accent-400 to-cyan-400" />

              {i === 0 && (
                <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20 text-xs font-mono">
                  Current
                </span>
              )}

              <div className="flex items-start gap-4 pl-4">
                <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 flex-shrink-0">
                  <GraduationIcon />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg mb-0.5">{edu.degree}</h3>
                  <p className="text-accent-400 font-medium text-sm mb-3">{edu.school}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span>{edu.location}</span>
                    <span className="font-mono">{edu.period}</span>
                    <span className="text-green-400 font-semibold">GPA: {edu.gpa}</span>
                  </div>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span key={course}
                        className="px-2.5 py-1 rounded-lg bg-dark-600 border border-white/5 text-gray-400 text-xs hover:text-white hover:border-accent-500/20 transition-colors">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
