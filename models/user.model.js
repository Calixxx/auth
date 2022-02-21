const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema(

    {
        name: {type: String, required: true, maxlength: 32, trim: true},
        lastname: {type: String, maxlength: 32, trim: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true },
    }
)

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);