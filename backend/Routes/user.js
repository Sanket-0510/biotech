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


userRoute.post("/",async(req,res)=>{
  const user = await req.user
  if(!user) return res.redirect("/signin")
  return res.json(user.email)
})


userRoute.get("/logout", async(req,res)=>{
  res.clearCookie("token").json({mssg: "logout successfully"})
})
 


userRoute.get("/profile",handleUserProfile )


userRoute.post('/signin', handlesignin)


userRoute.get("/savedList", checkForAuthentication, handleSavedList)



module.exports = userRoute;
