import React from 'react'
import { motion } from "framer-motion"


function marque() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full  py-10 bg-[#004D43] rounded-t-3xl overflow-hidden'>
      <div className='border-t-2 border-b-2 border-zinc-300   flex  text-nowrap  overscroll-x-auto'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[20vw] font-FoundersGrotesk leading-none font-extrabold   text text-white  uppercase pr-20'>We are ochi </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[20vw] font-FoundersGrotesk leading-none font-extrabold   text text-white  uppercase pr-20'>We are ochi </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[20vw] font-FoundersGrotesk leading-none font-extrabold   text text-white  uppercase pr-20'>We are ochi </motion.h1>
      </div>
    </div>
  )
}
export default marque