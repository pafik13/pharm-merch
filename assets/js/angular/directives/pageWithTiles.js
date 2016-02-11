(function() {
  'use strict';

  angular
    .module('App')
    .directive('pageWithTiles', pageWithTiles);

  function pageWithTiles(_){
    var directive = {
      restrict:'E',
      scope:{
        pageHeader:           '@',
        loaded:               '=',
        items:                '=',
        modelMeta:            '=',
        tileClass:            '@',
        tileIcon:             '@',
        fieldForTileCaption:  '@',
        fieldForTileRRow1:    '@',
        fieldForTileRRow2:    '@',
        fieldForTileLRow1:    '@',
        fieldForLength:       '@',
        addButtonCaption:	    '@',
        createId:             '@',
        createCaption:        '@',
        beforeCreateParams:   '=',
        updateId:             '@',
        updateCaption:        '@',
        fieldForUpdateCaption:'@',
        modalUpdateTemplate:  '@',
        modalCreateTemplate:  '@',
      },
      templateUrl: '/templates/page-with-tiles.html',
      controller: PageWithTilesController,
      controllerAs: 'pwtCntrl',
      bindToController: true // because the scope is isolated
    };

    return directive;
  };

  PageWithTilesController.$inject = ['$scope', '$log', '_', 'dataService'];

  function PageWithTilesController($scope, $log, _, dataService){
    var pwtCntrl = this;

    pwtCntrl.search = "";
    pwtCntrl.pages = [];
    pwtCntrl.currentPage = 1;
    pwtCntrl.searchChange = searchChange;
    pwtCntrl.changePage = changePage;
    pwtCntrl.filterPage = filterPage;

    pwtCntrl.beforeUpdate = beforeUpdate;
    pwtCntrl.update = update;

    pwtCntrl.beforeCreate = beforeCreate;
    pwtCntrl.create = create;
//     pwtCntrl.update1 = update1;

//     function update1(id){
//       pwtCntrl.update(id);
//       pwtCntrl.items = [];
//       $log.info('id: ', JSON.stringify(id));
//     }

    activate();

    function activate(){
      clear_last();
      return searchChange();
    }

    function searchChange(){
      if (!!pwtCntrl.search) {
        pwtCntrl.itemsOnPage = _.filter(pwtCntrl.items, function(item){
          var result = false;

          _(pwtCntrl.modelMeta.searches).forEach(function(searchAttr) {
            var attrValue = _.get(item,searchAttr, null);
            if (!!attrValue) {
              result = result || (attrValue.toLowerCase().indexOf(pwtCntrl.search.toLowerCase()) > -1);
              if (result) {
                return result;
              }
            }
          });

          return result;
//           return ( item.fullName.toLowerCase().indexOf(pwtCntrl.search.toLowerCase()) > -1
//                 || item.project.fullName.toLowerCase().indexOf(pwtCntrl.search.toLowerCase()) > -1
//                  )
        });
      } else {
        pwtCntrl.itemsOnPage = pwtCntrl.items;
        filterPage();
      }
    }


    function changePage(page){
      $log.info('Page: '+page);
      pwtCntrl.currentPage = page;
      filterPage();
//         $log.info('itemsOnPage: '+JSON.stringify(pwtCntrl.itemsOnPage));
    };

    function filterPage(){
      pwtCntrl.itemsOnPage = _.filter(pwtCntrl.items, {'page':pwtCntrl.currentPage});
    }

    $scope.$watch('pwtCntrl.items',function(){
      pwtCntrl.pages = [];
      if (!!pwtCntrl.items){
        for(var i = 0; i < pwtCntrl.items.length;i++){
          pwtCntrl.items[i].page = (i / 6 |0) + 1;
          pwtCntrl.pages.push((i / 6 |0) + 1);
        }
        pwtCntrl.pages = _.uniq(pwtCntrl.pages);
        filterPage();
        //$log.info('itemsOnPage: '+JSON.stringify(pwtCntrl.itemsOnPage));
      }
    });

    $scope.$watch('pwtCntrl.last_user',function(){
      $('[data-toggle="popover"]').popover();
    });

    function clear_last(){
        pwtCntrl.last_user = {
          caption: '<Empty>',
          loaded: false,
          changed: false,
          entity: {},
          refs: [],
          change: entityChanged
        };

        _(pwtCntrl.modelMeta.refs).forEach(function(ref) {
          console.log(JSON.stringify(ref));
          var config = {
            params: {
              limit: 300,
            },
          };
          dataService.getList(ref.refModel, config)
            .then(function(data){
            pwtCntrl.last_user.refs[ref.refAttr] = data;
          });
        });

//         dataService.getList('Territory')
//           .then(function(data){
//           pwtCntrl.last_user.refs.territories = data;
//         });

//         dataService.getList('Project')
//           .then(function(data){
//           pwtCntrl.last_user.refs.projects = data;
//         });

        function entityChanged(){
          pwtCntrl.last_user.changed = true;
          return pwtCntrl.last_user.changed;
        };
      };

    function beforeUpdate(id){
      clear_last();

      pwtCntrl.last_user.caption = pwtCntrl.updateCaption + ' ';

      var config = {
        'params': {
          'id': id,
          'populate': _.map(pwtCntrl.modelMeta.refs, 'modelAttr'),
        },
      }

      console.log(JSON.stringify(config));

      dataService.getOne(pwtCntrl.modelMeta.model, id, config)
        .then(function(data) {
          pwtCntrl.last_user.loaded = true;
          pwtCntrl.last_user.caption += data[pwtCntrl.fieldForUpdateCaption];
          pwtCntrl.last_user.entity = data;
          return pwtCntrl.last_user.entity;
        });
    }

    function update(){
      $log.info('update click : ' + JSON.stringify(pwtCntrl.last_user.entity));

      // pre-save actions
      delete pwtCntrl.last_user.entity.createdAt;
      delete pwtCntrl.last_user.entity.updatedAt;
      _(pwtCntrl.modelMeta.refs).forEach(function(ref) {
        if(!!pwtCntrl.last_user.entity[ref.modelAttr]){
          if (_.isArray(pwtCntrl.last_user.entity[ref.modelAttr])) {
            pwtCntrl.last_user.entity[ref.modelAttr] = _.map(pwtCntrl.last_user.entity[ref.modelAttr], 'id');
          } else {
            pwtCntrl.last_user.entity[ref.modelAttr] = pwtCntrl.last_user.entity[ref.modelAttr].id;
          }
        }
      });
      $log.info('after depopulate:' + JSON.stringify(pwtCntrl.last_user.entity));
//       if (!!$scope.last_user.entity.project){
//         $scope.last_user.entity.project = $scope.last_user.entity.project.id;
//       }
//       if (!!$scope.last_user.entity.territory){
//         $scope.last_user.entity.territory = $scope.last_user.entity.territory.id;
//       }
      var config = {
        'params': {
//           'id' : pwtCntrl.last_user.entity.id,
          'populate': _.map(pwtCntrl.modelMeta.refs, 'modelAttr'),
        }
      };
      //pwtCntrl.last_user.entity.id;
      dataService.putOne(pwtCntrl.modelMeta.model, pwtCntrl.last_user.entity, config)
        .then(function(data) {
          console.log('updated:', JSON.stringify(data));
          var index = _.indexOf(pwtCntrl.items, _.find(pwtCntrl.items, {id: data.id}));
          data.page = pwtCntrl.items[index].page;
          pwtCntrl.items.splice(index, 1, data);
          filterPage();
          $("#"+pwtCntrl.updateId).modal('hide');
          return data;
        });
//       var cu = updateUser($scope.last_user.entity, id);
//       console.log('updated:', JSON.stringify(cu));
//       var index = _.indexOf($scope.users, _.find($scope.users, {id: cu.id}));
//       $scope.users.splice(index, 1, cu);
    }

    function beforeCreate(){
      clear_last();
      pwtCntrl.last_user.caption = pwtCntrl.createCaption;
      pwtCntrl.last_user.loaded = true;
      if (!!pwtCntrl.beforeCreateParams){
        pwtCntrl.last_user.entity = Object.create(pwtCntrl.beforeCreateParams);
      }
    }

    function create(){
      var config = {};
      dataService.postOne(pwtCntrl.modelMeta.model, pwtCntrl.last_user.entity, config)
        .then(function(data) {
          console.log('created:', JSON.stringify(data));

          // it needed because after 'create' not populate references
          _(pwtCntrl.modelMeta.refs).forEach(function(ref) {
            if(!!data[ref.modelAttr]){
              data[ref.modelAttr] = _.find(pwtCntrl.last_user.refs[ref.refAttr], { 'id': data[ref.modelAttr]});
            }
          });
          console.log('afterPopulate:', JSON.stringify(data));

          data.page = (pwtCntrl.items.length / 6 |0) + 1;
          if (!_.includes(pwtCntrl.pages, data.page)) {
            pwtCntrl.pages.push(data.page);
          }
          pwtCntrl.items.push(data);
          changePage(data.page);
          $("#"+pwtCntrl.createId).modal('hide');
          return data;
        });
//         var cu = createUser($scope.last_user.entity);
//         console.log('updated:', JSON.stringify(cu));
//         // it needed because after 'create' not populate references
//         if (!!cu.project){
//           var project = _.find($scope.last_user.refs.projects, { 'id': cu.project});
//           console.log(JSON.stringify(project));
//           cu.project = project;
//         }
//         $scope.users.push(cu);
//         $("#add").modal('hide');
    }
  }
})();