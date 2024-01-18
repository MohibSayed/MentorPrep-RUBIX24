import React from 'react'
const meetingsData = [
    { meetingLink: 'https://example.com/meeting1', menteeName: 'John Doe', date: '2024-01-20', time: '14:00', daysLeft: 2 },
    { meetingLink: 'https://example.com/meeting2', menteeName: 'Jane Doe', date: '2024-01-22', time: '16:30', daysLeft: 4 },
    // Add more meeting data as needed
  ];
const MentorProfile = () => {
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Meeting Link</th>
            <th>Mentee Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Days Left</th>
            <th>Go</th>
          </tr>
        </thead>
        <tbody>
          {meetingsData.map((meeting, index) => (
            <tr key={index}>
              <td>{meeting.meetingLink}</td>
              <td>{meeting.menteeName}</td>
              <td>{meeting.date}</td>
              <td>{meeting.time}</td>
              <td>{meeting.daysLeft}</td>
              <td>
                <button >
                  Go
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MentorProfile
