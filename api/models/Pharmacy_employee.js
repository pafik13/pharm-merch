/**
 * Pharmacy_employee.js
 *
 * @description :: Сотрудник аптеки
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        firstName: 'string',
        middleName: 'string',
        lastName: 'string',
        sex: 'integer',
        phone: 'string',
        email: 'string',
        job_role: 'string',
        pharmacy: {
            model: 'Pharmacy'
        }


    }
};
