import { motion } from 'framer-motion'
import { BsCodeSlash, BsDatabase, BsLayers, BsCloud } from 'react-icons/bs'

const groups = [
  { icon: BsCodeSlash, title: 'Backend', skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'Microservices'] },
  { icon: BsDatabase, title: 'Data', skills: ['MySQL', 'MongoDB', 'SQL'] },
  { icon: BsCloud, title: 'Infrastructure', skills: ['Docker', 'Kubernetes', 'CI/CD', 'Azure · familiar'] },
  { icon: BsLayers, title: 'Full stack', skills: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript'] },
]

const TechStacks = () => (
  <section id="techstacks" className="content-section skills-section">
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">03 · TOOLKIT</p>
        <h2>Tools for the <span>whole stack.</span></h2>
        <p>Backend is my focus, with full-stack experience to help connect services to the people using them.</p>
      </div>
      <div className="skills-grid">
        {groups.map(({ icon: Icon, title, skills }, index) => (
          <motion.article className="skill-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
            <div className="skill-title"><Icon /><h3>{title}</h3></div>
            <ul className="tag-list">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
          </motion.article>
        ))}
      </div>
      <p className="skill-practices"><span>Practices</span> Distributed systems · JWT &amp; RBAC · Agile/Scrum · Git &amp; GitHub</p>
    </div>
  </section>
)

export default TechStacks
