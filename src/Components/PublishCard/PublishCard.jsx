import './PublishCard.css'
import React from 'react'

let publishURL = "http://www.publishingindia.com/jais/71/a-web-based-application-for-monitoring-crowd-status-in-stores/30941/56380/"

const PublishCard = () => {
    return (
        <div className='publish-card'>
            <div className='card-body text-center'>
                <h3 className="card-title mb-5">Web-Based Application for Monitoring Crowd Status in Stores</h3>
                <p className="card-text mb-5">This software assists users in finding local shops, providing real-time information on crowd density and optimal visit times, ensuring social distancing and safer shopping experiences during high-risk periods like the COVID-19 pandemic.</p>
                <a type="button" href={publishURL} target='_blank' rel='noopener noreferrer' className="btn-lg btn-talk mt-4">Go To Link</a>
            </div>
        </div>
    )
}

export default PublishCard