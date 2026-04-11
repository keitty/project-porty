function Navbar() {
  return (
    <nav className="bg-lime-300 text-black p-4 flex justify-between items-center">
      <h2 className="font-bold text-xl">Project Porti</h2>
      <ul className="flex gap-6">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar