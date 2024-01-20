import React from "react";
import "./TranscriptPage.css";
import NavBar from "../../Components/NavBar/NavBar";

const TranscriptPage = () => {
  return (
    <div>
      <NavBar />

      <div className="transcript-wrapper">
        <div className="transcript-container">
          <div className="transcript-card-container">
            <div className="transcript-card">
              <div className="transcript-card-header">
                <h5>Name of Mentor</h5>
                <p>John Doe</p>
              </div>
            </div>
            <div className="transcript-card">
              <div className="transcript-card-header">
                <h5>Date of Session</h5>
                <p>12/01/2024</p>
              </div>
            </div>
            <div className="transcript-card">
              <div className="transcript-card-header">
                <h5>Time of Session</h5>
                <p>3:00 PM - 6:00 PM</p>
              </div>
            </div>
            <div className="transcript-card">
              <div className="transcript-card-header">
                <h5>Expertise of Mentor</h5>
                <p>Web Development</p>
              </div>
            </div>
          </div>

          <div className="transcript">
            <h3>Transcript of Session</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat maiores in deserunt libero architecto aliquam iusto provident reprehenderit ullam ea dolorum debitis, iure dicta quibusdam labore vitae amet exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat maiores in deserunt libero architecto aliquam iusto provident reprehenderit ullam ea dolorum debitis, iure dicta quibusdam labore vitae amet exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat maiores in deserunt libero architecto aliquam iusto provident reprehenderit ullam ea dolorum debitis, iure dicta quibusdam labore vitae amet exercitationem.Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
          </div>
          <div className="transcript">
            <h3>Summary of Session</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat maiores in deserunt libero architecto aliquam iusto provident reprehenderit ullam ea dolorum debitis, iure dicta quibusdam labore vitae amet exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat maiores in deserunt libero architecto aliquam iusto provident reprehenderit ullam ea dolorum debitis, iure dicta quibusdam labore vitae amet exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat maiores in deserunt libero architecto aliquam iusto provident reprehenderit ullam ea dolorum debitis, iure dicta quibusdam labore vitae amet exercitationem.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptPage;
