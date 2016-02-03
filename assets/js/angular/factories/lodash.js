(function() {
  'use strict';

  angular
    .module('App')
    .factory('_', lodash);

  lodash.$inject = ['$window'];

  function lodash($window) {
    // place lodash include before angular
    return $window._;
  }
})();