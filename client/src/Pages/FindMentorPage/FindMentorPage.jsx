import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../../Components/Card";
import NavBar from "../../Components/NavBar/NavBar";
import './FindMentorPage.css';
const FindMentorPage = () => {
  const [mentors,setMentors] = useState([]);
  async function getTopMentors(){
    const email = localStorage.getItem("email");
    const resp = await fetch(`http://localhost:8800/api/mentee/topmentors/${email}`,{
      mwthod:"POST",
      headers:{
        "Content-Type":"application/json"
      },
    })
    const data = await resp.json();
    setMentors(data);
    console.log(data)
  }

  useEffect(()=>{
    getTopMentors();
  },[])
  useEffect(()=>{
    console.log(mentors)
  },[mentors])
  return (
    <>
      <NavBar />
      <h1>Based on your preferances, these most recommended mentors</h1>
      <Swiper
        style={{
          paddingTop: "20vh",
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
      {
        mentors.map((mentor,index) => (
          <SwiperSlide>
          <Link to={`/SingleMentor/${mentor.email}`}>
          <Card name={mentor.name} ProfessionTitle={mentor.ProfessionTitle} Bio={mentor.Bio} city={mentor.city} country={mentor.country} number={index}/></Link>
        </SwiperSlide>
        )
        )
      }
        
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