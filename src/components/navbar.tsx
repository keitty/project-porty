import { Link } from 'react-router-dom'
import { useState } from 'react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lime-300 dark:bg-gray-900 text-black dark:text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">project porty</Link>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><Link to="/" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">home</Link></li>
          <li><a href="/#experience" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">experience</a></li>
          <li><a href="/#projects" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">projects</a></li>
          <li><Link to="/blog" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">blog</Link></li>
          <li><a href="/#wclock" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">clock</a></li>
          <li><a href="/#weather" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">weather</a></li>
          <li><a href="/#currency" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">currency</a></li>
          <li><a href="/#contact" className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">contact</a></li>

          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-lime-500 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-lime-600 dark:hover:bg-gray-600"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-lime-500 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-bold"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 pb-2">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">home</Link></li>
          <li><a href="/#experience" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">experience</a></li>
          <li><a href="/#projects" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">projects</a></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">blog</Link></li>
          <li><a href="/#wclock" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">clock</a></li>
          <li><a href="/#weather" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">weather</a></li>
          <li><a href="/#currency" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">currency</a></li>
          <li><a href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-lime-700 dark:hover:text-lime-400 font-medium">contact</a></li>
        </ul>
      )}
    </nav>
  )
}


export default Navbar