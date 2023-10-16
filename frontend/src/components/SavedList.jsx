import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const SavedList = () => {
  const [savedItems, setSavedItems] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
     
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.get('http://localhost:9001/savedList', config)
        .then((response) => {
          setSavedItems(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching saved items:', error);
        });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Saved List</h2>
      {/* Render the saved items in the component */}
      <ul>
        {savedItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedList;
