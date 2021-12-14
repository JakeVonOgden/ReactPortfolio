import React from 'react';
import resumePic from '../../../assets/Resume.png';
const Resume = (props) => {
    return (
        <section className='project-cs-hero'>
            <div className='project-cs-hero__content resume'>
                <div className='project-details__content'>
                    <div className='project-details__desc'>
                       <img className='resume-img' src={resumePic} alt='Resume' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;
                     