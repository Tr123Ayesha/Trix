import React from 'react';
import "./project.css";
import ProjectCard from '../../components/projectCard';

const Project = () => {
    return (
        <div className='outgoing'>
            <p>Ongoing Fundraising Projects:</p>
            <div className='cards'>
                <div className='item'>
                   <ProjectCard/>
                </div>
                <div className='item'>
                   <ProjectCard/>
                </div>
                <div className='item'>
                   <ProjectCard/>
                </div>
            </div>
        </div>
    );
}

export default Project;
