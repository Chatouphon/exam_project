const express = require('express')
const examModel = require('../models/exams')
const exam_historyModel = require('../models/exam_history')
const userModel = require('../models/users')
const router = express.Router()

router.get('/', async (req, res, next) => {
    const exam_history = await exam_historyModel.find()
    res.json({status: 200, data: exam_history})
})

router.get('/:exam_history_id', async (req, res, next) => {
    const exam_history_id = req.params.exam_history_id
    const exam_history = await exam_historyModel.findById(exam_history_id)
    res.json({status: 200, data: exam_history})
})

//get exam history by user_id
router.get('/user/:user_id', async (req, res, next) => {
    const exams = await exam_historyModel.find({"user_id": req.params.user_id})
    const users = await userModel.findById(req.params.user_id)
    res.json({status: 200, user: users.first_name, exams: exams})
})

//get exam history by exam_id
router.get('/exam/:exam_id', async (req, res, next) => {
    const exams = await exam_historyModel.find({"exam_id": req.params.exam_id})
    const exam = await examModel.findById(req.params.exam_id)
    res.json({status: 200, exam_Title: exam.exam_name, data: exams})
})

router.post('/', async (req, res, next) => {
    const payload = req.body
    const history = new exam_historyModel(payload)
    history.created_at = history.updated_at
    await history.save()
    res.json({status: 200, history: history})
})

router.put('/:exam_history_id', async (req, res, next) => {
    const exam_history_id = req.params.exam_history_id
    const payload = req.body
    const exam_history = await exam_historyModel.findByIdAndUpdate(exam_history_id, {$set: payload})
    res.json({status: 200, edited: exam_history})
})

router.delete('/:exam_history_id', async (req, res, next) => {
    const exam_history_id = req.params.exam_history_id
    await exam_historyModel.findByIdAndDelete(exam_history_id)
    res.json({status: 200})
})

module.exports = router