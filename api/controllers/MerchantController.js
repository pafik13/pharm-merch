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
            var pwd = Math.floor((Math.random() * 1000000000));
            var data = {
                username: username,
                email: params.email,
                head: params.manager
            };

            //console.log('CREATE USER');
            //Creating user and password
            User.create(data).exec(function(err, user) {
                if (err) return res.json(400, err);

                params.user = user.id;

                var data_passport = {
                    user: user.id,
                    password: pwd,
                    protocol: "local"
                };
                console.log('CREATE PASSPORT');
                Passport.create(data_passport).exec(function(err, passport) {
                    //console.log("user: %j", passport);
                    if (err) return res.json(400, err);
                    //res.passports = pwd.id;
                    //User.update(res);
                    params.initPwd = pwd;

                    //console.log('UPDATE MERCHANT');
                    Merchant.create(params).exec(function(err, merch) {
                        if (err) return res.json(400, err);
                        res.json(200, merch);;
                    });

                });

            });

        } else {
            //console.log('GOTO NEXT');
            return next();
        }
    }
};
