/**
 * Attendance_image.js
 *
 * @description :: Фотографии с посещения
 * @docs        :: http://sailsjs.org/#!documentation/models
 * @example     :: curl -X POST -d "identifier=aksenov&password=q1234567" -c test.txt localhost:8080/auth/local
 *                 curl -b test.txt --form "drugImage=@mars.jpg" localhost:8080/Attendance_image/create
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
