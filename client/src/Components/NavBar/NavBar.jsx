import React from "react";
import Logo from "../../Assets/logo.png";
import "./NavBar.css";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";
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
                <a href="http://localhost:3001/">Stories</a>
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
            <img
              src={
                "https://static.wixstatic.com/media/f4d2c1_7b8186d72a124231a98bcfd305b62861~mv2.png/v1/fit/w_2500,h_1330,al_c/f4d2c1_7b8186d72a124231a98bcfd305b62861~mv2.png"
              }
              alt=""
              width={20}
            />
            <ul className="navList">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Live Events</a>
              </li>
              <li>
                <a
                  href="http://localhost:3001/"
                  style={{ textDecoration: "none" }}
                >
                  Stories
                </a>
              </li>
              <li>
                <a>Ask Mentors</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
            <div className="btn-container">
              <button className="blueBtn">
                <span>Find your mentor?</span>
              </button>
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
