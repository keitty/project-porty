import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Rates {
  [key: string]: number
}

const BASE_CURRENCY = 'BRL'

const DISPLAY_CURRENCIES = [
  { label: 'US Dollar',       code: 'USD' },
  { label: 'Euro',            code: 'EUR' },
  { label: 'ARG Peso',        code: 'ARS' },
]

const ALL_CURRENCIES = [
  { code: 'USD', label: 'US Dollar' },
  { code: 'EUR', label: 'Euro' },
  { code: 'BRL', label: 'Brazilian Real' },
  { code: 'CAD', label: 'Canadian Dollar' },
  { code: 'GBP', label: 'British Pound' },
  { code: 'MXN', label: 'Mexican Peso' },
  { code: 'ARS', label: 'Argentine Peso' },
]

function Currency() {
  const [rates, setRates] = useState<Rates>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Converter state
  const [amount, setAmount] = useState<string>('1')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('BRL')

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${BASE_CURRENCY}`
        )
        const data = await response.json()
        setRates(data.rates)
        setLoading(false)
      } catch {
        setError('Failed to load exchange rates.')
        setLoading(false)
      }
    }

    fetchRates()
    const interval = setInterval(fetchRates, 3600000) // refresh every hour
    return () => clearInterval(interval)
  }, [])

  // Calculate converted amount based on current state
  const getConvertedAmount = () => {
    if (!rates || !amount) return null
    const fromRate = rates[fromCurrency]
    const toRate = rates[toCurrency]
    if (!fromRate || !toRate) return null
    const result = (parseFloat(amount) / fromRate) * toRate
    return result.toFixed(2)
  }

  const converted = getConvertedAmount()

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <section id="currency" className="p-16 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">💱 Currency Exchange</h2>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading rates...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          {/* Rate Cards — 1 USD = X */}
          <div className="flex justify-center gap-6">
            {DISPLAY_CURRENCIES.map((currency, index) => (
              <motion.div
                key={currency.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-lime-200 p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow dark:bg-gray-700 dark:border-gray-600"
              >
                
                <h3 className="font-bold text-lg dark:text-white">{currency.code}</h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">{currency.label}</p>
                <p className="text-2xl font-bold text-lime-600 dark:text-lime-400">
                  {rates[currency.code]?.toFixed(2)}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">per 1 BRL</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Converter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto border border-lime-200 rounded-lg shadow p-8 dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="text-xl font-bold text-center mb-6 dark:text-white">🔄 Converter</h3>

            {/* Amount Input */}
            <div className="mb-4">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Amount</label>
              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-lg font-bold dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* From / Swap / To */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1">
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">From</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                >
                  {ALL_CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.code} — {c.label}</option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <button
                onClick={handleSwap}
                className="mt-5 p-2 rounded-full bg-lime-500 hover:bg-lime-600 text-white font-bold text-lg transition-colors"
              >
                ⇄
              </button>

              <div className="flex-1">
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">To</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                >
                  {ALL_CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.code} — {c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            {converted && (
              <div className="text-center bg-lime-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {amount} {fromCurrency} =
                </p>
                <p className="text-4xl font-bold text-lime-600 dark:text-lime-400 mt-1">
                  {converted} {toCurrency}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </section>
  )
}

export default Currency