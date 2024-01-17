import React from "react";
import "./SingleMentorPage.css";
import ProfileHeader from "../../Assets/ProfileHeader.gif";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import DateCalendarServerRequest from "../../Components/DateCalendarServerRequest";

const SingleMentorPage = () => {
  return (
    <div>
      <div className="singleMentorContainer">
        <div className="leftSingleMentor">
          <div className="heroProfile">
            <div className="coverimageDiv">
              <img src={ProfileHeader} alt="" />
            </div>
            <div className="askQuestionDiv">
              <button className="askaQsBtn">Ask a Question?</button>
            </div>
            <div className="infoProfile">
              <div className="leftInfo">
                <div className="headingName">
                  <h1>Amar Kumar</h1>
                  <p>Senior Analyst at Microsoft</p>
                </div>
                <div className="descProfile">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum sit suscipit ut, nesciunt repellendus ullam nobis
                    odio dolore vel! Corrupti ea officiis, harum quibusdam
                    ducimus quisquam praesentium quia veniam sunt quasi mollitia
                    explicabo repudiandae reiciendis?
                  </p>
                </div>
                <div className="statsProfile">
                  <div className="reviewCount">
                    <p>
                      <FaStar size={15} /> 4.4 Reviews
                    </p>
                  </div>
                  <div className="mentoringMins">
                    <p>
                      <FaClock size={15} /> 1200+ Mentoring Mins
                    </p>
                  </div>
                  <div className="noOfMentees">
                    <p>
                      <GrGroup size={20} /> 53+ Mentees
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
          <div className="careerProfile"></div>
          <div className="reviewsProfile"></div>
        </div>
        <div className="rightSingleMentor">
          <div className="headerRight">
            <h2>BOOK YOUR TRIAL 1:1 NOW</h2>
          </div>
          <div className="dateChart">
            <h3 style={{ textAlign: "left" }}>
              Available
              Dates
            </h3>
            <DateCalendarServerRequest />
          </div>
          <div className="slotChart">
            <h3 style={{ textAlign: "left" }}>Time Slots</h3>
            <ul className="slotTimes">
              <li>9.30</li>
              <li>10.30</li>
              <li>11.30</li>
              <li>9.30</li>
              <li>10.30</li>
              <li>11.30</li>
              <li>9.30</li>
              <li>10.30</li>
              <li>11.30</li>
              {/* <li>9.30</li>
            <li>10.30</li>
            <li>11.30</li> */}
            </ul>
          </div>
          <div className="buttonBook">
            <button class="btn-17">
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
