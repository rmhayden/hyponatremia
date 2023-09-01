const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    },
    cases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Case"
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)