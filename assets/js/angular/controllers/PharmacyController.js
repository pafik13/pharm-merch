(function() {
  'use strict';

  angular
    .module('App')
    .controller('PharmacyController', PharmacyController);

    PharmacyController.inject = ['$scope','dataService'];

    function PharmacyController($scope, dataService) {
      var pharmCntrl = this;
      pharmCntrl.meta = {
        model: 'Pharmacy',
        refs: [ { modelAttr: 'territory',
                  refModel: 'Territory',
                  refAttr: 'territories'
                },
                { modelAttr: 'tradenet',
                  refModel: 'Tradenet',
                  refAttr: 'tradenets'
                },
                { modelAttr: 'layoutType',
                  refModel: 'PharmacyLayoutType',
                  refAttr: 'layoutTypes'
                },
                { modelAttr: 'validated',
                  refModel: 'User',
                  refAttr: 'validated'
                },
              ],
        searches: ['shortName', 'tradenet.shortName', 'territory.name', 'address']
      };

      pharmCntrl.merchants = [];
      pharmCntrl.loaded = false;

      $scope.$watch('menuPharmacies', function(oldValue, newValue) {
        var config = {
          params: {
            limit: 300,
          },
        };

        dataService.getList(pharmCntrl.meta.model, config)
          .then(function(data) {
            pharmCntrl.pharmacies = data;
            pharmCntrl.itemsPerPage = 20;
            pharmCntrl.loaded = true;
            return pharmCntrl.pharmacies;
          });
      }, true);
  }
})();