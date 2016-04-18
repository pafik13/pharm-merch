(function() {
  'use strict';

  angular
    .module('App')
    .factory('morris', morris);

  morris.$inject = ['$window'];

  function morris($window) {
    // place lodash include before angular
    return $window.Morris;
  }
})();