var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');
// var UserEstablishment = require('../models/userEstablishment.js');
var User = require('../models/user.js');
var path = require('path');

var BAD_REQUEST = 400;

module.exports = function (app) {
    app.get('/', function (request, response) {
        response.send('index.html');
    });
    app.get('/css/bootstrap.min.css', function (request, response) {
        response.sendFile(path.join(__dirname, '../public/css/bootstrap.min.css'));
    });
    app.get('/email', stormpath.getUser, function (req, res) {
        if (req.user) {
          console.log("email in the body: ", req.user.email);
            User.findOne({
                email: req.user.email
            }, function (err, email) {
                if (err) console.log(err);
                // saved!
                if (email) {
                  res.json(email);
                } else {
                  User.create({
                    email: req.user.email
                  }, function(err, email) {
                    if (err) console.log(err);
                    res.json(email);
                  });
                }
            });
        }
    });
    /* This is specific to StormPath and should not be touched unless you have
       a very good reason */
    app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
        var writeError = function (message) {
            res.status(BAD_REQUEST);
            res.json({
                message: message,
                status: BAD_REQUEST
            });
            res.end();
        }
        var saveAccount = function () {
            req.user.givenName = req.body.givenName;
            req.user.surname = req.body.surname;
            req.user.email = req.body.email;
            req.user.save(function (err) {
                if (err) {
                    return writeError(err.userMessage || err.message);
                }
                return res.end();
            });
        }
        if (req.body.password) {
            const application = req.app.get('stormpathApplication');
            application.authenticateAccount({
                password: req.body.existingPassword,
                username: req.user.username
            }, function (err) {
                if (err) {
                    return writeError('The existing password that you  ' + 'entered was incorrect. Asshole.');
                }
                req.user.password = req.body.password;
                return saveAccount();
            });
        } else {
            saveAccount();
        }
    });
};
