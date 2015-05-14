/**
 * Created by fabiolombardi on 14/05/15.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var ToDo = require('../models/todo');
var _ = require('lodash');



var getAll = function(req, res) {
    ToDo.find(function (err, todos) {
        if (err)
            res.send(err);
        res.json(todos);
    });
}

/**
 * List of Todos
 */
exports.all = function(req, res) {
    getAll(req,res);
};

/**
 * Create an new todo
 */
exports.create = function(req, res) {
    var todo = new ToDo(req.body);
    //from mean template article.user = req.user;

    todo.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the todo'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};

/**
 * Find article by id
 */
exports.todo = function(req, res, next, id) {
    console.log("id : " + id);
    ToDo.findById(id, function(err, todo) {
        if (err) return next(err);
        if (!todo) return next(new Error('Failed to load todo ' + id));
        req.todo = todo;
        next();
    });
};

/**
 * Show a single todo
 */
exports.show = function(req, res) {
    res.json(req.todo);
};

/**
 * Update a todo
 */
exports.update = function(req, res) {
    var todo = req.todo;

    todo = _.extend(todo, req.body);

    todo.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the todo'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};

/**
 * Delete a todo
 */
exports.destroy = function(req, res) {
    var todo = req.todo;
    todo.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the todo'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};