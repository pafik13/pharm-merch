// api/policies/basicAuth.js


//module.exports = require('sails-auth/api/policies/basicAuth');
var localProtocol = require('sails-auth/api/services/protocols/local');
/**
 * basicAuth
 *
 * If HTTP Basic Auth credentials are present in the headers, then authenticate the
 * user for a single request.
 */
module.exports = function (req, res, next) {
  var auth = req.headers.authorization;
  if (!auth || auth.search('Basic ') !== 0) {
    return next();
  }
  // if (process.env.NODE_ENV === 'production' && !req.secure) {
  //   return res.status(403).json({ error: 'https required for basic auth. refusing login request' });
  // }

  var authString = new Buffer(auth.split(' ')[1], 'base64').toString();
  var username = authString.split(':')[0];
  var password = authString.split(':')[1];

  sails.log.silly('authenticating', username, 'using basic auth:', req.url);

  localProtocol.login(req, username, password, function (error, user, passport) {
    if (error) {
      return next(error);
    }
    if (!user) {
      req.session.authenticated = false;
      return res.status(403).json({ error: 'Could not authenticate user '+ username });
    }

    req.user = user;
    req.session.authenticated = true;
    req.session.passport = passport;

    next();
  });
};
