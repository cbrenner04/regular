var mongoose = require('mongoose');
var {Schema} = mongoose;
var establishmentSchema = new Schema({
    four_square_id: {
        required: true,
        type: String,
        unique: true
    },
    address: {
        required: true,
        type: String
    },
    cross_street: {
        require: true,
        type: String
    },
    name: {
        required: true,
        type: String
    }
});

var Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
