(function() {
  'use strict';

  angular
    .module('App')
    .controller('PhotoTypeController', PhotoTypeController);

    PhotoTypeController.inject = ['$scope', 'dataService'];

    function PhotoTypeController($scope, dataService) {
      var ptCntrl = this;
      ptCntrl.meta = {
        model: 'PhotoType',
        refs: [],
        searches: ['name']
      };
      ptCntrl.phototypes = [];
      ptCntrl.loaded = false;

		  $scope.$watch('menuPhotoTypes', function(oldValue, newValue) {
        dataService.getList(ptCntrl.meta.model)
          .then(function(data) {
            ptCntrl.phototypes = data;
            ptCntrl.loaded = true;
            return ptCntrl.phototypes;
          });
		  }, true);
    }
})();