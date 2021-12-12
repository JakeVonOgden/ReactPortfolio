import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <section id='projects' className='projects sec-pad'>
            <div className='main-container'>
                <h2 className='heading heading-sec heading-sec__mb-bg'>
                    <span className='heading-sec__main'>Projects</span>
                    <span className='heading-sec__sub'>Here you will find some of the personal projects that I created with each project containing its own case study</span>
                </h2>
                <div className='projects__content'>
                    <div className='projects__row'>
                        <div className='projects__row-img-cont'>
                            <img src='' alt='redhawk' />
                        </div>
                        <div className='projects__row-content'>
                            <h3 className='projects__row-content-title'>RedHawk</h3>
                            <p className='projects__row-content-desc'>RedHawk is a <strong>Full Stack</strong> website that i created where you can discover anime, and then rate review and comment on them</p>
                            <a href='/project-1' className='btn btn--med btn--theme dynamicBgClr' target='_blank'>Case Study</a>
                        </div>
                    </div>
                    <div className='projects__row'>
                        <div className='projects__row-img-cont'>
                            <img src='' alt='redhawk' />
                        </div>
                        <div className='projects__row-content'>
                            <h3 className='projects__row-content-title'>Pokedex App</h3>
                            <p className='projects__row-content-desc'>RedHawk is a <strong>Full Stack</strong> website that i created where you can discover anime, and then rate review and comment on them</p>
                            <a href='/project-1' className='btn btn--med btn--theme dynamicBgClr' target='_blank'>Case Study</a>
                        </div>
                    </div>
                    <div className='projects__row'>
                        <div className='projects__row-img-cont'>
                            <img src='' alt='redhawk' />
                        </div>
                        <div className='projects__row-content'>
                            <h3 className='projects__row-content-title'>GPT3 Static Layout</h3>
                            <p className='projects__row-content-desc'>RedHawk is a <strong>Full Stack</strong> website that i created where you can discover anime, and then rate review and comment on them</p>
                            <a href='/project-1' className='btn btn--med btn--theme dynamicBgClr' target='_blank'>Case Study</a>
                        </div>
                    </div>
                    <div className='projects__row'>
                        <div className='projects__row-img-cont'>
                            <img src='' alt='redhawk' />
                        </div>
                        <div className='projects__row-content'>
                            <h3 className='projects__row-content-title'>Juniper</h3>
                            <p className='projects__row-content-desc'>RedHawk is a <strong>Full Stack</strong> website that i created where you can discover anime, and then rate review and comment on them</p>
                            <a href='/project-1' className='btn btn--med btn--theme dynamicBgClr' target='_blank'>Case Study</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;