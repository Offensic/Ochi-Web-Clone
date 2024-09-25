import React, { useEffect, useState } from 'react'

function Eye() {

  const [rotate, setrotate] = useState(0);

  // Running useEffect only when the page is load
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {

      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - innerWidth / 2;
      let deltaY = mouseY - innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle-180)

    })
  }, [])


  return (
    <div  className='w-full h-[40vh] md:h-screen overflow-hidden '>

      <div data-scroll data-scroll-section data-scroll-speed="-.7"   className='relative w-full h-full bg-cover bg-center bg-[url("eye.jpg")] '>
        <div className='absolute   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>

          <div className='w-[13vw]  h-[13vw] bg-zinc-100 rounded-full flex justify-center items-center '>

            {/* Black Eye */}
            <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '>
              {/* line */}
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full h-3   absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                {/* Eye Dots */}
                <div className='w-3 md:w-4 h-3 md:h-4 rouded-full bg-zinc-100 rounded-full'> </div>
              </div>

            </div>
          </div>

          <div className='w-[13vw]  h-[13vw] bg-zinc-100 rounded-full flex justify-center items-center '>
            {/* Black Eye */}
            <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '>
              {/* line */}
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full h-3  absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                {/* Eye Dots */}
                <div className='w-3 md:w-4 h-3 md:h-4 rouded-full bg-zinc-100 rounded-full'> </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eye