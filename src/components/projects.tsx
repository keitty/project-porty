import { useState, useEffect } from 'react'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
}

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/keitty/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" className="p-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <div key={repo.id} className="border border-lime-200 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl">{repo.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{repo.language}</p>
              <p className="mt-2 text-gray-600">{repo.description}</p>
              <a href={repo.html_url} className="text-lime-600 font-medium mt-4 inline-block hover:text-lime-700">View Project →</a>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects