import { BsArrowUpRight, BsEnvelope } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

const Contact = () => (
  <section id="contact" className="contact-section section-shell">
    <p className="eyebrow">06 · CONTACT</p>
    <div className="contact-content">
      <div>
        <h2>Let’s build something <span>useful.</span></h2>
        <p>For engineering opportunities, project conversations, or a good discussion about backend systems, feel free to reach out.</p>
      </div>
      <div className="contact-actions">
        <a className="button button-primary" href="mailto:rohitraj.jobs@gmail.com"><BsEnvelope /> rohitraj.jobs@gmail.com <BsArrowUpRight /></a>
        <a className="button button-secondary" href="https://www.linkedin.com/in/rohit--raj29/" target="_blank" rel="noreferrer"><AiFillLinkedin /> Connect on LinkedIn <BsArrowUpRight /></a>
      </div>
    </div>
  </section>
)

export default Contact
