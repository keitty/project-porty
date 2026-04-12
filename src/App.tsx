import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App