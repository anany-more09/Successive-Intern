const express = require('express')
const { handleSignIn, handleSignUp, handleDelete, handleUpdate, handleGetall } = require('../controlers/user')
const userRouter = express.Router()

userRouter.post('/signin', handleSignIn)
userRouter.post('/signup', handleSignUp)
userRouter.delete('/delete', handleDelete)
userRouter.put('/update', handleUpdate)
userRouter.get('/bulk', handleGetall)

module.exports = userRouter