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
                                    //sails.log.info(" AttendancePhoto : " + JSON.stringify(found));
                                    var k = found.photoPath.replace(/^.*[\\\/]/, '');

                                    var keyid = process.env.AWS_KEYID;
                                    var secr = process.env.AWS_SECRET;

                                    // AMAZON AWS S3
                                    var aws = require('aws-sdk');
                                    aws.config.update({
                                        accessKeyId: keyid,
                                        secretAccessKey: secr,
                                        signatureVersion: 'v4'
                                    });
                                    var ep = new aws.Endpoint('http://pharm-merch.s3-website.eu-central-1.amazonaws.com');
                                    var s3 = new aws.S3(ep);
                                    require('fs').readFile(found.photoPath, function(err, data) {
                                        if (err) {
                                            throw err;
                                        }

                                        var params = {
                                            Bucket: 'pharm-merch',
                                            Key: k,
                                            Body: data,
                                            ACL: 'public-read'
                                        };
                                        var r = s3.upload(params);
                                        r.send();
                                    });
                                    found.storagePath = 'http://pharm-merch.s3-website.eu-central-1.amazonaws.com/' + k;
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
