// full_score, limit time, fee
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    user_id: String,
    exam_name: String,
    full_score: Number,
    limit_time: Number,
    fee: Number,
    created_at: { type: Date, default: null },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
})

const examModel = mongoose.model('exams', examSchema)

module.exports = examModel