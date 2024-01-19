import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import resumeData from "../../data/resume_data.json";

function Resume() {
    const recommended_courses = resumeData.recommended_courses
    const recommended_skills = resumeData.recommended_skills
    const resume_data = resumeData.resume_data
    const skills = resumeData.resume_data.skills
    console.log(skills)
    return (
        <div>
            <NavBar />
            <h1>Resume</h1>
            <h2>Recommended Courses</h2>
            <ul>
                {recommended_courses?.map((course) => (
                    <li><a href={course.link}>{course.name}</a></li>
                ))}
            </ul>
            <h2>Recommended Skills</h2>
            <ul>
                {recommended_skills?.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
            <h2>Known Skills</h2>
            <ul>
                {skills?.map((data) => (
                    <li>{data}</li>
                ))}
            </ul>
        </div>
    )
}

export default Resume