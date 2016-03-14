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
    },

    create: function(req, res, next) {
        var values = req.params.all();
        sails.log.info("PC.create");
        sails.log.info(values);
        if (values.valid) {
            values.validated = req.user.id;
            values.validatedAt = new Date();
        };

        Pharmacy.create(values).exec(function(err, created) {
            if (err) return res.negotiate(err);
            return res.created(created);
        });
    },

    update: function(req, res, next) {
        var id = req.param('id'),
            populate = req.param('populate'),
            valuesNew = req.params.all(),
            query = Pharmacy.findOne(id);
        delete valuesNew.id;
        delete valuesNew.populate;

        sails.log.info("PC.update");
        sails.log.info(valuesNew);
        Pharmacy.findOne(id).exec(function(err, valuesOld) {
            if (err) return res.serverError(err);
            if (!valuesOld) return res.serverError('Old values not found!');

            if (!valuesOld.valid && valuesNew.valid) {
                valuesNew.validated = req.user.id;
                valuesNew.validatedAt = new Date();
            } else if (valuesOld.valid && !valuesNew.valid) {
                valuesNew.validated = null;
                valuesNew.validatedAt = null;
            };
            Pharmacy.update(id, valuesNew).exec(function(err, updatedRows) {
                if (err) return res.negotiate(err);

                if (updatedRows.length === 1) {
                    populate.forEach(function(item) {
                        query.populate(item);
                    });
                    query.exec(function(err, updated) {
                        if (err) return res.negotiate(err);
                        return res.ok(updated);
                    });

                } else {
                    return res.serverError({
                        msg: "Updated more then 1 row.",
                        updated_rows: updatedRows
                    });
                }
            });
        });
    },
};
