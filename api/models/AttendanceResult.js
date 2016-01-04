/**
 * AttendanceResult.js
 *
 * @description :: Модель описывает связь "Посещение аптеки - Кол-во лекарственного препарата в аптеке"
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        attendance: {
            model: 'Attendance',
            required: true
        },
        drug: {
            model: 'Drug'
        },
        info: {
            model: 'DrugInfoType'
        },
        value: 'string'
    }
};
