import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import resumeData from "../../data/resume_data.json";
import "./Resume.css";
import { IoIosDocument } from "react-icons/io";

function Resume() {
  const recommended_courses = resumeData.recommended_courses;
  const recommended_skills = resumeData.recommended_skills;
  const resume_data = resumeData.resume_data;
  const skills = resumeData.resume_data.skills;
  console.log(skills);
  return (
    <div>
      <NavBar />
      <div className="resume-wrapper">
        <div className="resume-container">
          <h1 className="resume-heading">
            <IoIosDocument
              color="rgba(1, 160, 251, 1)"
              size={"2.5rem"}
              className="resume-icon"
            />
            <span>Your Resume is your foundation to grow</span>
          </h1>
          <div className="recommended-courses-section">
            <div className="recommended-heading">
              <h2>Recommended Courses</h2>
              <p>
                We provide personalized course recommendations for mentors and
                mentees, covering diverse topics to enhance their journey.
                Elevate your mentoring experience with our curated courses,
                fostering continuous growth and success.
              </p>
            </div>
            <ul>
              {recommended_courses?.map((course) => (
                <a href={course.link}>
                  <div className="layer">
                    <span>
                      {course.name.split(" ")[0].includes(":")
                        ? course.name.split(" ")[0].replace(":", "")
                        : course.name.split(" ")[0]}{" "}
                      Course
                    </span>
                  </div>
                  <li>{course.name}</li>
                </a>
              ))}
            </ul>
          </div>

          <div className="recommended-skills-section">
            <div className="recommended-heading">
              <h2>Recommended Skills</h2>
              <p>
                Experience personalized growth on our mentor-mentee platform! In
                addition to tailored course recommendations, we offer suggested
                skills to empower mentors and mentees. Expand your expertise and
                excel together with our curated resources, designed to enhance
                your mentoring journey and foster success.
              </p>
            </div>
            <ul>
              {recommended_skills?.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="known-skills-section">
            <div className="recommended-heading">
              <h2>Known Skills</h2>
              <p>
                We've analyzed your profile and pinpointed your strengths,
                whether in leadership, technical proficiency, or creativity.
                Connect with mentors and mentees who appreciate your unique
                skill set, fostering meaningful collaborations and professional
                growth.
              </p>
            </div>
            <ul>
              {skills?.map((data) => (
                <li>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
