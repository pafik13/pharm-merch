/**
 * AttendancePhoto.js
 *
 * @description :: Фотографии с посещения
 * @docs        :: http://sailsjs.org/#!documentation/models
 * @example     :: curl -i -X POST -H "Content-Type: multipart/form-data" -F "photo=@Desert.jpg" 0.0.0.0:3000/AttendancePhoto/create?attendance=1
 *
 */

module.exports = {
    attributes: {
        localID: {
            type: 'integer',
            required: true
        },
        attendance: {
            model: 'Attendance',
            required: true
        },
        drug: {
            model: 'Drug'
        },
        subType: {
            model: 'PhotoSubType',
            required: true
        },
        longitude: 'float',
        latitude: 'float',
        fileName: 'string',
        photoPath: 'string',
        storagePath: 'string',
        stamp: 'datetime'
    }
};
