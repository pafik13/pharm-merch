(function() {
  'use strict';

  angular
    .module('App')
    .factory('dataService', dataService);

  dataService.$inject = ['$http', '$log'];

  function dataService($http, $log) {
    return {
      getOne: getOne,
      getList: getList,
      putOne: putOne,
      postOne: postOne,
    }

    function getOne(model, id, config){
      return $http.get("/"+model+"/"+id, config)
        .then(getOneComplete)
        .catch(getOneFailed);

      function getOneComplete(response){
        $log.info('getOneComplete: ' + JSON.stringify(response.data));
        return response.data;
      }

      function getOneFailed(error){
        $log.error('Error: XHR Failed for getAvengers.' + error.data);
      }
    }

    function getList(model, config){
      return $http.get("/"+model, config)
        .then(getListComplete)
        .catch(getListFailed);

      function getListComplete(response){
        $log.info('getListComplete: ' + response.data.length);
        return response.data;
      }

      function getListFailed(error){
        $log.error('Error: XHR Failed for getList. ' + error.data);
      }
    }

    function putOne(model, data, config){
      return $http.put("/"+model+"/"+data.id, data, config)
        .then(putOneComplete)
        .catch(putOneFailed);

      function putOneComplete(response){
        $log.info('putOneComplete: ' + JSON.stringify(response.data));
        return response.data;
      }

      function putOneFailed(error){
        $log.error('Error: XHR Failed.' + error.data);
      }
    }

    function postOne(model, data, config){
      return $http.post("/"+model+"/create", data, config)
        .then(postOneComplete)
        .catch(postOneFailed);

      function postOneComplete(response){
        $log.info('postOneComplete: ' + JSON.stringify(response.data));
        return response.data;
      }

      function postOneFailed(error){
        $log.error('Error: XHR Failed.' + JSON.stringify(error));
      }
    }
  }


})();