const express = require('express')
const { handleArticles } = require('../controllers/articles')
const { checkForAuthentication } = require('../middlewares/auth')

const articleRouter = express.Router()

articleRouter.post("/", handleArticles)


module.exports ={articleRouter}
