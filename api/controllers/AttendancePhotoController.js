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
                    AttendancePhoto.create(params).exec(function(err, photo) {
                        if (err) return res.negotiate(err);

                        return res.json(200, photo);
                    });
                });
        } else {
            return next();
        }
    }

};
