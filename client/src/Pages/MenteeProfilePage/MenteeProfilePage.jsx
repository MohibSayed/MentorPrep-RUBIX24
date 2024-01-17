import React, { useState } from "react";
import "../MenteeProfilePage/MenteeProfilePage.css";
import UserProfile from "../../Pages/UserProfile/UserProfile";

const MenteeProfilePage = () => {

  return (
    <div className="mentee-profile-page">
      <UserProfile />
    </div>
  );
};

export default MenteeProfilePage;
