/**
 * Created by fabiolombardi on 14/05/15.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CompanySchema   = new Schema({
    name: String,
    telephone: String,
    address: String,
    email: String,
    daysInWeek: Array,
    specialist_id: Schema.ObjectId
});

/**
 * Validations
 */
CompanySchema.path('name').validate(function(name) {
    return !!name;
}, 'name cannot be blank');

CompanySchema.path('address').validate(function(address) {
    return !!address;
}, 'address cannot be blank');

CompanySchema.path('email').validate(function(email) {
    return !!email;
}, 'email cannot be blank');

module.exports = mongoose.model('Company', CompanySchema);