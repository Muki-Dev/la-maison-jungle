import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfile, logout } from "../features/UserSlice";
import "../styles/userProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  // Gérer la modification
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editProfile(formData));
    setIsEditing(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("You have been logged out!");
    window.location.href = "/login";
  };

  return (
    <div className="container">
      <div className="profile-header">
        <img
          src={user.profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-picture"
        />
        <h1>{user.name || "Guest"}</h1>
        <p>{user.email || "No Email"}</p>
      </div>

      <div className="user-details">
        <h2>Personal Information</h2>
        {!isEditing ? (
          <>
            <div className="info">
              <span>Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="info">
              <span>Email:</span>
              <span>{user.email}</span>
            </div>
          </>
        ) : (
          <div className="edit-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <button onClick={handleSave} className="save-button">
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="actions">
        {!isEditing && (
          <button className="edit" onClick={handleEdit}>
            Edit Profile
          </button>
        )}
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
