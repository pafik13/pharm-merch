/**
 * Manager.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        firstName: 'string',
        middleName: 'string',
        lastName: 'string',
        sex: {
            type: 'integer',
            required: true
        },
        phone: 'string',
        email: 'string',
        job_role: 'string',
        head: {
            model: 'User'
        },
        user: {
            model: 'User'
        },
    }
};
