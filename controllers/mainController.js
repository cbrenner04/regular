var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');
var User = require('../models/user.js');
var Establishment = require('../models/establishment.js');
var UserEstablishment = require('../models/userEstablishment')
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
                    User.create({
                        email: req.user.email,
                        givenName: req.user.givenName
                    },
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

    app.get('/bathroom/:id/:name/:address/:crossStreet', function(req, res) {
        var requestedBathroom = req.params.id
        if (requestedBathroom) {
            Establishment.findOne({fourSquareId: requestedBathroom},
                function (err, bRoom) {
                    if (err) {
                        res.send(err);
                    }
                    // Saved!
                    if (bRoom) {
                        res.json(bRoom);
                    } else {
                        Establishment.create({
                            fourSquareId: requestedBathroom,
                            name: req.params.name,
                            address: req.params.address,
                            crossStreet: req.params.crossStreet
                        },
                            function(error, bathroom) {
                                if (error) {
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

    app.get('/user_establishments/:id/:type', function(req, res) {
        var identifier = req.params.id;
        var type = req.params.type;
        if (identifier && (type === 'establishment')) {
            UserEstablishment.find({establishment: identifier})
                .populate('users')
                .populate('establishment')
                .exec(function (err, bRoom) {
                    if (err) {
                        res.send(err);
                    }

                    res.json(bRoom);
                }
            );
        } else if (identifier && (type === 'user')) {
            UserEstablishment.find({user: identifier})
                .populate('users')
                .populate('establishment')
                .exec(function (error, array) {
                    if (error) {
                        res.send(error);
                    }

                    res.json(array);
                }
            );
        }
    });

    app.post('/user_establishments', function(request, response) {
        var {body} = request;
        UserEstablishment.create({
            bathroomGender: body.gender,
            comment: body.comments,
            establishment: body.establishmentId,
            rating: body.rating,
            user: body.userId
        }, function(error, userEstablishment) {
            if (error) {
                response.send(error);
            }
            response.json(userEstablishment);
        });
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
