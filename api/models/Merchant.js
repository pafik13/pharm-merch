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
            model: 'Manager',
            required: true
        },
        user: {
            model: 'User'
        },
        territory: {
            collection: 'Territory'
        },
        initPwd: 'string',

        // Lifecycle Callbacks
        beforeCreate: function(values, next) {
            console.log('beforeCreate');
            /*
            var ext = require('../extensions.js');
            var rnd = Math.floor((Math.random() * 1000));
            //console.log(rnd);
            var username = ext.transliterate(values.lastName) + rnd;
            //console.log(username);
            var data = {
                username: username,
                email: values.email,
                firstName: values.firstName,
                middleName: values.middleName,
                lastName: values.lastName,
                head: values.manager
            };
            console.log('Data: %j', data);
            
            User.create(data).exec(function(err, res) {
                console.log('Data: %j', res);
                if (err) return next(err);
                values.user = res.id;

            });
            next();
			*/
        }

    }
};
