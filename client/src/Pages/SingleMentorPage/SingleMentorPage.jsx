import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleMentorPage.css";
import ProfileHeader from "../../Assets/ProfileHeader.gif";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import DateCalendarServerRequest from "../../Components/DateCalendarServerRequest";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import TimeSlotSVG from "../../Components/SVG/TimeSlotSVG";
import ReviewSVG from "../../Components/SVG/ReviewSVG";
import ClockSVG from "../../Components/SVG/ClockSVG";
import MenteeSVG from "../../Components/SVG/MenteeSVG";
const SingleMentorPage = () => {
  const { email } = useParams();
  const [mentorData, setMentorData] = useState({});
  const [bookSlot, setBookSlot] = useState({});
  const [availabilityParam, setaAvailabilityParam] = useState([]);
  const emailid = email;
  const userEmail = localStorage.getItem("email");
  const handleBookSlot = (date, time) => {
    console.log(date);
    console.log(time);
    setBookSlot({ reqBy: userEmail, reqFor: emailid, date: date, time: time });
  };
  useEffect(() => {
    console.log(bookSlot);
  }, [bookSlot]);

  const handleSubmit = async () => {
    console.log("Hi");
    try {
      const response = await axios.post(
        `http://localhost:8800/api/bookings/${userEmail}`,
        bookSlot
      ); // Replace with your actual backend API endpoint
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching mentors:", error);
    }
  };

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/mentor/find/${emailid}`
        ); // Replace with your actual backend API endpoint
        setMentorData(response.data);
        console.log(response.data.availability);
        // availabilityParam = response.data.availability;
        setaAvailabilityParam(response.data.availability);
        console.log(availabilityParam);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentorData();
  }, []);
  const handleClick = (date) => {
    console.log(date);
  };
  return (
    <div>
      <NavBar />
      <p>Email: {email}</p>
      <div className="singleMentorContainer">
        <div className="leftSingleMentor">
          <div className="heroProfile">
            <div className="coverimageDiv">
              {/* <img src={ProfileHeader} alt="" /> */}
            </div>
            <div className="askQuestionDiv">
              <button className="askaQsBtn">Ask a Question?</button>
            </div>
            <div className="infoProfile">
              <div className="leftInfo">
                <div className="headingName">
                  <h1>{mentorData?.Name}</h1>
                  <p>Senior Analyst at Microsoft</p>
                </div>
                <div className="descProfile">
                  <p>{mentorData?.bio}</p>
                </div>
                <div className="statsProfile">
                  <div className="reviewCount">
                    <p>
                      <ReviewSVG className="profile-icons" />
                      <span>4.4 Reviews</span>
                    </p>
                  </div>
                  <div className="mentoringMins">
                    <p>
                      <ClockSVG className="profile-icons" />
                      <span>1200+ Mentoring Mins</span>
                    </p>
                  </div>
                  <div className="noOfMentees">
                    <p>
                      <MenteeSVG className="profile-icons" />
                      <span>53+ Mentees</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rightInfo">
                <h3>Expereince in</h3>
                <ul>
                  <li>Microsoft</li>
                  <li>Amazon</li>
                  <li>Flipkart</li>
                  <li>Myntra</li>
                </ul>
              </div>
            </div>
            <div className="latestReviewBox">
              <div className="headerReview">
                <h3>Recent Review</h3>
                <p>View All Reviews (30)</p>
              </div>
              <div className="bodyReview">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                  beatae ratione similique rerum aliquam velit qui nam fuga
                  quaerat recusandae ad, debitis reiciendis veritatis
                  consequatur perferendis sequi cum rem quis. Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Maxime maiores rerum
                  ratione nam repellendus harum.
                </p>
              </div>
              <div className="infoReview">
                <div className="accountDetails">
                  {/* <img src="" alt="" /> */}
                  <h3>Austin Hong</h3>
                </div>
                <div className="dateReview">
                  <p>2 months ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutProfile">
            <h2>About</h2>
            <div className="contentAbout">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis natus et cum facere. Dolores mollitia quidem similique
                repudiandae consequuntur tempora dignissimos, ab aut enim
                dolorem, cumque dicta? Vitae, iure. Minima eligendi ducimus
                atque reprehenderit incidunt esse qui nihil. Iste, dolore
                assumenda! Similique, debitis! Alias nostrum adipisci
                consectetur dolorum voluptates ipsam quis ullam eligendi eum
                corrupti libero quia, quisquam necessitatibus distinctio! Quia
                autem unde saepe eveniet vel eius, quam suscipit sed quas
                tempora, id delectus quae.
              </p>
              <div className="otherDetAbout">
                <div className="addDiv">
                  <p>Find Me Here</p>
                  <div className="location">
                    <FaLocationDot />
                    <p>Karnataka, India</p>
                  </div>
                  {/* <ImLinkedin /> */}
                </div>
                <div className="LangDiv">
                  <p>Languages that I Speak</p>
                  <ul className="langs">
                    <li>English</li>
                    <li>Hindi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-section"></div>
        </div>
        <div className="rightSingleMentor">
          <div className="headerRight">
            <div className="slot-heading">
              <TimeSlotSVG className="time-icon" />
              <h2>Book your free trial 1:1 </h2>
            </div>
            <p>
              Book your complimentary one-on-one trial session with a mentor
              today to experience personalized guidance and support tailored to
              your needs.{" "}
            </p>
          </div>
          <div className="dateChart">
            <h3>Available Dates</h3>

            {/* <DateCalendarServerRequest onHandleClick={handleClick}  /> */}

            <div className="gridSlots">
              {availabilityParam.map((slot) =>
                slot.slots.map((bot) => (
                  <div
                    className="gridDivSlot"
                    onClick={() => handleBookSlot(slot.date, bot.time)}
                  >
                    <p>{slot.day}</p>
                    <h4>{slot.date}</h4>
                    <p>{bot.time}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="buttonBook">
            <button class="btn-17" onClick={handleSubmit}>
              <span class="text-container">
                <span class="text">Book Your Slot Now! </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMentorPage;
