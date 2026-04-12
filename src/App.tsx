import Navbar from './components/navbar'
import Footer from './components/footer'
import Hero from './components/hero'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import WorldClock from './components/wclock'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorldClock />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App