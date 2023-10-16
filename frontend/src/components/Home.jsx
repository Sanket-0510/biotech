import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

import '../styles/home.css'; // Import your CSS file

const Home = () => {
  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:9001/post/getAllPosts");
        console.log(response.data)
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const likePost = async (postId) => {
    try {
      await axios.patch(`http://localhost:9001/post/${postId}/like`);
     
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
    <div className="home-container"> {/* Apply a CSS class to the container */}
      

      <h2>Posts</h2>
      <div className="posts-container"> 
        {posts.map((post) => (
          <div key={post._id} className="post"> 
            <p className="post-content">{post.content}</p> 
            <p className="post-likes">Likes: {post.likes.number}</p> 
            <button onClick={() => likePost(post._id)} className="like-button">Like</button> 
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default Home;
