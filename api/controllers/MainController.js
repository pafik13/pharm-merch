/**
 * NewController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        User.findOne(req.user.id).exec(function(err, found) {
            if (err) return res.notFound(err);

            if (!found) {
                return res.notFound('Не найден USER в MainController.main при запросе VIEW');
            };

            switch (found.username) {
                case 'admin':
                    return res.redirect('/admin');
                    break;
                case 'guest':
                    return res.redirect('/guest');
                    break;
                default:
                    Manager.findOne({
                        "user": found.id
                    }).exec(function(err, manager) {
                        if (err) return res.notFound(err);

                        if (!manager) {
                            return res.notFound('Не найден MANAGER в MainController.main  при запросе VIEW');
                        };

                        return res.view('manager', {
                            "manager": manager
                        });
                    });
            };
        });
    },

    admin: function(req, res) {
        return res.view('admin');
    },

    guest: function(req, res) {
        return res.view('guest');
    }
};
