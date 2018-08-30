const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.post('/signup', (req, res) => {
  User
    .findOne({
      email: req.body.email
    })
    .then(email => {
      if (email) {
        res
          .status(409)
          .json({
            message: 'Email already exists'
          })
      } else {
        bcrypt.hash(req.body.password, 10, (err, salt) => {
          if (err) {
            res
              .status(500)
              .json({
                err
              })
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: salt
            })

            user
              .save()
              .then(() => res.status(200).json({
                user
              }))
              .catch(err => res.status(500).json({
                err
              }))
          }
        })
      }
    })
})

module.exports = router