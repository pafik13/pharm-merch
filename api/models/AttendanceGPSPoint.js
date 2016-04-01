/**
 * AttendanceGPSPoint.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
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
        longitude: 'float',
        latitude: 'float',
        provider: 'string',
        stamp: 'datetime'
    }
};
