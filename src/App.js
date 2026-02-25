import React from "react";
import CourseDetails from "./CourseDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import Progress from "./Progress";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Signup from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Exam from "./Exam"; // ✅ Add this

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:language" element={<CourseDetails />} />
                <Route path="/exam" element={<Exam />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/progress" element={<Progress />} />{/* ✅ New Route */}
            </Routes>
        </Router>
    );
}

export default App;