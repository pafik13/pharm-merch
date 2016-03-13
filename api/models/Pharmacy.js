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
            size: 255
        },
        shortName: {
            type: 'string',
            size: 64,
            required: true,
        },
        officialName: {
            type: 'string',
            size: 255,
        },
        address: {
            type: 'string',
            size: 510,
            required: true,
        },
        longitude: 'float',
        latitude: 'float',
        subway: {
            type: 'string',
            size: 64,
        },
        territory: {
            model: 'Territory'
        },
        phone: {
            type: 'string',
            size: 20,
        },
        email: {
            type: 'string',
            size: 64,
        },
        categorySBL: {
            type: 'string',
            size: 64,
        },
        categoryOTC: {
            type: 'string',
            size: 64,
        },
        codeSBL: {
            type: 'string',
            size: 32,
        },
        layoutType: {
            model: 'PharmacyLayoutType'
        },
        avgTicket: 'float',
        traffic: 'integer',
        tradenet: {
            model: 'Tradenet'
        },
        hospitals: {
            collection: 'Hospital'
        },
        valid: 'boolean',
        validated: {
            model: 'User'
        },
        validatedAt: 'datetime',
    },

};
