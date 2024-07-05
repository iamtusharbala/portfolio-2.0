import MediumPost from '../../Components/MediumPost/MediumPost'
import PublishCard from '../../Components/PublishCard/PublishCard'
import './Publishing.css'

import React from 'react'

const Publishing = () => {
    return (
        <div className='container'>
            <div className="text-center py-5">
                <div className='heading-border mx-auto mb-3'></div>
                <h1 className='section-heading'>Publishing</h1>
            </div>
            <div className="publishing py-3">
                <PublishCard />
            </div>
            <div className="medium">
                <MediumPost />
            </div>
        </div>
    )
}

export default Publishing