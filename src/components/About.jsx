import { motion } from 'framer-motion'
import { BsAward, BsBook } from 'react-icons/bs'

const About = () => (
  <>
    <section id="education" className="content-section section-shell education-section">
      <div className="section-heading">
        <p className="eyebrow">04 · BACKGROUND</p>
        <h2>Learning that <span>keeps compounding.</span></h2>
      </div>
      <div className="education-grid">
        <motion.article className="education-card glass-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <BsBook className="education-icon" />
          <div>
            <p className="eyebrow">2020 — 2024</p>
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>Indore Institute of Science and Technology, Indore</p>
            <span className="cgpa">CGPA 8.57</span>
          </div>
        </motion.article>
        <motion.article className="education-card glass-card achievement-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
          <BsAward className="education-icon" />
          <div>
            <p className="eyebrow">PROBLEM SOLVING</p>
            <h3>800+ problems solved</h3>
            <p>430+ on GeeksforGeeks and 400+ on LeetCode across algorithms and data structures.</p>
          </div>
        </motion.article>
      </div>
    </section>
    <section id="about" className="about-section section-shell">
      <div className="about-kicker"><span className="eyebrow">05 · A LITTLE ABOUT ME</span><span className="about-line" /></div>
      <div className="about-copy">
        <h2>Good software starts with <span>good questions.</span></h2>
        <p>I’m Rohit, a software engineer focused on backend development. I enjoy working through the details behind reliable APIs and distributed services, and I bring a full-stack foundation from building products with the MERN stack and Next.js.</p>
      </div>
    </section>
  </>
)

export default About
