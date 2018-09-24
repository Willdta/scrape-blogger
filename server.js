const app = require('express')()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const jwtStrategy = require('./api/middleware/auth')

require('dotenv').config()

const userRoute = require('./api/routes/user')

// Remove Later
const testRoute = require('./api/routes/test')

// Body Parser to handle req.body
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// Init Passport
passport.use(jwtStrategy)

//CORS Handling
app.use(cors())

// All User Routes
app.use('/user', userRoute)

// Remove Later
app.use('/test', testRoute)

// Connect to mlab
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to mongoDB'))
  .catch(err => console.log(err))

// Port
app.listen(port, () => console.log(`Listening on port ${port}`))
