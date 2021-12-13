import React, {useState}   from 'react';
import Logo from '../../assets/favicon.ico';
import './header.css';

const Header = (props) => {
    const [smActive, setSmActive] = useState(false);
    
    const hamMenuClick = () => {
        setSmActive(prev => !prev)
    }
    
    return (
        <header className='header'>
            <div className='header__content'>
                <div className='header__logo-container'>
                    <div className='header__logo-img-cont'>
                        <img src={Logo} alt='Jacob Von Ogden Logo Img' className='header__logo-img' />
                    </div>
                    <div className='header__logo-content'>Jacob Von Ogden</div>
                </div>
                <div className='header__main'>
                    <ul className='header__links'>
                        <li class='header__link-wrapper'>
                            <a href='#landing' className='header__link' onClick={props.viewMain}>Home</a>
                        </li>
                        <li class='header__link-wrapper'>
                            <a href='#about' className='header__link' onClick={props.viewMain}>About</a>
                        </li>
                        <li class='header__link-wrapper'>
                            <a href='#projects' className='header__link' onClick={props.viewMain}>Projects</a>
                        </li>
                        <li class='header__link-wrapper'>
                            <a href='#contact' className='header__link' onClick={props.viewMain}>Contact</a>
                        </li>
                    </ul>
                    <div onClick={hamMenuClick} className='header__main-ham-menu-content'>
                    {smActive 
                    ?
                        <img src='https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg' alt='hamburger menu close' className='header__main-ham-menu-close' />
                    :
                        <img src='https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg' alt='hamburger menu' className='header__main-ham-menu' />
                    }
                    </div>
                </div>
                <div className={`header__sm-menu ${smActive ? 'header__sm-menu--active' : ''}`}>
                    <div className='header__sm-menu-content'>
                        <ul className='header__sm-menu-links'>
                            <li className='header__sm-menu-link' onClick={hamMenuClick}>
                                <a href='#landing' onClick={props.viewMain}>Home</a>
                            </li>
                            <li className='header__sm-menu-link' onClick={hamMenuClick}>
                                <a href='#about' onClick={props.viewMain}>About</a>
                            </li>
                            <li className='header__sm-menu-link' onClick={hamMenuClick}>
                                <a href='#projects' onClick={props.viewMain}>Projects</a>
                            </li>
                            <li className='header__sm-menu-link' onClick={hamMenuClick}>
                                <a href='#contact' onClick={props.viewMain}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;