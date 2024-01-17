import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";

const RegisterPage = (props) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    Profession: "",
    language: "",
    interests: [""],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "interest") {
      const updatedInterests = [...user.interests];
      updatedInterests[index] = value;
      setUser({ ...user, interests: updatedInterests });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleAddInterest = () => {
    setUser({ ...user, interests: [...user.interests, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      // Assuming your server endpoint for mentee registration is "/api/mentee/register"
      const response = await axios.post("https://localhost:8800/api/mentee/register", user);

      // Handle success, you can log the response or redirect the user
      console.log(response.data);
    } catch (error) {
      // Handle error, you can log the error or display an error message to the user
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {/* ... Other form elements ... */}
        <p className="title">Register yourself to match your fundamentals! </p>
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
            onChange={handleInputChange}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            name="username"
            required
            placeholder=""
            type="text"
            className="input"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <span>City</span>
          </label>
        </div>

        
        <label>
          <input
            name="Profession"
            required
            placeholder=""
            type="text"
            className="input"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
                onChange={(e) => handleInputChange(e, 0)}
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
                    onChange={(e) => handleInputChange(e, index + 1)}
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
          Submit
        </button>
        <p className="signin">
          This form is mandatory to recommend certain actions
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
