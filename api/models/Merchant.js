/**
 * Merchant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
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
        manager: {
            model: 'User',
            required: true
        }

    }
};
