const mongoose = require('mongoose')
const user_levelModel = require('./user_level')

const Schema = mongoose.Schema

const question_typeSchema = new Schema({
    type_name: String,
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const question_typeModel = mongoose.model('question_type', question_typeSchema)

module.exports = question_typeModel