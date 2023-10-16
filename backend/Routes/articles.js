const express = require('express')
const { handleArticles } = require('../controllers/articles')

const articleRouter = express.Router()

articleRouter.post("/", handleArticles)


module.exports ={articleRouter}
