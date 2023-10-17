import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import Navbar from './Navbar';
import '../styles/home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        // Set the authorization header with the token
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get("http://localhost:9001/post/getAllPosts", { headers });
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const likePost = async (postId) => {
    try {
      const token = localStorage.getItem('token');

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.patch(`http://localhost:9001/post/${postId}/like`, null, { headers });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? { ...post, likes: post.likes + 1 }
            : post
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
      <Link to="/createPost" className="create-post-button">
            <button className="plus-button">+</button>
      </Link>
        <h2>Posts</h2>
        <div className="posts-container">
          
          {posts.map((post) => (
            <div key={post._id} className="post">
              <p className="post-content">{post.content}</p>
              <p className="post-likes">Likes: {post.likes.number}</p>
              <button onClick={() => likePost(post._id)} className="like-button">
                Like
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
