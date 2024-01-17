import React from "react";
import SessionCard from "../../Components/SessionCard/SessionCard";
import "./RequestedSession.css";

const RequestedSession = () => {
  return (
    <div className="wrapper">
      <div className="heading">
        <h2>Requested Sessions</h2>
      </div>

      <div className="session-card-container">
        <SessionCard
          eventName={"Event Name"}
          isApproved={false}
          isRequested={true}
        />
      </div>
    </div>
  );
};

export default RequestedSession;
