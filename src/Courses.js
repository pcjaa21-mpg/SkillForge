import React from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const courses = [
    "C",
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C#",
    "Go",
    "Rust",
    "SQL"
];

function Courses() {
    const navigate = useNavigate();

    return (
        <div className="courses-page">

            {/* 🔹 Top Header Section */}
            <div className="courses-header">
                <h2>All Programming Courses</h2>

                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    ⬅ Back to Dashboard
                </button>
            </div>

            <div className="courses-table">
                {courses.map((course, index) => (
                    <div className="course-row" key={index}>

                        <div className="course-info">
                            <span className="course-number">{index + 1}.</span>
                            <span className="course-name">{course}</span>
                        </div>

                        <div className="view-button">
                            <button
                                onClick={() =>
                                    navigate(`/courses/${course.toLowerCase()}`)
                                }
                            >
                                View Details
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;