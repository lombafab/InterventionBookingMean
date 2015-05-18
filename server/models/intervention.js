/**
 * Created by fabiolombardi on 18/05/15.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var InterventionSchema = new Schema({
    day: { type: Date, default: Date.now },
    timeSlot: String,
    patient : {
        firstName: String,
        lastName: String,
        age: { type: Number, min: 10, max: 100 },
        email: String,
        telephone: String
    },
    _company_id: Schema.Types.ObjectId,
    _specialist_id: Schema.Types.ObjectId,
    status: { type: String, default: "todo" },
    comment: String
});

/**
 * Validations
 */
InterventionSchema.path('timeSlot').validate(function(timeSlot) {
    return !!timeSlot;
}, 'timeSlot cannot be blank');

InterventionSchema.path('_company_id').validate(function(_company_id) {
    return !!_company_id;
}, '_company_id cannot be blank');

InterventionSchema.path('_specialist_id').validate(function(_specialist_id) {
    return !!_specialist_id;
}, 'email cannot be blank');

InterventionSchema.path('patient.firstName').validate(function(firstName) {
    return !!firstName;
}, 'patient.firstName cannot be blank');

InterventionSchema.path('patient.lastName').validate(function(lastName) {
    return !!lastName;
}, 'patient.lastName cannot be blank');

InterventionSchema.path('patient.email').validate(function(email) {
    return !!email;
}, 'patient.email cannot be blank');

module.exports = mongoose.model('Intervention', InterventionSchema);