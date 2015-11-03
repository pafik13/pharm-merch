/**
 * Attendance_imageController
 *
 * @description :: Server-side logic for managing attendance_images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res, next) {
        var action = req.param('action');
        if (action == 'create') {
            var params = req.params.all();
            delete params.action;

            req.file('drugImage').upload({
                    dirname: sails.config.appPath + '/upload/images'
                },
                function(err, uploadedFiles) {
                    if (err) return res.negotiate(err);
                    /*[{"fd":"/home/ubuntu/workspace/upload/images/06484f34-fe49-41a8-832a-b7112d5df9f3.jpg","size":45370,"type":"image/jpeg","filename":"mars.jpg","status":"bufferingOrWriting","field":"drugImage"}]*/
                    params.image_path = uploadedFiles[0].fd;
                    Attendance_image.create(params).exec(function(err, image) {
                        if (err) return res.negotiate(err);

                        return res.ok(200, "File loaded.");
                    });
                });
        } else {
            return next();
        }
    }

};
