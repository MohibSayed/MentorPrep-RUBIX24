import React, { useState, useEffect } from "react";
import "./MenteeProfile.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { SiGooglemeet } from "react-icons/si";

const meetingsData = [
  {
    meetingLink: "https://example.com/meeting1",
    menteeName: "John Doe",
    date: "2024-01-20",
    time: "14:00",
    daysLeft: 2,
  },
  {
    meetingLink: "https://example.com/meeting2",
    menteeName: "Jane Doe",
    date: "2024-01-22",
    time: "16:30",
    daysLeft: 4,
  },
  // Add more meeting data as needed
];

const CountdownTimer = ({ date }) => {
  const inputDate = date + "T00:00:00";
  const targetDate = new Date(inputDate);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // If the target date has passed, return zeros
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  return (
    <div>
      {/* <h1>Countdown Timer</h1> */}
      <div style={{ display: "flex", columnGap: "10px" }}>
        <p>D:{timeRemaining.days}</p>
        <p>H:{timeRemaining.hours}</p>
        <p>M:{timeRemaining.minutes}</p>
        <p>S:{timeRemaining.seconds}</p>
      </div>
    </div>
  );
};

const MentorProfile = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const { email } = useParams();
  const emailid = email;
  console.log(emailid);
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/bookings/bringMenteeBookings/${emailid}`
        );
        console.log(response);
        setBookingsData(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div >
      <div className="headerTableHeader">
        <h2>Your Upcoming Sessions</h2>
      </div>
      <table className="tableSessions" >
        <thead className="headerrow">
          <tr>
            <th>Meeting Code</th>
            <th>Mentor Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Days Left</th>
            <th>Go</th>
          </tr>
        </thead>
        <tbody>
          {bookingsData.map((meeting, index) => (
            <tr key={index}>
              <td>{meeting.meetingLink}</td>
              <td>{meeting.reqFor}</td>
              <td>{meeting.date}</td>
              <td>{meeting.time}</td>
              <td>
                <CountdownTimer date={meeting.date} />
              </td>
              <td className="goBtnDiv">
                <Link
                  to={`http://localhost:3000/room/${meeting.meetingLink}`}
                  target="_blank"
                >
                <button className="btn-17 join"  >
              
                  <span className="text flex">Join <SiGooglemeet color="white"/></span>
      
              </button>
                  {/* <button class="goLiveButton">
                    Join
                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                      <path
                        clip-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button> */}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MentorProfile;
