/**
 * Attendance_image.js
 *
 * @description :: Фотографии с посещения
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        attendance: {
            model: 'Attendance'
        },
        drug: {
            model: 'Drug'
        },
        image_path: 'string'
    }
};
