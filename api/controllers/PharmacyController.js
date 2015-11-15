/**
 * PharmacyController
 *
 * @description :: Server-side logic for managing Pharmacies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res, next) {
        /*
        var action = req.param('action');

        if (action == 'update') {
            var params = req.params.all();
            delete params.action;

            if ('validator' in params)
                return next();

            if (params.validated) {

                params.validator = req.user.id;
                params.validatedAt = new Date();
                Pharmacy.update(params).exec(function(err, updated) {
                    if (err) return res.negotiate(err);

                    return res.json(200, updated);
                });

            } else {
                return next();
            }


        } else {
            return next();
        }*/
        return next();
    }
};
