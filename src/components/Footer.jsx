import React from 'react'
import { AiFillInstagram, AiFillGithub, AiOutlineArrowUp, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
    <div>
      <img src={'https://avatars.githubusercontent.com/u/88617637?v=4'} alt="Founder" />
      <h2>Rohit Raj</h2>
      <p>Everything happens for a reason.</p>
    </div>
    <aside>
        <h2>Social Media</h2>

        <article>
            <a href="https://www.linkedin.com/in/rohit--raj29/" target='blank'>
                <AiFillLinkedin/>
            </a>
            <a href="https://github.com/rohit3716" target='blank'>
                <AiFillGithub/>  
            </a>
            <a href="https://www.instagram.com/rohit.raj._29/" target='blank'>
                <AiFillInstagram/>
            </a>
        </article>
    </aside>
    </footer>
  )
}

export default Footer
