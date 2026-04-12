import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/home'
import Blog from './pages/blog'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/blog" element={<Blog darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App