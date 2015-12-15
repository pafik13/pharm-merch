/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `ReportController.testing()`
     */
    testing: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });

    },

    /**
     * `ReportController.merchants()`
     */
    merchants: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    },

    /**
     * `ReportController.daily()`
     */
    daily: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    },

    /**
     * `ReportController.dailyAll()`
     */
    dailyAll: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    },

    /**
     * `ReportController.weekly()`
     */
    weekly: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    },

    /**
     * `ReportController.weekly()`
     */
    weeklyAll: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    },

    /**
     * `ReportController.monthly()`
     */
    monthly: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    }
};
