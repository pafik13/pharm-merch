//Global data factory
angular
  .module('App')
  .factory('getData',function($http,$q){
    var getList =  function(model,filter,skip,limit){
            var deferred = $q.defer();
            var data = {};
            skip = 0;
            limit = 10000;

            if(filter){
              data = {
                      populate: ['project'],
                      manager: manager.id,
                      skip: skip,
                      limit: limit
                    };
            }else{
              data = {
                      populate: ['drugs'],
                      skip: skip,
                      limit: limit
                    };
            }

            $http({
                method:'POST',
                url: "/"+model+"/find",
                data: data
            }).then(function(response){
                //SUCCESS
                deferred.resolve(response);
            },function(response){
                //ERROR
                deferred.reject(response);
            });

            return deferred.promise;
        };
    var getOne =  function(model, id, filter, populate){
            var deferred = $q.defer();
            var data = {};

            populate = populate || [];

            if(filter){
              data = {
                      populate: populate,
                      manager: manager.id
                    };
            }else{
              data = {
                      populate: populate
                    };
            }

            data.id = id;

            $http({
                method:'POST',
                url: "/"+model+"/find",
                data: data
            }).then(function(response){
                //SUCCESS
                deferred.resolve(response);
            },function(response){
                //ERROR
                deferred.reject(response);
            });

            return deferred.promise;
        };
    var create =  function(model, data, setOwner){
            var deferred = $q.defer();

            if(setOwner){
              data.manager = manager.id
            }

            $http({
                method:'POST',
                url: "/"+model+"/create",
                data: data
            }).then(function(response){
                //SUCCESS
                deferred.resolve(response);
            },function(response){
                //ERROR
                deferred.reject(response);
            });

            return deferred.promise;
        };

    var update =  function(model, data, setOwner){
            var deferred = $q.defer();

            if(setOwner){
              data.manager = manager.id
            }

            $http({
                method:'POST',
                url: "/"+model+"/update",
                data: data
            }).then(function(response){
                //SUCCESS
                deferred.resolve(response);
            },function(response){
                //ERROR
                deferred.reject(response);
            });

            return deferred.promise;
        };
    var count =  function(model){
            var deferred = $q.defer();

            $http({
                method:'GET',
                url: "/"+model+"/count"
            }).then(function(response){
                //SUCCESS
                deferred.resolve(response.data.count);
            },function(response){
                //ERROR
                deferred.reject(response);
            });

            return deferred.promise;
        };
    return {
        getMerchants:     function(){  return getList("Merchant", true)},
        getMerchant:      function(id){ return getOne("Merchant", id, true, ['project','territory'])},
        insMerchant:		function(data){return create("Merchant", data, true)},
        updMerchant:		function(data){return update("Merchant", data, true)},
        Merchant:{
          count: function(){return count("Merchant")}
        },

        getManagers:      function(){   return getList("Manager", false)},
        getManager:       function(id){ return getOne("Manager", id, false)},
        insManager:		function(data){return create("Manager", data, false)},
        updManager:		function(data){return update("Manager", data, false)},
        Manager:{
          count: function(){return count("Manager")}
        },

        getPharmacies:    function(){   return getList("Pharmacy", false)},
        getPharmacy:      function(id){ return getOne("Pharmacy", id, false)},
        insPharmacy:		function(data){return create("Pharmacy", data, false)},
        updPharmacy:		function(data){return update("Pharmacy", data, false)},
        Pharmacy:{
          count: function(){return count("Pharmacy")}
        },

        getDrugs:         function(){   return getList("Drug", false)},
        getDrug:          function(id){ return getOne("Drug", id, false)},
        insDrug:			function(data){return create("Drug", data, false)},
        updDrug:			function(data){return update("Drug", data, false)},
        Drug:{
          count: function(){return count("Drug")}
        },

        getCompanies:     function(){   return getList("Company", false)},
        getCompany:       function(id){ return getOne("Company", id, false)},
        insCompany:		function(data){return create("Compan", data, false)},
        updCompany:		function(data){return update("Compan", data, false)},
        Company:{
          count: function(){return count("Company")}
        },

        getProjects:      function(){   return getList("Project", false)},
        getProject:       function(id){ return getOne("Project", id, false)},
        insProject:		function(data){return create("Project", data, false)},
        updProject:		function(data){return update("Project", data, false)},
        Project:{
          count: function(){return count("Project")}
        },

        getTerritories:   function(){   return getList("Territory", false)},
        getTerritory:     function(id){ return getOne("Territory", id, false)},
        insTerritory:		function(data){return create("Territory", data, false)},
        updTerritory:		function(data){return update("Territory", data, false)},
        Territory:{
          count: function(){return count("Territory")}
        },

        getDrugInfoTypes: function(){   return getList("DrugInfoType", false)},
        getDrugInfoType:  function(id){ return getOne("DrugInfoType", id, false)},
        insDrugInfoType:	function(data){return create("DrugInfoType", data, false)},
        updDrugInfoType:	function(data){return update("DrugInfoType", data, false)},
        DrugInfoType:{
          count: function(){return count("DrugInfoType")}
        }
    }
});
