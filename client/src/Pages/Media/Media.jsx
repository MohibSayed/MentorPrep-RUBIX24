import React, { useEffect, useState } from 'react'
import './Media.css'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import MediaCard from "../../Components/MediaCard"

export default function Media() {
    const [bookings,setBookings] = useState([])
    const { email } = useParams();
    async function fetchBookings(){
        const resp = await fetch(`http://localhost:8800/api/mentee/bookingsmade/${email}`);
        const data = await resp.json();
        console.log(data);
        setBookings(data)
    }
    useEffect(()=>{
        fetchBookings();
    },[])
  return (
    <div>
    <div className="booked">
    {bookings.map((booking)=>
    <Link to="/MeetingAnalysis/m0hibsayed@gmail.com/meeranwebarchitects@gmail.com" ><MediaCard mentorEmail={booking.reqFor} plan={booking.plan} recording={booking.recording} date={booking.date}/></Link>)}
    {/* <MediaCard  />
    <MediaCard />
    <MediaCard />
    <MediaCard /> */}
    </div>
    </div>
  )
}
