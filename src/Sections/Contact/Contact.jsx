import Form from '../../Components/Form/Form'
import './Contact.css'
import React from 'react'

const Contact = () => {
    return (
        <div className='container'>
            <div className="text-center py-5">
                <div className='heading-border mx-auto mb-3'></div>
                <h1 className='section-heading'>Contact</h1>
            </div>
            <div className="contact">
                <Form />
            </div>
            <h3 className='text-center pt-5'>Made with ❤️ in Kochi.</h3>
        </div>
    )
}

export default Contact