import React from 'react'
import SessionCard from "../../Components/SessionCard/SessionCard"
import "./PastSessions.css"

const PastSessions = () => {
  return (
    <div className="wrapper">
      <div className="heading">
        <h2>Past Sessions</h2>
      </div>

      <div className="session-card-container">
        <SessionCard eventName={"Event Name"} from={"12/01/2024"} to={"20/01/2024"} time={"7:00 PM"} isCompleted={true}  />
      </div>
    </div>
  )
}

export default PastSessions
