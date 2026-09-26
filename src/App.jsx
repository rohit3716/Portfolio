import { useState } from "react"
import Header, { HeaderPhone } from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import TechStacks from "./components/TechStacks"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Home />
        <Timeline />
        <Projects />
        <TechStacks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
