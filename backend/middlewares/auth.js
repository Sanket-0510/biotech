const { verifyJwt } = require('../util');

function checkForAuthentication() {
  return (req, res, next) => {
    console.log(req.headers)
    const token = req.headers.authorization;
    if (!token) {
      console.log("token non")
      return res.status(401).json({ message: 'Unauthorized' });
      
    }
    const tokenParts = token.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Invalid token format' });
    }
    const tokenValue = tokenParts[1];
    try {
      const userPayload = verifyJwt(tokenValue);
      req.user = userPayload;
      return next();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: 'Invalid token' });
    }
    
  };
}

module.exports = { checkForAuthentication };
