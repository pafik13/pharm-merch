(function() {
  'use strict';

  angular
    .module('App')
    .controller('ProjectController', ProjectController);

    ProjectController.inject = ['$scope','dataService'];

    function ProjectController($scope, dataService) {
      var projCntrl = this;
      projCntrl.meta = {
        model: 'Project',
        refs: [ { modelAttr: 'photoTypes',
                  refModel: 'PhotoType',
                  refAttr: 'phototypes'
                },
                { modelAttr: 'drugs',
                  refModel: 'Drug',
                  refAttr: 'drugs'
                },
                { modelAttr: 'infos',
                  refModel: 'DrugInfoType',
                  refAttr: 'druginfotypes'
                },
                { modelAttr: 'netCats',
                  refModel: 'CategoryInNet',
                  refAttr: 'netcategories'
                },
                { modelAttr: 'promos',
                  refModel: 'Promo',
                  refAttr: 'promos'
                },
              ],
        searches: ['fullName', 'description']
      };

      projCntrl.projects = [];
      projCntrl.loaded = false;

      $scope.$watch('menuProjects', function(oldValue, newValue) {
        var config = {
          'params': {
            'populate': ['drugs', 'infos'],
          },
        }

        dataService.getList(projCntrl.meta.model, config)
          .then(function(data) {
            projCntrl.projects = data;
            projCntrl.loaded = true;
            return projCntrl.projects;
          });
      }, true);
  }
})();