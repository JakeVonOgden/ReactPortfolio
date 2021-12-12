import React from 'react'
import juniper from '../../../assets/Juniper.png';

const Juniper = (props) => {
    return (
        <>
           <section className='project-cs-hero'>
           <div className='project-cs-hero__content'>
               <div className='title-wrapper'>
                   <div className='projects-cs-hero__row-img-cont'>
                        <img className='projects-cs-hero__row-img' src={juniper} alt='pokedex' />
                   </div>
                </div>
                <div className='links-wrapper'>
                    <h1 className='heading-primary'>Juniper</h1>
                    <a href='https://jsc-juniper-client.herokuapp.com/' rel='noreferrer' target='_blank' className='btn btn--bg'>Live Link</a>
                    <a href='https://github.com/stars/JakeVonOgden/lists/juniper' rel='noreferrer' target='_blank' className='btn btn--bg'>See Code</a>
                </div>
           </div>
        </section>
        <section className='project-details'>
            <div className='main-container'>
                <div className='project-details__content'>
                    <div className='project-details__content-main'>
                        <div className='project-details__desc'>
                            <h2 className='project-details__content-title'>Project Overview</h2>
                            <p className='project-details__content-para'>
                                Juniper is a fullstack e-commerce website that i created with a team during my time at Eleven Fifty Academy. 
                                This Project utilizes Node and Express on the back end with a PostgreSQL database, and react on the frontend.
                            </p>
                            <p className='project-details__content-para'>
                                This apps features include being able to list and manage merchandise, and view merchandise other users have listed. It is a Full Crud application.
                            </p>
                            <p className='project-details__content-para'>
                                Feel free to check out the Project by visiting the Live Link.
                            </p>
                        </div>
                        <div className='project-details__tools-used'>
                            <h2 className='project-details__content-title'>Tools Used</h2>
                            <div className='skills'>
                                <div className='skills__skill'>HTML</div>
                                <div className='skills__skill'>CSS</div>
                                <div className='skills__skill'>JavaScript</div>
                                <div className='skills__skill'>React</div>
                                <div className='skills__skill'>PostgreSQL</div>
                                <div className='skills__skill'>ExpressJS</div>
                                <div className='skills__skill'>Node</div>

                            </div>
                        </div>
                        <div className='project-details__links'>
                            <h2 className='project-details__content-title'>See Live</h2>
                            <a href='https://jsc-juniper-client.herokuapp.com/' className='btn btn--med btn--theme project-details__links-btn' target='_blank' rel='noreferrer'>Live Link</a>
                            <a href='#projects' className='btn btn--med btn--theme-inv project-details__links-btn' onClick={props.viewMain}>Go Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
        </>
    )
}

export default Juniper;