/**
 * Created by fabiolombardi on 14/05/15.
 */
var todos = require('../controllers/todos');

// routes for the todolist=================
module.exports = function(app) {
    app.route('/api/todos')
        .get(todos.all)
        .post(todos.create);

    app.route('/api/todos/:todo_id')
        .get(todos.show)
        .put(todos.update)
        .delete(todos.destroy);

    // Finish with setting up the articleId param
    app.param('todo_id', todos.todo);
};