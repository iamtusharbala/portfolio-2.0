import './Home.css'
import React from 'react'
import tusharImg from './../../assets/profile-pic.png'
import resume from '../../assets/document/Tushar_Balakrishnan_Resume.pdf'

const Home = () => {
    return (
        <section className="container" id='home'>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 ms-auto">
                    <div className="details">
                        <h1 className='hey'>Hey there.</h1>
                        <h1 className='name'>I'm Tushar.</h1>
                        <h4 className='desc'>I am a MERN Stack and Node.js Developer with 3 years of hands-on experience in IT support and development projects.</h4>
                        <p className='home-contact my-3'><i className="fa-solid fa-phone"></i> <span>+91 8138093878</span> | <i className="fa-solid fa-envelope"></i> <span>tusharbala284@gmail.com</span></p>
                        <a type="button" className="btn-lg text-center btn-talk mt-4" href='#contact'>Let's Talk <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 profile text-center">
                    <img src={tusharImg} className='img-fluid' alt="" />
                </div>
            </div>
            <div className='text-center download-button'>
                <button className='btn-download'><a href={resume} target='_blank' rel='noopener noreferrer'>Download Resume <i className="fa-solid fa-download"></i></a></button>
            </div>

            <div className="social">
                <div className='linkedin'><a href="https://www.linkedin.com/in/tushar-balakrishnan/" target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-linkedin-in"></i></a></div>
                <div className='github'><a href="https://github.com/iamtusharbala" target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-github"></i></a></div>
                <div className='twitter'><a href="https://twitter.com/iam_tusharbala" target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-twitter"></i></a></div>
                <div className='instagram'><a href="https://www.instagram.com/iam_tusharbala/" target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i></a></div>
            </div>



        </section>
    )
}

export default Home