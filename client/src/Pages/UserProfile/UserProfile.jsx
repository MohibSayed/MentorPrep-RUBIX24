import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
// import axios from "axios";

const UserProfile = () => {
  const user = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);
  const [length, setLength] = useState(0);
  const [sucessBarter, setSucessBarter] = useState(0);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userData = await axios.get(`http://localhost:8800/api/users/${user}`);
  //     const length = await axios.get(`http://localhost:8800/api/num_barter/${user}`);
  //     const sucessBarter = await axios.get(`http://localhost:8800/api/sucessBarter/${user}`);
  //     setSucessBarter(sucessBarter.data.numberOfProducts);
  //     setUserData(userData.data);
  //     setLength(length.data.numberOfProducts);
  //   }
  //   fetchUser();
  // }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="profile-wrapper">
      <div className="UserTabPanel">
        <div className="TabHeading">
          <h4>Profile</h4>
        </div>

        <div className="ProfileCardContainer">
          <div className="ProfileCard">
            <div className="profile-section">
              <div className="Profileimg">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>

              <div className="infos">
                <div className="name">
                  <h4>
                    <strong>Name: </strong>
                    {userData ? userData.name : "...loading..."}
                  </h4>
                  <h4>
                    <strong>Email: </strong>{" "}
                    {userData ? userData.email : "...loading..."}
                  </h4>
                  <h4>
                    <strong>Phone: </strong> +91 88953 88963
                  </h4>
                </div>
                <p className="Profiletext">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto excepturi ducimus sed porro animi, assumenda error
                  eos numquam adipisci ipsum aperiam modi similique repellat
                  odio esse tenetur incidunt quaerat facere.
                </p>
                <ul className="stats">
                  <li>
                    <h3>{length ? length : "0"}</h3>
                    <h4>Session Attended</h4>
                  </li>
                </ul>
                <div className="links">
                  <Link to="edit-profile" className="view">
                    <EditIcon className="edit-btn" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="profileContainer">
              <Link to="on-going-session">
                <div className="session-card">
                  <div className="profileContentLogo"></div>
                  <div className="profileContentConatainer">
                    <h3>Ongoing Session</h3>
                    <p>5+ sessions are active.</p>
                  </div>
                </div>
              </Link>

              <Link to="requested-session">
                <div className="session-card">
                  <div className="profileContentLogo"></div>
                  <div className="profileContentConatainer">
                    <h3>Requested Session</h3>
                    <p>10 requests is yet to approved.</p>
                  </div>
                </div>
              </Link>

              <Link to="past-session">
                <div className="session-card">
                  <div className="profileContentLogo"></div>
                  <div className="profileContentConatainer">
                    <h3>Past Session</h3>
                    <p>20+ sessions attended</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default UserProfile;
