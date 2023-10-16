const { Post } = require("../models/post");

//controller to hadle the new post from a user
const handlePost = async (req, res) => {
  try {
    const user = await req.user;
    if (!user) {
      res.redirect("/signin");
      console.log("user not found");
    }
    console.log(user)
    const { title, readTime, description, content, tags } = req.body;
    console.log(req.body)
    const newPost = new Post({
      title,
      readTime,
      description,
      content,
      tags,
      created_by: user._id
    });

    const post = await newPost.save();
    return res.json(post);
  } catch (e) {
    console.log(e);
  }
};


//handler function to handle the LIke
const handleLike = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user._id;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const likedByUser = post.likes.liked_by.includes(userId);

    if (likedByUser) {
      post.likes.liked_by = post.likes.liked_by.filter(
        (id) => id.toString() !== userId.toString()
      );
    } else {
      post.likes.liked_by.push(userId);
    }

    await post.save();
    res.json({ message: "Like updated successfully", liked: !likedByUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating like" });
  }
};

//handler function to handle the comment 
const handleComment = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user._id;
  const { text } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = {
      user_id: userId,
      comment: text,
    };

    post.comments.push(comment);
    await post.save();
    res.json({ message: "Comment added successfully", comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding comment" });
  }
};

//handler funtion to get all the posts  on the home page
const handleGetAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); 
    res.status(200).json(posts); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handlePost, handleComment, handleLike,handleGetAllPosts };
