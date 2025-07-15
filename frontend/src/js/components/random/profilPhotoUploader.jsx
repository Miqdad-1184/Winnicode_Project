import React, { useState } from 'react';
import '../../../css/random.css';
import DefaultImage from '../../../assets/profile.jpg';
import { FaCamera } from 'react-icons/fa';

export default function ProfilePhotoUploader() {
  const [profileImage, setProfileImage] = useState(DefaultImage);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="profile-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <label className="camera-button">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="file-input"
        />
        <FaCamera/>
      </label>
    </div>
  );
}
