const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== undefined) {
    const bearerToken = bearerHeader.split(' ')[1]
    req.token = bearerToken

    jwt.verify(req.token, process.env.JWT_TOKEN, (err, data) => {
      err ? res.status(404) : res.status(200).json({ data })
    })

    next()
  } else {
    res.status(403)
  }
}