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
        }
    }
};
