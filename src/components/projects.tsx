function Projects() {
  return (
    <section id="projects" className="p-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-lime-200 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-bold text-xl">Project Porty</h3>
          <p className="text-gray-500 text-sm mt-1">React · TypeScript · Tailwind</p>
          <p className="mt-2">A personal portfolio and blog website built with modern web technologies.</p>
          <a href="#" className="text-lime-600 font-medium mt-4 inline-block hover:text-lime-700">View Project →</a>
        </div>
      </div>
    </section>
  )
}

export default Projects