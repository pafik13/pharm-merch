(function() {
  'use strict';

  angular
    .module('App')
    .controller('MerchantController', MerchantController);

    MerchantController.inject = ['$scope','dataService'];

    function MerchantController($scope, dataService) {
      var merchCntrl = this;
      merchCntrl.meta = {
        model: 'Merchant',
        refs: [ { modelAttr: 'project',
                  refModel: 'Project',
                  refAttr: 'projects'
                },
                { modelAttr: 'territory',
                  refModel: 'Territory',
                  refAttr: 'territories'
                },
                { modelAttr: 'user',
                  refModel: 'User',
                  refAttr: 'user'
                },
              ],
        searches: ['fullName', 'project.fullName']
      };

      merchCntrl.params = {
        'manager': manager.id,
      };

      merchCntrl.merchants = [];
      merchCntrl.loaded = false;

      $scope.$watch('menuMerchants', function(oldValue, newValue) {
        var config = {
          'params': {
            'manager': manager.id,
            'populate': ['project'],
          },
        }

        dataService.getList(merchCntrl.meta.model, config)
          .then(function(data) {
            merchCntrl.merchants = data;
            merchCntrl.loaded = true;
            return merchCntrl.merchants;
          });
      }, true);
  }
})();