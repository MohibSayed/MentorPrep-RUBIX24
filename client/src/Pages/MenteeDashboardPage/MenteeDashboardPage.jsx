import React, { useState } from "react";
import "./MenteeDashboardPage.css";
import UserProfile from "../UserProfile/UserProfile";

const MenteeDashboardPage = () => {
  return (
    <div className="mentee-profile-page">
      <UserProfile />
    </div>
  );
};

export default MenteeDashboardPage;
