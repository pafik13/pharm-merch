	  /*-------------------------- ANGULAR APP -----------------------------------------*/
      var app = angular.module('App', []);  /*global angular*/
      
      app.factory('getData',function($http,$q){
          
          var data = {merchants:[]};
          
          return {
              getMerchants: function(){
                  var deferred = $q.defer();
                  
                  if(data.merchants.length == 0){
                      $http({
                          method:'POST',
                          url: "/Merchant/find?manager="+manager.id
                      }).then(function(response){
                          data.merchants = response;
                          deferred.resolve(response);
                      },function(response){
                          deferred.reject(response);
                      });
                  }else{
                      deferred.resolve(data.merchants);
                  }
                  return deferred.promise;
              },
              getData: function(){
                  return data;
              }
          }
      });
      
      app.directive('report',function(){
          return {
              scope:{
                results: '=',
                meta: '='
              },
              templateUrl:'/templates/report.html',
              controller: function($scope, $element){
                  $scope.download_file = function(){
                        var link = document.createElement('a');
                        document.body.appendChild(link);
                        console.log('Downloading file');
                        
                        var header = 'data:application/vnd.ms-excel;base64,';
                                    //'<html xmlns:v="urn:schemas-microsoft-com:vml" axmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">' +
                        var body =   '<meta  http-equiv="Content-Type"  content="text/html;  charset=UTF-8">' + 
                                    '<style>table, table td, table td tr {    border: 1px solid black; }</style>' + 
                                    $('table:visible')[0].outerHTML;
                        link.href = header + window.btoa(unescape(encodeURIComponent(body)));            
                        $(link).attr('download','Отчет.xls');
                        link.click();
                  }
              }
          }
      });

      app.controller('merchantsQueryController', function($scope, $http, getData) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = [{asdf:'asdf',field:'zxcv'},{field:'qqwereqwr',asdf:'asdf'}];
          $scope.meta = {field:'Проверка проверка',field:'Проверка проверка'};
          
          getData.getMerchants().then(function(results){
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
              
          },function(results){
              console.log(JSON.stringify(results));
          });
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/Report/Generate?report=2&merchant=' + $scope.merchant}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('dailyQueryController', function($scope, $http, getData) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = '';
          
          getData.getMerchants().then(function(results){
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
              
          },function(results){
              console.log(JSON.stringify(results));
          });
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('dailyAllQueryController', function($scope, $http, getData) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = '';
          
          getData.getMerchants().then(function(results){
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
              
          },function(results){
              console.log(JSON.stringify(results));
          });
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  
      
      app.controller('weeklyQueryController', function($scope, $http, getData) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = '';
          $scope.week = '';
          
          getData.getMerchants().then(function(results){
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
              
          },function(results){
              console.log(JSON.stringify(results));
          });
          
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
      
      app.controller('monthlyQueryController', function($scope, $http, getData) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = '';
          
          getData.getMerchants().then(function(results){
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
              
          },function(results){
              console.log(JSON.stringify(results));
          });
          
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