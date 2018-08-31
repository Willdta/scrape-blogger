const express = require('express')
const router = express.Router()

router.get('/testData', (req, res) => {
  const testData = [
    { name: 'Gabriel', age: 22 },
    { name: 'Yves', age: 28 }
  ]

  res.send(testData)
})

module.exports = router