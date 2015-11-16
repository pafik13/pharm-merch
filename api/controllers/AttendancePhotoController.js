/**
 * AttendancePhotoController
 *
 * @description :: Server-side logic for managing attendance_images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res, next) {
        var action = req.param('action');
        if (action == 'create') {
            var params = req.params.all();
            sails.log.info(" params : " + JSON.stringify(params));
            delete params.action;

            req.file('photo').upload({
                    dirname: sails.config.appPath + '/.tmp/public/attendance/photos'
                },
                function(err, uploadedFiles) {
                    if (err) return res.negotiate(err);
                    /*[{"fd":"/home/ubuntu/workspace/upload/images/06484f34-fe49-41a8-832a-b7112d5df9f3.jpg","size":45370,"type":"image/jpeg","filename":"mars.jpg","status":"bufferingOrWriting","field":"drugImage"}]*/
                    sails.log.info(" uploadedFiles : " + JSON.stringify(uploadedFiles));
                    params.photoPath = uploadedFiles[0].fd;
                    AttendancePhoto.create(params).exec(function(err, created) {
                        if (err) return res.negotiate(err);

                        AttendancePhoto.findOne({
                                "id": created.id
                            })
                            .populate('attendance')
                            .exec(function(err, found) {
                                if (err) {
                                    sails.log.error(err);
                                }

                                if (found) {
                                    sails.log.info(" AttendancePhoto : " + JSON.stringify(found))

                                    // FLICKR-TEST-START
                                    var Flickr = require("flickrapi"),
                                        flickrOptions = {
                                            api_key: "0a011a9d4767041dfa3a9cd9b8baf6bd",
                                            secret: "2ba1dc5261905051",
                                            user_id: "137787191@N07",
                                            access_token: "72157661172832266-71578a00da19fd16",
                                            access_token_secret: "36d2bed53a5309c3"
                                        };

                                    Flickr.authenticate(flickrOptions, function(error, flickr) {
                                        var uploadOptions = {
                                            photos: [{
                                                title: "Attendance_" + found.attendance.id + "_" + found.attendance.date.getFullYear(),
                                                tags: [
                                                    "Attendance_" + found.attendance.id,
                                                    "date : " + found.attendance.date
                                                ],
                                                photo: found.photoPath
                                            }]
                                        };

                                        sails.log.info(uploadOptions);

                                        Flickr.upload(uploadOptions, flickrOptions, function(err, result) {
                                            if (err) return res.negotiate(err);

                                            sails.log.info("photos uploaded", result);
                                        });
                                    });
                                    // FLICKR-TEST-END

                                } else {
                                    sails.log.warn("'AttendancePhoto' NOT FOUND");
                                }
                            });

                        return res.json(200, created);
                    });
                });
        } else {
            return next();
        }
    }

};
