      app.controller('adminQueryController', function($scope, $http) { /*global app*/
          $scope.query = '';
          $scope.results = '';
          
          $scope.admin_query = function(){
              console.log($scope.query);
            $http({url:'/admin/query',data: $scope.query}).success(function(result){
                $scope.results = result;
            }).error(function(error){
                console.log(JSON.stringify(error));
            });    
          };
      });  