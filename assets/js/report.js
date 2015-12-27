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
		console.log(JSON.stringify(users))
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
              var matches = $scope.week.match(/\d\d\.\d\d\.\d\d\d\d/ig);
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
      
      
 $('input.datepicker-month').datepicker({
     format: "dd.mm.yyyy",
     minViewMode: 'months',
     maxViewMode: 'years',
     language: "ru",
     autoclose: true
});
       
$('input.datepicker-week').datepicker({
    //format: "yyyy-mm",
    startViewMode: "months",
    minView: 'dates',
    language: "ru",
    autoclose: true,
    format: {
            toDisplay: function (date, format, language) {
                 var curr = new Date(date); 
				 var first = curr.getDate() - curr.getDay(); 
				 var last = first + 6; 
				 var firstday = new Date(curr.setDate(first)); 
				 var lastday = new Date(curr.setDate(last));
				 return firstday.getDate() +'.'+ firstday.getMonth() + '.' + firstday.getFullYear()+'-'+ lastday.getDate() +'.' + lastday.getMonth() + '.' + lastday.getFullYear();
            },
            toValue: function (date, format, language) {
              return date;
            }
        }
});      