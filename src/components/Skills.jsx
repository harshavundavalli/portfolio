import { useState } from 'react'
import { useIntersection } from '../hooks/useIntersection'
import { skills } from '../data/portfolio'

export default function Skills() {
  const ref = useIntersection()
  const [active, setActive] = useState(skills[0].category)
  const currentSkills = skills.find(s => s.category === active)?.items ?? []

  return (
    <section id="skills" ref={ref} className="section-padding bg-dark-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">03. Skills</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Technologies I <span className="text-gradient">work with</span>
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skills.map(({ category }) => (
            <button key={category} onClick={() => setActive(category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                active === category
                  ? 'bg-accent-500 text-white border-accent-500 glow-sm'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/20'
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-4">
          {currentSkills.map(({ name, level, icon }) => (
            <div key={name}
              className="p-5 rounded-xl bg-dark-700 border border-white/5 hover:border-accent-500/20 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-white font-medium">{name}</span>
                </div>
                <span className="text-accent-400 font-mono text-sm">{level}%</span>
              </div>
              <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-600 to-cyan-400 transition-all duration-500"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech pill strip */}
        <div className="mt-12 pt-10 border-t border-white/5">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 text-center">Full stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.flatMap(s => s.items).map(({ name, icon }) => (
              <span key={name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-700 border border-white/8 text-gray-400 text-sm hover:border-accent-500/30 hover:text-white transition-colors">
                <span>{icon}</span>{name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
