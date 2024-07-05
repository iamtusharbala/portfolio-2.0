import './Form.css'
import React, { useState } from 'react'

const Form = () => {
    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const submitForm = async (e) => {
        e.preventDefault();
        setResult("Sending....");

        const formElement = e.target;
        const formDataSet = new FormData(formElement);
        formDataSet.append("access_key", "163cda02-4902-49ee-acc9-0090782be829");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataSet
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                formElement.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
            setResult("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <form className='m-3' onSubmit={submitForm}>
                <div className="mb-5">
                    <label htmlFor="nameInput" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="nameInput" aria-describedby="name" name='name' onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="email" name='email' onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="messageInput" className="form-label">Write a message</label>
                    <textarea className="form-control" id="messageInput" rows="3" name='message' onChange={e => setFormData({ ...formData, message: e.target.value })} required></textarea>
                </div>
                <button type="submit" className="btn-lg btn-talk mt-4 text-center mx-auto">Submit</button>
            </form>
            <span>{result}</span>
        </div>
    );
};

export default Form