const User = require('../models/user.model');
const bcrypt = require('bcrypt')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then( hash => {
            const newRecord = new User({
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
            })
            newRecord.save((err, docs) => err ? res.status(500).json({message: err}) : res.status(201).json({message: docs}))
        })
        .catch(err => res.status(500).json({error: err}))
}

exports.login = (req, res, next) => {

}

