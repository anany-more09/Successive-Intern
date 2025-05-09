const mongoose = require('mongoose')

const mongooseSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    userName:{
        type: String,
        trim: true,
        lowercase: true,
        minLength: 10,
        maxLength: 50,
        unique: true,
        required: true
    },
    password:{
        type: Number,
        trim: true,
        numbers: true,
        maxLength: 8,
        required: true,
    }

})

const User = mongoose.model('User', mongooseSchema)
module.exports = {
    User
}