import { useState } from 'react'
import { motion } from 'framer-motion'

interface ReviewForm {
  name: string
  email: string
  review: string
}

function Reviews() {
  const [form, setForm] = useState<ReviewForm>({ name: '', email: '', review: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL

  const handleSubmit = async () => {
    if (!form.name || !form.review) {
      setError('Please fill in your name and review.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          review: form.review,
          submitted_at: new Date().toISOString(),
        }),
      })
      setSuccess(true)
      setForm({ name: '', email: '', review: '' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="reviews" className="p-16 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">🤖 AI Automation</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-2">
        Leave a review and watch AI automation in action
      </p>

      {/* Flow explanation badge */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-lime-400 text-xs font-mono rounded-full">
          <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
          Your Review → Make.com → GPT-4o mini → Google Sheets
        </div>
      </div>

      {/* Flow Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
        {[
          { emoji: '📝', step: '1', label: 'You submit a review' },
          { emoji: '⚡', step: '2', label: 'Make.com receives it' },
          { emoji: '🧠', step: '3', label: 'GPT-4o mini analyzes it' },
          { emoji: '📊', step: '4', label: 'Saved to Google Sheets' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-lime-200 dark:border-gray-600 rounded-lg p-4 text-center dark:bg-gray-700 shadow"
          >
            <p className="text-3xl mb-1">{item.emoji}</p>
            <p className="text-xs font-bold text-lime-600 dark:text-lime-400 mb-1">Step {item.step}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Review Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto border border-lime-200 dark:border-gray-600 rounded-lg shadow p-8 dark:bg-gray-700"
      >
        {success ? (
          <div className="text-center py-8">
            <p className="text-5xl mb-4">🎉</p>
            <p className="text-xl font-bold dark:text-white mb-2">Review Submitted!</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Your review is being processed by GPT-4o mini and saved to Google Sheets.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-full font-bold text-sm transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold dark:text-white mb-6 text-center">✍️ Leave a Review</h3>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                Email <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* Review */}
            <div className="mb-6">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                Review <span className="text-red-400">*</span>
              </label>
              <textarea
                placeholder="Share your thoughts about my portfolio..."
                value={form.review}
                onChange={(e) => setForm({ ...form, review: e.target.value })}
                rows={4}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-lime-500 hover:bg-lime-600 disabled:bg-lime-300 text-white py-3 rounded-full font-bold transition-colors"
            >
              {loading ? '⏳ Sending...' : '🚀 Submit Review'}
            </button>

            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">
              Your review will be categorized and summarized by AI 🤖
            </p>
          </>
        )}
      </motion.div>
    </section>
  )
}

export default Reviews