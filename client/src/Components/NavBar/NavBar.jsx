import React from 'react'
import Logo from '../../Assets/logo.png'
import "./NavBar.css";
const NavBar = () => {
    return (
        <div>
            <header>
                <nav className="menu--left" role="navigation">
                    <div className="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="menuItem">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Live Events</a>
                            </li>
                            <li>
                                <a href='http://localhost:3001/'>Stories</a>
                            </li>
                            <li>
                                <a>Ask Mentors</a>
                            </li>
                            <li>
                                <a>Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav>
                    <div className="navFull glass">
                        <div className="logoDiv">
                            <img src={Logo} alt="" width={20} />
                        </div>
                        <ul className='navList'>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Live Events</a>
                            </li>
                            <li>
                                <a href='http://localhost:3001/' style={{ textDecoration: "none", color: "black" }}>Stories</a>
                            </li>
                            <li>
                                <a>Ask Mentors</a>
                            </li>
                            <li>
                                <a>Dashboard</a>
                            </li>
                            <li>
                                <a className='blueBtn'><b>Find Your Mentor?</b></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar