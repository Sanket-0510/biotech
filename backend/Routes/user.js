const express = require('express');
const userRoute = express.Router();
const { handlesignup, handlesignin, handleUserProfile, handleSavedList } = require('../controllers/user.js');
const { checkForAuthentication } = require('../middlewares/auth.js');

userRoute.get('/signin', (req, res) => {
  res.json({ mssg: "Welcome to the signin page" });
});

userRoute.get('/signup', (req, res) => {
  res.json({ mssg: "Welcome to the signup page" });
});

userRoute.post('/signup', handlesignup);







userRoute.get("/profile",handleUserProfile )


userRoute.post('/signin', handlesignin)


userRoute.get("/savedList",  handleSavedList)



module.exports = userRoute;
