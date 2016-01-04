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
        drugsInWeek: 'integer',
        startWeek: 'integer',
        photoTypes: {
            collection: 'PhotoType',
        },
        // manager: {
        //     model: 'Manager',
        //     required: true
        // },
        drugs: {
            collection: 'Drug',
            via: 'projects'
        },
        infos: {
            collection: 'DrugInfoType'
        },
        netCats: {
            collection: 'CategoryInNet'
        },
        promos: {
            collection: 'Promo'
        },
        categoryInNet: {
            collection: 'CategoryInNet'
        },
        druginfotypes: {
            collection: 'DrugInfoType'
        },
        merchants: {
            collection: 'Merchant',
            via: 'project'
        }

    }
};
