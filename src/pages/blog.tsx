import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

interface BlogProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

interface Article {
  id: number
  title: string
  description: string
  url: string
  readable_publish_date: string
  cover_image: string | null
  positive_reactions_count: number
}

function Blog({ darkMode, setDarkMode }: BlogProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dev.to/api/articles?tag=react&per_page=6')
      .then(response => response.json())
      .then(data => {
        setArticles(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <section className="p-16">
        <h2 className="text-3xl font-bold text-center mb-2">Blog</h2>
        <p className="text-gray-500 text-center mb-8">Latest articles from the React community</p>
        {loading ? (
          <p className="text-center text-gray-500">Loading articles...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <div key={article.id} className="border border-lime-200 rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
                {article.cover_image && (
                  <img src={article.cover_image} alt={article.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <p className="text-gray-400 text-xs mb-2">{article.readable_publish_date}</p>
                  <h3 className="font-bold text-lg leading-tight">{article.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{article.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lime-600 text-sm">❤️ {article.positive_reactions_count}</p>
                    <a href={article.url} target="_blank" className="text-lime-600 font-medium hover:text-lime-700">Read more →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}

export default Blog