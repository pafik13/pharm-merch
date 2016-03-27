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
                    dirname: sails.config.appPath + '/upload/images'
                },
                function(err, uploadedFiles) {
                    if (err) return res.negotiate(err);
                    /*[{"fd":"/home/ubuntu/workspace/upload/images/06484f34-fe49-41a8-832a-b7112d5df9f3.jpg","size":45370,"type":"image/jpeg","filename":"mars.jpg","status":"bufferingOrWriting","field":"drugImage"}]*/
                    //sails.log.info(" uploadedFiles : " + JSON.stringify(uploadedFiles));
                    params.photoPath = uploadedFiles[0].fd;
                    params.filename = uploadedFiles[0].filename;
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
                                    //sails.log.info(" AttendancePhoto : " + JSON.stringify(found));
                                    var k = found.photoPath.replace(/^.*[\\\/]/, '');

                                    // AMAZON AWS S3
                                    //sails.log.info("AMAZON AWS S3");
                                    var aws = require('aws-sdk');
                                    aws.config.update({
                                        accessKeyId: sails.config.aws.apiKey,
                                        secretAccessKey: sails.config.aws.apiSecret,
                                        signatureVersion: 'v4'
                                    });
                                    var ep = new aws.Endpoint(sails.config.aws.endPoint);
                                    var s3 = new aws.S3(ep);
                                    require('fs').readFile(found.photoPath, function(err, data) {
                                        if (err) {
                                            throw err;
                                        }

                                        var params = {
                                            Bucket: sails.config.aws.bucket,
                                            Key: k,
                                            Body: data,
                                            ACL: 'public-read'
                                        };
                                        var r = s3.upload(params);
                                        r.send();
                                    });
                                    found.storagePath = sails.config.aws.endPoint + k;
                                    AttendancePhoto.update({
                                        id: found.id
                                    }, {
                                        storagePath: found.storagePath
                                    }).exec(function(err, upd) {
                                        if (err) return res.negotiate(err);

                                        return res.json(200, upd);
                                    });
                                    //pharm-merch.s3-website.eu-central-1.amazonaws.com
                                } else {
                                    sails.log.warn("'AttendancePhoto' NOT FOUND");
                                }
                            });

                        //return res.json(200, created);
                    });
                });
        } else {
            return next();
        }
    }

};
