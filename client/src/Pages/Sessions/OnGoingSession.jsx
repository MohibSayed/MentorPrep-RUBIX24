import React from "react";
import "./OnGoingSession.css";
import SessionCard from "../../Components/SessionCard/SessionCard"

const OnGoingSession = () => {
  return (
    <div className="wrapper">
      <div className="heading">
        <h2>Ongoing Sessions</h2>
      </div>

      <div className="session-card-container">
        <SessionCard eventName={"Event Name"} from={"12/01/2024"} to={"20/01/2024"} time={"7:00 PM"} link={true} isApproved={true} />
      </div>
    </div>
  );
};

export default OnGoingSession;
