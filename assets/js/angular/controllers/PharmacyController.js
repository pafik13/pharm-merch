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
              ],
        searches: ['shortName', 'tradenet.shortName', 'subway', 'address']
      };

      pharmCntrl.merchants = [];
      pharmCntrl.loaded = false;

      $scope.$watch('menuPharmacies', function(oldValue, newValue) {
        var config = {
          'params': {
            'populate': [],
          },
        }

        dataService.getList(pharmCntrl.meta.model, config)
          .then(function(data) {
            pharmCntrl.pharmacies = data;
            pharmCntrl.loaded = true;
            return pharmCntrl.pharmacies;
          });
      }, true);
  }
})();