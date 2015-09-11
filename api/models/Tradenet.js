/**
 * Tradenet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        fullName: {
            type: 'string',
            index: true
        },
        shortName: {
            type: 'string',
            index: true
        },
        description: 'string',
        company: {
            model: 'Company'
        },
        pharmacies: {
            collection: 'Pharmacy'
        }

    }
};
