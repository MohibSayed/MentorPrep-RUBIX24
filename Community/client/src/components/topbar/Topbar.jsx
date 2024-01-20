import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Mentor Prep</span>
        </Link>
      </div>
      <div className="welcome">
        <span>Welcome to Our Community</span>
      </div>
      <div className="welcome">
      <a href="http://localhost:3000" style={{ textDecoration: "none" }}>
        <span className="bluebtn">Back to Home</span>
        </a>
      </div>

      <div className="topbarRight">
        <div className="topbarIconItem">
          <a href="http://localhost:3000/" style={{ textDecoration: "none" }}>
            <Search />
          </a>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <Link to={`/profile/${user.username}`}>
        <img
          src={
            user.profilePicture
          }
          alt=""
          className="topbarImg"
        />
      </Link>
    </div>
  );
}
