import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Experience from '../components/experience'
import Projects from '../components/projects'
import WorldClock from '../components/wclock'
import Contact from '../components/contact'
import Footer from '../components/footer'

function Home() {
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

export default Home