import React from "react";
import { useParams } from "react-router-dom";

const courseTopics = {
    c: [
        "Structure of C Program",
        "Variables & Data Types",
        "Operators",
        "Control Statements",
        "Functions",
        "Arrays",
        "Strings",
        "Pointers",
        "Structures & Unions",
        "File Handling"
    ],
    "c++": [
        "C++ Syntax",
        "Variables & Data Types",
        "Control Statements",
        "Functions",
        "Classes & Objects",
        "Constructors & Destructors",
        "Inheritance",
        "Polymorphism",
        "Templates",
        "STL"
    ],
    java: [
        "JVM, JDK, JRE",
        "Data Types & Operators",
        "Control Statements",
        "Classes & Objects",
        "Inheritance",
        "Interfaces",
        "Exception Handling",
        "Collections Framework",
        "Multithreading",
        "File Handling"
    ],
    python: [
        "Variables & Data Types",
        "Operators",
        "Control Statements",
        "Functions",
        "Lists & Tuples",
        "Dictionaries",
        "OOP Concepts",
        "File Handling",
        "Modules & Packages",
        "Exception Handling"
    ],
    javascript: [
        "Variables (let, const)",
        "Data Types",
        "Operators",
        "Functions",
        "DOM Manipulation",
        "Events",
        "ES6 Features",
        "Promises",
        "Async/Await",
        "Fetch API"
    ],
    typescript: [
        "Type Annotations",
        "Interfaces",
        "Classes",
        "Functions with Types",
        "Generics",
        "Enums",
        "Union Types",
        "Type Inference",
        "Modules",
        "Type Guards"
    ],
    "c#": [
        ".NET Framework Basics",
        "Variables & Data Types",
        "Control Statements",
        "Classes & Objects",
        "Inheritance",
        "Interfaces",
        "Exception Handling",
        "LINQ",
        "File Handling",
        "ASP.NET Basics"
    ],
    go: [
        "Variables & Constants",
        "Data Types",
        "Functions",
        "Structs",
        "Interfaces",
        "Slices & Maps",
        "Pointers",
        "Goroutines",
        "Channels",
        "Error Handling"
    ],
    rust: [
        "Variables & Mutability",
        "Data Types",
        "Functions",
        "Ownership",
        "Borrowing",
        "Lifetimes",
        "Structs",
        "Enums & Pattern Matching",
        "Error Handling",
        "Traits"
    ],
    sql: [
        "Database Basics",
        "SELECT Statement",
        "WHERE Clause",
        "GROUP BY",
        "HAVING",
        "ORDER BY",
        "JOIN",
        "Subqueries",
        "Indexes",
        "Normalization"
    ]
};

function CourseDetails() {
    const { language } = useParams();
    const topics = courseTopics[language];

    const handleStart = (topic) => {
        alert(`Starting lesson: ${topic}`);
    };

    const handleAssessment = (topic) => {
        alert(`Starting Practice Assessment for: ${topic}`);
    };

    const handleExam = (topic) => {
        alert(`Starting Final Exam for: ${topic}`);
    };

    return (
        <div style={{ padding: "30px" }}>
            <h2 style={{ textTransform: "uppercase" }}>
                {language} Course Topics
            </h2>

            {topics ? (
                topics.map((topic, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "14px",
                            margin: "14px 0",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            background: "#f9f9f9",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
                        }}
                    >
                        {/* Topic Name */}
                        <span style={{ fontWeight: "500" }}>
              {index + 1}. {topic}
            </span>

                        {/* Buttons Section */}
                        <div
                            style={{
                                display: "flex",
                                gap: "20px",   // Proper spacing between tiles
                                alignItems: "center",
                                marginLeft: "20px"
                            }}
                        >
                            {/* Start Learning */}
                            <button
                                onClick={() => handleStart(topic)}
                                style={{
                                    padding: "8px 16px",
                                    background: "#e53935",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    minWidth: "140px"
                                }}
                            >
                                Start Learning
                            </button>

                            {/* Practice Assessment */}
                            <button
                                onClick={() => handleAssessment(topic)}
                                style={{
                                    padding: "8px 16px",
                                    background: "#FFD54F",
                                    color: "black",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    minWidth: "160px"
                                }}
                            >
                                Practice Assessment
                            </button>

                            {/* Take Exam */}
                            <button
                                onClick={() => handleExam(topic)}
                                style={{
                                    padding: "8px 16px",
                                    background: "#4CAF50",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    minWidth: "120px"
                                }}
                            >
                                Take Exam
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No topics found.</p>
            )}
        </div>
    );
}

export default CourseDetails;