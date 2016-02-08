(function() {
  'use strict';

  angular
    .module('App')
    .controller('PhotoSubTypeController', PhotoSubTypeController);

    PhotoSubTypeController.inject = ['$scope', 'dataService'];

    function PhotoSubTypeController($scope, dataService) {
      var pstCntrl = this;
      pstCntrl.meta = {
        model: 'PhotoSubType',
        refs: [{ modelAttr: 'type',
                  refModel: 'PhotoType',
                   refAttr: 'phototypes'
               },
              ],
        searches: ['name', 'type.name']
      };
      pstCntrl.photosubtypes = [];
      pstCntrl.loaded = false;

		  $scope.$watch('menuPhotoSubTypes', function(oldValue, newValue) {
        var config = {
          params: {
            limit: 300,
          },
        };
        dataService.getList(pstCntrl.meta.model, config)
          .then(function(data) {
            pstCntrl.photosubtypes = data;
            pstCntrl.loaded = true;
            return pstCntrl.photosubtypes;
          });
		  }, true);
    }
})();