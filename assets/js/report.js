	  /*----------------------- MERCHANTS --------------------------------*/
	  function getMerchants(){
	    var users = [];
		$.ajax(
		{
		  async: false,
		  url: "/Merchant/find?manager="+manager.id, /*global manager*/
		  success: function (data) {
		    users = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data + "\n" + 'getUsers');
		  },
		  dataType: 'json'
		});
       return users;   
	  }
	  /*-------------------------- ANGULAR APP -----------------------------------------*/
      var app = angular.module('App', []);  /*global angular*/
      
      app.directive('report',function(){
          return {
              scope:{
                results: '=',
                meta: '='
              },
              templateUrl:'/templates/report.html'
          }
      });

      app.controller('merchantsQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = getMerchants();
          $scope.results = [{asdf:'asdf',field:'zxcv'},{field:'qqwereqwr',asdf:'asdf'}];
          $scope.meta = {field:'Проверка проверка',field:'Проверка проверка'};
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/Report/Generate?report=2&merchant=' + $scope.merchant}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('dailyQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = getMerchants();
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
          $scope.merchant = '';
          $scope.merchantList = getMerchants();
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
          $scope.merchant = '';
          $scope.merchantList = getMerchants();
          $scope.results = '';
          $scope.week = '';
          
          $scope.admin_query = function(){
              console.log($scope.week);
              var matches = $scope.week.match(/\d\d\.\m\m\.\y\y\y\y/);
              console.log('\j',matches);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('monthlyQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = getMerchants();
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