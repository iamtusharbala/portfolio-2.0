import './Form.css'
import React from 'react'

const Form = () => {
    return (
        <form>
            <div class="mb-5">
                <label for="nameInput" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="nameInput" aria-describedby="name" />
            </div>
            <div class="mb-5">
                <label for="emailInput" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailInput" aria-describedby="email" />
            </div>
            <div class="mb-5">
                <label for="messageInput" class="form-label">Write a message</label>
                <textarea class="form-control" id="messageInput" rows="3"></textarea>
            </div>
            <button type="submit" class="btn-lg btn-talk mt-4 text-center mx-auto">Submit</button>
        </form>
    )
}

export default Form