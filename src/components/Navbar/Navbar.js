import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { SiApplearcade, SiLinkedin, SiYoutube, SiTwitter, SiArtstation } from 'react-icons/si';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => (window.innerWidth <= 960) ? true : false;

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return window.removeEventListener('resize', showButton);
    });
    
    return (
        <>
            <IconContext.Provider value={{ color: "#111" }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
                            <SiApplearcade className='navbar-icon' />
                            Adnan Faize
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <RiCloseLine/> : <RiMenu3Line/> }
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/home' className='nav-link' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/projects' className='nav-link' onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/shinwa-no-kugun' className='nav-link' onClick={closeMobileMenu}>
                                    神話の空軍
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/my-index' className='nav-link' onClick={closeMobileMenu}>
                                    My Index
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about-me' className='nav-link' onClick={closeMobileMenu}>
                                    About Me
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <a href='https://www.linkedin.com/in/adnan-faize-a3958b243/' target='_blank' className='nav-icon' onClick={closeMobileMenu}>
                                    <SiLinkedin/>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='https://www.youtube.com/channel/UCgCvO-7Wt0wJzmKxfFU7ahg' target='_blank' className='nav-icon' onClick={closeMobileMenu}>
                                    <SiYoutube/>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='https://twitter.com/adnan_faize' target='_blank' className='nav-icon' onClick={closeMobileMenu}>
                                    <SiTwitter/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;