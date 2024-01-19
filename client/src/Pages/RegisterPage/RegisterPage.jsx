import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";

const RegisterPage = (props) => {
  const [isMentor, setIsMentor] = useState(false);

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: props.user.emailAddresses[0].emailAddress,
    mentor: false,
    country: "",
    city: "",
    phone: "",
    Profession: "",
    language: "",
    interests: [""],
  });
  const [mentor, setMentor] = useState({
    username: "",
    name: "",
    email: props.user.emailAddresses[0].emailAddress,
    bio: "",
    mentor: true,
    country: "",
    city: "",
    phone: "",
    ProfessionTitle: "",
    language: "",
    Price: "",
    // interests: [""],
    availability: [
      {
        day: "", // Day of the week, e.g., "Monday"
        date: "", // Day of the week, e.g., "Monday"
        slots: [
          {
            time: "", // Time slot, e.g., "9:00 AM - 11:00 AM"
          },
        ],
      },
    ],
  });

  const handleMenteeChange = (e, index) => {
    const { name, value, type, checked } = e.target;

    if (name === "interest") {
      const updatedInterests = [...user.interests];
      updatedInterests[index] = value;
      setUser({ ...user, interests: updatedInterests });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleMentorChange = (e, index) => {
    const { name, value } = e.target;
    setMentor({ ...mentor, [name]: value });
    console.log(mentor);
  };

  const handleAvailabilityChange = (
    
    dayIndex,
   
    slotIndex,
   
    value1,
   
    value2,
   
    value3
  
  ) => {
    const updatedMentor = { ...mentor };
    updatedMentor.availability[dayIndex].day = value1;
    updatedMentor.availability[dayIndex].date = value2;
    updatedMentor.availability[dayIndex].slots[slotIndex].time = value3;
    setMentor(updatedMentor);
  };

  const handleAddInterest = () => {
    setUser({ ...user, interests: [...user.interests, ""] });
  };

  const handleMenteeSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem("email", props.user.emailAddresses[0].emailAddress);

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/menteeRegister",
        user
      );

      // Handle success, you can log the response or redirect the user
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      // Handle error, you can log the error or display an error message to the user
      console.error("Registration failed:", error.message);
    }
  };

  const handleMentorSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("email", props.user.emailAddresses[0].emailAddress);

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/mentorRegister",
        mentor
      );

      // Handle success, you can log the response or redirect the user
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      // Handle error, you can log the error or display an error message to the user
      console.error("Registration failed:", error.message);
    }
  };

  const handleMentorMentee = () => {
    setIsMentor(!isMentor);
  };

  return (
    <div className="register-page-container">
      <div className="arementorDiv">
        <label>
          <input
            type="checkbox"
            name="mentor"
            // checked={user.subscribeNewsletter}
            onChange={handleMentorMentee}
          />
         <span>Are you a Mentor?</span> 
        </label>
      </div>

      {!isMentor && (
        <form className="form" onSubmit={handleMenteeSubmit}>
          {/* ... Other form elements ... */}
          <p className="title">
            &nbsp;&nbsp;Register yourself to match your fundamentals!{" "}
          </p>
          <p className="message">Signup now and get full access to our app. </p>

          <label>
            <input
              name="email"
              required
              contentEditable={false}
              placeholder=""
              type="email"
              className="input"
              value={props.user.emailAddresses[0].emailAddress}
              onChange={handleMenteeChange}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              name="name"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMenteeChange}
            />
            <span>Name</span>
          </label>
          <label>
            <input
              name="username"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMenteeChange}
            />
            <span>UserName</span>
          </label>
          <label>
            <input
              name="phone"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMenteeChange}
            />
            <span>Phone Number</span>
          </label>
          <div className="flex">
            <label>
              <input
                name="country"
                required
                placeholder=""
                type="text"
                className="input"
                onChange={handleMenteeChange}
              />
              <span>Country</span>
            </label>
            <label>
              <input
                name="city"
                required
                placeholder=""
                type="text"
                className="input"
                onChange={handleMenteeChange}
              />
              <span>City</span>
            </label>
          </div>
          {/* <label>
            I am a Mentee
            <input
              type="checkbox"
              name="mentor"
              checked={true}
              contentEditable={false}
              // onChange={handleMentorChange}
            />
          </label> */}

          <label>
            <input
              name="Profession"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMenteeChange}
              />
              <span>Profession</span>
          </label>

          <label>
            <input
              name="language"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMenteeChange}
            />
            <span>Most Preferred Language</span>
          </label>
          <div className="flexInterest">
            <div className="InterestDivs">
              <label>
                <input
                  name="interest"
                  required
                  placeholder=""
                  type="text"
                  className="input"
                  value={user.interests[0]}
                  onChange={(e) => handleMenteeChange(e, 0)}
                />
                <span>Interest</span>
              </label>
              {user.interests.slice(1).map((interest, index) => (
                <div key={index} className="interestDiv">
                  <label>
                    <input
                      name="interest"
                      required
                      placeholder=""
                      type="text"
                      className="input"
                      value={interest}
                      onChange={(e) => handleMenteeChange(e, index + 1)}
                    />
                    <span>Interest</span>
                  </label>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleAddInterest}
              className="AddIntbutton"
            >
              + Add Interest
            </button>
          </div>

          <div className="InterestDivs"></div>

          <button className="submit" type="submit">
            <span>Submit</span>
          </button>
          <p className="signin">
            This form is mandatory to recommend certain actions
          </p>
        </form>
      )}
      {isMentor && (
        <form className="form" onSubmit={handleMentorSubmit}>
          {/* ... Other form elements ... */}
          <p className="title">
          &nbsp;&nbsp;Register yourself to match your fundamentals!{" "}
          </p>
          <p className="message">Signup now and get full access to our app. </p>

          <label>
            <input
              name="email"
              required
              contentEditable={false}
              placeholder=""
              type="email"
              className="input"
              value={props.user.emailAddresses[0].emailAddress}
              onChange={handleMentorChange}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              name="name"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMentorChange}
            />
            <span>Name</span>
          </label>
          <label>
            <input
              name="username"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMentorChange}
            />
            <span>UserName</span>
          </label>
          <label>
            <input
              name="phone"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMentorChange}
            />
            <span>Phone Number</span>
          </label>
          <div className="flex">
            <label>
              <input
                name="country"
                required
                placeholder=""
                type="text"
                className="input"
                onChange={handleMentorChange}
              />
              <span>Country</span>
            </label>
            <label>
              <input
                name="city"
                required
                placeholder=""
                type="text"
                className="input"
                onChange={handleMentorChange}
              />
              <span>City</span>
            </label>
          </div>
          {/* <label>
            I am a Mentee
            <input
              type="checkbox"
              name="mentor"
              checked={false}
              contentEditable={false}
              // onChange={handleMentorChange}
            />
          </label> */}

          <label>
            <input
              name="ProfessionTitle"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMentorChange}
            />
            <span>Profession</span>
          </label>
          <label>
            <input
              name="bio"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMentorChange}
            />
            <span>Bio</span>
          </label>
          <label>
            <input
              name="Price"
              required
              placeholder=""
              type="number"
              className="input"
              onChange={handleMentorChange}
            />
            <span>Price</span>
          </label>

          <label>
            <input
              name="language"
              required
              placeholder=""
              type="text"
              className="input"
              onChange={handleMentorChange}
            />
            <span>Most Preferred Language</span>
          </label>
          <div className="flex">
          <label>
            Day:
            <input
            className="input"
              type="text"
              name="availabilityDay"
              value={mentor.availability[0].day}
              onChange={(e) =>
                handleAvailabilityChange(0, 0, e.target.value, "", "")
              }
            />
          </label>
          <label>
            Date:
            <input
                  className="input"
              type="text"
              name="availabilityDate"
              value={mentor.availability[0].date}
              onChange={(e) =>
                handleAvailabilityChange(
                  0,
                  0,
                  mentor.availability[0].day,
                  e.target.value,
                  ""
                )
              }
            />
          </label>
          <label>
            <span>Time Slot:</span>
            <input
              type="text"
              className="input"
              name="availabilityTime"
              value={mentor.availability[0].slots[0].time}
              onChange={(e) =>
                handleAvailabilityChange(
                  0,
                  0,
                  mentor.availability[0].day,
                  mentor.availability[0].date,
                  e.target.value
                )
              }
            />
          </label>
          </div>
          

          <div className="InterestDivs"></div>

          <button className="submit" type="submit">
            <span>Submit</span>
          </button>
          <p className="signin">
            This form is mandatory to recommend certain actions
          </p>
        </form>
      )}
    </div>
  );
};

export default RegisterPage;