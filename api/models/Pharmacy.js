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
            unique: true,
            index: true
        },
        shortName: {
            type: 'string',
            unique: true,
            index: true
        },
        officialName: {
            type: 'string',
            unique: true,
            index: true
        },
        address: {
            type: 'string',
            required: true
        },
        subway: 'string',
        phone: 'string',
        email: 'string',
        //avg_purchase_amount
        avg_purchase: 'integer',
        traffic: 'integer',
        // reference to trademark
        tradenet: {
            model: 'Company'
        },
        // reference to hospitals
        hospitals: {
            collection: 'Hospital'
        }

    }
};
