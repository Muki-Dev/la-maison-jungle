import React from "react";
import "../styles/userProfile.css";

const UserProfile = () => {
  // Données utilisateur (on remplacera plus tard avec des données dynamiques)
  const user = {
    name: "Bams Muki",
    email: "bamsmuki@example.com",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>

      {/* User Details Section */}
      <div className="user-details">
        <h2>Personal Information</h2>
        <div className="info">
          <span>Name:</span>
          <span>{user.name}</span>
        </div>
        <div className="info">
          <span>Email:</span>
          <span>{user.email}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="edit">Edit Profile</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
