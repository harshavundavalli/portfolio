import { useIntersection } from '../hooks/useIntersection'

const stats = [
  { value: '3.81', label: 'M.S. GPA @ UTD' },
  { value: '1K+',  label: 'Monthly Active Users' },
  { value: '99.9%', label: 'Uptime Delivered' },
  { value: '50%+', label: 'Faster Deployments' },
]

export default function About() {
  const ref = useIntersection(0)

  return (
    <section id="about" ref={ref} className="section-padding pt-28 sm:pt-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-600/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Hero intro ── */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-accent-500/10 border border-accent-500/20 text-accent-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to full-time roles &amp; internships
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5">
            <span className="text-white">Harsha Vardhan</span>
            <br />
            <span className="text-gradient">Chowdary Vundavalli</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Cloud Software Engineer with expertise in AWS, containerisation, and full-stack development.
            Building scalable systems that support 1,000+ users at 99.9% uptime.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="/harsha_resume (2) (2).pdf" download
              className="px-7 py-3 rounded-xl font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200">
              Download Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent mb-16" />

        {/* ── About section ── */}
        <div className="flex items-center gap-3 mb-8">
          <span className="section-label">01. About Me</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Building reliable systems,{' '}
              <span className="text-gradient">one deployment at a time</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a Cloud Software Engineer and M.S. Computer Science student at the{' '}
                <span className="text-white font-medium">University of Texas at Dallas</span> (GPA 3.81,
                graduating Dec 2025), specialising in scalable web systems and cloud infrastructure.
              </p>
              <p>
                My work spans full-stack development with React and Node.js, cloud-native deployments on{' '}
                <span className="text-accent-400 font-medium">AWS</span> (ECS, Lambda, CloudWatch), and
                DevOps workflows using Docker, Terraform, and GitHub Actions — cutting deployment times
                by over 50%.
              </p>
              <p>
                Previously, I earned my B.E. in Computer Science from{' '}
                <span className="text-white font-medium">BITS Pilani, Hyderabad</span>. I hold AWS
                Certified Cloud Practitioner and Microsoft Azure Data Fundamentals certifications.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label}
                className="p-6 rounded-xl bg-dark-700 border border-white/5 hover:border-accent-500/30 transition-all duration-200 group">
                <p className="text-3xl font-extrabold text-gradient mb-1">{value}</p>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
