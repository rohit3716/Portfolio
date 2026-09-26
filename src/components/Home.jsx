import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsArrowDown, BsArrowUpRight, BsDownload } from 'react-icons/bs'
import myResume from '../assets/rohit-raj-resume.pdf'
import backendBanner from '../assets/backend-banner.svg'

const Home = () => (
  <section id="home" className="hero section-shell">
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        BUILD · SCALE · SOLVE
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>
        Software Engineer<br />
        <span>building backend<br className="desktop-break" /> services and APIs.</span>
      </motion.h1>
      <motion.p className="hero-stack" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Java <i /> Spring Boot <i /> Microservices
      </motion.p>
      <motion.p className="hero-summary" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}>
        I build dependable services, secure APIs, and practical software that solves real problems.
      </motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }}>
        <a className="button button-primary" href="#work">View projects <BsArrowUpRight /></a>
        <a className="button button-secondary" href={myResume} download="Rohit_Raj_Resume.pdf"><BsDownload /> Download resume</a>
      </motion.div>
      <div className="hero-links">
        <a href="https://www.linkedin.com/in/rohit--raj29/" target="_blank" rel="noreferrer"><AiFillLinkedin /> LinkedIn</a>
        <a href="https://github.com/rohit3716" target="_blank" rel="noreferrer"><AiFillGithub /> GitHub</a>
        <a href="mailto:rohitraj.jobs@gmail.com"><span className="availability-dot" /> Open to opportunities</a>
      </div>
    </div>
    <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
      <img src={backendBanner} alt="Illustration of an API gateway connecting backend services and databases" />
    </motion.div>
    <a className="scroll-cue" href="#experience" aria-label="Scroll to experience"><BsArrowDown /></a>
  </section>
)

export default Home
