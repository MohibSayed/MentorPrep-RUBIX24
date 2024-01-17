import React, { useState } from "react";
import "./UpdateProfilePage.css";

const UpdateProfilePage = () => {
  const [userData, setUserData] = useState({
    email: "john.doe@example.com",
    mobile: "5689565645",
    name: "John Doe",
    status: "Fresher",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", userData);
  };

  return (
    <>
      <div className="edit-profile-container">
        <h1 className="edit-profile-header">Edit your profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label className="input-label">
              Email
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="input-field"
              />
            </label>
          </div>
          <label className="input-label">
            Mobile
            <input
              type="tel"
              name="mobile"
              value={userData.mobile}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <label className="input-label">
            Full Name
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <label className="input-label">
            I am currently a
            <select
              name="employmentStatus"
              value={userData.employmentStatus}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="fresher">Fresher</option>
              <option value="workingProfessional">Working Professional</option>
            </select>
          </label>

          {/* Add more input fields for additional profile information */}
          <button type="submit" className="submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfilePage;
