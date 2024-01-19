import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa";

export default function Card(props) {
  const {name,ProfessionTitle,Bio,city,country,number} = props
  return (
    <div className="comp_mentorCard">
      <div className="comp_mentorInnerCard">
        <div className="comp_profileContainer">
          <div className="comp_profileImage">
          {number<1 && <div className="topratecard">
    <h2>Top Rated</h2>
</div>}
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="comp_mentorDetails">
            <h3>{name}</h3>
            <p>{ProfessionTitle}</p>
            <h6>Walmart Global Team India</h6>
          </div>
        </div>

        <div className="comp_MoreDetails">
          <span>
            {Bio}{" "}
          </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            animi inventore ab vel molestiae nostrum expedita dolor. Animi,
            adipisci odio.
          </p>
          <div className="comp_MentorSkills">
            <span>{ProfessionTitle}</span>
            <span>DSA</span>
          </div>
        </div>
      </div>

      <div className="comp_bookSection">
        <div className="comp_priceReview">
          <div className="comp_priceCont">
            <h4>Rs. 10,000/month</h4>
          </div>
          <div className="comp_reviewCont">
            <h4>
              4.9 <FaStar /> | 50+ mentees
            </h4>
          </div>
        </div>

        <div className="comp_BtnsDivs">
          <button className="comp_profileBtn">View Profile</button>
          <button className="comp_trialBtn">Book Free Trial</button>
        </div>

        <div className="comp_MoreExp">
          <p>
            For: <b>Experienced Profession</b>
          </p>
          <p>
            Targeting: <b>Engineering Manager</b>
          </p>
        </div>
      </div>
    </div>
  );
}