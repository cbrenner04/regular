var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');
var User = require('../models/user.js');
var Establishment = require('../models/establishment.js');
var path = require('path');

var BAD_REQUEST = 400;

module.exports = function(app) {
    app.get('/', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/'));
    });
    app.get('/css/bootstrap.min.css', function (request, response) {
        response.sendFile(
            path.join(__dirname, '../public/css/bootstrap.min.css')
        );
    });
    app.get('/email', stormpath.getUser, function (req, res) {
        if (req.user) {
            User.findOne({email: req.user.email}, function (err, email) {
                if (err) {
                    res.send(err);
                }
                // Saved!
                if (email) {
                    res.json(email);
                } else {
                    User.create({email: req.user.email},
                        function(error, newEmail) {
                            if (err) {
                                res.send(error);
                            }
                            res.json(newEmail);
                        }
                    );
                }
            });
        }
    });
    app.get('/bathroom/:id/:name/:address/:cross_street', function(req, res) {
        var requestedBathroom = req.params
        console.log(requestedBathroom)
        if (requestedBathroom.id) {
            Establishment.findOne({id: requestedBathroom.id},
                function (err, bathroom) {
                    if (err) {
                        res.send(err);
                    }
                    // Saved!
                    if (bathroom) {
                        res.json(bathroom);
                    } else {
                        Establishment.create({
                            id: requestedBathroom.id,
                            name: requestedBathroom.name,
                            address: requestedBathroom.address,
                            cross_street: requestedBathroom.cross_street
                        },
                            function(error, bathroom) {
                                if (err) {
                                    res.send(error);
                                }
                                res.json(bathroom);
                            }
                        );
                    }
                }
            );
        }
    });

    /* This is specific to StormPath and should not be touched unless you have
       a very good reason */
    app.post('/me', bodyParser.json(), stormpath.loginRequired,
        function (req, res) {
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
                        return writeError('The existing password that you  ' +
                                          'entered was incorrect. Asshole.');
                    }
                    req.user.password = req.body.password;

                    return saveAccount();
                });
            } else {
                saveAccount();
            }
        }
    );
};
