import React from 'react'

function awards() {
    return (

        <div className='px-[1vw] py-[7vw] border-1 border-black grid grid-cols-12 gap-4 '>

            <div className='h-[70vh] col-span-12 sm:col-span-12  xl:col-span-4 bg-[#004D43] rounded-lg  select-none'>
                <div className='h-[60vh] flex cursor-pointer select-none justify-center items-center'>
                    <h3 className='text-7xl text-[#CDEA68] font-NeueMontreal font-semibold'>ochi</h3>
                </div>
                <div className='h-[10vh] px-4 '>
                    <p className='w-fit px-2 py-[2px] border-2 border-[#CDEA68] text-[#CDEA68] rounded-2xl'>&copy;2019-2022</p>
                </div>
            </div>

            <div className='h-[70vh] col-span-12 sm:col-span-6  xl:col-span-4 bg-[#212121] rounded-lg select-none'>
                <div className='h-[60vh] flex cursor-pointer select-none justify-center items-center'>
                    <h3 className='text-7xl text-zinc-200 font-NeueMontreal font-semibold'>ochi</h3>
                </div>
                <div className='h-[10vh] px-4'>
                    <p className='w-fit px-2 py-[2px] border-2 border-zinc-200 text-zinc-200 rounded-2xl uppercase'>Bussines Bootcamp alumni</p>
                </div>
            </div>


            <div className='h-[70vh] col-span-12 sm:col-span-6 xl:col-span-4 bg-[#212121] rounded-lg select-none'>
                <div className='h-[60vh] flex cursor-pointer select-none justify-center items-center'>
                    <img src="ilumini 1.png" alt="ilumini" className='h-[20vh]' />
                </div>
                <div className='h-[10vh] px-4'>
                    <p className='w-fit px-2 py-[2px] border-2 border-zinc-200 text-zinc-200 uppercase rounded-2xl'>Rating 5.0 on clutch</p>
                </div>
            </div>

        </div>
    )
}

export default awards