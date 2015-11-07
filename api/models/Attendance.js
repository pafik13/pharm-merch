/**
 * Attendance.js
 *
 * @description :: Модель описывает сущность "Посещение аптеки"
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        merchant: {
            model: 'Merchant'
        },
        pharmacy: {
            model: 'Pharmacy'
        },
        date: 'datetime',
        distance: 'float',
        results: {
            collection: 'AttendanceResult',
            via: 'attendance'
        },
        photos: {
            collection: 'AttendancePhoto',
            via: 'attendance'
        }
    }
};
