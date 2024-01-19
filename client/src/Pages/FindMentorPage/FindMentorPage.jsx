import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../../Components/Card";
import NavBar from "../../Components/NavBar/NavBar";
import "./FindMentorPage.css";
import { MdDelete } from "react-icons/md";

const FindMentorPage = () => {
  const [mentors, setMentors] = useState([]);


  const [interests, setInterests] = useState(['']);

  const handleInterestChange = (index, value) => {
    const newInterests = [...interests];
    newInterests[index] = value;
    setInterests(newInterests);
  };

  const addInterest = () => {
    setInterests([...interests, '']);
  };

  const deleteInterest = (index) => {
    const newInterests = [...interests];
    newInterests.splice(index, 1);
    setInterests(newInterests);
  };



  async function getTopMentors() {
    const email = localStorage.getItem("email");
    const resp = await fetch(
      `http://localhost:8800/api/mentee/topmentors/${email}`,
      {
        mwthod: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await resp.json();
    setMentors(data);
    console.log(data);
  }

  useEffect(() => {
    getTopMentors();
  }, []);
  useEffect(() => {
    console.log(mentors);
  }, [mentors]);
  return (
    <>
      <NavBar />
      <h1>Based on your preferances, these most recommended mentors</h1>
      <div
        className="flexInterest"
        style={{ marginTop: "3em", padding: "20px 80px" }}
      >
        <div className="InterestDivss">
          <h2>Domain Preference</h2>
          <div className="flexMe">
          {interests.map((interest, index) => (
            <div key={index} className="interestDiv">
              <label className="domainInterest">
                <input
                  name="interest"
                  required
                  placeholder="Enter New Domain"
                  type="text"
                  className="input"
                  value={interest}
                  onChange={(e) => handleInterestChange(index, e.target.value)}
                />
                <button className="delBtn" onClick={() => deleteInterest(index)}><MdDelete size={20} color="#a10505" /></button>
              </label>
              
            </div>
          ))}
          <button
            type="button"
            onClick={addInterest}
            className="AddIntbutton"
          >
            + Add Interest
          </button>
          </div>
          
        </div>
        {/* ))} */}
      </div>

      <Swiper
        style={{
          // paddingTop: "20vh",
          display: "flex",
          justifyContent: "center",
        }}
        spaceBetween={50}
        slidesPerView={1}
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
            slidesPerView: 1,
          },
          1536: {
            spaceBetween: 80,
            slidesPerView: 3,
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
        {mentors?.map((mentor, index) => (
          <SwiperSlide>
            <Card
              name={mentor.name}
              ProfessionTitle={mentor.ProfessionTitle}
              Bio={mentor.Bio}
              city={mentor.city}
              country={mentor.country}
              number={index}
            />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default FindMentorPage;
