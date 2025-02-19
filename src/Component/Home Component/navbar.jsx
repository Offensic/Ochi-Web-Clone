import React from 'react'
import { NavLink } from 'react-router-dom'
import { TbMenu } from "react-icons/tb";


function navbar() {
    return (
        <div className='fixed backdrop-blur-md 	 z-[900] w-full py-4  text-center flex justify-center font-NeueMontreal font px-[5vw]'>

            <div className='w-[100%] lg:w-[50%]   flex  justify-start md:item-start item-center'>
                <h3 className='tracking-wider capitalize font-FoundersGrotesk font-bold text-4xl cursor-pointer'>Ochi</h3>
            </div>

            <div className='w-[50%]  hidden lg:flex justify-evenly items-center '>
                {['Services', 'Our work', 'About us', 'Insight', 'Contact us'].map((item, index) => (
                    <a className={`font-sm cursor-pointer font-medium capitalize ${index === 4 && "ml-28"}`} key={index}>{item}</a>

                ))}
            </div>


            <div className=' lg:hidden flex justify-evenly items-center cursor-pointer '>
                <TbMenu size={30} />
            </div>



        </div>
    )
}

export default navbar