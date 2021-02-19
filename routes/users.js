const express = require('express')
const userModel = require('../models/users')
const user_levelModel = require('../models/user_level')
const router = express.Router()

router.get('/', async (req, res, next) => {
    const users = await userModel.find()
    // user_level_id = users.user_level
    // const user_level = await user_levelModel.findById(user_level_id)
    res.json({status: 200, Account: users})
})

router.get('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id
    const user = await userModel.findById(user_id)
    const level_id = user.user_level
    const user_level = await user_levelModel.findById(level_id)
    res.json({status: 200, Account: user, Type: user_level.user_level})
})

//find account by user_level
router.get('/find/:user_level_id', async (req, res, next) => {
    users = await userModel.find({"user_level": req.params.user_level_id})
    const user_level = await user_levelModel.findById(req.params.user_level_id)
    res.json({status: 200, Account: users, Type: user_level.user_level})
})

router.post('/', async (req, res, next) => {
    const payload = req.body
    const user = new userModel(payload)
    user.created_at = user.updated_at
    await user.save()
    res.json({status: 200, user: user})
})

router.put('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id
    const payload = req.body
    const user = await userModel.findByIdAndUpdate(user_id, {$set: payload})
    res.json({status: 200, edited: user})
})

router.delete('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id
    await userModel.findByIdAndDelete(user_id)
    res.json({status: 200})
})

module.exports = router