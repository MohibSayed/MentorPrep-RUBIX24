import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './SideBar.css';
import { useParams } from "react-router-dom";
const mentorEmail = localStorage.getItem("email");
const routes = [
  {
    path: `/`,
    name: "Return to Home",
    icon: <FaHome />,
  },
  {
    path: `/mentorProfile/${mentorEmail}`,
    name: "Meetings",
    icon: <FaUser />,
  },
  {
    path: `/media/${mentorEmail}`,
    name: "Media",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: `/mentorProfile/edit/${mentorEmail}`,
    name: "Edit Profile",
    icon: <AiTwotoneFileExclamation />,
    
  },
 
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    
  },
 
];

const SideBar = ({ children }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            {/* <AnimatePresence> */}
              {isOpen && (
                <h1
                  // variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  MentorPrep
                </h1>
              )}
            {/* </AnimatePresence> */}

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search"> */}
            {/* <div className="search_icon">
              <BiSearch />
            </div> */}
            {/* <AnimatePresence> */}
              {/* {isOpen && (
                <input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  // variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )} */}
            {/* </AnimatePresence> */}
          {/* </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  {/* <AnimatePresence> */}
                    {isOpen && (
                      <div
                        // variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </div>
                    )}
                  {/* </AnimatePresence> */}
                </NavLink>
              );
            })}
          </section>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
