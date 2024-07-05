import SkillCard from '../../Components/SkillCard/SkillCard'
import { skills } from '../../assets/skills'
import './Skills.css'

import React from 'react'

const Skills = () => {
    return (
        <div className='container'>
            <div className="text-center py-5">
                <div className='heading-border mx-auto mb-3'></div>
                <h1 className='section-heading'>Skills</h1>
            </div>
            <div className="skills my-5">
                {skills.map(skill => <SkillCard key={skill.name} name={skill.name} image={skill.image} />)}
            </div>
        </div>
    )
}

export default Skills