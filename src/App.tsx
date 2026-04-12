import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/home'))
const Blog = lazy(() => import('./pages/blog'))

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
      <Suspense fallback={<div className="p-16 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App