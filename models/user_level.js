const mongoose = require('mongoose')

const Schema = mongoose.Schema

const user_levelSchema = new Schema({
    user_level: String,
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const user_levelModel = mongoose.model('user_level', user_levelSchema)

module.exports = user_levelModel