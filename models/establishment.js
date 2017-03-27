var mongoose = require('mongoose');
var {Schema} = mongoose;
var establishmentSchema = new Schema({
    _userEstablishment: {
        ref: 'UserEstablishment',
        type: String
    },
    address: {type: String},
    crossStreet: {type: String},
    fourSquareId: {
        required: true,
        type: String,
        unique: true
    },
    name: {type: String}
});

var Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
