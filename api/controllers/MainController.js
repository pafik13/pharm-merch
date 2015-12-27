/**
 * NewController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        User.findOne(req.user.id).exec(function(err, found) {
            if (err) return res.serverError(err);

            if (!found) {
                return res.notFound('Не найден USER в MainController.main');
            };

            switch (found.username) {
                case 'admin':
                    return res.redirect('/admin');
                    break;
                case 'guest':
                    return res.redirect('/guest');
                    break;
                default:
                    Manager.findOne({
                        "user": found.id
                    }).exec(function(err, manager) {
                        if (err) return res.serverError(err);

                        if (!manager) {
                            return res.notFound('�� ������ MANAGER � MainController.main');
                        };

                        var ext = require('../extensions.js');

                        var now = new Date();
                        var date = [now.getFullYear(), ext.addLeadZero(now.getMonth() + 1), ext.addLeadZero(now.getDate())].join("-");
                        // now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();

                        var mon = new Date(now);
                        mon.setDate(now.getDate() - now.getDay() + 1);
                        var date1 = [mon.getFullYear(), ext.addLeadZero(mon.getMonth() + 1), ext.addLeadZero(mon.getDate())].join("-");
                        // mon.getFullYear() + "-" + mon.getMonth() + "-" + mon.getDate();

                        var sun = new Date(now);
                        sun.setDate(mon.getDate() + 6);
                        var date2 = [sun.getFullYear(), ext.addLeadZero(sun.getMonth() + 1), ext.addLeadZero(sun.getDate())].join("-");
                        // sun.getFullYear() + "-" + sun.getMonth(sun) + "-" + sun.getDate();

                        return res.view('manager', {
                            "manager": manager,
                            dDate: now,
                            date1: date1,
                            date2: date2
                        });
                    });
            };
        });
    },

    admin: function(req, res) {
        return res.view('admin');
    },

    guest: function(req, res) {
        return res.view('guest');
    },

    reports: function(req, res) {
        User.findOne(req.user.id).exec(function(err, found) {
            if (err) return res.serverError(err);

            if (!found) {
                return res.notFound('Не найден USER в MainController.reports');
            };

            Manager.findOne({
                "user": found.id
            }).exec(function(err, manager) {
                if (err) return res.serverError(err);

                if (!manager) {
                    return res.notFound('Не найден MANAGER в MainController.reports');
                };

                return res.view('report', {
                    "manager": manager
                });
            });
        });
    }
};
