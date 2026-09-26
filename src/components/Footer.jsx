import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsArrowUp } from 'react-icons/bs'

const Footer = () => (
  <footer className="site-footer">
    <a className="brand" href="#home">rohit<span>.codes</span></a>
    <p>Building dependable software, one system at a time.</p>
    <div className="footer-socials">
      <a href="https://www.linkedin.com/in/rohit--raj29/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><AiFillLinkedin /></a>
      <a href="https://github.com/rohit3716" target="_blank" rel="noreferrer" aria-label="GitHub"><AiFillGithub /></a>
    </div>
    <a className="back-to-top" href="#home" aria-label="Back to top"><BsArrowUp /></a>
    <span className="copyright">© {new Date().getFullYear()} Rohit Raj</span>
  </footer>
)

export default Footer
