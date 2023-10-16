const express = require('express');
const userRoute = express.Router();
const { handlesignup, handlesignin, handleUserProfile, handleSavedList } = require('../controllers/user.js');


//user signup route
userRoute.post('/signup', handlesignup);

//get the user profile route
userRoute.get("/profile",handleUserProfile )


//user signin route 
userRoute.post('/signin', handlesignin)

//saved list of user 
userRoute.get("/savedList",  handleSavedList)



module.exports = userRoute;
