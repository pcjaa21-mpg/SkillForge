import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const courses = [
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
];

function Dashboard() {

    const navigate = useNavigate();

    const [profilePic] = useState(
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    );

    // Logged-in user state
    const [user, setUser] = useState(null);


    // Fetch logged-in user
    useEffect(() => {

        fetch("http://localhost:5000/current-user")

            .then(res => res.json())

            .then(data => {

                setUser(data.user);

            });

    }, []);
    const handleLogout = () => {

        fetch("http://localhost:5000/logout")

            .then(() => {

                navigate("/login");

            });

    };



    return (

        <div className="dashboard-layout">

            {/* Sidebar */}
            <div className="sidebar">

                <h2 className="logo">SkillForge AI</h2>

                <ul>

                    <li className="active">
                        🏠 Dashboard
                    </li>

                    <li onClick={() => navigate("/courses")}>
                        📚 Courses
                    </li>

                    <li onClick={() => navigate("/exam")}>
                        📝 Exams
                    </li>

                    <li onClick={() => navigate("/progress")}>
                        📊 Progress
                    </li>

                    <li>
                        ⚙ Settings
                    </li>

                    <li onClick={handleLogout}>
                        🚪 Logout
                    </li>

                </ul>

            </div>


            {/* Main Content */}
            <div className="main-content">


                {/* Top Section */}
                <div className="top-bar">

                    <h1 className="welcome-text">

                        👋 Welcome {user ? user.name : "User"}!

                    </h1>


                    {/* Profile Picture */}
                    <div
                        className="profile-section"
                        onClick={() => navigate("/edit-profile")}
                    >

                        <img
                            src={profilePic}
                            alt="Profile"
                            className="profile-pic"
                        />

                    </div>

                </div>


                {/* Badges Section */}
                <h2>🏅 Badges Received</h2>

                <div className="badges-grid">

                    <div className="badge-card">
                        🥉 C Beginner
                    </div>

                    <div className="badge-card">
                        🥈 Python Intermediate
                    </div>

                    <div className="badge-card">
                        🥇 Java Advanced
                    </div>

                    <div className="badge-card">
                        🏆 Top Performer
                    </div>

                </div>


                {/* Programming Courses */}
                <h2 style={{ marginTop: "40px" }}>
                    Programming Courses
                </h2>


                <div className="courses-grid">

                    {courses.map((course, index) => (

                        <div className="course-card" key={index}>

                            <img
                                src={course.logo}
                                alt={course.name}
                                className="course-logo"
                            />

                            <h3>
                                {course.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}

export default Dashboard;