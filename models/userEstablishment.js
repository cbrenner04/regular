var mongoose = require('mongoose');
var {Schema} = mongoose;

var userEstablishmentSchema = new Schema({
    bathroomGender: {
        enum: ['gender neutral', 'female', 'family', 'male'],
        required: true,
        type: String
    },
    comment: {type: String},
    establishmentId: [{
        ref: 'Establishment',
        type: Schema.Types.ObjectId
    }],
    rating: {
        required: true,
        type: Number
    },
    userId: [{
        ref: 'User',
        type: Schema.Types.ObjectId
    }]
});

var UserEstablishment =
    mongoose.model('UserEstablishment', userEstablishmentSchema);

module.exports = UserEstablishment;
