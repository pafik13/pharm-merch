/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/login': {
    view: 'login'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  '/'                       : 'MainController.main',
  '/admin'                  : 'MainController.admin',
  '/guest'		    		: 'MainController.guest',
  '/Manager/:action'        : 'ManagerController.main',
  '/Pharmacy/:action/:id'   : 'PharmacyController.main',
  '/Merchant/:action/:id'   : 'MerchantController.main',
  '/Merchant/:action'       : 'MerchantController.main',
  '/AttendancePhoto/:action': 'AttendancePhotoController.main',
  '/admin/query'            : 'AdminController.main',
  '/Report/Merchants'       : 'ReportController.merchants',
  '/Report/Daily'           : 'ReportController.daily',
  '/Report/Weekly'          : 'ReportController.weekly',
  '/Report/Daily/:id'       : 'ReportController.daily',
  '/Report/Monthly'         : 'ReportController.monthly',
  '/Report/Pharmacies'      : 'ReportController.pharmacies',
  '/Report/Generate'        : 'ReportController.generate',
  '/:Model/count'           : 'MainController.count',
  'POST /Pharmacy'          : 'PharmacyController.create',
  'POST /Pharmacy/create'   : 'PharmacyController.create',
  'PUT /Pharmacy/:id?'      : 'PharmacyController.update',

};
