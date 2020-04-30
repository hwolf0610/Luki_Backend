const express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
require('dotenv').config();
var billing_email = require('express-email')(__dirname + '/email/billing');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const accessTokenSecret = 'youraccessTokensecret1234567890';

const todoRoutes = express.Router();
// const PORT = 3000;
const PORT = process.env.PORT || 4000;

let User = require('./Lukiuser.model');
// let Todos = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/LukiDB', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.post('/Userlogin', function (req, res) {
    User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        if (user) {
            const accessToken = jwt.sign({ email: user.email, role: user.role }, accessTokenSecret);
            res.json({
                'status': 200,
                'message': 'Login successfully',
                'data': {
                    'UserToken': accessToken,
                    'userInformation': user
                }
            });
        } else {
            console.log("err->", err);
            res.json({
                'status': 400,
                'message': 'Login failed',
                'data': 'username or password incorrect'
            });
        }
    });
});

app.post('/Usersignup', function (req, res) {
    console.log("request : ", req.body)
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role;
    if (username != null && email != null && password != null && role != null) {
        User.findOne({ email: req.body.email, username: req.body.username }, function (err, user) {
            if (user) {
                res.json({
                    'status': 401,
                    'message': 'Signup failed',
                    'data': 'Email or Username already exist.'
                });
            } else {
                let user = new User(req.body);
                user.save()
                    .then(todo => {
                        const accessToken = jwt.sign({ email: user.email, role: user.role }, accessTokenSecret);
                        res.status(200).json({
                            'status': 200,
                            'message': 'Signup successfully',
                            'data': {
                                'UserToken': accessToken,
                                'userInformation': user
                            }
                        });
                        console.log("success->");
                    })
                    .catch(err => {
                        res.json({
                            'status': 403,
                            'message': 'Signup failed',
                            'data': 'Forbidden Error'
                        });
                        console.log("err->", err);
                    });
            }
        });
    } else {
        res.json({
            'status': 400,
            'message': 'Signup failed',
            'data': 'input field or data type incorrect'
        });
    }
});

app.use('/todos', todoRoutes);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'AdminPanel_Frontend/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'AdminPanel_Frontend/build', 'index.html'));
    });
  }

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});