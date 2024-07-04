import './SkillCard.css'
import React from 'react'
import pic from "../../assets/skills/react.png"

const SkillCard = ({ name, image }) => {
    return (
        <div className='skill-card mb-3'>
            <div className="card-body">
                <img src={image} alt={name} className='img-fluid' />
                <h3 className="card-title text-center text-bottom">{name}</h3>
            </div>
        </div>
    )
}

export default SkillCard