import React, { useState, useEffect } from "react";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Link, useParams } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import RegisterPage from "../RegisterPage/RegisterPage";
import axios from "axios";
import { useWindowSize } from "react-use";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./HomePage.css";
import NavBar from "../../Components/NavBar/NavBar";
import { FaStar } from "react-icons/fa";
// import SearchInput from "../../Components/SearchInput";
const HomePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [query, setQuery] = useState("");
  const [mentors, setMentors] = useState([]);
  console.log(user);
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/menteeLogin",
        { email }
      );
      console.log(response.data);
      if (response.status === 200) {
        setIsVisible(false);
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email);
    handleVisibility(email);

    const fetchMentors = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/mentor/");
        console.log(response);
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      {!user ? (
        <SignedOut>
          <section class="login">
            <div class="login_box">
              {/* <div class="left">
                <div class="top_link">
                </div>
                <div class="contact">
                  <div >
                    <SignInButton mode="modal" redirectUrl="/" class="submit" />
                  </div>
                </div>
              </div> */}
              <div class="right">
                <div class="right-text">
                  <h2>MENTOR PREP</h2>
                  <h5>GET YOUR FUNDAMENTALS CLEARED!</h5>
                  <SignInButton mode="modal" redirectUrl="/" class="submit" />
                </div>
                <div class="right-inductor">
                  <img
                    src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </SignedOut>
      ) : (
        <SignedIn>
          <NavBar />
          <div className="signOutBtn">
            <SignOutButton afterSignOutUrl="/" className="SignOut" />
          </div>
          <h1>Welcome to Dashbaord {user.fullName}</h1>

          {/* {isRegistrationDone && <RegisterPage user={user} />} */}
          {isVisible && <RegisterPage user={user} />}
          <div className="searchBarDiv">
            <div class="wrapper">
              <div class="label">Submit your search</div>
              <div class="input-container">
                <input
                  placeholder="Search for Mentors"
                  type="text"
                  id="searchQueryInput"
                  onChange={handleInputChange}
                  value={query}
                  class="input"
                />
                <span>Search</span>
              </div>
            </div>
          </div>
          <div className="gridItems">
            {mentors
              .filter(
                (mentor) =>
                  mentor.name.toLowerCase().includes(query.toLowerCase()) ||
                  mentor.ProfessionTitle.toLowerCase().includes(
                    query.toLowerCase()
                  )
              )
              .map((mentor) => (
                <div key={mentor._id} className="mentorCard">
                  <div className="mentorInnerCard">
                    <div className="profileContainer">
                      <div className="profileImage">
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                        />
                      </div>
                      <div className="mentorDetails">
                        <h3>{mentor.name}</h3>
                        <p>Senior Software Engineering Manager</p>
                        <h6>Walmart Global Team India</h6>
                      </div>
                    </div>

                    <div className="MoreDetails">
                      <span>
                        15 yrs of Exp. at Walmart Global Team India | Cardinal
                        Health{" "}
                      </span>
                      <p>{mentor.bio}</p>
                      <div className="MentorSkills">
                        <span>{mentor.ProfessionTitle}</span>
                        <span>DSA</span>
                      </div>
                    </div>
                  </div>

                  <div className="bookSection">
                    <div className="priceReview">
                      <div className="priceCont">
                        <h4>Rs. {mentor.Price}/month</h4>
                      </div>
                      <div className="reviewCont">
                        <h4>
                          4.9 <FaStar /> | 50+ mentees
                        </h4>
                      </div>
                    </div>

                    <div className="BtnsDivs">
                      <Link to={`/SingleMentor/${mentor.email}`}>
                        <button className="profileBtn">View Profile</button>
                      </Link>

                      <button className="trialBtn">Book Free Trial</button>
                    </div>

                    <div className="MoreExp">
                      <p>
                        For: <b>Experienced Profession</b>
                      </p>
                      <p>
                        Targeting: <b>Engineering Manager</b>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* <UserButton /> */}
        </SignedIn>
      )}
    </div>
  );
};

export default HomePage;