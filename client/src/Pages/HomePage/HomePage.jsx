import React from 'react'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [roomId, setRoomId] = React.useState('')
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/room/${roomId}`)
  }
  return (
    <div>
      <h1>Hi, I am React!</h1>
      <label>Enter Room Id:</label>
      <input type="text" onChange={(e) => setRoomId(e.target.value)} />
      <button onClick={handleClick}>Join Room</button>
    </div>
  )
}

export default HomePage

