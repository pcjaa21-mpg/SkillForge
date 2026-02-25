import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exam.css";

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

function Exam() {
    const navigate = useNavigate();

    return (
        <div className="exam-page">

            <div className="exam-header">
                <h2>Select Course for Exam</h2>

                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    ⬅ Back to Dashboard
                </button>
            </div>

            <div className="exam-course-list">
                {courses.map((course, index) => (
                    <div className="exam-course-card" key={index}>
                        <h3>{course}</h3>

                        <button
                            onClick={() =>
                                navigate(`/courses/${course.toLowerCase()}`)
                            }
                        >
                            Start Exam
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Exam;