import React from 'react'
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from '../../Components/Card';


const FindMentorPage = () => {
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
                  slidesPerView: 4,
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
<Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
</SwiperSlide>
        
      </Swiper>
}

export default FindMentorPage
import React from 'react'
import './FindMentorPage.css'
const FindMentorPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default FindMentorPage
