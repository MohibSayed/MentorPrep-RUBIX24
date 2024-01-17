import React, { useState } from "react";
import "./EditProfilePage.css";

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    interestedIn: "",
    domain: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    // Implement your logic to update the profile using formData
    console.log("Profile updated:", formData);
  };

  return (
    <div className="profile-update-container">
      <h2 className="profile-update-heading">Update Profile</h2>
      <div className="input-container">
        <div className="">
          <label htmlFor="fullName" className="label">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="mobile" className="label">
          Mobile:
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <label htmlFor="interestedIn" className="label">
          Interested In:
        </label>
        <select
          id="interestedIn"
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleInputChange}
          className="input-field"
        >
          <option value="">Select</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="domain" className="label">
          Domain:
        </label>
        <input
          type="text"
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>
      <button onClick={handleUpdateProfile} className="button">
        Update Profile
      </button>
    </div>
  );
};

export default EditProfilePage;
