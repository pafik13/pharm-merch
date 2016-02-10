(function() {
  'use strict';

  angular
    .module('App')
    .controller('PromoController', PromoController);

    PromoController.inject = ['$scope', 'dataService'];

    function PromoController($scope, dataService) {
      var promoCntrl = this;
      promoCntrl.meta = {
        model: 'Promo',
        refs: [],
        searches: ['name', 'key']
      };
      promoCntrl.promos = [];
      promoCntrl.loaded = false;

		  $scope.$watch('menuPromos', function(oldValue, newValue) {
        dataService.getList(promoCntrl.meta.model)
          .then(function(data) {
            promoCntrl.promos = data;
            promoCntrl.loaded = true;
            return promoCntrl.promos;
          });
		  }, true);
    }
})();