import { AiOutlineMenu } from 'react-icons/ai'

const links = [
  ['Experience', '#experience'],
  ['Projects', '#work'],
  ['Skills', '#techstacks'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

const Header = ({ setMenuOpen, menuOpen }) => (
  <>
    <nav className="site-nav">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>rohit<span>.codes</span></a>
      <div className="desktop-nav">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </div>
      <a className="nav-resume" href="#contact">Let’s talk <span>↗</span></a>
    </nav>
    <button className="navBtn" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
      <AiOutlineMenu />
    </button>
  </>
)

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => (
  <div className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`} aria-hidden={!menuOpen}>
    <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>rohit<span>.codes</span></a>
    <button className="mobileClose" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>×</button>
    <div className="mobile-nav-links">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
    </div>
    <a className="nav-resume" href="mailto:rohitraj.jobs@gmail.com" onClick={() => setMenuOpen(false)}>Get in touch <span>↗</span></a>
  </div>
)

export default Header
