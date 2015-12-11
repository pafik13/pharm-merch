/**
 * AdminQueryController
 *
 * @description :: Server-side logic for managing Adminqueries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        var query = req.admin_query;
        User.find(query, function(err, results) {
            if (err)
                console.log(err);
            res.json(200, results);
        });
    }
};
