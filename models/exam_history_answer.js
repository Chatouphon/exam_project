const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exam_history_answerSchema = new Schema({
    is_paid: Boolean,
    exam_date: Date,
    exam_start_time: timestamp,
    exam_end_time: timestamp,
    question: text,
    answer: text,
    score: Number,
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const exam_history_answerModel = mongoose.model('exam_history_answer', exam_history_answerSchema)

module.exports = exam_history_answerModel