var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};
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
        type: String,
        required: true
    }
});
var Establishment = mongoose.model('Establishment', establishmentSchema);
module.exports = Establishment;