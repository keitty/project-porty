import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ResumeData {
  meta: { version: string; last_updated: string; url: string }
  personal: { name: string; title: string; email: string; location: string; linkedin: string; portfolio: string }
  summary: string
  languages: { language: string; level: string }[]
  skills: { technical: string[]; platforms: string[]; project_management: string[]; soft_skills: string[] }
  experience: { company: string; role: string; period: string; duration: string; highlights: string[] }[]
  education: { institution: string; degree: string; year: string }[]
  certifications: { name: string; issuer?: string; year: string; status: string }[]
  availability: { type: string; timezones: string[] }
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 bg-lime-100 dark:bg-gray-600 text-lime-700 dark:text-lime-400 text-xs font-medium rounded-full">
      {text}
    </span>
  )
}

function ResumeAPI() {
  const [resume, setResume] = useState<ResumeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showJson, setShowJson] = useState(false)

  useEffect(() => {
    fetch('https://project-porty.vercel.app/api/resume')
      .then(res => res.json())
      .then(data => {
        setResume(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load resume data.')
        setLoading(false)
      })
  }, [])

  // Don't render anything until data is ready
  if (loading) {
    return (
      <section id="resume" className="p-16 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">📄 Resume API</h2>
        <p className="text-center text-gray-500 dark:text-gray-400">Fetching resume data...</p>
      </section>
    )
  }

  if (error || !resume) {
    return (
      <section id="resume" className="p-16 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">📄 Resume API</h2>
        <p className="text-center text-red-500">{error ?? 'No data found.'}</p>
      </section>
    )
  }

  // Only renders when resume data is fully loaded
  return (
    <section id="resume" className="p-16 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">📄 Resume API</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-2">
        This section is powered by my own REST API
      </p>

      {/* API Endpoint Badge */}
      <div className="flex justify-center mb-8">
        <a
          href="https://project-porty.vercel.app/api/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-lime-400 text-xs font-mono rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
          GET /api/resume
        </a>
      </div>

      {/* Personal Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="border border-lime-200 dark:border-gray-600 rounded-lg shadow p-6 dark:bg-gray-700 mb-6 text-center"
      >
        <h3 className="text-2xl font-bold dark:text-white">{resume.personal?.name}</h3>
        <p className="text-lime-600 dark:text-lime-400 font-medium mt-1">{resume.personal?.title}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">📍 {resume.personal?.location}</p>
        <div className="flex justify-center gap-4 mt-3 text-sm">
          <a href={`mailto:${resume.personal?.email}`} className="text-lime-600 dark:text-lime-400 hover:underline">✉️ {resume.personal?.email}</a>
          <a href={resume.personal?.linkedin} target="_blank" rel="noopener noreferrer" className="text-lime-600 dark:text-lime-400 hover:underline">💼 LinkedIn</a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 max-w-2xl mx-auto">{resume.summary}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-lime-200 dark:border-gray-600 rounded-lg shadow p-6 dark:bg-gray-700"
        >
          <h4 className="text-lg font-bold dark:text-white mb-4">💼 Experience</h4>
          <div className="space-y-4">
            {(resume.experience ?? []).map((exp, i) => (
              <div key={i} className="border-l-2 border-lime-500 pl-4">
                <p className="font-bold dark:text-white">{exp.role}</p>
                <p className="text-lime-600 dark:text-lime-400 text-sm">{exp.company} · {exp.duration}</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mb-2">{exp.period}</p>
                <ul className="space-y-1">
                  {(exp.highlights ?? []).map((h, j) => (
                    <li key={j} className="text-gray-500 dark:text-gray-400 text-xs">• {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-lime-200 dark:border-gray-600 rounded-lg shadow p-6 dark:bg-gray-700"
          >
            <h4 className="text-lg font-bold dark:text-white mb-4">🛠️ Skills</h4>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">Technical</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {(resume.skills?.technical ?? []).map((s, i) => <Tag key={i} text={s} />)}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">Platforms</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {(resume.skills?.platforms ?? []).map((s, i) => <Tag key={i} text={s} />)}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">Soft Skills</p>
            <div className="flex flex-wrap gap-2">
              {(resume.skills?.soft_skills ?? []).map((s, i) => <Tag key={i} text={s} />)}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="border border-lime-200 dark:border-gray-600 rounded-lg shadow p-6 dark:bg-gray-700"
          >
            <h4 className="text-lg font-bold dark:text-white mb-4">🎓 Education</h4>
            <div className="space-y-2 mb-4">
              {(resume.education ?? []).map((edu, i) => (
                <div key={i} className="border-l-2 border-lime-500 pl-4">
                  <p className="font-bold dark:text-white text-sm">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{edu.institution} · {edu.year}</p>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-bold dark:text-white mb-3">📜 Certifications</h4>
            <div className="space-y-2">
              {(resume.certifications ?? []).map((cert, i) => (
                <div key={i} className="flex items-center justify-between">
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.name}{cert.issuer ? ` · ${cert.issuer}` : ''}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cert.status === 'In Progress' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400' : 'bg-lime-100 text-lime-600 dark:bg-gray-600 dark:text-lime-400'}`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Languages & Availability */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="border border-lime-200 dark:border-gray-600 rounded-lg shadow p-6 dark:bg-gray-700 mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold dark:text-white mb-3">🌎 Languages</h4>
            <div className="flex gap-3">
              {(resume.languages ?? []).map((lang, i) => (
                <div key={i} className="text-center">
                  <p className="font-bold dark:text-white text-sm">{lang.language}</p>
                  <p className="text-lime-600 dark:text-lime-400 text-xs">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold dark:text-white mb-3">🕐 Availability</h4>
            <p className="text-lime-600 dark:text-lime-400 text-sm font-medium mb-2">✅ {resume.availability?.type}</p>
            <div className="flex flex-wrap gap-2">
              {(resume.availability?.timezones ?? []).map((tz, i) => <Tag key={i} text={tz} />)}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Raw JSON Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="border border-lime-200 dark:border-gray-600 rounded-lg shadow dark:bg-gray-700"
      >
        <button
          onClick={() => setShowJson(!showJson)}
          className="w-full p-4 text-left font-mono text-sm text-lime-600 dark:text-lime-400 font-bold flex justify-between items-center"
        >
          <span>{'{ }'} View Raw JSON Response</span>
          <span>{showJson ? '▲ Hide' : '▼ Show'}</span>
        </button>
        {showJson && (
          <pre className="p-4 text-xs text-gray-500 dark:text-gray-400 overflow-x-auto border-t border-lime-200 dark:border-gray-600">
            {JSON.stringify(resume, null, 2)}
          </pre>
        )}
      </motion.div>
    </section>
  )
}

export default ResumeAPI