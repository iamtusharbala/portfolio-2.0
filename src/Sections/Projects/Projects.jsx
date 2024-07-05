import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './Projects.css'
import { projects } from '../../assets/projects'

import React from 'react'

const Projects = () => {
    return (
        <div className='container mb-5'>
            <div className="text-center py-5">
                <div className='heading-border mx-auto mb-3'></div>
                <h1 className='section-heading'>Projects</h1>
            </div>
            <div className="projects py-3 pb-5">
                {projects.map(project => <ProjectCard key={project.name} name={project.name} description={project.description} image={project.image} url={project.url} />)}
            </div>
        </div>
    )
}

export default Projects