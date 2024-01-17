import React, { useState } from "react";
import "./EditProfilePage.css";
import InputTags from "../../Components/InputTags/InputTags";

const EditProfilePage = (props) => {
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="form">
          <div className="general-section">
            <h4>General Information</h4>
            <div className="row">
              <div className="input-group input-group-icon">
                <input className="input" type="text" placeholder="First Name" />
              </div>

              <div className="input-group input-group-icon">
                <input className="input" type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="row">
              <div className="input-group input-group-icon">
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="input-group input-group-icon">
                <input className="input" type="tel" placeholder="Mobile" />
              </div>
            </div>
          </div>

          <div className="Domain-section">
            <h4>Domain Information</h4>
            <div className="row">
              <div className="input-group input-group-icon">
                <label className="label" htmlFor="interest">
                  I'm interested in
                </label>
                <div className="input-tags-wrapper">
                  <InputTags
                    selectedTags={selectedTags}
                    tags={["Nodejs", "MongoDB"]}
                  />
                </div>
              </div>
              <div className="input-group input-group-icon">
                <label className="label" htmlFor="domain">
                  My domain is
                </label>
                <div className="input-tags-wrapper">
                  <InputTags
                    selectedTags={selectedTags}
                    tags={["Web Development", "Cloud Computing"]}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="update-btn">
            <button>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
