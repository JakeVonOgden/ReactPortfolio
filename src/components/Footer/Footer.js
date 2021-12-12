import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='main-footer'>
           <div className='main-container'>
               <div className='main-footer__upper'>
                   <div className='main-footer__row main-footer__row-1'>
                       <h2 className='heading heading-sm main-footer__heading-sm'>
                           <span>Social</span>
                       </h2>
                       <div className='main-footer__social-cont'>
                           <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/jacob-von-ogden-b3b191219/'>
                               <img className='main-footer__icon' src='https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png' alt='Jacob Von Ogden Linkedin Profile' />
                           </a>
                           <a rel='noreferrer' target='_blank' href='https://github.com/JakeVonOgden'>
                               <img className='main-footer__icon' src='https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png' alt='Jacob Von Ogden Github Profile' />
                           </a>
                       </div>
                   </div>
                   <div className='main-footer__row main-footer__row-2'>
                       <h2 className='heading heading-sm text-It'>Jacob Von Ogden</h2>
                       <p className='main-footer__short-desc'>
                           A Frontend focused Web Developer building the frontend of websites and Web Applcations thats leads you to be the success of the overall product.
                       </p>
                   </div>
               </div>
                   <div className='main-footer__lower'>
                    © Copyright 2021. Made by <a rel='noreferrer' target='_blank' href='https://jakevonogden.github.io/ReactPortfolio/'>Jacob Von Ogden</a>                    
                   </div>
           </div>
        </footer>
    )
}

export default Footer;