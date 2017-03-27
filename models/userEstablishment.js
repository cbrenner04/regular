var mongoose = require('mongoose');
var {Schema} = mongoose;

var userEstablishmentSchema = new Schema({
    bathroomGender: {
        enum: ['gender neutral', 'female', 'family', 'male'],
        required: true,
        type: String
    },
    comment: {type: String},
    createdAt: {
        default: Date.now,
        type: Date
    },
    establishment: {
        ref: 'Establishment',
        type: Schema.Types.ObjectId
    },
    rating: {
        required: true,
        type: Number
    },
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
});

var UserEstablishment =
    mongoose.model('UserEstablishment', userEstablishmentSchema);

module.exports = UserEstablishment;
