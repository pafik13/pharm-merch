/**
 * Attendance.js
 *
 * @description :: Модель описывает сущность "Посещение аптеки"
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        user: {
            model: 'Merchant'
        },
        pharmacy: {
            model: 'Pharmacy'
        },
        attendance_date: 'date'
    }
};
