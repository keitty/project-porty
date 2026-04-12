import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface WeatherData {
  temp: number
  feels_like: number
  humidity: number
  description: string
  emoji: string
  wind: number
}

interface CityEntry {
  label: string
  lat: number
  lon: number
}

const SAO_PAULO: CityEntry = { label: "São Paulo", lat: -23.55, lon: -46.63 }

function getWeatherInfo(code: number): { emoji: string; description: string } {
  if (code === 0)   return { emoji: "☀️",  description: "Clear sky" }
  if (code <= 2)    return { emoji: "🌤️", description: "Partly cloudy" }
  if (code === 3)   return { emoji: "☁️",  description: "Overcast" }
  if (code <= 49)   return { emoji: "🌫️", description: "Foggy" }
  if (code <= 59)   return { emoji: "🌦️", description: "Drizzle" }
  if (code <= 69)   return { emoji: "🌧️", description: "Rainy" }
  if (code <= 79)   return { emoji: "❄️",  description: "Snowy" }
  if (code <= 82)   return { emoji: "🌧️", description: "Rain showers" }
  if (code <= 86)   return { emoji: "🌨️", description: "Snow showers" }
  if (code <= 99)   return { emoji: "⛈️",  description: "Thunderstorm" }
  return { emoji: "🌡️", description: "Unknown" }
}

async function fetchWeather(city: CityEntry): Promise<WeatherData> {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&wind_speed_unit=ms`
  )
  const data = await response.json()
  const current = data.current
  const { emoji, description } = getWeatherInfo(current.weather_code)
  return {
    temp: Math.round(current.temperature_2m),
    feels_like: Math.round(current.apparent_temperature),
    humidity: current.relative_humidity_2m,
    wind: Math.round(current.wind_speed_10m),
    description,
    emoji,
  }
}

function Weather() {
  const [cities, setCities] = useState<CityEntry[]>([SAO_PAULO])
  const [weatherData, setWeatherData] = useState<Record<string, WeatherData>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Step 1: Get user location on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {
          // Reverse geocode to get city name
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
          const geo = await res.json()
          const cityName =
            geo.address.city ||
            geo.address.town ||
            geo.address.village ||
            geo.address.county ||
            'Your Location'

          const userCity: CityEntry = { label: cityName, lat: latitude, lon: longitude }
          setCities([userCity, SAO_PAULO])
        } catch {
          // If reverse geocode fails, still use coords with generic label
          setCities([{ label: 'Your Location', lat: latitude, lon: longitude }, SAO_PAULO])
        }
      },
      () => {
        // If user denies location, fallback to just São Paulo
        setCities([SAO_PAULO])
      }
    )
  }, [])

  // Step 2: Fetch weather whenever cities change
  useEffect(() => {
    if (cities.length === 0) return

    const fetchAll = async () => {
      try {
        const results: Record<string, WeatherData> = {}
        for (const city of cities) {
          results[city.label] = await fetchWeather(city)
        }
        setWeatherData(results)
        setLoading(false)
      } catch {
        setError('Failed to load weather data.')
        setLoading(false)
      }
    }

    fetchAll()
    const interval = setInterval(fetchAll, 600000)
    return () => clearInterval(interval)
  }, [cities])

  return (
    <section id="weather" className="p-16 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">🌤️ World Weather</h2>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading weather...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="flex justify-center gap-6">
          {cities.map((city, index) => {
            const w = weatherData[city.label]
            return (
              <motion.div
                key={city.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-lime-200 p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow dark:bg-gray-700 dark:border-gray-600"
              >
                <h3 className="font-bold text-lg dark:text-white">{city.label}</h3>
                <p className="text-5xl my-2">{w?.emoji}</p>
                <p className="text-3xl font-bold text-lime-600 dark:text-lime-400">{w?.temp}°C</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 capitalize">{w?.description}</p>
                <div className="mt-3 text-xs text-gray-400 dark:text-gray-500 space-y-1">
                  <p>💧 Humidity: {w?.humidity}%</p>
                  <p>🌡️ Feels like: {w?.feels_like}°C</p>
                  <p>💨 Wind: {w?.wind} m/s</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Weather