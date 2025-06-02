import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const user = {
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address}</p>
        <p>{user.phone}</p>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
