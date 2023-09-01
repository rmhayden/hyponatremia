const mongoose = require('mongoose')

const caseSchema = new mongoose.Schema({
    creat: {type: Number, required: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('Case', caseSchema)