import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import "../styles/profile.css"
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      
      const token = localStorage.getItem('token');
      console.log(token)
      try {
        const response = await axios.get('http://localhost:9001/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response)
        if (response.status === 200) {
          console.log(response.data)
          setUser(response.data);
        } else {
          console.error('Failed to fetch user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h2>User Profile</h2>
        {user ? (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
