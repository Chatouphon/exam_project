// question, answer
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
    question_type: String,
    exam_id: String,
    question: String,
    //answers[i] == answers_checked[i]
    answers: [String],
    answers_checked: [Boolean],
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const questionModel = mongoose.model('questions', questionSchema)

module.exports = questionModel