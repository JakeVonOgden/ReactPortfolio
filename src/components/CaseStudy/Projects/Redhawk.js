import React from 'react';
import RedHawk from '../../../assets/redhawk.png';

const Redhawk = (props) => {
    return (
    <>
        <section className='project-cs-hero'>
           <div className='project-cs-hero__content'>
               <div className='title-wrapper'>
                   <div className='projects-cs-hero__row-img-cont'>
                        <img className='projects-cs-hero__row-img' src={RedHawk} alt='redhawk' />
                   </div>
                </div>
                <div className='links-wrapper'>
                    <h1 className='heading-primary'>Redhawk</h1>
                    <a href='https://rehawk-client.herokuapp.com/' rel='noreferrer' target='_blank' className='btn btn--bg'>Live Link</a>
                    <a href='https://github.com/stars/JakeVonOgden/lists/redhawk' rel='noreferrer' target='_blank' className='btn btn--bg'>See Code</a>
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
                                Redhawk is a website for people to discover, rate, and review anime.
                                This Project utilizes node and express on the back end with a postgresql database, and react with typescript on the front end utilizing custom css, styled components, reactstrap, and framer motion for styling. I utilized the Jikan api to scrape data from the MyAnimeList website.
                            </p>
                            <p className='project-details__content-para'>
                                This apps features include being able to search the Jikan api from anywhere in the website smoothly and create reviews for your anime of choice. You can also read and comment on other users reviews as well. It features full crud capability on The user, review, and comment table. It also has admin features to allow an admin to delete and update other users contributions and accounts.
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
                                <div className='skills__skill'>TypeScript</div>
                                <div className='skills__skill'>React</div>
                                <div className='skills__skill'>ExpressJS</div>
                                <div className='skills__skill'>PostgreSQL</div>
                                <div className='skills__skill'>Node</div>

                            </div>
                        </div>
                        <div className='project-details__links'>
                            <h2 className='project-details__content-title'>See Live</h2>
                            <a href='https://rehawk-client.herokuapp.com/' className='btn btn--med btn--theme project-details__links-btn' target='_blank' rel='noreferrer'>Live Link</a>
                            <a href='#projects' className='btn btn--med btn--theme-inv project-details__links-btn' onClick={props.viewMain}>Go Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Redhawk;