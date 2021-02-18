const express = require('express')
const examModel = require('../models/exams')
const router = express.Router()

router.get('/', async (req, res, next) => {
    const exams = await examModel.find()
    res.json({status: 200, data: exams})
})

router.get('/:exam_id', async (req, res, next) => {
    const exam_id = req.params.exam_id
    const exam = await examModel.findById(exam_id)
    res.json({status: 200, data: exam})
})

router.post('/', async (req, res, next) => {
    // req.body.created_at = Date.now
    const payload = req.body
    // console.log(payload)
    const exam = new examModel(payload)
    exam.created_at = exam.updated_at
    await exam.save()
    res.json({status: 200, exam: exam})
})

router.put('/:exam_id', async (req, res, next) => {
    const payload = req.body
    const exam_id = req.params.exam_id
    const exam = await examModel.findByIdAndUpdate(exam_id, {$set: payload})
    res.json({status: 200, exam: exam})
})

router.delete('/:exam_id', async (req, res, next) => {
    const exam_id = req.params.exam_id
    await examModel.findByIdAndDelete(exam_id)
    res.json({status: 200})
})

module.exports = router