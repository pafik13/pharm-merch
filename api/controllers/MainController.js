/**
 * NewController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        return res.view('main');
    },
    manager: function(req, res) {
        return res.view('manager');
    }
};
