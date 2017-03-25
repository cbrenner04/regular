var mongoose = require('mongoose');
var {Schema} = mongoose;
var establishmentSchema = new Schema({
    fourSquareId: {
        required: true,
        type: String,
        unique: true
    }
});

var Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
