import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
    const navigate = useNavigate();

    const [profilePic, setProfilePic] = useState(
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    );

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        department: "",
        year: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfilePic(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile Updated Successfully!");
        navigate("/dashboard");
    };

    return (
        <div className="edit-profile-container">
            <div className="edit-profile-card">
                <h2>Edit Your Profile</h2>

                {/* Profile Picture Section */}
                <div className="profile-upload-section">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="edit-profile-pic"
                    />

                    <label className="upload-btn">
                        Choose Profile Picture
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            hidden
                        />
                    </label>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="college"
                        placeholder="College Name"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="year"
                        placeholder="Year of Study"
                        onChange={handleChange}
                    />

                    <div className="button-group">
                        <button type="submit">Save Changes</button>
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/dashboard")}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;