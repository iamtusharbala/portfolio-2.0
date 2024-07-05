import './Form.css'
import React from 'react'

const Form = () => {
    return (
        <form className='m-3'>
            <div className="mb-5">
                <label htmlFor="nameInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="nameInput" aria-describedby="name" />
            </div>
            <div className="mb-5">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="email" />
            </div>
            <div className="mb-5">
                <label htmlFor="messageInput" className="form-label">Write a message</label>
                <textarea className="form-control" id="messageInput" rows="3"></textarea>
            </div>
            <button type="submit" className="btn-lg btn-talk mt-4 text-center mx-auto">Submit</button>
        </form>
    )
}

export default Form