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
                        <p className='about-desc'>💼 Associate Consultant at Infosys</p>
                        <p className='about-desc'>🔹 ServiceNow Developer with expertise in custom application development, ITSM, Discovery, and integrations.</p>
                        <p className='about-desc'>🔹 Experienced in automating IT workflows and optimizing business processes using ServiceNow.</p>
                    </div>
                </div>
            </div>
            <h3 className='text-center ddc p-5'>Developer. Dreamer. Coder 	<span className='ddc-code'>&lt;/&gt;</span></h3>
        </div>
    )
}

export default About