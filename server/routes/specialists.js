/**
 * Created by fabiolombardi on 14/05/15.
 */
var specialists = require('../controllers/specialists');

// routes for the todolist=================
module.exports = function(app) {
    app.route('/api/specialists')
        .get(specialists.all)
        .post(specialists.create);

    app.route('/api/specialists/:specialist_id')
        .get(specialists.show)
        .put(specialists.update)
        .delete(specialists.destroy);

    // Finish with setting up the articleId param
    app.param('specialist_id', specialists.specialist);
};