import React from 'react'
import Navbar from '../Component/Home Component/navbar';
import Landingpage from '../Component/Home Component/landingpage';
import Marque from '../Component/Home Component/marque';
import Aboutsus from '../Component/Home Component/abouts-us';
import Eye from '../Component/Home Component/Eye';
import Project from '../Component/Home Component/project';
import Awards from '../Component/Home Component/awards';
import Footer from '../Component/Home Component/footer';
function Homepage() {
    return (
        <>
            <div className='w-[100%]   bg-[#F1F1F1] relative'>

                <div className="w-[250px] text-white bg-black px-3 py-4 z-[1000] fixed right-5 bottom-10 rounded-md">
                    <p>Note: 👇</p>
                    <p className="text-sm tracking-wide">
                        This site is a cloned project for showcasing my skills Visit the original site
                        <a href="https://ochi.design/" target="_blank" className="pl-1 cursor-pointer hover:text-orange-300">
                             Ochi
                        </a>
                    </p>
                </div>
                <Navbar />
                <Landingpage />
                <Marque />
                <Aboutsus />
                <Eye />
                <Project />
                <Awards />
                <Footer />
            </div>
        </>

    )
}

export default Homepage