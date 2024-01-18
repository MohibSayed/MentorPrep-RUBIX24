import React from "react";
import "./Comment.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Comment() {
  return (
    <div className="comment">
      <div className="mentee-question-section">
        <div className="user-detail mentee-detail">
          <div className="avatar mentee-avatar">
            <img src="https://randomuser.me/api/portraits/men/86.jpg" />
            <span className="stat grey"></span>
          </div>
          <h5 className="userName mentee-username">
            <span>Floyd Miles</span> <span>Mentee</span>
          </h5>
        </div>
        <div className="content mentee-content">
          <p>
            Actually, now that I try out the links on my message, above, none of
            them take me to the secure site. Only my shortcut on my desktop,
            which I created years ago.
          </p>
        </div>
      </div>

      <div className="mentor-reply">
        <div className="user-banner">
          <div className="user">
            <div className="user-detail">
              <div className="avatar">
                <img src="https://randomuser.me/api/portraits/men/86.jpg" />
                <span className="stat grey"></span>
              </div>
              <h5 className="userName mentor-username">
                {" "}
                <span> Floyd Miles</span> <span>Mentor</span>
              </h5>
            </div>

            <div className="likes">
              <FavoriteBorderIcon style={{ fontSize: "1rem" }} />
              <span>23</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p>
            Actually, now that I try out the links on my message, above, none of
            them take me to the secure site. Only my shortcut on my desktop,
            which I created years ago.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="divider"></div>
        <a href="#">Reply</a>
        <div className="divider"></div>
        <span className="is-mute">6 hour</span>
      </div>
    </div>
  );
}
