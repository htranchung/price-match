const jwt = require('jsonwebtoken');
const config = require('../config/connection');

// defined in config/connection.js
const secret = config.jwtSecret;
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
      let token = req.body.token || req.query.token || req.headers.authorization;
    
      if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
      }
    
      if (!token) {
        throw new Error('Authentication required');
      }
    
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log('Invalid token');
      }
    
      return req;
    },

  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};