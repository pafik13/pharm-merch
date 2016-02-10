(function() {
  'use strict';

  angular
    .module('App')
    .controller('DrugInfoTypeController', DrugInfoTypeController);

    DrugInfoTypeController.inject = ['$scope', 'dataService'];

    function DrugInfoTypeController($scope, dataService) {
      var ditCntrl = this;
      ditCntrl.meta = {
        model: 'DrugInfoType',
        refs: [],
        searches: ['name', 'valueType']
      };
      ditCntrl.drugs = [];
      ditCntrl.loaded = false;

		  $scope.$watch('menuDrugInfoTypes', function(oldValue, newValue) {
        var config = {
          params: {
            limit: 300,
          },
        };
        dataService.getList(ditCntrl.meta.model, config)
          .then(function(data) {
            ditCntrl.druginfotypes = data;
            ditCntrl.loaded = true;
            return ditCntrl.druginfotypes;
          });
		  }, true);
    }
})();