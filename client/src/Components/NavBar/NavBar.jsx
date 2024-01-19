import React, { useEffect, useState } from "react";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  let [isMentor, setIsMentor] = useState(false);
  const emailid = localStorage.getItem("email");

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
            <img
              src={
                "https://static.wixstatic.com/media/f4d2c1_7b8186d72a124231a98bcfd305b62861~mv2.png/v1/fit/w_2500,h_1330,al_c/f4d2c1_7b8186d72a124231a98bcfd305b62861~mv2.png"
              }
              alt=""
              width={20}
            />
            <ul className="navList">
              <li>
              <Link to="/"><a>Home</a></Link>
                
              </li>
              
              <li>
              <Link to="/"><a>Live Events</a></Link>
              </li>
              <li>
              <a
                  href="http://localhost:3001/"
                  style={{ textDecoration: "none" }}
                >
                  Community
                </a>
                
              </li>
            
              {/* <li>
              <Link to="/"><a>Ask Mentors</a></Link>
              </li> */}
              
              {/* <li>
              <Link to="/"><a>Dashboard</a></Link>
              </li> */}
              {isMentor && <Link to={`/dashboard/${emailid}`}><li><a>Mentor Dashboard</a></li></Link>}
              {!isMentor && <Link to={`/menteeProfile/${emailid}`}><li><a>Mentee Dashboard</a></li></Link>}
            </ul>
            <div className="btn-container">
              
            {!isMentor && <Link to="/matchMentor">
              <button className="blueBtn">
                <span>Match Mentor</span>
              </button>
              </Link>}

              {/* <Link to="/matchMentor">
              <button className="blueBtn">
                <span>Match Mentor</span>
              </button>
              </Link> */}
              <div className="signOutBtn">
                <SignOutButton afterSignOutUrl="/" className="SignOut" />
              </div>
            </div>
          </div>
        </nav>
        
      </header>
    </div>
  );
};

export default NavBar;