import './About.css'

import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <div className="text-center py-5">
                <div className='heading-border mx-auto mb-3'></div>
                <h1 className='section-heading'>About</h1>
            </div>
            <div className="row mt-5 justify-content-center align-items-center">
                <div className="col-lg-6 profile text-center">
                    <img src="" alt="" srcset="" />
                </div>
                <div className="col-lg-6 ms-auto">
                    <div className="details">
                        <p className='about-desc'>I am a Senior Systems Engineer at Infosys. With 3 years as a MERN Stack and Node.js Developer, I excel in building and maintaining web applications using MongoDB, Express.js, React, and Node.js. My IT support background aids in troubleshooting and optimizing systems, ensuring reliable, high-performing applications. I enjoy crafting seamless digital experiences and solving complex problems.</p>
                    </div>
                </div>
            </div>
            <h3 className='text-center pt-5'>Developer. Dreamer. Coder </h3>
        </div>
    )
}

export default About