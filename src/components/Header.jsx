import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({setMenuOpen, menuOpen}) => {
  return (
  <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>
      <button className='navBtn' onClick={ () => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu/>
      </button>    
  </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen ? 'navPhoneComes':''}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  )
}
const NavContent = ({setMenuOpen}) => (
    <>
        <h2>rohit.codes</h2>
        <div>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#techstacks" onClick={() => setMenuOpen(false)}>
          Techstacks</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        </div>
        <a href="mailto:rohitrajdav164@gmail.com">
            <button>Email</button>
        </a>
    </>
)

export default Header
