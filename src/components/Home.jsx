import React from 'react'
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../assets/me.png';
import myResume from '../assets/01_resume.pdf';



const Home = () => {
    const animations = {
        h1:{
            initial: {
                x:'-100%',
                opacity:0, 
            },
            whileInView: {
                x:0,
                opacity:1,
            },
        },
        button:{
            initial: {
                y:'-100%',
                opacity:0, 
            },
            whileInView: {
                y:0,
                opacity:1,
            },
        }
    }

    
  return (
    <div id='home'>
      <section>
        <div>
            <motion.h1 {...animations.h1}>
                Hi, I Am <br/> Rohit Raj
            </motion.h1>
            <Typewriter options={{
                strings:["MERN Developer", "Software Developer", " Problem Solver"],
                autoStart:true,
                loop:true,
                cursor:'',
                wrapperClassName:'typewriterpara'
            }}/>

            <div>
                <a href="mailto:rohitrajdav164@gmail.com">Hire Me</a>
                <a href="#work">Projects <BsArrowUpRight/></a>
            </div>

            <article>
                <a className='resume' href={myResume} download='rohit_Resume.pdf'>Resume</a>
                {/* <a href={myResume} download='myFile.pdf'>Download</a> */}
            </article>
            
        </div>
      </section>
      <section>
            <img src={me} alt="Rohit" />
      </section>
      <BsChevronDown/>
    </div>
  )
}

export default Home
