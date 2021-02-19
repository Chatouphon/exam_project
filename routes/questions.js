const express = require('express')
const examModel = require('../models/exams')
const questionModel = require('../models/questions')
const router = express.Router()

router.get('/', async (req, res, next) => {
    const questions = await questionModel.find()
    res.json({status: 200, data: questions})
})

router.get('/:question_id', async (req, res, next) => {
    const question_id = req.params.question_id
    const question = await questionModel.findById(question_id)
    exam_id = question.exam_id
    const exam = await examModel.findById(exam_id)
    res.json({status: 200, exam: exam, question: question})
})

//Get the exam_id from params to save in question
router.post('/:exam_id', async (req, res, next) => {
    const parent_id = req.params.exam_id
    req.body.exam_id = parent_id
    const payload = req.body
    const question = new questionModel(payload)
    question.created_at = question.updated_at
    await question.save()
    res.json({status: 200, question: question})
})

router.put('/:question_id', async (req, res, next) => {
    const question_id = req.params.question_id
    const question = await questionModel.findById(question_id)
    req.body.exam_id = question.exam_id
    const payload = req.body
    const edited_question = await questionModel.findByIdAndUpdate(question_id, {$set:payload})
    res.json({status: 200, edited: edited_question})
})

router.delete('/:question_id', async (req, res, next) => {
    const question_id = req.params.question_id
    await questionModel.findByIdAndDelete(question_id)
    res.json({status: 200})
})

module.exports = router