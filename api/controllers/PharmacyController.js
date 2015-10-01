/**
 * PharmacyController
 *
 * @description :: Server-side logic for managing Pharmacies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res, next) {
        var action = req.param('action');

        if (action == 'update') {
            var params = req.params.all();
            delete params.action;

            if (params.validated && params.id) {

                params.validator = req.user.id;
                params.validatedAt = new Date();
                Pharmacy.update(params);
                return res.json(200, params);
            } else {
                next();
            }


        }
    }
};
