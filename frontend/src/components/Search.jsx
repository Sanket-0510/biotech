import React, { useState } from 'react';
import axios from 'axios';
import "../styles/search.css"
import Navbar from './Navbar.jsx';
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post("http://localhost:9001/articles", {data:{
        q:searchQuery
      }}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setSearchResults(response.data.articles);
    } catch (error) {
      console.error("Error fetching search results:", error);
      if (error.response) {
        console.error("Full error response:", error.response);
      }
    }
  };
  
  

  return (
    <>
     <Navbar></Navbar>
    <div className="search-container">
       
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for articles"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
         <button onClick={handleSearch} className="search-button">
          Search
        </button>
     
      </div>
      <h2>Search Results</h2>
      <div className="search-results-container">
        {searchResults.map((result) => (
          <div key={result.id} className="search-result">
            <p className="result-title">{result.title}</p>
            <p className="result-author">Author: {result.author}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Search;
