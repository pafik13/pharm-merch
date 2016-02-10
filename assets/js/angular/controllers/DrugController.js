(function() {
  'use strict';

  angular
    .module('App')
    .controller('DrugController', DrugController);

    DrugController.inject = ['$scope', 'dataService'];

    function DrugController($scope, dataService) {
      var drugCntrl = this;
      drugCntrl.meta = {
        model: 'Drug',
        refs: [],
        searches: ['fullName', 'officialName']
      };
      drugCntrl.drugs = [];
      drugCntrl.loaded = false;

		  $scope.$watch('menuDrugs', function(oldValue, newValue) {
        var config = {
          params: {
            limit: 300,
          },
        };
        dataService.getList(drugCntrl.meta.model, config)
          .then(function(data) {
            drugCntrl.drugs = data;
            drugCntrl.loaded = true;
            return drugCntrl.drugs;
          });
		  }, true);
    }
})();