	  /*----------------------- MERCHANTS --------------------------------*/
	  function getMerchants(){
	    var users = [];
  		$.ajax(
  		{
  		  async: false,
  		  url: "/Merchant/find?manager="+manager.id+'&populate=false', /*global manager*/
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
    /*----------------------- META --------------------------------*/
    function getMeta(reportID){
      var meta = [];
      $.ajax(
      {
        async: false,
        url: "/Report/"+reportID, /*global manager*/
        success: function (data) {
          meta = data.fields;
        },
        error: function(xhr, status, data){
        alert(status + "\n" + data + "\n" + 'getMeta');
        },
        dataType: 'json'
      });
       return meta;
    }
	  /*-------------------------- ANGULAR APP -----------------------------------------*/
      var app = angular.module('App', ['ui.bootstrap']);  /*global angular*/

      app.directive('report',function(){
          return {
              scope:{
                results: '=',
                meta: '='
              },
              templateUrl:'/templates/report.html'
          }
      });

      app.controller('baseQueryController', function($scope, $http) { /*global app*/
          $scope.merchant = '';
          $scope.merchantList = getMerchants();
          $scope.results = [];
          // $scope.meta = {name:'FIO',address:'Address', cat_otc:'Cat_OTC', cat_sbl:'Cat_SBL'};
          $scope.meta = getMeta(2);

          $scope.admin_query = function(){
            $http({url:'/Report/Generate?report=2&merchant=' + $scope.merchant.id}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });
          };
      });

//       app.directive('datetimez', function() {
//           return {
//               restrict: 'A',
//               require : 'ngModel',
//               link: function(scope, element, attrs, ngModelCtrl) {
//                 element.datetimepicker({
//                  dateFormat:'dd-MM-yyyy',
//                  language: 'en',
//                  pickTime: false,
//                  startDate: '01-11-2013',      // set a minimum date
//                  endDate: '01-11-2030'          // set a maximum date
//                 }).on('changeDate', function(e) {
//                   ngModelCtrl.$setViewValue(e.date);
//                   scope.$apply();
//                 });
//               }
//           };
//       });

      app.controller('visitsQueryController', function($scope, $http, $filter) { /*global app*/
          /*dateTimePicker*/
          $scope.today = function() {
            $scope.dt = new Date();
          };
          $scope.today();

          $scope.clear = function () {
            $scope.dt = null;
          };

          // Disable weekend selection
          $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

            $scope.minDate = $scope.minDate ? null : new Date(new Date().getTime() - 14*24*60*60*1000);
            $scope.maxDate = new Date("12/31/2023");

          $scope.open = function($event) {
            $scope.status.opened = true;
          };

          $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
//             minMode: 'month'
          };

          $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          $scope.format = $scope.formats[0];

          $scope.status = {
            opened: false
          };
          /*dateTimePicker*/

          $scope.merchant = '';
          $scope.month = '12-07-2013';
          $scope.merchantList = getMerchants();
          $scope.results = [];
          // $scope.meta = {name:'FIO',address:'Address', cat_otc:'Cat_OTC', cat_sbl:'Cat_SBL'};
          $scope.meta = getMeta(3);

          $scope.admin_query = function(){
              console.log('Date : %s', $scope.dt);
              var day = $scope.dt.getDay() - 1;
              var firstDay = new Date($scope.dt.getTime() - 60*60*24* day*1000); // will return firstday (i.e. Sunday) of the week
              var lastDay = new Date(firstDay.getTime() + 60 * 60 *24 * 6 * 1000); // adding (60*60*6*24*1000) means adding six days to the firstday which results in lastday (Saturday) of the week
              var firtDayF = $filter('date')(firstDay, 'yyyy-MM-dd');
              var lastDayF =  $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', firtDayF);
              console.log('lastDayF : %s', lastDayF);
//               var matches = $scope.dt.match(/\d\d\.\m\m\.\y\y\y\y/);
//               console.log('\j',matches);

            $http({
              url:'/Report/Generate?report=3&merchant=' + $scope.merchant.id + '&date_first=' + firtDayF + '&date_last=' + lastDayF
            }).success(function(result){
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

      app.controller('monthlyQueryController', function($scope, $http, $filter) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = getMerchants();
          $scope.results = '';

          $scope.admin_query = function(){
              console.log('Date : %s', $scope.dt);
              var firstDay = new Date($scope.dt.getFullYear(), $scope.dt.getMonth(), 1);
              var lastDay = new Date($scope.dt.getFullYear(), $scope.dt.getMonth() + 1, 0);
              var firtDayF = $filter('date')(firstDay, 'yyyy-MM-dd');
              var lastDayF =  $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', firtDayF);
              console.log('lastDayF : %s', lastDayF);
              $http({
                url:'/admin/query?admin_query=' + $scope.query
              }).success(function(result){
                  $scope.results = result;
              }).error(function(error){
                  console.log(JSON.stringify(error));
              });
          };
      });