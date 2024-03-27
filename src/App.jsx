import Header, {HeaderPhone} from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import TechStacks from "./components/TechStacks"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import { useState, useEffect } from "react"
import About from "./components/About"


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return ratio < 3 ? (
   <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home ratio={ratio}/>
    <About/>
    <Projects/>
    <Timeline/>
    <TechStacks/>
    <Contact/>
    <Footer/>
    <Toaster/>
   </>
  ) : (
    <em id="customMessage">Please Change the ratio to View!</em>
  )
}

export default App
