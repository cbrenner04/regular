var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
        type: String,
        enum: ['gender neutral', 'female', 'family', 'male'],
        required: true
    },
    rating: {
        type: String,
        enum: ['terrible', 'decent', 'splendid'],
        required: true
    },
    comment: {
        body: String
    }
});
var UserEstablishment = mongoose.model('UserEstablishment', userEstablishmentSchema);
module.exports = UserEstablishment;