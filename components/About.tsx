import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1.5, }}
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-2-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
        initial={{opacity: 0, x:-200,}}
        transition={{duration: 1.2,}}
        whileInView={{opacity: 1, x: 0,}}
        viewport={{ once: true,}}
        src="/About.jpg" 
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a
                <span className='text-[#F7AB0A]'> little </span>  
                background</h4>
                <p className='text-sm'>
                    I'm Jerome, the one and only!
                    You might know me as KaitoCode.
                    I'm here to show you my skills in UI/UX frontend development.
                    Hope you will like it.
                </p>
        </div>
    </motion.div>

  )
}