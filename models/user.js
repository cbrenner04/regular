var mongoose = require('mongoose');
var {Schema} = mongoose;
var userSchema = new Schema({
    _userEstablishment: {
        ref: 'UserEstablishment',
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    givenName: {type: String}
});
var User = mongoose.model('User', userSchema);
module.exports = User;
