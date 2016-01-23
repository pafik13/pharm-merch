	  /*----------------------- MANAGERS --------------------------------*/
	  function getManagers(){
	    var users = [];
		$.ajax(
		{
		  async: false,
		  url: "/Manager/find?",
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
	  
  	  function getManager(id){
	    var u = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Manager/find?id="+id, 
		  success: function (data) {
		    u = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return u;
	  }
	  
	  function createManager(data){	  
	    var d = {};
		data.manager = manager.id;
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Manager/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  function updateManager(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Manager/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }	  
	  
	  /*----------------------- MERCHANTS --------------------------------*/
	  function getUsers(){
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
	  
  	  function getUser(id){
	    var u = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Merchant/find?manager=" + manager.id + "&id="+id, 
		  success: function (data) {
		    u = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return u;
	  }
	  
	  function createUser(data){	  
	    var d = {};
		data.manager = manager.id;
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Merchant/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  function updateUser(data){	  
	    var d = {};
		data.manager = manager.id;
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Merchant/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }	  
	  /*--------------------- PHARMACIES -------------------------*/	
	  function getPharmacies(){
	    var d = [];
		$.ajax(
		{
		  async: false,
		  url: "/Pharmacy/find?", 
		  success: function (data) {
		    d = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data + "\n" + 'getPharmacies');
		  },
		  dataType: 'json'
		});
       return d;   
	  }	
	  
	  function getPharmacy(id){
	    var p = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Pharmacy/find?id="+id, 
		  success: function (data) {
		    p = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return p;
	  }

	  function createPharmacy(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Pharmacy/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg; 
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }

	  function updatePharmacy(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Pharmacy/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }	  	 
	  /*----------------------- DRUGS --------------------------------*/
	  function getDrugs(){
	    var drugs = [];
		$.ajax(
		{
		  async: false,
		  url: "/Drug/find?", 
		  success: function (data) {
		    drugs = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data+ "\n" + 'getDrugs');
		  },
		  dataType: 'json'
		});
       return drugs;   
	  }
	  
  	  function getDrug(id){
	    var d = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Drug/find?id="+id, 
		  success: function (data) {
		    d = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return d;
	  }
	  
	  function createDrug(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Drug/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  function updateDrug(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Drug/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }		
	  /*----------------------- COMPANIES --------------------------------*/
	  function getCompanies(){
	    var d = [];
		$.ajax(
		{
		  async: false,
		  url: "/Company/find?", 
		  success: function (data) {
		    d = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data+ "\n" + 'getCompanies');
		  },
		  dataType: 'json'
		});
       return d;   
	  }
	  
  	  function getCompany(id){
	    var d = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Company/find?id="+id, 
		  success: function (data) {
		    d = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return d;
	  }
	  
	  function createCompany(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Company/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  function updateCompany(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Company/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }	
	  /*----------------------- PROJECTS --------------------------------*/
	  function getProjects(){
	    var d = [];
		$.ajax(
		{
		  async: false,
		  url: "/Project/find?", 
		  success: function (data) {
		    d = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data + "\n" + 'getProjects');
		  },
		  dataType: 'json'
		});
       return d;   
	  }
	  
  	  function getProject(id){
	    var d = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Project/find?id="+id, 
		  success: function (data) {
		    d = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return d;
	  }
	  
	  function createProject(data){	  
	    var d = {};
		//data.manager = manager.id;
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Project/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  function updateProject(data){	  
	    var d = {};
		//data.manager = manager.id;
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Project/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  /*----------------------- TERRITORIES --------------------------------*/
	  function getTerritories(){
	    var d = [];
	    $.ajax(
		{
		  async: false,
		  url: "/Territory/find?", 
		  success: function (data) {
		    d = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data + "\n" + 'getTerritories');
		  },
		  dataType: 'json'
		});
		
		return d; 
	  }
	  
  	  function getTerritory(id){
	    var d = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Territory/find?id="+id, 
		  success: function (data) {
		    d = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return d;
	  }
	  
	  function createTerritory(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Territory/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  function updateTerritory(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/Territory/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }	 
	  /*----------------------- DRUGINFOTYPES --------------------------------*/
	  function getDrugInfoTypes(){
	    var d = [];
	    $.ajax(
		{
		  async: false,
		  url: "/DrugInfoType/find?", 
		  success: function (data) {
		    d = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data + "\n" + 'getDrugInfoTypes');
		  },
		  dataType: 'json'
		});
	    return d; 
	  }
	  
  	  function getDrugInfoType(id){
	    var d = {};
	    $.ajax(
		{
		  async: false,
		  url: "/DrugInfoType/find?id="+id, 
		  success: function (data) {
		    d = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return d;
	  }
	  
	  function createDrugInfoType(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/DrugInfoType/create?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }
	  
	  function updateDrugInfoType(data){	  
	    var d = {};
		$.ajax({
		    async: false,
			type: "POST",
			url: "/DrugInfoType/update/"+data.id+"/?",
			dataType: 'json',
			data: data,
			success: function(msg){
			   d = msg;				   	
			},
			error: function(xhr, status, data){
			   alert(status + " ERROR " + JSON.stringify(data));
			}
		});
		return d;
	  }	 	  
	  
	  
	  /*-------------------------- ANGULAR APP -----------------------------------------*/
      var app = angular.module('App', []);  /*global angular*/
      
      app.directive('map', function(){
      	return {
      		scope:{
      			data: "=",
      			show: "="
      		},
      		templateUrl:'/templates/map.html',
      		controller: function($scope, $element, $attrs){
      			$scope.show_map = false;
      			$scope.latlng = {};
      			$scope.autocompmap = {};
      			$scope.input = {};
      			$scope.geocoder = {};
      			
      			function initMap(){
      				//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
      				  $scope.latlng;
					  $scope.autocompmap;
					  $scope.input =  $element[0].querySelector('input#autocomp');
					  var val = $scope.input.value;
					  $scope.geocoder = new google.maps.Geocoder();
					  var geoQuery = { 'address': val, 'partialmatch': true};
					  //first position
					  $scope.geocoder.geocode( geoQuery, function(results, status) {
						  if (status == google.maps.GeocoderStatus.OK) {
						    
						    $scope.latlng = results[0].geometry.location;
						    $scope.autocompmap.setCenter($scope.latlng);
						    marker.setPosition($scope.latlng);  
					  		marker.setVisible(true);
					      } else {
					      	alert(status);
					      }	  
					  });
					  
					  var mapOptions = {
					    center:  $scope.latlng,
					    scrollWheel: false,
					    zoom: 17
					  };
					 
					  //autocompmap = new google.maps.Map(document.getElementById("autocomp_map"), mapOptions);
					  $scope.autocompmap = new google.maps.Map( $element[0].querySelector('div#autocomp_map'), mapOptions);
					  var autocomplete = new google.maps.places.Autocomplete($scope.input);
					  autocomplete.bindTo('bounds', $scope.autocompmap);
					
					  var marker = new google.maps.Marker({
					      map: $scope.autocompmap,
					      anchorPoint: $scope.latlng
					    });
					  
					  google.maps.event.addListener(autocomplete, 'place_changed', function() {
					    var place = autocomplete.getPlace();
						if (!place.geometry) {
							var geoQuery = { 'address': val, 'partialmatch': true};
							$scope.geocoder.geocode( geoQuery , function(results, status) {
								if (status == google.maps.GeocoderStatus.OK) {
									$scope.latlng = results[0].geometry.location;
									marker.setPosition($scope.latlng);
									marker.setVisible(true);
									$scope.autocompmap.setCenter($scope.latlng);
								    $scope.autocompmap.setZoom(17);  
								    $scope.$apply(function(){
								    	$scope.data.latitude = $scope.latlng.lat();
								    	$scope.data.longitude = $scope.latlng.lng();
								    	$scope.data.place = results[0];
								    });
						    	} else {
						      		alert(status);
						    	}	  
						    });
						  return;
						} else {
							$scope.latlng = place.geometry.location;
							marker.setPosition($scope.latlng);
							marker.setVisible(true);
							$scope.autocompmap.setCenter($scope.latlng);
						    $scope.autocompmap.setZoom(17);  
						    $scope.$apply(function(){
							   	$scope.data.latitude = $scope.latlng.lat();
							   	$scope.data.longitude = $scope.latlng.lng();
							   	$scope.data.place = place;
							});
						}
					  });
				
		      	};
		      	
		      	$scope.$watch('show',function(){
		      		//signal for hide map
		      		//console.log($scope.show);
		      	    $scope.show_map = false;
		      		
		      	});
		      	
		      			
      			$scope.$watch('show_map', function(oldValue,newValue){
      				console.log('showing map '+ $scope.show);
      				if($scope.show_map)
      				{
      					//console.log('init map');
      					initMap();
      					window.setTimeout(function(){
    						google.maps.event.trigger($scope.autocompmap, 'resize');
                        },100);
      				}
      				else
      				{
      					$scope.latlng = {};
		      			$scope.autocompmap = {};
		      			$scope.input = {};
		      			$scope.geocoder = {};
      				}
      			});
		      		  
		   	}
		};
	  });
	  
      app.directive('modal', function(){
	  	return {
	  		restrict:'E',
	  		scope:{
	  			caption: '@',
	  			last: '=',
	  			modalId: '@',
	  			contentUrl: '@',
	  			initial: '&action'
	  		},
	  		templateUrl: '/templates/modal.html',
	  		controller: function($scope){
	  			//init action
	  			$scope.action = function(id){
	  				$scope.initial({id:id});
	  			};
	  		}
	  	};
	  });
      
      app.directive('tile', function(){
	  	return {
	  		restrict:'E',
	  		scope:{
	  			items:       '=',
	  			caption:     '@',
	  			createId:    '@',
	  			updateId:    '@',
	  			contentUrl:  '@',
	  			meta:		 '=',
	  			showGrid:	 '@',
	  			init_create: '&create',
	  			init_update: '&update',
	  			tileClass:	 '@'
	  		},
	  		templateUrl: '/templates/tile.html',
	  		controller: function($scope){
	  			$scope.view = 'tile';
	  			$scope.useView = $scope.showGrid == 'true';
	  			
	  			$scope.create = function(){
	  				$scope.init_create();
	  			};
	  			$scope.update = function(id){
	  				$scope.init_update({id: id});
	  			};
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
	  	};
	  }); 

	  app.directive('pagination', function(){
	  	return {
	  		scope:{
	  			count: '@',
	  			obj: '=items',
	  			limit: '@'
	  		},
	  		templateUrl: '/templates/pagination.html',
	  		controller: function($scope){
	  			
	  			if($scope.limit == 'undefined'){
	  				$scope.limit = 30;
	  			}
	  			$scope.items = [];
	  			
	  			//onsole.log($scope.count+ ' ' + $scope.limit);
	  			
	  			$scope.$watch('count',function(){
	  				//console.log($scope.count+ ' ' + $scope.limit);
		  			for(var i = 1; i < $scope.count/$scope.limit; i++)
		  			{
		  				//console.log(i);
						$scope.items.push(i);	  			
		  			}	
	  			});
	  			
	  		}
	  		
	  	}
	  });

     //Global data factory
      app.factory('getData',function($http,$q){
      	  var getList =  function(model,filter,skip,limit){
      	  	      var deferred = $q.defer();
                  var data = {};
                  skip = 0;
                  limit = 10000;
                  
                  if(filter){
                  	data = {
                          	populate: [],
                          	manager: manager.id,
                          	skip: skip,
                          	limit: limit
                          };
                  }else{
                  	data = {
                          	populate: [],
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
      	  var getOne =  function(model, id, filter){
      	  	      var deferred = $q.defer();
                  var data = {};
                  
                  if(filter){
                  	data = {
                          	populate: [],
                          	manager: manager.id
                          };
                  }else{
                  	data = {
                          	populate: []
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
              getMerchant:      function(id){ return getOne("Merchant", id, true)},
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
      
      
	  /*--------------------------- MANAGERS ------------------------------------------*/
      app.controller('managersList', function($scope, getData) {
          $scope.managers = [];
		  $scope.last_manager = {};
		  $scope.last_manager.firstName = '';
		  $scope.last_manager.middleName = '';
		  $scope.last_manager.lastName = '';
		  $scope.last_manager.sex = 0;
		  $scope.last_manager.phone = '';
		  $scope.last_manager.email = '';
		  $scope.last_manager.id    = 0;
		  
		  $scope.$watch('menuManagers', function(oldValue, newValue) {
		  	getData.getManagers().then(
		  		function(request){
		  			//SUCCESS 
		  			$scope.managers = request.data;
		  		},
		  		function(request){
		  			//ERROR
		  			console.log(JSON.stringify(request));
		  		});
		  }, true);
		  
		  $scope.create = function(){		    
			var data = {
			    username:   $scope.last_manager.username,
				firstName:  $scope.last_manager.firstName,
				middleName: $scope.last_manager.middleName,
				lastName:   $scope.last_manager.lastName,
				sex:        $scope.last_manager.sex,
				email:      $scope.last_manager.email,
				phone:      $scope.last_manager.phone
			};
			var cu = createManager(data);
			
			$scope.managers.push({
			    username:   cu.username,
				firstName:  cu.firstName,
				middleName: cu.middleName,
				lastName:   cu.lastName,
				sex:        cu.sex,
				email:      cu.email,
				phone:      cu.phone,
			    id:         cu.id
			});
			$scope.last_manager = {};
			$("#manager_add").modal('hide');  
		  };
		  $scope.clear_last  = function(){
		    $scope.last_manager = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getManager(id);
			
			$scope.last_manager.username = cu.username;
			$scope.last_manager.firstName = cu.firstName,
			$scope.last_manager.middleName = cu.middleName;			 
			$scope.last_manager.lastName = cu.lastName;
			$scope.last_manager.sex = cu.sex;
			$scope.last_manager.email = cu.email;
			$scope.last_manager.phone = cu.phone;	
			$scope.last_manager.id    = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    username:   $scope.last_manager.username,
				firstName:  $scope.last_manager.firstName,
				middleName: $scope.last_manager.middleName,
				lastName:   $scope.last_manager.lastName,
				sex:        $scope.last_manager.sex,
				email:      $scope.last_manager.email,
				phone:      $scope.last_manager.phone,
				id:			id
			};
			var cu = updateManager(data);
			var idx = -1;
			var old = $.grep($scope.managers,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.managers[idx] = {
			    username:   cu.username,
				firstName:  cu.firstName,
				middleName: cu.middleName,
				lastName:   cu.lastName,
				sex:        cu.sex,
				email:      cu.email,
				phone:      cu.phone,
			    id:         cu.id
			};
			$scope.last_manager = {};
			$("#manager_update").modal('hide');
		  };
		  $('#manager_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.last_manager = {};
			});
		  });			  
      });
	  /*--------------------------- MERCHANTS ------------------------------------------*/
      app.controller('merchantList', function($scope, getData) {
          $scope.users = [];
		  $scope.last_user = {};
		  $scope.last_user.firstName = '';
		  $scope.last_user.middleName = '';
		  $scope.last_user.lastName = '';
		  $scope.last_user.sex = 0;
		  $scope.last_user.phone = '';
		  $scope.last_user.email = '';
		  $scope.last_user.territories = [];
		  $scope.last_user.projects = [];
		  $scope.last_user.territory = {};
		  $scope.last_user.project = {};
		  $scope.last_user.id    = 0;
		  
		  $scope.$watch('menuMerchants', function(oldValue, newValue) {
		  	getData.getMerchants().then(function(result){
		  		$scope.users = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	});
		  }, true);
		  
		  $scope.init_create = function(){
		  	$scope.last_user = {};
		  	$scope.last_user.territories = getTerritories();
		    $scope.last_user.projects    = getProjects();
		  }
		  
		  $scope.create = function(){		    
			var data = {
			    username:   $scope.last_user.username,
				firstName:  $scope.last_user.firstName,
				middleName: $scope.last_user.middleName,
				lastName:   $scope.last_user.lastName,
				sex:        $scope.last_user.sex,
				email:      $scope.last_user.email,
				phone:      $scope.last_user.phone,
				territory:  $scope.last_user.territory,
				project:	$scope.last_user.project
			};
			var cu = createUser(data);
			
			$scope.users.push({
			    username:   cu.username,
				firstName:  cu.firstName,
				middleName: cu.middleName,
				lastName:   cu.lastName,
				sex:        cu.sex,
				email:      cu.email,
				phone:      cu.phone,
				territory:  cu.territory,
				project:	cu.project,
			    id:         cu.id
			});
			$scope.last_user = {};
			$("#add").modal('hide');  
		  };
		  $scope.clear_last  = function(){
		    $scope.last_user = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getUser(id);
			
			$scope.last_user.username = cu.username;
			$scope.last_user.firstName = cu.firstName,
			$scope.last_user.middleName = cu.middleName;			 
			$scope.last_user.lastName = cu.lastName;
			$scope.last_user.sex = cu.sex;
			$scope.last_user.email = cu.email;
			$scope.last_user.phone = cu.phone;	
			$scope.last_user.territories = getTerritories();
			$scope.last_user.projects = getProjects();
			$scope.last_user.territory = cu.territory;
			$scope.last_user.project = cu.project;
			$scope.last_user.id    = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    username:   $scope.last_user.username,
				firstName:  $scope.last_user.firstName,
				middleName: $scope.last_user.middleName,
				lastName:   $scope.last_user.lastName,
				sex:        $scope.last_user.sex,
				email:      $scope.last_user.email,
				phone:      $scope.last_user.phone,
				territory:  $scope.last_user.territory,
				project:	$scope.last_user.project,
				id:			id
			};
			var cu = updateUser(data);
			var idx = -1;
			var old = $.grep($scope.users,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.users[idx] = {
			    username:   cu.username,
				firstName:  cu.firstName,
				middleName: cu.middleName,
				lastName:   cu.lastName,
				sex:        cu.sex,
				email:      cu.email,
				phone:      cu.phone,
				territory:  cu.territory,
				project:	cu.project,
			    id:         cu.id
			};
			$scope.last_user = {};
			$("#update").modal('hide');
		  };
		  $('#add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.init_create();
			});
		  });			  
      });
	  /*---------------------------- PHARMACIES -----------------------------------*/
      app.controller('pharmaciesList', function($scope, getData) {
	      $scope.pharmacies = [];
		  $scope.last_pharmacy = {};
		  $scope.last_pharmacy.fullName = '';
		  $scope.last_pharmacy.address = '';
		  $scope.last_pharmacy.email = '';
		  $scope.last_pharmacy.id = 0;
		  $scope.last_pharmacy.validated = false;
		  $scope.last_pharmacy.territories = [];
		  $scope.last_pharmacy.territory = {};
		  $scope.last_pharmacy.place = {};
		  $scope.last_pharmacy.latitude = 0;
		  $scope.last_pharmacy.longitude = 0;
		  
		  $scope.meta = {fullName:"Наименование",address:"Адрес",id:"Индекс"};
		  
		  //for hide map before shown modal form
		  $scope.show = 0;
		  
		  $scope.clearAutocomplete = function(parent){
		  	$(parent +' #autocomp').val('clear autocmoplete');
		  };
		  // google maps auto complete
		  $scope.initAutocomplete = function(parent){
		  	  //https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
			  var latlng;
			  var autocompmap;
			  var input = ($(parent +' #autocomp')[0]);
			  var geocoder = new google.maps.Geocoder();
			  var geoQuery = { 'address': input.value, 'partialmatch': true};
			  //first position
			  geocoder.geocode( geoQuery, function(results, status) {
				  if (status == google.maps.GeocoderStatus.OK) {
				    
				    latlng = results[0].geometry.location;
				    autocompmap.setCenter(latlng);
				    marker.setPosition(latlng);  
			  		marker.setVisible(true);
			      } else {
			      	alert(status);
			      }	  
			  });
			  
			  var mapOptions = {
			    center:  latlng,
			    scrollWheel: false,
			    zoom: 17
			  };
			
			  //autocompmap = new google.maps.Map(document.getElementById("autocomp_map"), mapOptions);
			  autocompmap = new google.maps.Map($(parent + " #autocomp_map")[0], mapOptions);
			  var autocomplete = new google.maps.places.Autocomplete(input);
			  autocomplete.bindTo('bounds', autocompmap);
			
			  var marker = new google.maps.Marker({
			      map: autocompmap,
			      anchorPoint: latlng
			    });
			  
			  google.maps.event.addListener(autocomplete, 'place_changed', function() {
			    var place = autocomplete.getPlace();
				if (!place.geometry) {
					var geoQuery = { 'address': input.value, 'partialmatch': true};
					geocoder.geocode( geoQuery , function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							latlng = results[0].geometry.location;
							marker.setPosition(latlng);
							marker.setVisible(true);
							autocompmap.setCenter(latlng);
						    autocompmap.setZoom(17);  
						    $scope.$apply(function(){
						    	$scope.last_pharmacy.latitude = latlng.lat();
						    	$scope.last_pharmacy.longitude = latlng.lng();
						    	$scope.last_pharmacy.place = results[0];
						    });
				    	} else {
				      		alert(status);
				    	}	  
				    });
				  return;
				} else {
					latlng = place.geometry.location;
					marker.setPosition(latlng);
					marker.setVisible(true);
					autocompmap.setCenter(latlng);
				    autocompmap.setZoom(17);  
				    $scope.$apply(function(){
					   	$scope.last_pharmacy.latitude = latlng.lat();
					   	$scope.last_pharmacy.longitude = latlng.lng();
					   	$scope.last_pharmacy.place = place;
					});
				}
			  });
			};
		  
		  $scope.$watch('menuPharmacies', function(oldValue, newValue) {
		  	getData.getPharmacies().then(function(result){
		  		$scope.pharmacies = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	}).then(function(){
		  		getData.Pharmacy.count().then(function(result){
		  			$scope.count = result;
				});
		  	});
		  }, true);
		  
		  //init create modal form
		  $scope.init_create = function(){
		  	$scope.last_pharmacy = {};
		  	getData.getTerritories().then(function(result){
		  		$scope.last_pharmacy.territories = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	});
		  };
	      
	      //update from modal form
          $scope.create = function(){
		    
			var data = {
			    fullName:  $scope.last_pharmacy.fullName,
				address:   $scope.last_pharmacy.address,
				phone:     $scope.last_pharmacy.phone,
				email:     $scope.last_pharmacy.email,
				validated: $scope.last_pharmacy.validated,
				territory: $scope.last_pharmacy.territory
			};
			
			getData.insPharmacy(data).then(function(result){
				//success
				var cp = result.data;
			
				$scope.pharmacies.push({
				  fullName:  cp.fullName,
				  address:   cp.address,
				  phone:     cp.phone,
				  email:     cp.email,
				  id:        cp.id,
				  validated: cp.validated,
				  territory: cp.territory
				});
				$scope.last_pharmacy = {};
				$("#pharmacy_add").modal('hide');
			}, function(result){
				//error
				console.log(JSON.stringify(result));
			});
		  };
		  
		  $scope.clear_last = function(){
		    $scope.last_pharmacy = {};
		  };
		  
		  //init update modal form
		  $scope.init_update = function(id){
		  	$scope.last_pharmacy.fullName  = '';
			$scope.last_pharmacy.address   = '';
			$scope.last_pharmacy.phone     = '';
			$scope.last_pharmacy.email     = '';
			$scope.last_pharmacy.id        = '';
			$scope.last_pharmacy.validated = '';
			$scope.last_pharmacy.territory = '';
			
		  	getData.getPharmacy(id).then(function(result){
		  		//SUCCESS
		  		var cu = result.data;
		  		$scope.last_pharmacy.fullName  = cu.fullName;
			    $scope.last_pharmacy.address   = cu.address;
				$scope.last_pharmacy.phone     = cu.phone;
			    $scope.last_pharmacy.email     = cu.email;
				$scope.last_pharmacy.id        = cu.id;
				$scope.last_pharmacy.validated = cu.validated;
				$scope.last_pharmacy.territory = cu.territory;
				console.log('init_update ' + cu.fullName);
		  	},function(result){
		  		//ERROR
		  	}).then(function(result){
		  		getData.getTerritories().then(function(result){
					//SUCCESS
					$scope.last_pharmacy.territories = result.data;
					console.log('init_update');
				},function(result){
					//ERROR
					console.log(JSON.stringify(result));
				});
		  	});
		  };
		  
		  //update from modal form
		  $scope.update = function(id){
		    var data = {
			    fullName:  $scope.last_pharmacy.fullName,
				address:   $scope.last_pharmacy.address,
				phone:     $scope.last_pharmacy.phone,
				email:     $scope.last_pharmacy.email,
				id:        $scope.last_pharmacy.id,
				validated: $scope.last_pharmacy.validated,
				territory: $scope.last_pharmacy.territory
			};
			getData.updPharmacy(data).then(function(result){
				//success
				var cu = result.data;
			
				var idx = -1;
				var old = $.grep($scope.pharmacies,function(u,i){
				          if (u.id == id){					    
				            idx = i;
						  }					  
				        });	
				$scope.pharmacies[idx] = {
				    fullName:  cu.fullName,
					address:   cu.address,
					phone:     cu.phone,
					email:     cu.email,
					id:        cu.id,
					valicated: cu.validated,
					territory: cu.territory
				};
				$scope.last_pharmacy = {};
				$("#pharmacy_upd").modal('hide');				
			}, function(result){
				//error
				console.log(JSON.stringify(result));
			});
			
		  };
		  $('#pharmacy_add').on('show.bs.modal', function (event) {
		  	//call watch in directive for hide map
		  	$scope.show += 1;
		  	$scope.$apply();
		  });
		
		  $('#pharmacy_add').on('shown.bs.modal', function(event){
		  
		  });
		  
		  $('#pharmacy_upd').on('show.bs.modal', function(event){
		  	//call watch in directive for hide map
		  	$scope.show += 1;
		  	$scope.$apply();
		  	
		  });
		  
		  $('#pharmacy_upd').on('shown.bs.modal', function(event){

		  });
		  
      });	

	  /*------------------------------- DRUGS -----------------------------------*/
      app.controller('drugsList', function($scope, getData) {
          $scope.drugs = [];
		  $scope.last_drug = {};
		  $scope.last_drug.fullName = '';
		  $scope.last_drug.officialName = '';
		  $scope.last_drug.description = '';
		  $scope.last_drug.barcode = 0;
		  $scope.last_drug.id    = 0;
		  
		  $scope.view = 'tile';
		  
		  $scope.$watch('menuDrugs', function(oldValue, newValue) {
		  	getData.getDrugs().then(function(result){
		  		$scope.drugs = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	});
		  }, true);		  

		  $scope.create = function(){		    
			var data = {
			    fullName:     $scope.last_drug.fullName,
				officialName: $scope.last_drug.officialName,
				description:  $scope.last_drug.description,
				barcode:      $scope.last_drug.barcode
			};
			var cu = createDrug(data);
			
			$scope.drugs.push({
			    fullName:     cu.fullName,
				officialName: cu.officialName,
				description:  cu.description,
				barcode:      cu.barcode,
			    id:           cu.id
			});
			$scope.last_drug = {};
			$("#drug_add").modal('hide');  
		  };
		  $scope.clear_last  = function(){
		    $scope.last_drug = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getDrug(id);
		    
		    //Need finish stoping porpogation!!!
		    if(!("id" in cu)){
		    	$("#drug_upd").on('show.bs.modal',function(e){
		    		e.stopPropagation();
		    	});
		    	return;
		    }
			
			$scope.last_drug.fullName     = cu.fullName;
		    $scope.last_drug.officialName = cu.officialName;
		    $scope.last_drug.description  = cu.description;
		    $scope.last_drug.barcode      = cu.barcode;
		    $scope.last_drug.id           = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    fullName:     $scope.last_drug.fullName,
				officialName: $scope.last_drug.officialName,
				description:  $scope.last_drug.description,
				barcode:      $scope.last_drug.barcode,
				id:			  id
			};
			var cu = updateDrug(data);
			if(!cu)
			  return;
			var idx = -1;
			var old = $.grep($scope.drugs,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.drugs[idx] = {
			    fullName:     cu.fullName,
				officialName: cu.officialName,
				description:  cu.description,
				barcode:      cu.barcode,
			    id:           cu.id
			};
			$scope.last_drug = {};
			$("#drug_upd").modal('hide');
		  };
		  $('#drug_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.last_drug = {};
			});
		  });			  
      });	  
      /*----------------------------- COMPANIES -----------------------------------*/
	  app.controller('companiesList', function($scope, getData) {
          $scope.companies = [];
		  $scope.last_company = {};
		  $scope.last_company.fullName = '';
		  $scope.last_company.shortName = '';
		  $scope.last_company.officialName = '';
		  $scope.last_company.description = '';
		  $scope.last_company.id = 0;
		  
  		  $scope.$watch('menuDrugs', function(oldValue, newValue) {
  		  	getData.getCompanies().then(function(result){
		  		$scope.companies = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	});
		  }, true);		  

		  $scope.create = function(){		    
			var data = {
			    fullName:     $scope.last_company.fullName,
				shortName:    $scope.last_company.shortName,
				officialName: $scope.last_company.officialName,
				description:  $scope.last_company.description
			};
			var cu = createCompany(data);
			
			$scope.companies.push({
			    fullName:     cu.fullName,
				shortName:	  cu.shortName,
				officialName: cu.officialName,
				description:  cu.description,
			    id:           cu.id
			});
			$scope.last_company = {};
			$("#company_add").modal('hide');  
		  };
		  $scope.clear_last = function(){
		    $scope.last_company = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getCompany(id);
			
			$scope.last_company.fullName     = cu.fullName;
			$scope.last_company.shortName    = cu.shortName;
		    $scope.last_company.officialName = cu.officialName;
		    $scope.last_company.description  = cu.description;
		    $scope.last_company.id           = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    fullName:     $scope.last_company.fullName,
				shortName:    $scope.last_company.shortName,
				officialName: $scope.last_company.officialName,
				description:  $scope.last_company.description,
				id:			  id
			};
			var cu = updateCompany(data);
			var idx = -1;
			var old = $.grep($scope.companies,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.companies[idx] = {
			    fullName:     cu.fullName,
				shortName:	  cu.shortName,
				officialName: cu.officialName,
				description:  cu.description,
			    id:           cu.id
			};
			$scope.last_company = {};
			$("#company_upd").modal('hide');
		  };
		  $('#company_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.last_company = {};
			});
		  });			  
      });	  
      /*----------------------------- PROJECTS -----------------------------------*/
	  app.controller('projectsList', function($scope, getData) {
          $scope.projects = [];
		  $scope.last_project = {};
		  $scope.last_project.fullName = '';
		  $scope.last_project.description = '';
		  $scope.last_project.id = 0;
		  $scope.last_project.drugList = [];
		  $scope.last_project.drugs = [];
		  $scope.last_project.drugInfoTypesList = [];
		  $scope.last_project.druginfotypes = [];

  		  $scope.$watch('menuProjects', function(oldValue, newValue) {
  		  	getData.getProjects().then(function(result){
		  		$scope.projects = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	});
		  }, true);		  
		  
		  $scope.init_create = function(){
		  	$scope.last_project = {};
			$scope.last_project.drugList = getDrugs();
			$scope.last_project.drugInfoTypesList = getDrugInfoTypes();
		  };
		  $scope.create = function(){		    
			var data = {
			    fullName:      $scope.last_project.fullName,
				description:   $scope.last_project.description,
				drugs:		   $scope.last_project.drugs,
				druginfotypes: $scope.last_project.druginfotypes
			};
			var cu = createProject(data);
			
			$scope.projects.push({
			    fullName:      cu.fullName,
				description:   cu.description,
				drugs:         cu.drugs,
				druginfotypes: cu.druginfotypes,
			    id:            cu.id
			});
			$scope.last_project = {};
			$("#project_add").modal('hide');  
		  };
		  $scope.clear_last = function(){
		    $scope.last_project = {};
			$scope.last_project.drugs = [];
		  };
		  $scope.init_update = function(id){
		    var cu = getProject(id);
		    
			$scope.last_project.fullName      = cu.fullName;
		    $scope.last_project.description   = cu.description;
		    $scope.last_project.drugList      = getDrugs();
		    $scope.last_project.grugInfoTypesList = getDrugInfoTypes();
		    $scope.last_project.drugs         = cu.drugs;
		    $scope.last_project.druginfotypes = cu.druginfotypes;
		    $scope.last_project.id            = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    fullName:      $scope.last_project.fullName,
				description:   $scope.last_project.description,
				drugs:         $scope.last_project.drugs,
				druginfotypes: $scope.last_project.druginfotypes,
				id:			   id
			};
			var cu = updateProject(data);
			var idx = -1;
			var old = $.grep($scope.projects,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.projects[idx] = {
			    fullName:      cu.fullName,
				description:   cu.description,
				drugs:         cu.drugs,
				druginfotypes: cu.druginfotypes,
			    id:            cu.id
			};
			$scope.last_project = {};
			$("#project_upd").modal('hide');
		  };
		  $('#project_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.init_create();
			});
		  });			  
      });		  
	
	 /*----------------------------- Territories -----------------------------------*/
	  app.controller('territoriesList', function($scope, getData) {
          $scope.territories = [];
		  $scope.last_territory = {};
		  $scope.last_territory.name = '';
		  $scope.last_territory.info = '';
		  $scope.last_territory.baseCity = '';
		  $scope.last_territory.id = 0;
		  
  		  $scope.$watch('menuTerritories', function(oldValue, newValue) {
  		  	getData.getTerritories().then(function(result){
		  		$scope.territories = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	});
		  }, true);		  
		  
		  $scope.create = function(){		    
			var data = {
			    name:     $scope.last_territory.name,
				info:     $scope.last_territory.info,
				baseCity: $scope.last_territory.baseCity
			};
			var cu = createTerritory(data);
			
			$scope.territories.push({
			    name:     cu.name,
				info:	  cu.info,
				baseCity: cu.baseCity,
			    id:       cu.id
			});
			$scope.last_territory = {};
			$("#territory_add").modal('hide');  
		  };
		  $scope.clear_last = function(){
		    $scope.last_territory = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getTerritory(id);
			
			$scope.last_territory.name     = cu.name;
			$scope.last_territory.info     = cu.info;
		    $scope.last_territory.baseCity = cu.baseCity;
		    $scope.last_territory.id       = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    name:     $scope.last_territory.name,
				info:     $scope.last_territory.info,
				baseCity: $scope.last_territory.baseCity,
				id:		  id
			};
			var cu = updateTerritory(data);
			var idx = -1;
			var old = $.grep($scope.territories,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.territories[idx] = {
			    name:      cu.name,
				info:      cu.info,
				baseCity:  cu.baseCity,
			    id:        cu.id
			};
			$scope.last_territory = {};
			$("#territory_upd").modal('hide');
		  };
		  $('#territory_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.last_territory = {};
			});
		  });			  
      });	  
      /*----------------------------- DRUGINFOTYPES -----------------------------------*/
	  app.controller('drugInfoTypesList', function($scope, getData) {
          $scope.drugInfoTypes = [];
		  $scope.last_drugInfoType = {};
		  $scope.last_drugInfoType.name = '';
		  $scope.last_drugInfoType.valueType = '';
		  $scope.last_drugInfoType.id = 0;
		  
  		  $scope.$watch('menuDrugInfoTypes', function(oldValue, newValue) {
  		  	getData.getDrugInfoTypes().then(function(result){
		  		$scope.drugInfoTypes = result.data;
		  	},function(result){
		  		console.log(JSON.stringify(result));
		  	});
		  }, true);		  

		  $scope.create = function(){		    
			var data = {
			    name:      $scope.last_drugInfoType.name,
				valueType: $scope.last_drugInfoType.valueType
			};
			var cu = createDrugInfoType(data);
			
			$scope.drugInfoTypes.push({
			    fullName:     cu.name,
				shortName:	  cu.valueType,
			    id:           cu.id
			});
			$scope.last_drugInfoType = {};
			$("#druginfotype_add").modal('hide');  
		  };
		  $scope.clear_last = function(){
		    $scope.last_drugInfoType = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getDrugInfoType(id);
			
			$scope.last_drugInfoType.name      = cu.name;
			$scope.last_drugInfoType.valueType = cu.valueType;
		    $scope.last_drugInfoType.id        = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    name:      $scope.last_drugInfoType.name,
				valueType: $scope.last_drugInfoType.valueType,
				id:		   id
			};
			var cu = updateDrugInfoType(data);
			var idx = -1;
			var old = $.grep($scope.drugInfoTypes,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.drugInfoTypes[idx] = {
			    name:      cu.name,
				valueType: cu.valueType,
			    id:        cu.id
			};
			$scope.last_drugInfoType = {};
			$("#druginfotype_upd").modal('hide');
		  };
		  $('#druginfotype_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.last_drugInfoType = {};
			});
		  });			  
      });	  
       
	// Menu controller
	app.controller('menuController', function($scope) {
		$scope.menuPharmacies = 0;
		$scope.menuMerchants  = 0;
		$scope.menuDrugs      = 0;
		$scope.menuHospitals  = 0;
		$scope.menuTerritories = 0;
		$scope.menuProjects    = 0;
		$scope.menuCompanies   = 0;
		$scope.menuTradenets   = 0;
		$scope.menuManagers    = 0;
		$scope.menuDrugInfoTypes = 0;
		
		$scope.update_pharmacies = function(){
			$scope.menuPharmacies = $scope.menuPharmacies + 1;
		};
		$scope.update_merchants = function(){
			$scope.menuMerchants = $scope.menuMerchants + 1;
		};
		$scope.update_drugs = function(){
			$scope.menuDrugs = $scope.menuDrugs + 1;
		};
		$scope.update_hospitals = function(){
			$scope.menuHospitals = $scope.menuHospitals + 1;
		};
		$scope.update_territories = function(){
			$scope.menuTerritories = $scope.menuTerritories + 1;
		};
		$scope.update_projects = function(){
			$scope.menuProjects = $scope.menuProjects + 1;
		};
		$scope.update_companies = function(){
			$scope.menuCompanies = $scope.menuCompanies + 1;
		};
		$scope.update_tradenets= function(){
			$scope.menuTradenets = $scope.menuTradenets + 1;
		};		
		$scope.update_managers= function(){
			$scope.menuManagers = $scope.menuManagers + 1;
		};		
		$scope.update_druginfotypes = function(){
			$scope.menuManagers = $scope.menuDrugInfoTypes + 1;
		};	
	});
	//Tooltips  
	$(document).ready(function(){
	    $("[data-toggle=tooltip]").tooltip();
	});	  
	var autocomplete;
