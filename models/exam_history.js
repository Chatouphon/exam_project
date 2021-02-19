const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exam_historySchema = new Schema({
    user_id: String,
    exam_id: String,
    exam_date: Date,
    exam_score: Number,
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const exam_historyModel = mongoose.model('exam_history', exam_historySchema)

module.exports = exam_historyModel