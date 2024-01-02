import React from 'react'
import { motion } from 'framer-motion';
import {AiOutlineHtml5,  } from 'react-icons/ai';
import {BiLogoReact, BiSolidFileCss, BiLogoJavascript} from 'react-icons/bi';
import {DiSass, DiMongodb, DiNodejs} from 'react-icons/di';
import {SiExpress} from 'react-icons/si';
import {TbBrandCpp} from 'react-icons/tb';

const TechStacks = () => {
     
  return (
    <div id='techstacks'>
        <h2>Techstacks</h2>
        <section>
            <motion.div className='ts1'>
                <AiOutlineHtml5/>
                <span>HTML</span>
            </motion.div>
            <motion.div className='ts2'>
                <BiSolidFileCss/>
                <span>CSS</span>
            </motion.div>
            <motion.div className='ts3'>
                <BiLogoJavascript/>
                <span>Javascript</span>
            </motion.div>
            <motion.div className='ts4'>
                <BiLogoReact/>
                <span>React</span>
            </motion.div>
            <motion.div className='ts5'>
                <DiNodejs/>
                <span>Node.js</span>
            </motion.div>
            <motion.div className='ts6'>
                <SiExpress/>
                <span>Express</span>
            </motion.div>
            <motion.div className='ts7'>
                <DiMongodb/>
                <span>MongoDB</span>
            </motion.div>
            <motion.div className='ts8'>
                <DiSass/>
                <span>Sass</span>
            </motion.div>
            <motion.div className='ts9'>
                <TbBrandCpp/>
                <span>C++</span>
            </motion.div>
        </section>
    </div>
  )
}

export default TechStacks
