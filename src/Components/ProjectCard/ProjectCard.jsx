import './ProjectCard.css'

import React from 'react';

const ProjectCard = ({ name, description, image, url }) => {
    return (
        <div className='project-card'>
            <img src={image} alt={name} className="card-img-top" />
            <div className="card-body p-3">
                <h3 className="card-title text-left">{name}</h3>
                <p className="card-text text-left">{description}</p>
                <a className='view-button' href={url} target='_blank' rel='noopener noreferrer'>
                    <i className="fa-brands fa-github"></i> View in Github
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;