/**
 * TerritoryController
 *
 * @description :: Server-side logic for managing Territories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    pop: function(req, res) {
        Territory.find().populate('pharmacies').exec(function(err, found) {
            if (err) return res.json(400, err);;

            console.log("Func POP is evaluated!");
            return res.json(200, found);
        });
    },
};
