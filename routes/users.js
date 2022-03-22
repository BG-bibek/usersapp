var express = require('express')
var router = express.Router()

let userModel = require('../models/users')

router.get('/', async function (req, res, next) {
  try {
    let users = await userModel.find({})
    res.render('users/', { users })
  } catch (e) {
    console.log(e)
  }
})

router.get('/new', (req, res, next) => {
  res.render('users/new')
})

router.post('/', async (req, res, next) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  }
  await userModel(user).save()
  res.redirect('/users')
})

module.exports = router
