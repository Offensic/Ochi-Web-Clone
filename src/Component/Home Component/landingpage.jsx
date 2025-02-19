import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function landingpage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='relative w-full h-full   pt-32 ' >

            <div className='w-[250px] text-white bg-[black] p-4 z-[999] fixed  right-5 bottom-3 -translate-y-1/2 -right    rounded-md '>
                <p>Note: 👇</p>
                <p className='text-sm tracking-wide '>This site is a cloned project for showcasing my skills.  <a href="https://ochi.design/" target='_blank' className='cursor-pointer hover:text-orange-300'>Visit the original site </a></p>
            </div>

            <div className='px-[5vw] font-FoundersGrotesk pb-[35vw] sm:pb-[20vw] md:pb-[0vw] '>
                {["We create", "Eye-Openning", 'Presentation'].map((item, index) => (
                    <div className='masker flex items-center' key={index}>
                        {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='w-[10vw] h-[8vw] md:w-[8vw] md:h-[6vw] bg-[url("https://i.pinimg.com/736x/fb/2b/2d/fb2b2df9b7a4ffffa2b0b49d80398893.jpg")] bg-cover mt-[1.5vw] mx-2 rounded-md my-[1vw]  flex justify-center items-center '></motion.div>)}
                        <h1 className='font-bold select-none  uppercase text-[16vw] md:text-[10vw] tracking-light  leading-[55px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] xl:leading-[6vw]'>{item}</h1>
                    </div>
                ))}
            </div>

            <div className='w-full   mt-10 border-t-2 flex  justify-between flex-col md:flex-row  px-[5vw] py-8 font-NeueMontreal'>

                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <span className='font-light text-base my-2 md:my-0' key={index}>{item}</span>
                ))}

                <div className='flex justify-start md:justify-center my-2 md:my-0 items-center gap-2 cursor-pointer' >
                    <div className='text-sm px-5 py-2 rounded-full border-[1px] border-black'>Start the Project</div>
                    <div className='w-10 h-10 rounded-full border-[2px] border-black flex justify-center items-center '>
                        <span >
                            < GoArrowUpRight size={25} />
                        </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default landingpage