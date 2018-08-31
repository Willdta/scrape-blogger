const app = require('express')()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const userRoute = require('./api/routes/user')

// Remove Later
const testRoute = require('./api/routes/test')

// // CORS Handling
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', '*')

//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
//     return res.status(200).json({})
//   }

//   next()
// })

// Body Parser to handle req.body
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

//CORS
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