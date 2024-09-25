import React from 'react'

function aboutsus() {
    return (
        <div  className='w-[100%]  bg-[#CDEA68] rounded-t-3xl' >
            
            {/* paragraph Container */}
            <div className='flex  justify-center  py-[7vw] px-[6vw] items-center  text-zinc-800'>
                <h1 className='font-NeueMontreal font-normal text-4xl md:text-6xl '>
                    Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
                </h1>
            </div>

            {/* Pragrapg Container */}
            <div className='border-t border-zinc-400  px-[6vw] py-[2vw]  w-full  flex justify-between flex-col md:flex-row gap-10 md:gap-0 '>

                <div className='w-[100%] md:w-[40vw] '>
                    <p className='font-NeueMontreal font-base text-zin-900'>What you can expect:</p>
                </div>

                <div className='w-[100%]  md:w-[25vw] '>
                    <p className='font-NeueMontreal font-base text-zin-900'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                    <p className='font-NeueMontreal font-base text-zin-900 mt-[3vw]'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>

                <div className='font-base text-zin-800  w-[100%] md:w-[10vw]  flex flex-col justify-end  items-start'>
                    <a className='hover:border-b border-black' href="/instagrame"><p>Instagrame</p></a>
                    <a className='hover:border-b border-black' href="/behance"><p>Behance</p></a>
                    <a className='hover:border-b border-black' href="/facebook"><p>Facebook</p></a>
                    <a className='hover:border-b border-black' href="/linkedin"><p>Linkedin</p></a>
                </div>
            </div>

            {/* Picture Container with  it heading seciton */}
            <div className='border-t border-zinc-400 px-[6vw] py-[7vw]  w-full flex justify-center items-start flex-col md:flex-row gap-10 md:gap-0 '>

                <div className='w-[100%] md:w-[50%]'>
                    <h1 className='font-NeueMontreal font-medium text-5xl'>Our approach:</h1>

                    <div className='text-white bg-[black] font-NeueMontreal  w-fit py-3 px-4 rounded-3xl flex items-center gap-5 mt-7 cursor-pointer '>
                        <p className='font-NeueMontreal  text-base  uppercase'>Readmore</p>
                        <p className='w-2 h-2 rounded-full bg-[white]'></p>
                    </div>
                </div>

                <div className='w-[100%]  md:w-[50%]'>
                    <img src="about-pic.jpg" alt="about-pic" className='rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default aboutsus