import React, { useState, useEffect } from "react";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
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
import {FaStar} from "react-icons/fa"

const HomePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [mentors, setMentors] = useState([]);
  console.log(user);
  const [isVisible, setIsVisible] = useState(true);
  // const [isRegistrationDone, setIsRegistrationDone] = useState(false);

  // useEffect(() => {
  //   const checkRegistrationStatus = async () => {
  //     try {

  //       const response = await axios.get(`/api/mentee/${user.emailAddresses[0].emailAddress}`, {
  //         params: { userEmail: user.emailAddresses[0].emailAddress },
  //       });

  //       setIsRegistrationDone(response.data.isRegistrationDone);
  //     } catch (error) {
  //       console.error("Error checking registration status:", error);
  //     }
  //   };

  //   if (user && isSignedIn) {
  //     checkRegistrationStatus();
  //   }
  // }, [user, isSignedIn]);

  const handleVisibility = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/menteeLogin",
        { email }
      );
      console.log(response.data);
      if (response.status == 200) {
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
        const response = await axios.get('http://localhost:8800/api/mentor/'); // Replace with your actual backend API endpoint
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();

  }, []);

  return (
    <div>
      {!user ? (
        <SignedOut>
          <h1>Sign in with this button</h1>
          <SignInButton mode="modal" redirectUrl="/" />
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
          {/* <div className="carousel">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 60,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                },
                1280: {
                  spaceBetween: 70,
                  slidesPerView: 4,
                },
                1536: {
                  spaceBetween: 80,
                  slidesPerView: 5,
                },
                1600: {
                  spaceBetween: 98,
                  slidesPerView: 3,
                },
                1920: {
                  spaceBetween: 99,
                  slidesPerView: 3,
                },
                2250: {
                  spaceBetween: 120,
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="card">
                  <div className="card-image"></div>
                  <div className="category"> Illustration </div>
                  <div className="heading">
                    {" "}
                    A heading that must span over two lines
                    <div className="author">
                      {" "}
                      By <span className="name">Abi</span> 4 days ago
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="card-image"></div>
                  <div className="category"> Illustration </div>
                  <div className="heading">
                    {" "}
                    A heading that must span over two lines
                    <div className="author">
                      {" "}
                      By <span className="name">Abi</span> 4 days ago
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="card-image"></div>
                  <div className="category"> Illustration </div>
                  <div className="heading">
                    {" "}
                    A heading that must span over two lines
                    <div className="author">
                      {" "}
                      By <span className="name">Abi</span> 4 days ago
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="card-image"></div>
                  <div className="category"> Illustration </div>
                  <div className="heading">
                    {" "}
                    A heading that must span over two lines
                    <div className="author">
                      {" "}
                      By <span className="name">Abi</span> 4 days ago
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><div className="card">
                  <div className="card-image"></div>
                  <div className="category"> Illustration </div>
                  <div className="heading">
                    {" "}
                    A heading that must span over two lines
                    <div className="author">
                      {" "}
                      By <span className="name">Abi</span> 4 days ago
                    </div>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide><div className="card">
                  <div className="card-image"></div>
                  <div className="category"> Illustration </div>
                  <div className="heading">
                    {" "}
                    A heading that must span over two lines
                    <div className="author">
                      {" "}
                      By <span className="name">Abi</span> 4 days ago
                    </div>
                  </div>
                </div></SwiperSlide>
            </Swiper>
            </div> */}
          <div className="searchBarDiv">
            <div class="wrapper">
              <div class="label">Submit your search</div>
              <div class="searchBar">
                <input
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  placeholder="Search"
                  value=""
                />
                <button
                  id="searchQuerySubmit"
                  type="submit"
                  name="searchQuerySubmit"
                >
                  <svg
                    style={{ width: "24px", height: "24px" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666666"
                      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gridItems">
          {mentors.map((mentor) => (
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
                    <h3>{mentor.Name}</h3>
                    <p>Senior Software Engineering Manager</p>
                    <h6>Walmart Global Team India</h6>
                  </div>
                </div>

                <div className="MoreDetails">
                  <span>
                    15 yrs of Exp. at Walmart Global Team India | Cardinal
                    Health{" "}
                  </span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, animi inventore ab vel molestiae nostrum expedita
                    dolor. Animi, adipisci odio.
                  </p>
                  <div className="MentorSkills">
                    <span>System Design</span>
                    <span>DSA</span>
                  </div>
                </div>
              </div>

              <div className="bookSection">
                <div className="priceReview">
                  <div className="priceCont">
                    <h4>Rs. 10,000/month</h4>
                  </div>
                  <div className="reviewCont">
                    <h4>
                      4.9 <FaStar /> | 50+ mentees
                    </h4>
                  </div>
                </div>

                <div className="BtnsDivs">
                  <button className="profileBtn">View Profile</button>
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
            {/* <div className="mentorCard">
              <div className="mentorInnerCard">
                <div className="profileContainer">
                  <div className="profileImage">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="mentorDetails">
                    <h3>Vikas Bharti</h3>
                    <p>Senior Software Engineering Manager</p>
                    <h6>Walmart Global Team India</h6>
                  </div>
                </div>

                <div className="MoreDetails">
                  <span>
                    15 yrs of Exp. at Walmart Global Team India | Cardinal
                    Health{" "}
                  </span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, animi inventore ab vel molestiae nostrum expedita
                    dolor. Animi, adipisci odio.
                  </p>
                  <div className="MentorSkills">
                    <span>System Design</span>
                    <span>DSA</span>
                  </div>
                </div>
              </div>

              <div className="bookSection">
                <div className="priceReview">
                  <div className="priceCont">
                    <h4>Rs. 10,000/month</h4>
                  </div>
                  <div className="reviewCont">
                    <h4>
                      4.9 <FaStar /> | 50+ mentees
                    </h4>
                  </div>
                </div>

                <div className="BtnsDivs">
                  <button className="profileBtn">View Profile</button>
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
            <div className="mentorCard">
              <div className="mentorInnerCard">
                <div className="profileContainer">
                  <div className="profileImage">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="mentorDetails">
                    <h3>Vikas Bharti</h3>
                    <p>Senior Software Engineering Manager</p>
                    <h6>Walmart Global Team India</h6>
                  </div>
                </div>

                <div className="MoreDetails">
                  <span>
                    15 yrs of Exp. at Walmart Global Team India | Cardinal
                    Health{" "}
                  </span>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, animi inventore ab vel molestiae nostrum expedita
                    dolor. Animi, adipisci odio.
                  </p>
                  <div className="MentorSkills">
                    <span>System Design</span>
                    <span>DSA</span>
                  </div>
                </div>
              </div>

              <div className="bookSection">
                <div className="priceReview">
                  <div className="priceCont">
                    <h4>Rs. 10,000/month</h4>
                  </div>
                  <div className="reviewCont">
                    <h4>
                      4.9 <FaStar /> | 50+ mentees
                    </h4>
                  </div>
                </div>

                <div className="BtnsDivs">
                  <button className="profileBtn">View Profile</button>
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
            </div> */}
          </div>

          {/* <UserButton /> */}
        </SignedIn>
      )}
    </div>
  );
};

export default HomePage;
