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
        lastName: {
            type: 'string',
            required: true
        },
        // Фамилия + Инициалы
        shortName: 'string',
        // Полное ФИО
        fullName: 'string',
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
    },

    // Lifecycle Callbacks
    beforeCreate: function(values, cb) {

        values.shortName = values.lastName;
        values.fullName = values.lastName;

        if (!!values.firstName) {
            values.shortName = values.shortName + " " + values.firstName.substring(0, 1) + ".";
            values.fullName = values.fullName + " " + values.firstName;

            if (!!values.middleName) {
                values.shortName = values.shortName + " " + values.middleName.substring(0, 1) + ".";
                values.fullName = values.fullName + " " + values.middleName;
            }
        }

        //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
        cb();
    },

    // Lifecycle Callbacks
    beforeUpdate: function(valuesToUpdate, cb) {

        valuesToUpdate.shortName = valuesToUpdate.lastName;
        valuesToUpdate.fullName = valuesToUpdate.lastName;

        if (!!valuesToUpdate.firstName) {
            valuesToUpdate.shortName = valuesToUpdate.shortName + " " + valuesToUpdate.firstName.substring(0, 1) + ".";
            valuesToUpdate.fullName = valuesToUpdate.shortName + " " + valuesToUpdate.firstName;

            if (!!valuesToUpdate.middleName) {
                valuesToUpdate.shortName = valuesToUpdate.shortName + " " + valuesToUpdate.middleName.substring(0, 1) + ".";
                valuesToUpdate.fullName = valuesToUpdate.shortName + " " + valuesToUpdate.middleName;
            }
        }

        //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
        cb();
    }

};
