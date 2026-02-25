import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Password reset link sent to " + email);
    };

    return (
        <div className="forgot-container">
            <div className="forgot-card">
                <h2>Reset Password</h2>
                <p className="brand-title">Enter your email to receive reset link</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit">Send Reset Link</button>
                </form>

                <p className="back-link">
                    <Link to="/">Back to Login</Link>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;