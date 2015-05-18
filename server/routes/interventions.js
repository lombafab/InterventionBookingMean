/**
 * Created by fabiolombardi on 18/05/15.
 */
var interventions = require('../controllers/interventions');

// routes for the todolist=================
module.exports = function(app) {
    app.route('/api/interventions')
        .get(interventions.all)
        .post(interventions.create);

    app.route('/api/interventions/:intervention_id')
        .get(interventions.show)
        .put(interventions.update)
        .delete(interventions.destroy);

    // Finish with setting up the articleId param
    app.param('intervention_id', interventions.intervention);
};