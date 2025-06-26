import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
    return (
        <div className=' rounded-t-3xl shadow-2xl w-full h-full bg-[#F1F1F1]'>
            <div className='px-[2vw] py-[7vw]  grid grid-cols-12 '>

                <div className='text-zinc-800 col-span-12 md:col-span-5  '>
                    <h2 className='text-[15vw] md:text-[8vw] uppercase font-FoundersGrotesk leading-none '>eye-</h2>
                    <h2 className='text-[15vw] md:text-[8vw] uppercase font-FoundersGrotesk leading-none'>opening</h2>
                </div>

                <div className='text-zinc-800 col-span-12 md:col-span-5'>
                    <h2 className='text-[15vw] md:text-[8vw] uppercase font-FoundersGrotesk leading-none '>presentations</h2>

                    <div className='flex  flex-row md:flex-col'>
                        <div className='text-zinc-800'>
                            <p className=' mt-12 mb-4 uppercase font-NeueMontreal text-[17px] font-medium'>s:</p>

                            <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium '>instagram</a> <br />
                            <a href='' className='capitalize font-NeueMontreal text-[17px] font-medium'>Behance</a> <br />
                            <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>facebook</a> <br />
                            <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>linkedin</a> <br />

                        </div>

                        <div className='ml-10 md:ml-0'>
                            <p className=' mt-12 mb-4 uppercase font-NeueMontreal text-[17px] font-medium'>l:</p>

                            <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>202-1965 w 4th Ave</a> <br />
                            <a href='' className='capitalize font-NeueMontreal text-[17px] font-medium'>Vancouver, Canada</a> <br />

                            <div className='mt-5'>
                                <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>30 Chukarina St</a> <br />
                                <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>Lviv Ukraine</a> <br />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-zinc-800 col-span-12 md:col-span-2 flex justify-start md:justify-start items-end'>

                    <div>
                        <p className=' mt-12 mb-4 uppercase font-NeueMontreal text-[17px] font-medium'>M:</p>

                        <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>Home</a> <br />
                        <a href='' className='capitalize font-NeueMontreal text-[17px] font-medium'>Services</a> <br />
                        <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>Our work</a> <br />
                        <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>About us</a> <br />
                        <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>Insights</a> <br />
                        <a href='' className='  capitalize font-NeueMontreal text-[17px] font-medium'>Contact us</a> <br />
                    </div>
                </div>
            </div>


            <div className='px-[2vw] py-[1vw] w-full h-full  flex justify-between flex-col  md:flex-row  '>
                <h6 className='tracking-wider capitalize font-NeueMontreal  text-zinc-800 font-bold text-4xl cursor-pointer'>Ochi</h6>
                <h6 className='tracking-wider capitalize font-NeueMontreal text-zinc-300 font-thin  text-base cursor-pointer mt-2 sm:mt-0  '>© ochi design 2024. Legal Terms</h6>
                <h6 className='tracking-wider capitalize font-NeueMontreal  text-zinc-300 text-base font-thin  cursor-pointer'>Website by Obys</h6>
            </div>
        </div>
    )
}

export default footer