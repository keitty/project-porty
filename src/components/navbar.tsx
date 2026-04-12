import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-lime-300 text-black p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Project Porty</Link>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-lime-700 cursor-pointer font-medium">Home</Link></li>
        <li><a href="#experience" className="hover:text-lime-700 cursor-pointer font-medium">Experience</a></li>
        <li><a href="#projects" className="hover:text-lime-700 cursor-pointer font-medium">Projects</a></li>
        <li><Link to="/blog" className="hover:text-lime-700 cursor-pointer font-medium">Blog</Link></li>
        <li><a href="#contact" className="hover:text-lime-700 cursor-pointer font-medium">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar