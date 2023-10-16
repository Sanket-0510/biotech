const { verifyJwt } = require('../util');

function checkForAuthentication() {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      // No token provided, so you proceed to the next middleware or route without setting req.user.
      return res.json({mssage:"error"})
    }

    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const tokenValue = tokenParts[1];
    try {
      const userPayload = verifyJwt(tokenValue);
      req.user = userPayload;
      console.log(req.user);
      return next();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}

module.exports = { checkForAuthentication };
