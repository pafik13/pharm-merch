(function() {
  'use strict';

  angular
    .module('App')
    .controller('ManagerController', ManagerController);

    ManagerController.inject = ['$scope', 'dataService'];

    function ManagerController($scope, dataService) {
      var manCntrl = this;
      manCntrl.meta = {
        model: 'Manager',
        refs: [],
        searches: ['fullName', 'email']
      };
      manCntrl.managers = [];
      manCntrl.loaded = false;

		  $scope.$watch('menuManagers', function(oldValue, newValue) {
        dataService.getList(manCntrl.meta.model)
          .then(function(data) {
            manCntrl.managers = data;
            manCntrl.loaded = true;
            return manCntrl.managers;
          });
		  }, true);
    }
})();