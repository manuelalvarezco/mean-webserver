const express = require('express')
const bcrypt = require('bcrypt');
const _ = require('underscore')

const User = require('../models/user')

const app = express()

app.get('/users', function(req, res) {

    let from = req.query.from || 0;
    from = Number(from);
    let limit = req.query.limit || 0;
    limit = Number(limit);

    User.find({ status: true, role: 'USER_ROLE' })
        .skip(from)
        .limit(limit)
        .exec((err, users) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            User.countDocuments({ status: true }, (err, count) => {

                res.json({
                    ok: true,
                    users,
                    count
                })
            })

        })


});


app.post('/users', function(req, res) {

    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role,
    })

    user.save((err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        })


    })

});

app.put('/users/:id', function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'email', 'password', 'img', 'status']);


    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        })

    })
});


app.delete('/users/:id', function(req, res) {

    let id = req.params.id;

    let changeState = {
        status: false
    }

    User.findByIdAndUpdate(id, changeState, { new: true }, (err, userDelete) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!userDelete) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            })
        }

        res.json({
            ok: true,
            usuario: userDelete
        })

    })
});


module.exports = app