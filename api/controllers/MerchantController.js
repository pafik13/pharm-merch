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

            Manager.findOne({
                "user": req.user.id
            }).exec(function(err, manager) {
                if (err) return res.json(400, err);

                if (!manager) {
                    console.log('Manager not found');
                    res.notFound("Manager not found");
                } else {
                    //console.log('Manager : ' + JSON.stringify(manager));

                    params.manager = manager;

                    //console.log('Params : ' + JSON.stringify(params));

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

                        //console.log('Params before Merchant: ' + JSON.stringify(params));

                        Merchant.create(params).exec(function(err, merhant) {
                            if (err) {
                                console.log('Before USER delete : ' + JSON.stringify(params.user));
                                User.destroy({
                                    "id": params.user.id
                                }).exec(function(err) {
                                    console.log('The user has been deleted! ' + err);
                                });
                                return res.json(400, err);
                            }

                            merhant.initPwd = params.initPwd;
                            merhant.initUsr = params.initUsr;
                            return res.ok(merhant);
                        });
                    });
                }

            });
            // var params = req.params.all();
            // delete params.action;

            // var ext = require('../extensions.js');

            // var rnd = Math.floor((Math.random() * 1000));
            // var username = ext.transliterate(params.lastName) + rnd;
            // var pwd = Math.floor((Math.random() * 1000000000));
            // var data = {
            //     username: username,
            //     email: params.email,
            //     head: params.manager
            // };

            // //console.log('CREATE USER');
            // //Creating user and password
            // User.create(data).exec(function(err, user) {
            //     if (err) return res.json(400, err);

            //     params.user = user.id;

            //     var data_passport = {
            //         user: user.id,
            //         password: pwd,
            //         protocol: "local"
            //     };
            //     console.log('CREATE PASSPORT');
            //     Passport.create(data_passport).exec(function(err, passport) {
            //         //console.log("user: %j", passport);
            //         if (err) return res.json(400, err);
            //         //res.passports = pwd.id;
            //         //User.update(res);
            //         params.initPwd = pwd;

            //         //console.log('UPDATE MERCHANT');
            //         Merchant.create(params).exec(function(err, merch) {
            //             if (err) return res.json(400, err);
            //             res.json(200, merch);;
            //         });

            //     });

            // });

        } else {
            //console.log('GOTO NEXT');
            return next();
        }
    },

    me: function(req, res) {
        Merchant.findOne({
                'user': req.user.id
            })
            // .populate('manager')
            // .populate('user')
            .exec(function(err, found) {
                if (err) return res.json(400, err);

                if (!found) {
                    return res.notFound("Не найден представитель с user:" + JSON.stringify(req.user));
                } else {
                    return res.ok(found);
                }
            });
        //res.ok(req.user);
    }
};
