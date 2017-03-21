var mongoose = require('mongoose');
var {Schema} = mongoose;
var establishmentSchema = new Schema({
    id: {
        required: true,
        type: Number,
        unique: true
    },
    location: {
        required: true,
        type: []
    },
    name: {
        required: true,
        type: String
    }
});

var Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
