(function() {
  'use strict';

  angular
    .module('App')
    .controller('CategoryInNetController', CategoryInNetController);

    CategoryInNetController.inject = ['$scope', 'dataService'];

    function CategoryInNetController($scope, dataService) {
      var catCntrl = this;
      catCntrl.meta = {
        model: 'CategoryInNet',
        refs: [],
        searches: ['name', 'key']
      };
      catCntrl.categories = [];
      catCntrl.loaded = false;

		  $scope.$watch('menuCategories', function(oldValue, newValue) {
        dataService.getList(catCntrl.meta.model)
          .then(function(data) {
            catCntrl.categories = data;
            catCntrl.loaded = true;
            return catCntrl.categories;
          });
		  }, true);
    }
})();