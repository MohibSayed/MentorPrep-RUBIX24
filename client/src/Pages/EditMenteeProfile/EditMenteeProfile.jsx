import React, { useState } from "react";
import "./EditMenteeProfile.css";
import { MdDelete } from "react-icons/md";
const EditMenteeProfile = () => {
  const [interests, setInterests] = useState([""]);

  const handleInterestChange = (index, value) => {
    const newInterests = [...interests];
    newInterests[index] = value;
    setInterests(newInterests);
  };

  const addInterest = () => {
    setInterests([...interests, ""]);
  };

  const deleteInterest = (index) => {
    const newInterests = [...interests];
    newInterests.splice(index, 1);
    setInterests(newInterests);
  };
  return (
    <div className="profileMenteeedit">
      <div class="container">
        <h1 class="title">Edit Mentee Details</h1>

        <div class="grid">
          <div class="form-group a">
            <label for="name">Name</label>
            <input id="name" type="text" />
          </div>

          <div class="form-group b">
            <label for="first-name">Country</label>
            <input id="first-name" type="text" />
          </div>

          <div class="form-group phone-group">
            <label for="phone">Phone</label>
            <input id="phone" type="text" />
          </div>
          <div class="form-group language-group">
            <label for="language">Language</label>
            <input id="language" type="text" />
          </div>
          <div class="form-group email-group">
            <label for="email">City</label>
            <input id="email" type="text" />
          </div>

          <div class="form-group">
            <label for="profession">Profession</label>
            <input id="profession" type="text" />
          </div>
          <div
            className="flexInterest gridthree"
            
          >
            <div className="InterestDivss">
              <h5>Domain of interest</h5>
              <div className="flexMe">
                {interests.map((interest, index) => (
                  <div key={index} className="interestDiv">
                    <label className="domainInterest">
                      <input
                        name="interest"
                        required
                        placeholder="Enter New Domain"
                        type="text"
                        className="input"
                        value={interest}
                        onChange={(e) =>
                          handleInterestChange(index, e.target.value)
                        }
                      />
                      <button
                        className="delBtn"
                        onClick={() => deleteInterest(index)}
                      >
                        <MdDelete size={20} color="#a10505" />
                      </button>
                    </label>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addInterest}
                  className="AddIntbutton"
                >
                  + Add Interest
                </button>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>

        

        <div class="button-container">
          <button class="editbutton">SAVE CHANGES</button>
        </div>
      </div>
    </div>
  );
};

export default EditMenteeProfile;
