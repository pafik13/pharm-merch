/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        fullName: 'string',
        description: 'text',
        // manager: {
        //     model: 'Manager',
        //     required: true
        // },
        drugs: {
            collection: 'Drug'
        },
        druginfotypes: {
            collection: 'DrugInfoType'
        },
        merchants: {
            collection: 'Merchant'
        }

    }
};
