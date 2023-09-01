const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

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
    timestamps: true,
    toJSON: {
      transform: function(doc, ret){
        delete ret.password;
        return ret;
      }
    }
})

userSchema.pre('save', async function (next) {

  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);

});



module.exports = mongoose.model('User', userSchema)