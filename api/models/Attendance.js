/**
 * Attendance.js
 *
 * @description :: Модель описывает сущность "Посещение аптеки"
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        localID: {
            type: 'integer',
            required: true
        },
        merchant: {
            model: 'Merchant',
            required: true
        },
        pharmacy: {
            model: 'Pharmacy',
            required: true
        },
        date: {
            type: 'datetime',
            required: true
        },
        distance: 'float',
        category_net: {
            model: 'CategoryInNet'
        },
        telephone: 'string',
        purchaserFIO: 'string',
        promos: {
            collection: 'Promo'
        },
        pharmacistCount: 'integer',
        results: {
            collection: 'AttendanceResult',
            via: 'attendance'
        },
        photos: {
            collection: 'AttendancePhoto',
            via: 'attendance'
        },
        points: {
            collection: 'AttendanceGPSPoint',
            via: 'attendance'
        }
    }
};
