function Navbar() {
  return (
    <nav className="bg-lime-300 text-black p-4 flex justify-between items-center">
      <h2 className="font-bold text-xl">Project Porty</h2>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-lime-700 cursor-pointer font-medium">About</a></li>
        <li><a href="#experience" className="hover:text-lime-700 cursor-pointer font-medium">Experience</a></li>
        <li><a href="#projects" className="hover:text-lime-700 cursor-pointer font-medium">Projects</a></li>
        <li><a href="#contact" className="hover:text-lime-700 cursor-pointer font-medium">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar