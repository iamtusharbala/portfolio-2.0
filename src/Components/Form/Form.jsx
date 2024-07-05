import './Form.css'
import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const submitForm = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form className='m-3' onSubmit={submitForm}>
            <div className="mb-5">
                <label htmlFor="nameInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="nameInput" aria-describedby="name" name='name' onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="mb-5">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="email" name='email' onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="mb-5">
                <label htmlFor="messageInput" className="form-label">Write a message</label>
                <textarea className="form-control" id="messageInput" rows="3" name='message' onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
            </div>
            <button type="submit" className="btn-lg btn-talk mt-4 text-center mx-auto">Submit</button>
        </form>
    )
}

export default Form