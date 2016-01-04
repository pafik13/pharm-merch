/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `ReportController.generate()`
     */
    generate: function(req, res) {
        var params = req.params.all();

        sails.log.info(params);

        Report.findOne(params.report, function(err, found) {
            if (err) return res.serverError(err);

            if (!found) {
                return res.notFound('Не найден USER в MainController.main');
            };

            var query = found.query.replace(/{\w+}/g, function(placeHolder) {
                var paramName = placeHolder.substring(1, placeHolder.length - 1);
                sails.log.info(paramName);
                return params[paramName] || placeHolder;
            });

            sails.log.info(query);

            Report.query(query, function(err, result) {
                if (err) return res.serverError(err);
                return res.ok(result.rows);
            });
        });
    },

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
     * `ReportController.pharmacies()`
     */
    pharmacies: function(req, res) {
        var merchantID = req.query.merchant;
        var query = 'SELECT pharmacy.*, territory.* FROM public.pharmacy, public.territory, public.merchant WHERE pharmacy.territory = territory.id AND merchant.territory = territory.id AND merchant.id = ' + merchantID;
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
