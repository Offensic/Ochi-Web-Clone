function project() {
    return (
        <div className='w-full h-full rounded-t-3xl shadow-xl pb-10'>
            <div className='w-[100%]  py-[7vw] px-[6vw]  border-b-[1px] border-zinc-400 ttext-zinc-800'>
                <h1 className='text-6xl font-NeueMontreal font-medium '>Featured project</h1>
            </div>


            <div className='project-container px-[5vw] my-10 w-[100%] grid grid-cols-8 gap-10	'>

                <div className='card text-zinc-800 cursor-pointer col-span-8 sm:col-span-4'>
                    <div className='py-2 flex gap-2 justify items-center '>
                        <p className='w-[10px] h-[10px] rounded-full bg-zinc-800'></p>
                        <p className='font-NeueMontreal text-sm font-medium uppercase'>fyde</p>
                    </div>
                    <div className='scale-1 hover:scale-[95%] transition-transform duration-500'>
                        <img className="w-[100%] h-[100%] rounded-lg  " src="project 1.png" alt="" />
                    </div>
                </div>


                <div className='card   text-zinc-800 cursor-pointer col-span-8 sm:col-span-4'>
                    <div className='py-2 flex gap-2 justify items-center'>
                        <p className='w-[10px] h-[10px] rounded-full bg-zinc-800'></p>
                        <p className='font-NeueMontreal text-sm font-medium uppercase'>Vise</p>
                    </div>
                    <div className='scale-1 hover:scale-[95%] transition-transform duration-500'>
                        <img className=" w-[100%] h-[100%] rounded-lg overflow-hidden" src="project 2.jpg" alt="" />
                    </div>
                </div>

                <div className='card text-zinc-800 cursor-pointer col-span-8 sm:col-span-4 '>
                    <div className='py-2 flex gap-2 justify items-center'>
                        <p className='w-[10px] h-[10px] rounded-full bg-zinc-800'></p>
                        <p className='font-NeueMontreal text-sm font-medium uppercase'>Vise</p>
                    </div>
                    <div className='scale-1 hover:scale-[95%] transition-transform duration-500'>
                        <img className=" w-[100%] h-[100%] rounded-lg overflow-hidden" src="project 3.png" alt="" />
                    </div>
                </div>

            </div>

            <button className="w-[100%] flex justify-center">
                <div className='text-white bg-[black] font-NeueMontreal  w-fit py-4 px-7 rounded-3xl flex items-center gap-5 mt-7 cursor-pointer '>
                    <p className='font-NeueMontreal  text-sm  uppercase text-zinc-200'>View all casestudies</p>
                    <p className='w-2 h-2 rounded-full bg-[white]'></p>
                </div>
            </button>



        </div>
    )
}

export default project