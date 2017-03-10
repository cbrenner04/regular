var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');

module.exports = function(app) {
    app.get('/', function(request, response) {
        response.send('index.html');
    });

    app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
		  function writeError(message) {
		    res.status(400);
		    res.json({ message: message, status: 400 });
		    res.end();
		  }
		 
		  function saveAccount () {
		    req.user.givenName = req.body.givenName;
		    req.user.surname = req.body.surname;
		    req.user.email = req.body.email;
		 
		    req.user.save(function (err) {
		      if (err) {
		        return writeError(err.userMessage || err.message);
		      }
		      res.end();
		    });
		  }
		 
		  if (req.body.password) {
		    var application = req.app.get('stormpathApplication');
		 
		    application.authenticateAccount({
		      username: req.user.username,
		      password: req.body.existingPassword
		    }, function (err) {
		      if (err) {
		        return writeError('The existing password that you entered was incorrect. Asshole.');
		      }
		 
		      req.user.password = req.body.password;
		 
		      saveAccount();
		    });
		  } else {
		    saveAccount();
		  }
		});
};
