(function() {
  'use strict';

  angular
    .module('App')
    .directive('modal', modal);

  function modal(){
    var directive = {
      restrict:'E',
      scope:{
        caption: '@',
        last: '=',
        modalId: '@',
        contentUrl: '@',
        initial: '&action',
        prefix: '@'
      },
      templateUrl: '/templates/modal.html',
      controller: ModalController,
    };

    return directive;
  };

  ModalController.$inject = ['$scope'];

  function ModalController($scope){
    $scope.action = action;

    function action(id){
        $scope.initial({id:id});
    };
  }
})();