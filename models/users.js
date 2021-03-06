const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    user_level: String,
    user_name: String,
    password: String,
    first_name: String,
    last_name: String,
    email: String,
    address: String,
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel