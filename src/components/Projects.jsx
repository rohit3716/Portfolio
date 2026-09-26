import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import data from '../assets/data.json'

const Projects = () => (
  <section id="work" className="content-section section-shell">
    <div className="section-heading section-heading-row">
      <div>
        <p className="eyebrow">02 · SELECTED WORK</p>
        <h2>Projects built <span>to be useful.</span></h2>
        <p>A couple of full-stack products, from real-time communication to healthcare scheduling.</p>
      </div>
      <a className="text-link all-projects-link" href="https://github.com/rohit3716" target="_blank" rel="noreferrer">More on GitHub <BsArrowUpRight /></a>
    </div>
    <div className="project-grid">
      {data.projects.map((project, index) => (
        <motion.article className="project-card glass-card" key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}>
            <img src={project.imgSrc} alt={`${project.title} preview`} loading="lazy" />
            <span className="project-open"><BsArrowUpRight /></span>
          </a>
          <div className="project-content">
            <div className="project-meta"><span>FEATURED PROJECT</span><time>{project.date}</time></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-details">{project.details}</p>
            <ul className="tag-list" aria-label="Technologies">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
            <a className="text-link project-link" href={project.url} target="_blank" rel="noreferrer">View live project <BsArrowUpRight /></a>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
)

export default Projects
