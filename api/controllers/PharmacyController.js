/**
 * PharmacyController
 *
 * @description :: Server-side logic for managing Pharmacies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res, next) {
        var action = req.param('action');
        console.log(action);
        if (action == 'update') {
            var params = req.params.all();
            delete params.action;

            console.log('params: %j', params);

            if (params.validated && params.id) {

                params.validator = req.session.user.id;
                Pharmacy.update(params);
                console.log('params: %j', params);
                return res.json(200, params);
            }

            next();
        }
    }
};
