import { Link } from 'react-router-dom'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="bg-lime-300 dark:bg-gray-900 text-black dark:text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Project Porty</Link>
      <ul className="flex gap-6 items-center">
        <li><Link to="/" className="hover:text-lime-700 dark:hover:text-lime-400 cursor-pointer font-medium">Home</Link></li>
        <li><a href="#experience" className="hover:text-lime-700 dark:hover:text-lime-400 cursor-pointer font-medium">Experience</a></li>
        <li><a href="#projects" className="hover:text-lime-700 dark:hover:text-lime-400 cursor-pointer font-medium">Projects</a></li>
        <li><Link to="/blog" className="hover:text-lime-700 dark:hover:text-lime-400 cursor-pointer font-medium">Blog</Link></li>
        <li><a href="#contact" className="hover:text-lime-700 dark:hover:text-lime-400 cursor-pointer font-medium">Contact</a></li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-lime-500 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-lime-600 dark:hover:bg-gray-600"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar