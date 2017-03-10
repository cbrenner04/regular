var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');

const BAD_REQUEST = 400;

module.exports = function(app) {
    app.get('/', function(request, response) {
        response.send('index.html');
    });

    app.post('/me',
      bodyParser.json(),
      stormpath.loginRequired,
      function (req, res) {
          var writeError = function(message) {
              res.status(BAD_REQUEST);
              res.json({
                  message: message,
                  status: BAD_REQUEST
              });
              res.end();
          }

          var saveAccount = function() {
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
      });
};
