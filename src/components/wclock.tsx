import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeData {
  time: string
  date: string
  dayOfWeek: string
  timeZone: string
}

const TIMEZONES = [
  { label: "Mendoza", zone: "America/Argentina/Mendoza", flag: "🇦🇷" },
  { label: "New York", zone: "America/New_York", flag: "🇺🇸" },
  { label: "London", zone: "Europe/London", flag: "🇬🇧" },
  { label: "Tokyo", zone: "Asia/Tokyo", flag: "🇯🇵" },
  { label: "Sydney", zone: "Australia/Sydney", flag: "🇦🇺" },
]

function WorldClock() {
  const [times, setTimes] = useState<Record<string, TimeData>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllTimes = async () => {
      const results: Record<string, TimeData> = {}
      for (const tz of TIMEZONES) {
        const response = await fetch(`https://timeapi.io/api/time/current/zone?timeZone=${tz.zone}`)
        const data = await response.json()
        results[tz.zone] = data
      }
      setTimes(results)
      setLoading(false)
    }

    fetchAllTimes()
    const interval = setInterval(fetchAllTimes, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="worldclock" className="p-16 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">🌍 World Clock</h2>
      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading times...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TIMEZONES.map((tz, index) => (
            <motion.div
              key={tz.zone}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-lime-200 p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow dark:bg-gray-700 dark:border-gray-600"
            >
              <p className="text-4xl mb-2">{tz.flag}</p>
              <h3 className="font-bold text-lg dark:text-white">{tz.label}</h3>
              <p className="text-3xl font-bold text-lime-600 dark:text-lime-400 mt-2">{times[tz.zone]?.time}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{times[tz.zone]?.dayOfWeek}</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{times[tz.zone]?.date}</p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default WorldClock