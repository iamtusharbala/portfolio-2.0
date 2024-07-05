import './About.css'
import img from '../../assets/about.jpg'

import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <div className="text-center py-5">
                <div className='heading-border mx-auto mb-3'></div>
                <h1 className='section-heading'>About</h1>
            </div>
            <div className="row mt-5 about-desc justify-content-center align-items-center">
                <div className="col-lg-6 profile text-center">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-6 ms-auto">
                    <div className="details">
                        <p className='about-desc'>I am a Senior Systems Engineer at Infosys. With 3 years as a MERN Stack and Node.js Developer, I excel in building and maintaining web applications using MongoDB, Express.js, React, and Node.js. My IT support background aids in troubleshooting and optimizing systems, ensuring reliable, high-performing applications. I enjoy crafting seamless digital experiences and solving complex problems.</p>
                    </div>
                </div>
            </div>
            <h3 className='text-center ddc p-5'>Developer. Dreamer. Coder 	<span className='ddc-code'>&lt;/&gt;</span></h3>
        </div>
    )
}

export default About