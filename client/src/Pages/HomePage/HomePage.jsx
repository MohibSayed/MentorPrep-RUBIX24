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
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar'
const HomePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user);

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

  return (
    <div>
      {!user ? (
        <SignedOut>
          <h1>Sign in with this button</h1>
          <SignInButton mode="modal" redirectUrl="/" />
        </SignedOut>
      ) : (
        <SignedIn>
        <NavBar/>
        <div className="signOutBtn">
          <SignOutButton afterSignOutUrl="/" className="SignOut" />
        </div>
          <h1>Welcome to Dashbaord {user.fullName}</h1>
          
          {/* {isRegistrationDone && <RegisterPage user={user} />} */}
          <RegisterPage user={user} />
          <div className="carousel">
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
                  slidesPerView: 7,
                },
                1536: {
                  spaceBetween: 80,
                  slidesPerView: 7,
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
          </div>
          
          {/* <UserButton /> */}
        </SignedIn>
      )}
    </div>
  );
};

export default HomePage;
