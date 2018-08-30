const app = require('express')()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

// CORS Handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
    return res.status(200).json({})
  }

  next()
})

// Body Parser to handle req.body
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// Connect to mlab
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to mongoDB'))
  .catch(err => console.log(err))

// Port
app.listen(port, () => console.log(`Listening on port ${port}`))