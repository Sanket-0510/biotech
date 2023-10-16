const express = require('express')
const { handleComment, handleLike, handlePost, handleGetAllPosts} = require('../controllers/post.js')
const { checkForAuthentication } = require('../middlewares/auth.js')

const postRouter = express.Router()


postRouter.post("/:postId/comment",checkForAuthentication("token"), handleComment)

postRouter.post("/publish", handlePost)

postRouter.get("/getAllPosts", handleGetAllPosts)

postRouter.post("/:postId/like", handleLike)

module.exports = {postRouter}