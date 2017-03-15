var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};
var userEstablishmentSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    establishmentId: [{
        type: Schema.Types.ObjectId,
        ref: 'Establishment'
    }],
    bathroomGender: {
        type: Number,
        Default: 0,
        min: 0,
        max: 3,
        required: true
    },
    rating: {
        type: Number,
        Default: 1,
        min: 0,
        max: 3,
        required: true
    },
    comment: {
        body: String
    },
    createdAt: {
        type: Date
    }
});
var UserEstablishment = mongoose.model('UserEstablishment', userEstablishmentSchema);
module.exports = UserEstablishment;