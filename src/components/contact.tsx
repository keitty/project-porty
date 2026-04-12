function Contact() {
  return (
    <section id="contact" className="p-16 flex flex-col items-center dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">Get In Touch</h2>
      <p className="text-gray-500 dark:text-gray-400 text-center mb-8">Have an opportunity or just want to say hi? My inbox is always open.</p>
      <div className="flex gap-4">
        <a href="mailto:keitty.prevedel@gmail.com" className="bg-lime-500 text-white px-6 py-3 rounded-full font-bold hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700">Email Me</a>
        <a href="https://github.com/keitty" className="border border-lime-500 text-lime-600 px-6 py-3 rounded-full font-bold hover:bg-lime-50 dark:text-lime-400 dark:border-lime-400 dark:hover:bg-gray-700">GitHub</a>
        <a href="https://www.linkedin.com/in/keitty-prevedel" className="border border-lime-500 text-lime-600 px-6 py-3 rounded-full font-bold hover:bg-lime-50 dark:text-lime-400 dark:border-lime-400 dark:hover:bg-gray-700">Linkedin</a>
      </div>
    </section>
  )
}

export default Contact