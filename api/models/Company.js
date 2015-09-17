/**
 * Company.js
 *
 * @description :: Модель описывает сущность "Производитель".
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
        company_type: 'string',
        description: 'string',
        drugs: {
            collection: 'Drug'
        }
    }
};
