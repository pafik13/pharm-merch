/**
 * MainController
 *
 * @description :: Server-side logic for managing routs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        User.findOne(req.user.id).exec(function(err, found) {
            if (err) return res.serverError(err);

            if (!found) {
                return res.notFound('Не найден USER в MainController.main');
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
                        if (err) return res.serverError(err);

                        if (!manager) {
                            return res.notFound('Не найден MANAGER в MainController.main');
                        };

                        return res.view('manager', {
                            'manager': manager
                        });
                    });
            };
        });
    },

    admin: function(req, res) {
        User.findOne(req.user.id).exec(function(err, user) {
            if (err) return res.serverError(err);

            if (!user) {
                return res.notFound('Не найден USER в MainController.main');
            } else {
                if (!(user.username == 'admin')) {
                    return res.forbidden({
                        'msg': 'У Вас недостаточно прав для доступа к этой части сайта.'
                    });
                }
            }

            return res.view('admin', {
                'admin': user
            });
        });
    },

    guest: function(req, res) {
        return res.view('guest');
    },

    count: function(req, res) {
        var params = req.params.all();

        if ('Model' in params) {
            var model = params.Model.toLowerCase();
            if (model in sails.models) {
                sails.models[model].count(function(err, cnt) {
                    if (err) return res.serverError(err);

                    return res.ok({
                        count: cnt
                    });
                });
            } else {
                return res.serverError('Model not found.');
            }
        } else {
            return res.serverError('Model not found.');
        }
    },
};
