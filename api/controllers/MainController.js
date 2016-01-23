/**
 * NewController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function findMe(user_id, callback) {
    var query = ['select u.id uid, m.id as mid, mc.id as mcid from public.user as u ',
        'left outer join public.manager as m on (m.user = u.id) ',
        'left outer join public.merchant as mc on (mc.user = u.id) ',
        'where u.id = ' + user_id
    ].join('');
    //console.log(query);
    User.query(query,
        function(err, results) {
            callback(err, results);
        });
}

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
        findMe(req.user.id, function(err, result) {
            if (err) return res.negotiate(err);
            if (result.rowCount == 1) {
                var mid = result.rows[0].mid;
                var mcid = result.rows[0].mcid;
                if (mid != null && mcid == null) {
                    return res.view('admin', {
                        'manager': {
                            id: mid
                        }
                    });

                } else {
                    return res.negotiate("You don't have permissions to view this page.");
                }
            } else {
                return res.negotiate('Error user type detection.')
            }
        });
    },

    guest: function(req, res) {
        return res.view('guest');
    },

    report: function(req, res) {
        findMe(req.user.id, function(err, result) {
            if (err) return res.negotiate(err);
            if (result.rowCount == 1) {
                var mid = result.rows[0].mid;
                var mcid = result.rows[0].mcid;
                if (mid != null && mcid == null) {
                    return res.view('report', {
                        'manager': {
                            id: mid
                        }
                    });

                } else {
                    return res.negotiate("You don't have permissions to view this page.");
                }
            } else {
                return res.negotiate('Error user type detection.')
            }
        });
    },
    reports: function(req, res) {
        User.findOne(req.user.id).exec(function(err, found) {
            if (err) return res.serverError(err);

            if (!found) {
                return res.notFound('�� ������ USER � MainController.reports');
            };

            Manager.findOne({
                "user": found.id
            }).exec(function(err, manager) {
                if (err) return res.serverError(err);

                if (!manager) {
                    return res.notFound('�� ������ MANAGER � MainController.reports');
                };

                return res.view('report', {
                    "manager": manager
                });
            });
        });
    },
    count: function(req, res) {
        var params = req.params.all();

        if ('Model' in params) {
            var model = params.Model;
            if (model.toLowerCase() in sails.models) {
                sails.models[model.toLowerCase()].count(function(error, find) {
                    if (error) return res.negotiate(error);

                    return res.json(200, {
                        count: find
                    });
                });
            } else {
                return res.negotiate('Model not found.');
            }
        } else {
            return res.negotiate('Model not found.');
        }

    }
};
