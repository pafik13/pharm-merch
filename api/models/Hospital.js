/**
 * Hospital.js
 *
 * @description :: Схема описывает сущность "Поликлиника".
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
        description: 'string',
        address: 'string',
        phone: 'string',
        email: 'string',
        pharmacies: {
            collection: 'Pharmacy'
        }
    }
};
