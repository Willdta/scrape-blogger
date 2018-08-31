require('dotenv').config()
const User = require('../models/user')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_TOKEN

// Here we are checking to see whether we can find the user that
// matches the email associated with the token
// If true, you can access the route as you are authenticated
module.exports = new JwtStrategy(opts, (jwt_payload, done) => {
  User.findOne({
    email: jwt_payload.email
  }, (err, user) => {
    if (user) {
      return done(null, user)
    }

    return done(err, false)
  })
})