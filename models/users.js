const mongoose = require('mongoose')
const Schema = mongoose.Schema
let userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})
module.exports = mongoose.model('User', userSchema)
