/**
 * MerchantController
 *
 * @description :: Server-side logic for managing Merchants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res, next) {
        var action = req.param('action');
        if (action == 'create') {
            var params = req.params.all();
            delete params.action;

            var ext = require('../extensions.js');

            var rnd = Math.floor((Math.random() * 1000));
            var username = ext.transliterate(params.lastName) + rnd;

            var data = {
                username: username,
                email: params.email,
                head: params.manager
            };

            //Creating user and password
            User.create(data).exec(function(err, res) {

                if (err) return next(err);

                params.user = res;
                Passport.create({
                    user: res.id,
                    password: '12345678',
                    protocol: "local"
                }).exec(function(err, pwd) {
                    if (err) return next(err);
                    //res.passports = pwd.id;
                    //User.update(res);
                    Merchant.update(params);
                });
            });

        }
        next();
    }
};
