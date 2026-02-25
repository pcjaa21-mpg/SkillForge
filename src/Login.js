import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [error,setError] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {

            const response = await fetch("http://localhost:5000/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })

            });

            const data = await response.json();

            if(data.message === "Login Successful"){

                navigate("/dashboard");

            }else{

                setError("Invalid Email or Password");

            }

        } catch (error) {

            setError("Server not running");

        }

    };


    return (

        <div className="login-container">

            <div className="login-card">

                <h2>Welcome Back</h2>

                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder="Email" required />

                    <input type="password" placeholder="Password" required />

                    <p className="forgot-link">
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </p>

                    <button type="submit">
                        Login
                    </button>

                </form>

                {error && (
                    <p style={{color:"red"}}>
                        {error}
                    </p>
                )}

                <p className="signup-link">

                    Don’t have an account?

                    <Link to="/signup">
                        Sign Up
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Login;