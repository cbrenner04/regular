var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};
var userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    }
});
var User = mongoose.model('User', userSchema);
module.exports = User;