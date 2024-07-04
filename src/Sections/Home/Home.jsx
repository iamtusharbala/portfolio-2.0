import './Home.css'
import React from 'react'
import tusharImg from './../../assets/profile-pic.png'

const Home = () => {
    return (
        <section className="container mt-5" id='home'>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 ms-auto">
                    <div className="details">
                        <h1 className='hey'>Hey there.</h1>
                        <h1 className='name'>I'm Tushar.</h1>
                        <h4 className='desc'>I am a MERN Stack and Node.js Developer with 3 years of hands-on experience in IT support and development projects.</h4>
                        <p className='home-contact my-3'><i class="fa-solid fa-phone"></i> <span>+91 8138093878</span> | <i class="fa-solid fa-envelope"></i> <span>tusharbala284@gmail.com</span></p>
                        <button type="button" class="btn-lg text-center btn-talk mt-4">Let's Talk <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="col-lg-6 profile text-center">
                    <img src={tusharImg} className='img-fluid' alt="" srcset="" />
                </div>
            </div>
            <div className='text-center download-button'>
                <button className='btn-download'>Download Resume <i class="fa-solid fa-download"></i></button>
            </div>





        </section>
    )
}

export default Home