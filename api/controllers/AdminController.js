/**
 * AdminQueryController
 *
 * @description :: Server-side logic for managing Adminqueries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        var query = req.query.admin_query;
        console.log(query);
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    }
};
