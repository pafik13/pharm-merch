/**
 * DownloadController
 *
 * @description :: Server-side logic for managing downloads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    main: function(req, res) {
        res.set('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet ');
        res.send(200, '<table><tr><td>asdf</td></tr></table>');
    }
};
