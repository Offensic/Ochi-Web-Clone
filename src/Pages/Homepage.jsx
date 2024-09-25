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
            <div className='w-[100%]   bg-[#F1F1F1] '>
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