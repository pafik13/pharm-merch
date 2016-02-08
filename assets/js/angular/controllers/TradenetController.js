(function() {
  'use strict';

  angular
    .module('App')
    .controller('TradenetController', TradenetController);

    TradenetController.inject = ['$scope', 'dataService'];

    function TradenetController($scope, dataService) {
      var netCntrl = this;
      netCntrl.meta = {
        model: 'Tradenet',
        refs: [],
        searches: ['fullName', 'shortName', 'description']
      };
      netCntrl.tradenets = [];
      netCntrl.loaded = false;

		  $scope.$watch('menuTradenets', function(oldValue, newValue) {
        dataService.getList(netCntrl.meta.model)
          .then(function(data) {
            netCntrl.tradenets = data;
            netCntrl.loaded = true;
            return netCntrl.tradenets;
          });
		  }, true);
    }
})();