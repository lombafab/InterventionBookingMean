/**
 * Created by fabiolombardi on 14/05/15.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SpecialistSchema   = new Schema({
    firstName: String,
    lastName: String,
    telephone: String,
    email: String
});

/**
 * Validations
 */
SpecialistSchema.path('firstName').validate(function(firstName) {
    return !!firstName;
}, 'firstName cannot be blank');

SpecialistSchema.path('lastName').validate(function(lastName) {
    return !!lastName;
}, 'lastName cannot be blank');

SpecialistSchema.path('email').validate(function(email) {
    return !!email;
}, 'email cannot be blank');

module.exports = mongoose.model('Specialist', SpecialistSchema);