/**
 * Created by fabiolombardi on 14/05/15.
 */
var companies = require('../controllers/companies');

// routes for the todolist=================
module.exports = function(app) {
    app.route('/api/companies')
        .get(companies.all)
        .post(companies.create);

    app.route('/api/companies/:company_id')
        .get(companies.show)
        .put(companies.update)
        .delete(companies.destroy);

    // Finish with setting up the articleId param
    app.param('company_id', companies.company);
};