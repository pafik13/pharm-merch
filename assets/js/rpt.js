/*-------------------------------- JQUERY Controls ------------------------------------*/
// style-datepicker-week
var styleDatePickerWeek = $('#style-datepicker-week');

// dayPicker
var dayPicker = $('input.datepicker').datepicker({
                       format: "dd.mm.yyyy",
                       minViewMode: 'days',
                       maxViewMode: 'years',
                       language: "ru",
                       autoclose: true
                  }).on('show',function(e){
                     styleDatePickerWeek.html("");
                  });

// monthPicker
var monthPicker = $('input.datepicker-month').datepicker({
     format: "MM yyyy",
     minViewMode: 'months',
     maxViewMode: 'years',
     language: "ru",
     autoclose: true
});

//array of datePicker components
var intervalPicker = [];

  intervalPicker['start'] = $('input.datepicker-interval-start').datepicker({
     format: "dd.mm.yyyy",
     startViewMode: 'dates',
     language: "ru",
     autoclose: true
});

  intervalPicker['end'] = $('input.datepicker-interval-end').datepicker({
     format: "dd.mm.yyyy",
     startViewMode: 'dates',
     language: "ru",
     //startDate: '+7d',
     autoclose: true
});

// weekPicker
var weekPicker = $('input.datepicker-week').datepicker({
    //format: "yyyy-mm",
    startViewMode: "months",
    minView: 'dates',
    language: "ru",
    autoclose: true,
    calendarWeeks: true,
    format: {
            toDisplay: function (date, format, language) {
                 var curr = new Date(date);
				 var first = curr.getDate() - curr.getDay();
				 var last = first + 6;
				 var firstday = new Date(curr.setDate(first));
				 var lastday = new Date(curr.setDate(last));
				 return firstday.getDate() +'.'+ (firstday.getMonth()+1) + '.' + firstday.getFullYear()+'-'+ lastday.getDate() +'.' + (lastday.getMonth()+1) + '.' + lastday.getFullYear();
            },
            toValue: function (date, format, language) {
               //
            }
        }
	}).on('show',function(e){
		styleDatePickerWeek.html(".datepicker table tbody tr:hover > td.day{background: #3071a9}");
    });


	  /*-------------------------- ANGULAR APP -----------------------------------------*/
//       var app = angular.module('App', []);  /*global angular*/
      var app = angular.module('App');

      //Global data factory
      app.factory('getDataRpt',function($http,$q, $window){

          var data = { merchants:[],
                       meta: [],
                     };

          return {
              getMerchants: function(){
                var deferred = $q.defer();

                if(data.merchants.length == 0){
                    $http({
                        method:'POST',
                        url: "/Merchant/find?manager="+manager.id+"&populate=false"
                    }).then(function(response){
                        //SUCCESS
                        data.merchants = response;
                        deferred.resolve(response);
                    },function(response){
                        //ERROR
                        deferred.reject(response);
                    });
                }else{
                    //Cached data
                    deferred.resolve(data.merchants);
                }
                return deferred.promise;
              },
              getMeta: function(reportID) {
                var deferred = $q.defer();

                $http({
                    url: "/Report/"+reportID+"?populate=false"
                }).then(function(response){
                    //SUCCESS
                    data.meta = response.fields;
                    deferred.resolve(response);
                },function(response){
                    //ERROR
                    deferred.reject(response);
                });

                return deferred.promise;
              },
              getData: function(){
                  return data;
              },
              getTradenets: function() {
                var deferred = $q.defer();

                $http({
                    url: "/Tradenet?populate=false"
                }).then(function(response){
                    //SUCCESS
                    deferred.resolve(response);
                },function(response){
                    //ERROR
                    deferred.reject(response);
                });

                return deferred.promise;
              },
              getDrugs: function() {
                var deferred = $q.defer();

                $http({
                    url: "/Drug?populate=false"
                }).then(function(response){
                    //SUCCESS
                    deferred.resolve(response);
                },function(response){
                    //ERROR
                    deferred.reject(response);
                });

                return deferred.promise;
              },
              download: function (reportName){
                var link = $window.document.createElement('a');
                $window.document.body.appendChild(link);
//                 //console.log('Downloading file');

                var header = 'data:application/vnd.ms-excel;base64,';
                            //'<html xmlns:v="urn:schemas-microsoft-com:vml" axmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">' +
                var body =   '<meta  http-equiv="Content-Type"  content="text/html;  charset=UTF-8">' +
                            '<style>table, table td, table td tr {    border: 1px solid black; }</style>';
                if (!!$('table:visible')[0]){
                   body = body + $('table:visible')[0].outerHTML;
                }
                link.href = header + $window.btoa(unescape(encodeURIComponent(body)));
                $(link).attr('download', reportName);
                link.click();
              }
          }
      });

      //Table template with download button
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
                        //console.log('Downloading file');

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

      app.directive('datepicker', function(){
          return {
              scope:{
                  date: '='
              },
              templateUrl: '/templates/datepicker.html',
              controller: function($scope, $element, $attrs){
                  $($element).children('input').datepicker({
                       format: "dd.mm.yyyy",
                       minViewMode: 'days',
                       maxViewMode: 'years',
                       language: "ru",
                       autoclose: true
                  }).on('changeDate',function(e){
                      $scope.date = e.date;
                      console.log(JSON.stringify($scope.date));
                      //$scope.date;
                  });
              }
          }
      });

      app.directive('datepickerWeek', function(){
          return {
              scope:{
                  date: '='
              },
              templateUrl: '/templates/datepicker.html',
              controller: function($scope, $element, $attrs){
                  $($element).children('input').datepicker({
                       format: "dd.mm.yyyy",
                       minViewMode: 'days',
                       maxViewMode: 'years',
                       language: "ru",
                       autoclose: true,
                       format: {
                            toDisplay: function (date, format, language) {
                                 var curr = new Date(date);
                				 var first = curr.getDate() - curr.getDay();
                				 var last = first + 6;
                				 var firstday = new Date(curr.setDate(first));
                				 var lastday = new Date(curr.setDate(last));
                				 return firstday.getDate() +'.'+ (firstday.getMonth()+1) + '.' + firstday.getFullYear()+'-'+ lastday.getDate() +'.' + (lastday.getMonth()+1) + '.' + lastday.getFullYear();
                            },
                            toValue: function (date, format, language) {
                               //
                            }
                       }
                  }).on('changeDate',function(e){
                     var curr = new Date(e.date);
    				 var first = curr.getDate() - curr.getDay();
    				 var last = first + 6;
    				 var firstday = new Date(curr.setDate(first));
    				 var lastday = new Date(curr.setDate(last));
    				 $scope.date = firstday.getDate() +'.'+ (firstday.getMonth()+1) + '.' + firstday.getFullYear()+'-'+ lastday.getDate() +'.' + (lastday.getMonth()+1) + '.' + lastday.getFullYear();

                     //$scope.date = e.date;
                      console.log(JSON.stringify($scope.date));
                      //$scope.date;
                  }).on('show', function(){
                        $('.datepicker table tbody tr:has(td.day.active) td.day').css('background','#D2322D');

                        var bg = {};
                        $('.datepicker table tbody tr:has(td.day)').hover(function(){
                                        $(this).children('td.day').each(function(){
                                            $(this).addClass('weekHover');
                                        });
                                    }, function(){
                                        $(this).children('td.day').each(function(){
                                            $(this).removeClass('weekHover');
                                        });
                                    });


                    });
              }
          }
      });

      app.directive('datepickerMonth', function(){
          return {
              scope:{
                  date: '='
              },
              template: '<input class="form-control" type="text" />',//'/templates/datepicker.html',
              controller: function($scope, $element, $attrs){
                  $($element).children('input').datepicker({
                      format: "MM yyyy",
                      minViewMode: 'months',
                      maxViewMode: 'years',
                      language: "ru",
                      autoclose: true
                  }).on('changeDate',function(e){
                      $scope.date = e.date;
                      console.log(JSON.stringify($scope.date));
                      //$scope.date;
                  });
              }
          }
      });

      app.directive('datepickerRange', function(){
          return {
              scope:{
                  date: '='
              },
              templateUrl: '/templates/datepickerWeek.html',
              controller: function($scope, $element, $attrs){
                  console.log('cont');
                  $scope.date = {};

                  $($element).children('.startDate').datepicker({
                       format: "dd.mm.yyyy",
                       minViewMode: 'days',
                       maxViewMode: 'years',
                       language: "ru",
                       autoclose: true
                  }).on('changeDate',function(e){
                      $scope.date.start = e.date;
                      console.log(JSON.stringify($scope.date));
                      //$scope.date;
                  });
                  $($element).children('.endDate').datepicker({
                       format: "dd.mm.yyyy",
                       minViewMode: 'days',
                       maxViewMode: 'years',
                       language: "ru",
                       autoclose: true
                  }).on('changeDate',function(e){
                      $scope.date.end = e.date;
                      console.log(JSON.stringify($scope.date));
                      //$scope.date;
                  });
              }
          }
      });

      app.controller('visitsController', function($scope, $http, getDataRpt, $filter, _) { /*global app*/
          $scope.contentUrl = '/templates/modal/attendance.html';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;
          $scope.show = show;
          $scope.close = close;
          $scope.getvalue = getvalue;
          $scope.prefix = 'show';
          $scope.subTypes = [];

          activate();

          function activate(){
            //console.log('Activate2');
            $('#show_attendance').on('hidden.bs.modal', function (e) {
              $scope.close();
            });
          };

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              $scope.merchantList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(11).then(function(results){
              //SUCCESS
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          dayPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              $scope.selectedDate = $filter('date')(selectedDate, 'yyyy-MM-dd');
              console.log('selectedDate : %s', selectedDate);
              console.log('selectedDate : %s', $scope.selectedDate);
              $scope.day = $filter('date')(selectedDate, 'dd.mm.yyyy');
              $scope.$apply();
              $scope.change();
              console.log('DAY '+$scope.day);
          });

          function change(){
            $scope.canRefresh = !!$scope.merchant && !!$scope.day;
          };

          function refresh(){
            $scope.refreshing = true;
            $http({url:'/Report/Generate?report=11&merchant=' + $scope.merchant.id +'&date=' + $scope.selectedDate})
              .success(function(result){
                $scope.results = result;
                $scope.refreshing = false;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Визиты_' + $scope.merchant.shortName + '.xls');
            $scope.downloading = false;
          };

          function show(att_id){
            $http({url:'/PhotoSubType/'})
              .success(function(result){
                _(result).forEach(function(photoSubType) {
                  $scope.subTypes[photoSubType.id] = {
                    pstName : photoSubType.name,
                    ptName : photoSubType.type.name
                  };
                });
            }).error(function(error){
                console.log(JSON.stringify(error));
            });
            $http({url:'/Attendance/' + att_id})
              .success(function(attendance){
                $http({url:'/Drug?where={"id":['+ _.uniq(_.map(attendance.results, 'drug')).join(',') +']}&populate=false'})
                  .success(function(drugs){
                  $scope.drugs = drugs;
                }).error(function(error){
                    console.log(JSON.stringify(error));
                });

                $http({url:'/DrugInfoType?where={"id":['+ _.uniq(_.map(attendance.results, 'info')).join(',') +']}&populate=false'})
                  .success(function(infos){
                  $scope.infos = infos;
                }).error(function(error){
                    console.log(JSON.stringify(error));
                });

                $scope.attendance = attendance;
                $scope.attendance.loaded = true;
                $scope.attendance.promos_join = _.map($scope.attendance.promos, 'key').join(',');
            }).error(function(error){
                console.log(JSON.stringify(error));
            });
          };

          function close(){
            //console.log('Close');
            $scope.attendance = {};
          };

          function getvalue (drugID, infoID){
             //console.log("getvalue:", drugID, infoID);
            if (!!$scope.attendance.results){
              return _.result(_.find($scope.attendance.results, {'drug':drugID, 'info':infoID}), 'value', null);
            } else {
              return null;
            }
          };
      });

      app.controller('merchBaseController', function($scope, $http, getDataRpt) { /*global app*/
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(2).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          function change(){
            $scope.canRefresh = !!$scope.merchant;
          };

          function refresh(){
            $scope.refreshing = true;
            $http({url:'/Report/Generate?report=2&merchant=' + $scope.merchant.id}).success(function(result){
                $scope.results = result;
                $scope.refreshing = false;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('База_' + $scope.merchant.shortName + '.xls');
            $scope.downloading = false;
          };
      });

      app.controller('merchVisitsController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(3).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          monthPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
              var lastDay  = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              $scope.month = (selectedDate.getMonth() + 1) + '.' + selectedDate.getFullYear();
              $scope.$apply();
              $scope.change();
              console.log('MONTH '+$scope.month);
          });

          function change(){
            $scope.canRefresh = !!$scope.merchant && !!$scope.firstDay && !!$scope.lastDay;
          };

          function refresh(){
            $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=3&merchant=' + $scope.merchant.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay
                }).success(function(result){
                    //SUCCESS
                    $scope.results = result;
                  $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Норма визитов_' + $scope.merchant.shortName + ' за ' + $scope.month  + '.xls');
            $scope.downloading = false;
          };
      });

      app.controller('merchVisitsFreqController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(4).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          monthPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
              var lastDay  = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              $scope.month = (selectedDate.getMonth() + 1) + '.' + selectedDate.getFullYear();
              $scope.$apply();
              $scope.change();
              console.log('MONTH '+$scope.month);
          });

          function change(){
            $scope.canRefresh = !!$scope.merchant && !!$scope.firstDay && !!$scope.lastDay;
          };

          function refresh(){
            $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=4&merchant=' + $scope.merchant.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay
                }).success(function(result){
                    //SUCCESS
                    $scope.results = result;
                  $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Частота визитов_' + $scope.merchant.shortName + ' за ' + $scope.month  + '.xls');
            $scope.downloading = false;
          };
      });

      app.controller('teamVisitsController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.plan_count = 150;
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(5).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          weekPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
    		      var firstDay = new Date(selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay()));
    		      var lastDay  = new Date(selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay() + 6));
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              //$scope.month = (selectedDate.getMonth() + 1) + '.' + selectedDate.getFullYear();
              $scope.week = $filter('date')(firstDay, 'dd.mm.yyyy') + '-' + $filter('date')(lastDay, 'dd.mm.yyyy');
			  $scope.$apply();
              $scope.change();
              console.log('WEEK '+$scope.week);
          });

          function change(){
            $scope.canRefresh = !!$scope.firstDay && !!$scope.lastDay;
          };

          function refresh(){
             $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=5&manager=' + manager.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay + '&plan_count=' + $scope.plan_count
                }).success(function(result){
                    //SUCCESS
                    $scope.results = result;
                   $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Нормы по команде с ' + $scope.firstDay + ' по ' + $scope.lastDay  + '.xls');
            $scope.downloading = false;
          };
      });

      app.controller('defectController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.tradenet = '';
          $scope.tradenetList = [];
          $scope.drug = '';
          $scope.drugList = [];
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getTradenets().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.tradenetList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getDrugs().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.drugList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(6).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          monthPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
              var lastDay  = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              $scope.$apply();
              $scope.change();
          });

          function change(){
            $scope.canRefresh = !!$scope.tradenet && !!$scope.drug && !!$scope.firstDay && !!$scope.lastDay;
          };

          function refresh(){
             $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=6&tradenet=' + $scope.tradenet.id + '&drug=' + $scope.drug.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay
                }).success(function(result){
                    //SUCCESS
                    $scope.results = result;
                   $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Дефектура.xls');
            $scope.downloading = false;
          };
      });

      app.controller('displayController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.tradenet = '';
          $scope.tradenetList = [];
          $scope.drug = '';
          $scope.drugList = [];
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getTradenets().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.tradenetList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getDrugs().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.drugList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(7).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          monthPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
              var lastDay  = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              $scope.$apply();
              $scope.change();
          });

          function change(){
            $scope.canRefresh = !!$scope.tradenet && !!$scope.drug && !!$scope.firstDay && !!$scope.lastDay;
          };

          function refresh(){
             $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=7&tradenet=' + $scope.tradenet.id + '&drug=' + $scope.drug.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay
                }).success(function(result){
                    //SUCCESS
                    $scope.results = result;
                   $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Выкладка.xls');
            $scope.downloading = false;
          };
      });

      app.controller('posController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.tradenet = '';
          $scope.tradenetList = [];
          $scope.drug = '';
          $scope.drugList = [];
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getTradenets().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.tradenetList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getDrugs().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.drugList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(8).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          monthPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
              var lastDay  = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              $scope.$apply();
              $scope.change();
          });

          function change(){
            $scope.canRefresh = !!$scope.tradenet && !!$scope.drug && !!$scope.firstDay && !!$scope.lastDay;
          };

          function refresh(){
             $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=8&tradenet=' + $scope.tradenet.id + '&drug=' + $scope.drug.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay
                }).success(function(result){
                    //SUCCESS
                    $scope.results = result;
                   $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('POS.xls');
            $scope.downloading = false;
          };
      });

      app.controller('claimController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.tradenet = '';
          $scope.tradenetList = [];
          $scope.drug = '';
          $scope.drugList = [];
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getTradenets().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.tradenetList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getDrugs().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.drugList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(9).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          monthPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
              var lastDay  = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              $scope.$apply();
          });

          function change() {
            $scope.canRefresh = !!$scope.tradenet && !!$scope.firstDay && !!$scope.lastDay && !!$scope.drug;
          }

          function refresh(){
            $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=9&tradenet=' + $scope.tradenet.id + '&drug=' + $scope.drug.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay
                }).success(function(result){
                  //SUCCESS
                  $scope.results = result;
                  $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Претензионные акты.xls');
            $scope.downloading = false;
          };
      });

      app.controller('defect_claimController', function($scope, $http, getDataRpt, $filter) { /*global app*/
          $scope.tradenet = '';
          $scope.tradenetList = [];
          $scope.drug = '';
          $scope.drugList = [];
          $scope.results = [];
          $scope.meta = [];
          $scope.change = change;
          $scope.refresh = refresh;
          $scope.download = download;

          getDataRpt.getTradenets().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.tradenetList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getDrugs().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.drugList = results.data;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          getDataRpt.getMeta(10).then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.meta = results.data.fields;
          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          monthPicker.on('changeDate', function(e) {
              var selectedDate = new Date(e.date);
              var firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
              var lastDay  = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
              $scope.firstDay = $filter('date')(firstDay, 'yyyy-MM-dd');
              $scope.lastDay = $filter('date')(lastDay, 'yyyy-MM-dd');
              console.log('firstDay : %s', firstDay);
              console.log('lastDay : %s', lastDay);
              console.log('firstDayF : %s', $scope.firstDay);
              console.log('lastDayF : %s', $scope.lastDay);
              $scope.$apply();
              $scope.change();
          });

          function change() {
            $scope.canRefresh = !!$scope.tradenet && !!$scope.drug && !!$scope.firstDay && !!$scope.lastDay;
          };

          function refresh(){
             $scope.refreshing = true;
                //console.log($scope.query);
                $http({
                  url:'/Report/Generate?report=10&tradenet=' + $scope.tradenet.id + '&drug=' + $scope.drug.id + '&date_first=' + $scope.firstDay + '&date_last=' + $scope.lastDay
                }).success(function(result){
                    //SUCCESS
                    $scope.results = result;
                   $scope.refreshing = false;
                }).error(function(error){
                    //ERROR
                    console.log(JSON.stringify(error));
                });
          };

          function download(){
            $scope.downloading = true;
            getDataRpt.download('Деф. журнал и прет. акты по сети.xls');
            $scope.downloading = false;
          };
      });

      app.controller('weeklyQueryController', function($scope, $http, getDataRpt) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.results = '';
          $scope.week = '';

          //   $scope.$watch('week', function(){
          //       console.log('WATCH '+ $scope.week);
          //   });

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;

          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          //Save datePicker value to scope
          weekPicker.on('changeDate', function(e) {
              var curr = new Date(e.date);
    		  var first = curr.getDate() - curr.getDay();
    		  var last = first + 6;
    		  var firstday = new Date(curr.setDate(first));
    		  var lastday = new Date(curr.setDate(last));

              $scope.week = firstday.getDate() +'.'+ (firstday.getMonth() + 1) + '.' + firstday.getFullYear()+'-'+ lastday.getDate() +'.' + (lastday.getMonth() + 1) + '.' + lastday.getFullYear();
              $scope.$apply();
              //console.log('WEEK '+ $scope.week);
          });

          $scope.admin_query = function(){
              var str = '';
              str = $scope.week;
              var matches = str.match(/\d+\.\d+\.\d\d\d\d/g);
              //console.log('MATCHES ' + JSON.stringify(matches));
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                //SUCCESS
                $scope.results = result;
            }).error(function(error){
                //ERROR
                console.log(JSON.stringify(error));
            });
          };
      });

      app.controller('monthlyQueryController', function($scope, $http, getDataRpt) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.month = '';
          $scope.results = '';

          monthPicker.on('changeDate', function(e) {
              var curr = new Date(e.date);

              $scope.month = (curr.getMonth() + 1) + '.' + curr.getFullYear();
              $scope.$apply();
              //console.log('MONTH '+$scope.month);
          });

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;

          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          $scope.admin_query = function(){
            //console.log($scope.month);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                //SUCCESS
                $scope.results = result;
            }).error(function(error){
                //ERROR
                console.log(JSON.stringify(error));
            });
          };
      });
      app.controller('intervalQueryController', function($scope, $http, getDataRpt) { /*global app*/
          $scope.query = '';
          $scope.merchant = '';
          $scope.merchantList = '';
          $scope.startInterval = '';
          $scope.endInterval = '';
          $scope.results = '';
          $scope.date = {};

          intervalPicker['start'].on('changeDate', function(e) {
              var curr = new Date(e.date);

              $scope.startInterval = curr;
              $scope.$apply();
              //intervalPicker['end'].minDate = curr;
              console.log('Start '+ $scope.startInterval);
          });

          intervalPicker['end'].on('changeDate', function(e) {
              var curr = new Date(e.date);

              $scope.endInterval = curr;
              $scope.$apply();
              console.log('end '+ $scope.endInterval);
          });

          getDataRpt.getMerchants().then(function(results){
              //SUCCESS
              //console.log(JSON.stringify(results));
              $scope.merchantList = results.data;

          },function(results){
              //ERROR
              console.log(JSON.stringify(results));
          });

          $scope.admin_query = function(){
            //console.log($scope.month);
            $http({url:'/admin/query?admin_query=' + $scope.query}).success(function(result){
                //SUCCESS
                $scope.results = result;
            }).error(function(error){
                //ERROR
                console.log(JSON.stringify(error));
            });
          };
      });