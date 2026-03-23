import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useIntersection } from '../hooks/useIntersection'

const EMAILJS_SERVICE_ID = 'service_ylh2fc4'
const EMAILJS_TEMPLATE_ID = 'template_zjyy25q'
const EMAILJS_PUBLIC_KEY = 'BssP0_tA64gkDlIfg'

const contactInfo = [
  {
    label: 'Email',
    value: 'hxv230008@utdallas.edu',
    href: 'mailto:hxv230008@utdallas.edu',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Dallas, TX',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/harshavundavalli',
    href: 'https://github.com/harshavundavalli',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/harsha-vundavalli',
    href: 'https://www.linkedin.com/in/harsha-vundavalli/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useIntersection()
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-dark-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">06. Contact</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get in <span className="text-gradient">touch</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl">
          Open to full-time roles and internships. If you have a position or project in mind, I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map(({ label, value, href, icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-400 transition-colors font-medium text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-2 p-4 rounded-xl bg-accent-500/5 border border-accent-500/15">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <p className="text-green-400 text-sm font-medium">Available for opportunities</p>
              </div>
              <p className="text-gray-500 text-xs">Graduating Dec 2025 — open to full-time roles</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
              <Field label="Email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
            </div>
            <Field label="Subject" name="subject" type="text" placeholder="Job opportunity / Collaboration" value={form.subject} onChange={handleChange} />

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium">
                Message <span className="text-accent-400">*</span>
              </label>
              <textarea name="message" rows={5}
                placeholder="Tell me about the role or project..."
                value={form.message} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25 transition-all duration-200 resize-none" />
            </div>

            <button type="submit" disabled={status === 'sending' || status === 'sent'}
              className={`self-start px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${
                status === 'sent'
                  ? 'bg-green-500 cursor-default'
                  : status === 'error'
                  ? 'bg-red-500 cursor-default'
                  : status === 'sending'
                  ? 'bg-accent-600 opacity-70 cursor-wait'
                  : 'btn-primary'
              }`}>
              {status === 'sending' ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </span>
              ) : status === 'sent' ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </span>
              ) : status === 'error' ? 'Failed — Try Again' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-gray-400 text-sm font-medium">
        {label} {required && <span className="text-accent-400">*</span>}
      </label>
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25 transition-all duration-200" />
    </div>
  )
}
