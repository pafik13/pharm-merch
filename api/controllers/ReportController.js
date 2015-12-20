/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `ReportController.testing()`
     */
    testing: function(req, res) {
        var params = req.params.all();
<<<<<<< HEAD

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

                        attendance.baseCity = "Москва";

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
                        title: "Фото",
                        subtitle: "Все фото"
                    });
                }
            });
=======
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
>>>>>>> master

    },

    /**
     * `ReportController.merchants()`
     */
    merchants: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    },

    /**
     * `ReportController.daily()`
     */
    daily: function(req, res) {
        var params = req.params.all();
<<<<<<< HEAD

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

                        attendance.baseCity = "Москва";

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
                                //attPhoto.relPath = attPhoto.photoPath.substring(index);
                                attPhoto.relPath = attPhoto.storagePath;

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
                        title: "Дневной",
                        subtitle: "Отчет за текущий день - " + FIO
                    });
                }
            });


=======
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
>>>>>>> master
    },

    /**
     * `ReportController.dailyAll()`
     */
    dailyAll: function(req, res) {
        var params = req.params.all();
<<<<<<< HEAD

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

                        attendance.baseCity = "Москва";

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
                                //attPhoto.relPath = attPhoto.photoPath.substring(index);
                                attPhoto.relPath = attPhoto.storagePath;

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
                        title: "Дневной",
                        subtitle: "Общий отчет за текущий день по всем мерчендайзерам"
                    });
                }
            });
=======
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
>>>>>>> master
    },

    /**
     * `ReportController.weekly()`
     */
    weekly: function(req, res) {
        var params = req.params.all();
<<<<<<< HEAD

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

                    result.city = "Москва";
                    result.FIO = FIO;
                    result.accepted = accept.length;
                    result.notAccepted = notAccept.length;
                    result.plan = 75;
                    result.attendances = accept.length + notAccept.length;
                    result.debt = result.plan - accept.length;

                    results.push(result);
                    return res.view('weekly', {
                        reportRows: results,
                        title: "Недельный",
                        subtitle: "Отчет за текущую неделю " + FIO
                    });
                }
            });
=======
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
>>>>>>> master
    },

    /**
     * `ReportController.weekly()`
     */
    weeklyAll: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    },

    /**
     * `ReportController.monthly()`
     */
    monthly: function(req, res) {
        var params = req.params.all();
        var query = 'select * from public.User';
        Report.query(query, function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results.rows);
        });
    }
};
