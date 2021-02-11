const express = require('express')
const user_levelModel = require('../models/user_level')
const router = express.Router()

router.get('/', async (req, res, next) => {
    const user_levels = await user_levelModel.find()
    res.json({status: 200, data: user_levels}) // {object khg Javascript lue body}
})

router.get('/:user_level_id', async (req, res, next) => {
    const user_level_id = req.params.product_id
    const user_level = await user_levelModel.findById(user_level_id)
    res.json({status: 200, data: user_level})
})

router.post('/', async (req, res, next) => {
    const payload = req.body
    const user_level = new user_levelModel(payload)
    await user_level.save()
    res.json({status: 200})
})

router.put('/:user_level_id', async (req, res, next) => {
    const payload = req.body
    const user_level_id = req.params.product_id
    const product = await user_levelModel.findByIdAndUpdate(user_level_id, {$set: payload})
    res.json({status: 200, product: product})
})

router.delete('/:user_level_id', async (req, res, next) => {
    const user_level_id = req.params.product_id
    await user_levelModel.findByIdAndDelete(user_level_id)
    res.json({status: 200})
})

module.exports = router