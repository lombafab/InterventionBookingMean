/**
 * Created by fabiolombardi on 14/05/15.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Intervention = require('../models/intervention');
var _ = require('lodash');



var getAll = function(req, res) {
    Intervention.find(function (err, interventions) {
        if (err)
            res.send(err);
        res.json(interventions);
    });
}

/**
 * List of interventions
 */
exports.all = function(req, res) {
    getAll(req,res);
};

/**
 * Create an new intervention
 */
exports.create = function(req, res) {
    var intervention = new Intervention(req.body);
    //from mean template article.user = req.user;

    intervention.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the intervention:ß ' + err
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};

/**
 * Find intervention by id
 */
exports.intervention = function(req, res, next, id) {
    Intervention.findById(id, function(err, intervention) {
        if (err) return next(err);
        if (!intervention) return next(new Error('Failed to load the intervention ' + id));
        req.intervention = intervention;
        next();
    });
};

/**
 * Show a single intervention
 */
exports.show = function(req, res) {
    res.json(req.intervention);
};

/**
 * Update a intervention
 */
exports.update = function(req, res) {
    var intervention = req.intervention;

    intervention = _.extend(intervention, req.body);

    intervention.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the intervention: ' + err
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};

/**
 * Delete a intervention
 */
exports.destroy = function(req, res) {
    var intervention = req.intervention;
    intervention.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the intervention ' + err
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};