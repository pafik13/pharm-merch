/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('lodash');

module.exports = {


    /**
     * `ReportController.testing()`
     */
    testing: function(req, res) {
        sails.log.error("user :" + JSON.stringify(req.user));

        var params = req.params.all();

        Attendance.find()
            .populate('pharmacy')
            .populate('merchant')
            .populate('photos')
            .exec(function(err, attendances) {
                if (err) {
                    sails.log.error(err);
                    return res.serverError(err);
                }

                if (!attendances.length) {
                    sails.log.warn("Attendances NOT found");
                    res.notFound("Attendances NOT found");
                } else {
                    attendances.forEach(function(attendance) {
                        console.log(attendance.id);

                        attendance.merchant.FIO = attendance.merchant.lastName + ' ' + attendance.merchant.firstName;

                        attendance.baseCity = "������";

                        if (!attendance.photos.length) {
                            sails.log.error("photos NOT found");
                            // results.push(attendance);
                        } else {
                            sails.log.info("photos is found");
                            sails.log.info(attendance.photos.length);

                            // var index = attendance.photos.photoPath.indexOf("/.tmp/public");
                            // attendance.photos.index = index;
                            // attendance.gpsDist = Number.MAX_VALUE;

                            attendance.photos.forEach(function(attPhoto) {
                                var pubStr = "/.tmp/public";
                                var index = attPhoto.photoPath.indexOf(pubStr) + pubStr.length;
                                attPhoto.index = index;
                                attPhoto.relPath = attPhoto.photoPath.substring(index);
                                //     var ext = require('../extensions.js');

                                //     console.log(attPhoto.id);
                                //     sails.log.info(attendance.pharmacy);

                                //     sails.log.info(attendance.pharmacy.longitude);
                                //     sails.log.info(attendance.pharmacy.latitude);
                                //     sails.log.info(attPhoto.longitude);
                                //     sails.log.info(attPhoto.latitude);

                                //     attendance.gpsDist = Math.min(
                                //         attendance.gpsDist,
                                //         ext.distance(
                                //             attendance.pharmacy.longitude,
                                //             attendance.pharmacy.latitude,
                                //             attPhoto.longitude,
                                //             attPhoto.latitude
                                //         ));

                                //     sails.log.info(attendance.gpsDist);

                            });

                            // if (attendance.gpsDist == Number.MAX_VALUE) {
                            //     attendance.gpsDist = NaN;
                            // };

                            // attendance.gpsDist = Math.round(attendance.gpsDist);
                            // sails.log.info("Befor push: " + attendance.gpsDist);
                            // results.push(attendance);
                        }
                    });

                    return res.view('testing', {
                        reportRows: attendances,
                        title: "����",
                        subtitle: "��� ����"
                    });
                }
            });

    },


    /**
     * `ReportController.merchants()`
     */
    merchants: function(req, res) {
        sails.log.error("user :" + JSON.stringify(req.user));

        Manager.findOne({
            "user": req.user.id
        }).exec(function(err, manager) {
            if (err) {
                sails.log.error(err);
                return res.serverError(err);
            }

            if (!manager) {
                sails.log.warn("Manager NOT found");
                res.notFound("Manager NOT found");
            } else {
                sails.log.info("Manager : " + JSON.stringify(manager));
                Merchant.find({
                        "manager": manager.id
                    }).populate('territory')
                    .populate('attendances')
                    .exec(function(err, merchants) {
                        if (err) {
                            sails.log.error(err);
                            return res.serverError(err);
                        }

                        if (!merchants.length) {
                            sails.log.warn("Merchants NOT found");
                            res.notFound("Merchants NOT found");
                        } else {
                            var ext = require('../extensions.js');

                            var now = new Date();
                            // var date = [now.getFullYear(), ext.addLeadZero(now.getMonth() + 1), ext.addLeadZero(now.getDate())].join("-");
                            // now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();

                            // var mon = new Date(now);
                            // mon.setDate(now.getDate() - now.getDay() + 1);
                            // var date1 = [mon.getFullYear(), ext.addLeadZero(mon.getMonth() + 1), ext.addLeadZero(mon.getDate())].join("-");
                            // mon.getFullYear() + "-" + mon.getMonth() + "-" + mon.getDate();

                            // var sun = new Date(now);
                            // sun.setDate(mon.getDate() + 6);
                            // var date2 = [sun.getFullYear(), ext.addLeadZero(sun.getMonth() + 1), ext.addLeadZero(sun.getDate())].join("-");
                            // sun.getFullYear() + "-" + sun.getMonth(sun) + "-" + sun.getDate();

                            var date2 = new Date(now);
                            var date1 = new Date(now);
                            date1.setDate(now.getDate() - 7);

                            return res.view('merchants', {
                                reportRows: merchants,
                                count: merchants.length,
                                dDate: now,
                                wDate1: date1,
                                wDate2: date2
                            });
                        }
                    });
            }
        });
    },


    /**
     * `ReportController.daily()`
     */
    daily: function(req, res) {
        var params = req.params.all();

        var start_date = params.date + "T00:00:00.000Z";

        var end_date = params.date + "T23:59:59.000Z";

        Attendance.find({
                merchant: params.id,
                date: {
                    ">=": new Date(start_date),
                    "<=": new Date(end_date)
                }
            })
            .populate('pharmacy')
            .populate('merchant')
            .populate('photos')
            .exec(function(err, attendances) {
                if (err) {
                    sails.log.error(err);
                    return res.serverError(err);
                }

                var results = [];
                var FIO;
                if (!attendances.length) {
                    sails.log.warn("Attendances NOT found");
                    res.notFound("Attendances NOT found");
                } else {
                    attendances.forEach(function(attendance) {
                        console.log(attendance.id);

                        FIO = attendance.merchant.lastName + ' ' + attendance.merchant.firstName;

                        attendance.baseCity = "������";

                        if (!attendance.photos.length) {
                            sails.log.error("photos NOT found");
                            results.push(attendance);
                        } else {
                            sails.log.info("photos is found");
                            sails.log.info(attendance.photos.length);

                            attendance.gpsDist = Number.MAX_VALUE;
                            var ext = require('../extensions.js');

                            attendance.photos.forEach(function(attPhoto) {

                                var pubStr = "/.tmp/public";
                                var index = attPhoto.photoPath.indexOf(pubStr) + pubStr.length;
                                attPhoto.index = index;
                                attPhoto.relPath = attPhoto.photoPath.substring(index);

                                if (attPhoto.longitude > 0 && attPhoto.latitude > 0) {

                                    console.log(attPhoto.id);
                                    sails.log.info(attendance.pharmacy);

                                    sails.log.info(attendance.pharmacy.longitude);
                                    sails.log.info(attendance.pharmacy.latitude);
                                    sails.log.info(attPhoto.longitude);
                                    sails.log.info(attPhoto.latitude);

                                    attendance.gpsDist = Math.min(
                                        attendance.gpsDist,
                                        ext.distance(
                                            attendance.pharmacy.longitude,
                                            attendance.pharmacy.latitude,
                                            attPhoto.longitude,
                                            attPhoto.latitude
                                        ));

                                    sails.log.info(attendance.gpsDist);
                                }
                            });

                            if (attendance.gpsDist == Number.MAX_VALUE) {
                                attendance.gpsDist = NaN;
                            };

                            attendance.gpsDist = Math.round(attendance.gpsDist);
                            sails.log.info("Befor push: " + attendance.gpsDist);
                            results.push(attendance);
                        }
                    });

                    return res.view('daily', {
                        reportRows: results,
                        title: "�������",
                        subtitle: "����� �� ������� ���� - " + FIO
                    });
                }
            });


    },


    /**
     * `ReportController.dailyAll()`
     */
    dailyAll: function(req, res) {
        var params = req.params.all();

        var start_date = params.date + "T00:00:00.000Z";

        var end_date = params.date + "T23:59:59.000Z";

        Attendance.find({
                date: {
                    ">=": new Date(start_date),
                    "<=": new Date(end_date)
                }
            })
            .populate('pharmacy')
            .populate('merchant')
            .populate('photos')
            .exec(function(err, attendances) {
                if (err) {
                    sails.log.error(err);
                    return res.serverError(err);
                }

                var results = [];

                if (!attendances.length) {
                    sails.log.warn("Attendances NOT found");
                    res.notFound("Attendances NOT found");
                } else {
                    attendances.forEach(function(attendance) {
                        console.log(attendance.id);

                        attendance.baseCity = "������";

                        if (!attendance.photos.length) {
                            sails.log.error("photos NOT found");
                            results.push(attendance);
                        } else {
                            sails.log.info("photos is found");
                            sails.log.info(attendance.photos.length);

                            attendance.gpsDist = Number.MAX_VALUE;

                            var ext = require('../extensions.js');

                            attendance.photos.forEach(function(attPhoto) {

                                var pubStr = "/.tmp/public";
                                var index = attPhoto.photoPath.indexOf(pubStr) + pubStr.length;
                                attPhoto.index = index;
                                attPhoto.relPath = attPhoto.photoPath.substring(index);

                                if (attPhoto.longitude > 0 && attPhoto.latitude > 0) {
                                    console.log(attPhoto.id);
                                    sails.log.info(attendance.pharmacy);

                                    sails.log.info(attendance.pharmacy.longitude);
                                    sails.log.info(attendance.pharmacy.latitude);
                                    sails.log.info(attPhoto.longitude);
                                    sails.log.info(attPhoto.latitude);

                                    attendance.gpsDist = Math.min(
                                        attendance.gpsDist,
                                        ext.distance(
                                            attendance.pharmacy.longitude,
                                            attendance.pharmacy.latitude,
                                            attPhoto.longitude,
                                            attPhoto.latitude
                                        ));

                                    sails.log.info(attendance.gpsDist);
                                }
                            });

                            if (attendance.gpsDist == Number.MAX_VALUE) {
                                attendance.gpsDist = NaN;
                            };

                            attendance.gpsDist = Math.round(attendance.gpsDist);
                            sails.log.info("Befor push: " + attendance.gpsDist);
                            results.push(attendance);
                        }
                    });

                    return res.view('daily', {
                        reportRows: results,
                        title: "�������",
                        subtitle: "����� ����� �� ������� ���� �� ���� ��������������"
                    });
                }
            });
    },

    /**
     * `ReportController.weekly()`
     */
    weekly: function(req, res) {
        var params = req.params.all();

        var start_date = params.date1 + "T00:00:00.000Z";

        var end_date = params.date2 + "T23:59:59.000Z";

        Attendance.find({
                merchant: params.id,
                date: {
                    ">=": new Date(start_date),
                    "<=": new Date(end_date)
                }
            })
            .populate('pharmacy')
            .populate('merchant')
            .populate('photos')
            .exec(function(err, attendances) {
                if (err) {
                    sails.log.error(err);
                    return res.serverError(err);
                }

                var accept = [];
                var notAccept = [];
                var FIO;

                if (!attendances.length) {
                    sails.log.warn("Attendances NOT found");
                    res.notFound("Attendances NOT found");
                } else {
                    attendances.forEach(function(attendance) {
                        console.log(attendance.id);

                        FIO = attendance.merchant.lastName + ' ' + attendance.merchant.firstName;

                        if (!attendance.photos.length) {
                            sails.log.info("photos NOT found");
                            notAccept.push(attendance);
                        } else {
                            sails.log.info("photos is found");
                            sails.log.info(attendance.photos.length);

                            attendance.gpsDist = Number.MAX_VALUE;

                            attendance.photos.forEach(function(attPhoto) {
                                var ext = require('../extensions.js');

                                console.log(attPhoto.id);
                                sails.log.info(attendance.pharmacy);

                                sails.log.info(attendance.pharmacy.longitude);
                                sails.log.info(attendance.pharmacy.latitude);
                                sails.log.info(attPhoto.longitude);
                                sails.log.info(attPhoto.latitude);

                                attendance.gpsDist = Math.min(
                                    attendance.gpsDist,
                                    ext.distance(
                                        attendance.pharmacy.longitude,
                                        attendance.pharmacy.latitude,
                                        attPhoto.longitude,
                                        attPhoto.latitude
                                    ));

                                sails.log.info(attendance.gpsDist);

                            });

                            if (attendance.gpsDist == Number.MAX_VALUE) {
                                attendance.gpsDist = NaN;
                                notAccept.push(attendance);
                            };

                            attendance.gpsDist = Math.round(attendance.gpsDist);
                            sails.log.info("Befor push: " + attendance.gpsDist);
                            if (attendance.gpsDist > 1000) {
                                notAccept.push(attendance);
                            } else {
                                accept.push(attendance)
                            }
                        }
                    });

                    var results = [],
                        result = {};

                    result.city = "������";
                    result.FIO = FIO;
                    result.accepted = accept.length;
                    result.notAccepted = notAccept.length;
                    result.plan = 75;
                    result.attendances = accept.length + notAccept.length;
                    result.debt = result.plan - accept.length;

                    results.push(result);
                    return res.view('weekly', {
                        reportRows: results,
                        title: "���������",
                        subtitle: "����� �� ������� ������ " + FIO
                    });
                }
            });
    },

    /**
     * `ReportController.weekly()`
     */
    weeklyAll: function(req, res) {
        var params = req.params.all();

        var start_date = params.date1 + "T00:00:00.000Z";

        var end_date = params.date2 + "T23:59:59.000Z";

        Attendance.find({
                date: {
                    ">=": new Date(start_date),
                    "<=": new Date(end_date)
                }
            })
            .populate('pharmacy')
            .populate('merchant')
            .populate('photos')
            .exec(function(err, attendances) {
                if (err) {
                    sails.log.error(err);
                    return res.serverError(err);
                }

                var results = [];
                // var currId = -1;
                if (!attendances.length) {
                    sails.log.warn("Attendances NOT found");
                    res.notFound("Attendances NOT found");
                } else {
                    attendances.forEach(function(attendance) {
                        console.log(attendance.id);

                        if (!attendance.photos.length) {
                            sails.log.error("photos NOT found");
                            results.push(attendance);
                        } else {
                            sails.log.info("photos is found");
                            sails.log.info(attendance.photos.length);

                            attendance.gpsDist = Number.MAX_VALUE;

                            attendance.photos.forEach(function(attPhoto) {
                                var ext = require('../extensions.js');

                                console.log(attPhoto.id);
                                sails.log.info(attendance.pharmacy);

                                sails.log.info(attendance.pharmacy.longitude);
                                sails.log.info(attendance.pharmacy.latitude);
                                sails.log.info(attPhoto.longitude);
                                sails.log.info(attPhoto.latitude);

                                attendance.gpsDist = Math.min(
                                    attendance.gpsDist,
                                    ext.distance(
                                        attendance.pharmacy.longitude,
                                        attendance.pharmacy.latitude,
                                        attPhoto.longitude,
                                        attPhoto.latitude
                                    ));

                                sails.log.info(attendance.gpsDist);

                            });

                            if (attendance.gpsDist == Number.MAX_VALUE) {
                                attendance.gpsDist = NaN;
                            };

                            attendance.gpsDist = Math.round(attendance.gpsDist);
                            sails.log.info("Befor push: " + attendance.gpsDist);
                            results.push(attendance);
                        }
                    });

                    return res.view('weekly', {
                        reportRows: results,
                        count: results.length
                    });
                }
            });
    },

    /**
     * `ReportController.monthly()`
     */
    monthly: function(req, res) {
        return res.json({
            todo: 'monthly() is not implemented yet!'
        });
    }
};
