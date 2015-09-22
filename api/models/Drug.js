/**
 * Drug.js
 *
 * @description :: Модель описывает сущность "Лекарственный препарат"
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        fullName: {
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
        barcode: 'string',
        articul: 'string',
        instruction: 'text',
        receller: {
            model: 'Company'
        }
    }
};
