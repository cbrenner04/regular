var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var establishmentSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: [],
        required: true
    }
});
var Establishment = mongoose.model('Establishment', establishmentSchema);
module.exports = Establishment;