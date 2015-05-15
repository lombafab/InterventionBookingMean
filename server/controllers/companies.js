/**
 * Created by fabiolombardi on 14/05/15.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Company = require('../models/company');
var _ = require('lodash');



var getAll = function(req, res) {
    Company.find(function (err, companies) {
        if (err)
            res.send(err);
        res.json(companies);
    });
}

/**
 * List of companies
 */
exports.all = function(req, res) {
    getAll(req,res);
};

/**
 * Create an new company
 */
exports.create = function(req, res) {
    var company = new Company(req.body);
    //from mean template article.user = req.user;

    company.save(function(err) {
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
 * Find company by id
 */
exports.company = function(req, res, next, id) {
    Company.findById(id, function(err, company) {
        if (err) return next(err);
        if (!company) return next(new Error('Failed to load the company ' + id));
        req.company = company;
        next();
    });
};

/**
 * Show a single company
 */
exports.show = function(req, res) {
    res.json(req.company);
};

/**
 * Update a company
 */
exports.update = function(req, res) {
    var company = req.company;

    company = _.extend(company, req.body);

    company.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the company'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};

/**
 * Delete a company
 */
exports.destroy = function(req, res) {
    var company = req.company;
    company.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the company'
            });
        }
        //res.json(article);
        getAll(req, res);
    });
};