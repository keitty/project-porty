import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Experience from '../components/experience'
import Projects from '../components/projects'
import WorldClock from '../components/wclock'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Weather from '../components/weather'
import Currency from '../components/currency'
interface HomeProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function Home({ darkMode, setDarkMode }: HomeProps) {
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Experience />
      <Projects />
      <WorldClock />
      <Weather />
      <Currency />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home