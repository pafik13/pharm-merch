(function() {
  'use strict';

  angular
    .module('App')
    .controller('TerritoryController', TerritoryController);

    TerritoryController.inject = ['$scope', 'dataService'];

    function TerritoryController($scope, dataService) {
      var terrCntrl = this;
      terrCntrl.meta = {
        model: 'Territory',
        refs: [],
        searches: ['name', 'baseCity']
      };
      terrCntrl.territories = [];
      terrCntrl.loaded = false;

		  $scope.$watch('menuTerritories', function(oldValue, newValue) {
        var config = {
          params: {
            limit: 300,
          },
        };
        dataService.getList(terrCntrl.meta.model, config)
          .then(function(data) {
            terrCntrl.territories = data;
            terrCntrl.loaded = true;
            return terrCntrl.territories;
          });
		  }, true);
    }
})();