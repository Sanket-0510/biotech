const express = require('express')
const { handleComment, handleLike, handlePost, handleGetAllPosts} = require('../controllers/post.js')


const postRouter = express.Router()

//handle comment on a post 
postRouter.post("/:postId/comment", handleComment)

//publish a new post 
postRouter.post("/publish", handlePost)

//get all the posts on home page
postRouter.get("/getAllPosts", handleGetAllPosts)

//handle the like on a post
postRouter.post("/:postId/like", handleLike)

module.exports = {postRouter}