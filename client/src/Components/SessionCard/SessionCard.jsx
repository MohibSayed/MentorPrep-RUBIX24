import React from "react";
import "./SessionCard.css";

const SessionCard = (props) => {
  const {
    eventName,
    date,
    time,
    link,
    from,
    to,
    isApproved,
    isCompleted,
    isRequested,
  } = props;
  return (
    <div className="card">
      {link ? (
        <div className="time-left" style={{ left: "18px" }}>
          5days remaining
        </div>
      ) : isCompleted ? (
        <div className="time-left">Completed</div>
      ) : isRequested ? (
        <div className="time-left">Requested</div>
      ) : null}
      <div className="top-section">
        <div className="border"></div>
      </div>
      <div className="bottom-section">
        <span className="title">{eventName}</span>
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
        </span>
        {(link || isCompleted) && (
          <>
            <span className="date ">
              <strong>
                {from} - {to}
              </strong>
            </span>
            <span className="time ">
              <strong>{time}</strong>
            </span>
          </>
        )}
        <div className="row row1">
          {isApproved ? (
            <>
              <div className="item">
                <span className="big-text event-link">Link</span>
              </div>
              <div className="item">
                <span className="big-text event-link chat">Chat</span>
              </div>
            </>
          ) : (
            <div className="item">
              <span
                className="big-text event-link"
                style={{
                  backgroundColor: `${isCompleted ? "green" : "red"}`,
                  cursor: "not-allowed",
                }}
              >
                {isCompleted ? "Completed" : "Not Approved"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
