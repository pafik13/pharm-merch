	  /*-------------------------- ANGULAR APP -----------------------------------------*/
      var app = angular.module('App', []);  /*global angular*/
      
      app.directive('report',function(){
          return {
              scope:{
                results: '='
              },
              templateUrl:'/templates/report.html'
          }
      });

      app.controller('merchantsQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.results = {asdf:'asdf',zxcv:'zxcv'};
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('dailyQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.results = '';
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('dailyAllQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.results = '';
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('weeklyQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.results = '';
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('monthlyQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.results = '';
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });        