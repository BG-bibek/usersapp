const mongoose = require('mongoose')
require('dotenv').config()
mongoose.Promise = global.Promise
mongoose.set('returnOriginal', false)
let dbURL = process.env.databaseURL // connectionURL
console.log(dbURL)
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully')
  })
  .catch((err) => {
    console.error(
      '***** Error while connecting database: ' + err.message + '*****'
    )
  })
