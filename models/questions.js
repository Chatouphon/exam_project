// question, answer
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
    // question_type: String,
    question: String,
    answer: [String],
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const questionModel = mongoose.model('questions', questionSchema)

module.exports = questionModel