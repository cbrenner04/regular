var mongoose = require('mongoose');
var {Schema} = mongoose;
var establishmentSchema = new Schema({
    fourSquareId: {
        required: true,
        type: String,
        unique: true
    },
    name: {type: String},
    address: {type: String},
    crossStreet: {type: String}
});

var Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
