/**
 * ManagerController
 *
 * @description :: Server-side logic for managing Managers
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
            params.user.username = ext.transliterate(params.lastName) + rnd;
            params.user.password = Math.floor((Math.random() * 1000000000));
            params.initUsr = params.user.username;
            params.initPwd = params.user.password;
            console.log('Before USER create : ' + JSON.stringify(params.user));
            sails.services.passport.protocols.local.createUser(params.user, function(err, created) {
                if (err) return res.json(400, err);

                params.user = created;
                params.head = req.user;

                Manager.create(params).exec(function(err, manager) {
                    if (err) {
                        console.log('Before USER delete : ' + JSON.stringify(params.user));
                        User.destroy({
                            "id": params.user.id
                        }).exec(function(err) {
                            console.log('The user has been deleted! ' + err);
                        });
                        return res.json(400, err);
                    }

                    manager.initPwd = params.initPwd;
                    manager.initUsr = params.initUsr;
                    return res.ok(manager);;
                });
                //res.ok(created);
                //resolve(created);
            });


            //sails.services.passport.protocols.local.register(req.body, function (err, user) {
            //  if (err) return next(err);
            //        Merchant.create(params).exec(function(err, merch) {
            //            if (err) return res.json(400, err);
            //            res.json(200, merch);;
            //        });
            //res.ok(params.user);
            // });
            //console.log('CREATE USER');
            //Creating user and password
            //        User.create(data).exec(function(err, user) {
            //            if (err) return res.json(400, err);

            //            params.user = user.id;

            //            var data_passport = {
            //                user: user.id,
            //                password: pwd,
            //                protocol: "local"
            //            };
            //            console.log('CREATE PASSPORT');
            //            Passport.create(data_passport).exec(function(err, passport) {
            //                //console.log("user: %j", passport);
            //                if (err) return res.json(400, err);
            //                //res.passports = pwd.id;
            //                //User.update(res);
            //                params.initPwd = pwd;
            // params.initPwd = pwd;
            //                //console.log('UPDATE MERCHANT');
            //                Merchant.create(params).exec(function(err, merch) {
            //                    if (err) return res.json(400, err);
            //                    res.json(200, merch);;
            //                });

            //            });

            //        });

        } else {
            //console.log('GOTO NEXT');
            return next();
        }
    }
};
