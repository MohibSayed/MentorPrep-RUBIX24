import React, { useEffect, useState } from "react";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  let [isMentor, setIsMentor] = useState(false);
  async function userType() {
    const email = localStorage.getItem("email");
    const resp = await fetch("http://localhost:8800/api/auth/userType", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    const data = await resp.json();

    if (data.Type === "Mentor") {
      setIsMentor(true);
    }
    // console.log(resp);
  }
  useEffect(() => {
    userType();
  }, []);
  useEffect(() => {
    console.log(isMentor);
  }, [isMentor]);
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
                <a>Stories</a>
              </li>
              <li>
                <a>Match Mentors</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              {isMentor && <li><a>Profile</a></li>}
            </ul>
          </div>
        </nav>
        <nav>
          <div className="navFull glass">
            <div className="logoDiv">
              <img src={Logo} alt="" width={20} />
            </div>
            <ul className="navList">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
              </Link>
              <li>
                <a>Live Events</a>
              </li>
              <li>
                <a>Stories</a>
              </li>
              <Link to="/matchMentor">
                <li>Match Mentors</li>
              </Link>
              <li>
                <a>Dashboard</a>
              </li>
              {/* <li>
                            <a>FAQs</a>
                        </li> */}
                        {isMentor && <li><a>Profile</a></li>}
              <li>
                <a className="blueBtn">
                  <b>Find Your Mentor?</b>
                </a>
              </li>
              {/* <li>
                            <a className='greenBtn'><b>CONTACT</b></a>
                        </li> */}
            </ul>
          </div>
        </nav>
        {/* <nav className="menu--right" role="navigation">
                <div className="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul className="menuItem">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Show me more</a></li>
                </ul>
                </div>
            </nav> */}
      </header>
    </div>
  );
};

export default NavBar;