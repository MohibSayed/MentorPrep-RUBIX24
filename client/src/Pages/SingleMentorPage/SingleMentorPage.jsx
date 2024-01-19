import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleMentorPage.css";
import ProfileHeader from "../../Assets/ProfileHeader.gif";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import Popup from "../../Components/Popup/Popup";
const SingleMentorPage = () => {
  const { email } = useParams();
  const [mentorData, setMentorData] = useState({});
  const [bookSlot, setBookSlot] = useState({});
  const [availabilityParam, setaAvailabilityParam] = useState([]);
  const emailid = email;
  const userEmail = localStorage.getItem("email");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(100);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/mentor/find/${emailid}`
        ); // Replace with your actual backend API endpoint
        setMentorData(response.data);
        console.log(response.data.availability);
        // availabilityParam = response.data.availability;
        // setBookSlot(...bookSlot, price: response.data.price)
        setBookSlot({ ...bookSlot, price: response.data.Price });

        setaAvailabilityParam(response.data.availability);
        console.log(availabilityParam);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
      
    };

    fetchMentorData();
  }, []);

  const handleBookSlot = (date, time) => {

    setBookSlot({
      ...bookSlot,
      reqBy: userEmail,
      reqFor: emailid,
      date: date,
      time: time,
      plan: "Once",
      // price: "",
    });
  };
  const planUpdate = (plan) => {
    setBookSlot({ ...bookSlot, plan: plan,});
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



  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          // style={style}
          disabled={false}
          forceReRender={[amount, currency]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={handleSubmit}
        />
      </>
    );
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <NavBar />
      <p>Email: {email}</p>
      <div className="singleMentorContainer">
        <div className="leftSingleMentor">
          <div className="heroProfile">
            <div className="coverimageDiv">
              <img src={ProfileHeader} alt="" />
            </div>
            <div className="askQuestionDiv">
              <button className="askaQsBtn">Ask a Question?</button>
              {/* <button onClick={handleOpenPopup}>Open Popup</button> */}
              {/* 
      {isPopupOpen && (
        <Popup text="Hello, this is your popup!" onClose={handleClosePopup} />
      )} */}
            </div>
            <div className="infoProfile">
              <div className="leftInfo">
                <img
                  className="mentorPhoto"
                  src="https://imgs.search.brave.com/EB4dBcW7zNuoPP_2pPKEZz9ZDJp7OqE_lCfEzOy-5Sw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg4LzUzLzg5/LzM2MF9GXzg4NTM4/OTg2XzVCaTRlSjY2/N3BvY3NPM0JJbGJO/NGZIS3o4eVVGU3VB/LmpwZw"
                  alt=""
                />
                <div className="headingName">
                  <h1>{mentorData.name}</h1>
                  <p>Senior Analyst at Microsoft</p>
                </div>
                <div className="descProfile">
                  <p>{mentorData.bio}</p>
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
          <div className="cards">
            <div className="card-basic">
              <div className="card-header header-basic">
                <h1>Basic</h1>
              </div>
              <div className="card-body">
                <p>
                  <h2>$5 / Week</h2>
                </p>
                <div className="card-element-hidden-basic">
                  <ul className="card-element-container">
                    <li className="card-element">1-1 session</li>
                    <li className="card-element">Daily for one week</li>
                    <li className="card-element">Video Call</li>
                  </ul>
                  {open1 ? (
                    <div className="paymentMethods">
                      <PayPalScriptProvider
                        options={{
                          "client-id":
                            "ARO3D3zCsbgeI2urwYR-1mxCgcRv4x3fHvHxNT4EUPcUzx-Qa982KwwM9BareElDWaM2p-1iJXHVfRVX",
                          components: "buttons",
                          currency: "USD",
                          "disable-funding": "credit,card,p24",
                        }}
                      >
                        <ButtonWrapper
                          currency={currency}
                          showSpinner={false}
                        />
                      </PayPalScriptProvider>
                    </div>
                  ) : (
                    <button className="btn btn-basic" onClick={() => { setOpen1(true); setAmount(5); planUpdate('Weekly') }}>Order now</button>
                  )}
                </div>
              </div>
            </div>

            <div className="card-standard">
              <div className="card-header header-standard">
                <h1>Standard</h1>
              </div>
              <div className="card-body">
                <p>
                  <h2>$10 / Mo</h2>
                </p>
                <div className="card-element-hidden-standard">
                  <ul className="card-element-container">
                    <li className="card-element">1-1 session</li>
                    <li className="card-element">Daily for one month</li>
                    <li className="card-element">Video Call</li>
                  </ul>
                  {open2 ? (
                    <div className="paymentMethods">
                      <PayPalScriptProvider
                        options={{
                          "client-id":
                            "ARO3D3zCsbgeI2urwYR-1mxCgcRv4x3fHvHxNT4EUPcUzx-Qa982KwwM9BareElDWaM2p-1iJXHVfRVX",
                          components: "buttons",
                          currency: "USD",
                          "disable-funding": "credit,card,p24",
                        }}
                      >
                        <ButtonWrapper
                          currency={currency}
                          showSpinner={false}
                        />
                      </PayPalScriptProvider>
                    </div>
                  ) : (
                    <button className="btn btn-basic" onClick={() => { setOpen2(true); setAmount(10); planUpdate('Monthly') }}>Order now</button>
                  )}
                </div>
              </div>
            </div>
            <div className="card-premium">
              <div className="card-header header-premium">
                <h1>Premium</h1>
              </div>
              <div className="card-body">
                <p>
                  <h2>$20 / Q</h2>
                </p>
                <div className="card-element-hidden-premium">
                  <ul className="card-element-container">
                    <li className="card-element">1-1 session</li>
                    <li className="card-element">Daily for three months</li>
                    <li className="card-element">Video Call</li>
                  </ul>
                  {open3 ? (
                    <div className="paymentMethods">
                      <PayPalScriptProvider
                        options={{
                          "client-id":
                            "ARO3D3zCsbgeI2urwYR-1mxCgcRv4x3fHvHxNT4EUPcUzx-Qa982KwwM9BareElDWaM2p-1iJXHVfRVX",
                          components: "buttons",
                          currency: "USD",
                          "disable-funding": "credit,card,p24",
                        }}
                      >
                        <ButtonWrapper
                          currency={currency}
                          showSpinner={false}
                        />
                      </PayPalScriptProvider>
                    </div>
                  ) : (
                    <button className="btn btn-basic" onClick={() => { setOpen3(true); setAmount(20); planUpdate('Quarterly') }}>Order now</button>
                  )}
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
            <h3 style={{ textAlign: "left" }}>Available Slots</h3>

            {/* <DateCalendarServerRequest onHandleClick={handleClick}  /> */}

            <div className="gridSlots">
              {/* {availabilityParam.map((slot) => (

                slot.slots.map((bot) => (
                  <div className="gridDivSlot" onClick={() => handleBookSlot(slot.date, bot.time)}>
                    <p>{slot.day}</p>
                    <h4>{slot.date}</h4>
                    <p>{bot.time}</p>
                  </div>
                ))

              ))} */}
              {availabilityParam.map((slot) =>
                slot.slots
                  .filter((bot) => bot.filled < bot.capacity)
                  .map((bot) => (
                    // Check if the slot is not filled to capacity

                    <div
                    
                      className="gridDivSlot"
                      style={{backgroundColor: click ? "#dadada" : ""  }}
                      onClick={() => handleBookSlot(slot.date, bot.time)}
                    >
                      <p>{slot.day}</p>
                      <h4>{slot.date}</h4>
                      <p>{bot.time}</p>
                    </div>
                  ))
              )}
              {availabilityParam.map((slot) =>
                slot.slots
                  .filter((bot) => bot.filled >= bot.capacity)
                  .map((bot) => (
                    // Check if the slot is not filled to capacity

                    <div
                      className="gridDivSlot"
                    // onClick={() => handleBookSlot(slot.date, bot.time)}
                    >
                      <p>Booked</p>
                      <p>{slot.day}</p>
                      <h4>{slot.date}</h4>
                      <p>{bot.time}</p>
                    </div>
                  ))
              )}
            </div>
          </div>

          {open4 ? (
            <div className="paymentMethods">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ARO3D3zCsbgeI2urwYR-1mxCgcRv4x3fHvHxNT4EUPcUzx-Qa982KwwM9BareElDWaM2p-1iJXHVfRVX",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <div className="buttonBook">
              <button className="btn-17" onClick={() => { setOpen4(true); setAmount(mentorData.Price) }}>
                <span className="text-container">
                  <span className="text">Book Your Slot Now! </span>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleMentorPage;
