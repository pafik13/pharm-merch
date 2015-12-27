/**
 * Pharmacy.js
 *
 * @description :: Модель описывает сущность "Аптека"
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        fullName: {
            type: 'string',
        },
        shortName: {
            type: 'string',
        },
        officialName: {
            type: 'string',
        },
        address: {
            type: 'string',
            required: true
        },
        territory: {
            model: 'Territory'
        },
        longitude: 'float',
        latitude: 'float',
        subway: 'string',
        phone: 'string',
        email: 'string',
        category_otc: 'string',
        category_sbl: 'string',
        code_sbl: 'string',
        avg_purchase: 'integer',
        traffic: 'integer',
        tradenet: {
            model: 'Tradenet'
        },
        hospitals: {
            collection: 'Hospital'
        },
        merchant: {
            model: 'Merchant'
        },
        validated: 'boolean',
        validator: {
            model: 'User'
        },
        validatedAt: 'datetime',

        // Lifecycle Callbacks
        afterUpdate: function(values, cb) {
            if (values.validated) {
                values.validatedAt = new Date();
                cb();
            }
        }

    }
};
