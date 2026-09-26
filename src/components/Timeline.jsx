import { motion } from 'framer-motion'
import { BsArrowUpRight, BsShieldCheck, BsSpeedometer2, BsBoxes } from 'react-icons/bs'

const impact = [
  { icon: BsBoxes, value: '50+', label: 'production services', detail: 'Built and maintained with Java and Spring Boot' },
  { icon: BsSpeedometer2, value: '27%', label: 'lower API latency', detail: 'Reduced average response time from 220ms to 160ms' },
  { icon: BsShieldCheck, value: '50+', label: 'services secured', detail: 'JWT authentication and role-based access control' },
]

const Timeline = () => (
  <section id="experience" className="content-section section-shell">
    <div className="section-heading">
      <p className="eyebrow">01 · EXPERIENCE</p>
      <h2>Building reliable systems <span>at scale.</span></h2>
      <p>Backend engineering in production, with a focus on service design, performance, and security.</p>
    </div>
    <motion.div className="experience-layout" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>
      <article className="experience-card glass-card">
        <div className="experience-topline"><span className="company-mark">in</span><span className="experience-dates">SEP 2024 — PRESENT</span></div>
        <h3>Specialist Programmer</h3>
        <p className="company-name">Infosys <span>· Pune, India</span></p>
        <p className="experience-description">Developing and maintaining Java and Spring Boot microservices, shaping secure APIs, and collaborating across engineering teams to ship dependable production software.</p>
        <a href="https://www.infosys.com/" target="_blank" rel="noreferrer" className="text-link">Company <BsArrowUpRight /></a>
      </article>
      <div className="impact-grid">
        {impact.map(({ icon: Icon, value, label, detail }, index) => (
          <motion.article className="impact-card glass-card" key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
            <Icon className="impact-icon" />
            <strong>{value}</strong>
            <h3>{label}</h3>
            <p>{detail}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
)

export default Timeline
