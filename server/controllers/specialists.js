/**
 * Created by fabiolombardi on 14/05/15.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Specialist = require('../models/specialist');
var _ = require('lodash');



var getAll = function(req, res) {
    Specialist.find(function (err, specialists) {
        if (err)
            res.send(err);
        res.json(specialists);
    });
}

/**
 * List of specialists
 */
exports.all = function(req, res) {
    getAll(req,res);
};

/**
 * Create an new specialist
 */
exports.create = function(req, res) {
    var specialist = new Specialist(req.body);
    //from mean template article.user = req.user;

    specialist.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the item'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};

/**
 * Find specialist by id
 */
exports.specialist = function(req, res, next, id) {
    Specialist.findById(id, function(err, specialist) {
        if (err) return next(err);
        if (!specialist) return next(new Error('Failed to load the specialist ' + id));
        req.specialist = specialist;
        next();
    });
};

/**
 * Show a single specialist
 */
exports.show = function(req, res) {
    res.json(req.specialist);
};

/**
 * Update a specialist
 */
exports.update = function(req, res) {
    var specialist = req.specialist;

    specialist = _.extend(specialist, req.body);

    specialist.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the specialist'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};

/**
 * Delete a specialist
 */
exports.destroy = function(req, res) {
    var specialist = req.specialist;
    specialist.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the specialist'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};