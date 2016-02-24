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
			url: "/Merchant/create?populate=true",
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

	  function updateUser(data, id){
	    var d = {};

      $.ajax({
        async: false,
        type: "PUT",
        url: "/Merchant/"+id,
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

      dataType: "json",
      type: "GET",

		  url: "/Territory/find?",
		  success: function (data) {
		    d = data;
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data + "\n" + 'getTerritories');
		  }
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
//       var app = angular.module('App', []);  /*global angular*/
      var app = angular.module('App');

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
	  
	  app.directive('popover', function(){
	  	return {
	  		templateUrl: '/templates/popover.html',
	  		controller: function(){
	  			$('[data-toggle="popover"]').popover();
	  		}
	  	}
	  });

      app.directive('modal', function(_){
	  	return {
	  		restrict:'E',
	  		scope:{
	  			caption: '@',
	  			last: '=',
	  			modalId: '@',
	  			contentUrl: '@',
	  			initial: '&action',
	  			prefix: '@'
	  		},
	  		templateUrl: '/templates/modal.html',
	  		controller: function($scope,$element){
	  		
	  		// 	var tgl = $scope.$watch(function() { return $($element[0]).is(':visible')}, function(){	
		  	// 		$($element[0]).on('shown.bs.modal', function (event) {
					// 	$('[data-toggle="popover"]').popover();
					// 	console.log('SHOWN.BS.MODAL');
					// 	tgl();	
					// });
					// // $($element[0]).on('hide.bs.modal', function (event) {
					// // 	$('[data-toggle="popover"]').popover('hide');
					// // 	tgl();	
					// // });
	  		// 	});
				var pop = $scope.$watch($scope.last, function(){
					console.log('LAST_CHANGED '+ JSON.stringify($scope.last));
					if ('entity' in $scope.last > 0){
							// $($element[0]).on('shown.bs.modal', function (event) {
							// 	$('[data-toggle="popover"]').popover();
							// 	pop();	
							// });
							// $($element[0]).on('hide.bs.modal', function (event) {
							// 	$('[data-toggle="popover"]').popover('hide');
							// 	pop();	
							// });
					}
				});

//           $("#"+$scope.modalId).modal().on('hide.bs.modal', function(){
//             $('[data-toggle="popover"]').popover('hide');
//           });
	  			//init action
	  			$scope.action = function(id){
	  				$scope.initial({id:id});
	  			};
	  		}
	  	};
	  });

      app.directive('dataview', function($compile){
	  	return {
	  		restrict:'E',
	  		scope:{
	  			items:          '=',
	  			caption:        '@',
	  			createId:       '@',
	  			updateId:       '@',
	  			contentUrl:     '@',
	  			meta:		    '=',
	  			showGrid:	    '@',
	  			init_create:    '&create',
	  			init_update:    '&update',
	  			tileClass:	    '@',
	  			paginationMode: '@'
	  		},
	  		templateUrl: '/templates/tile.html',
	  		controller: function($scope, $element){
	  			$scope.view = 'tile';
	  			$scope.useView = $scope.showGrid == 'true';
	  			$scope.search = {page: 0};

	  			$scope.pages = [];

	  			$scope.onChange = function(page){
	  				$scope.search.page = page;
	  			};

	  			$scope.$watch('items',function(){
	  				$scope.pages = [];
	  				for(var i = 0; i < 10;i++){
	  					$scope.pages.push(i);
	  				}
	  			});

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
	  			limit: '@',
	  			onChange: '&'
	  		},
	  		templateUrl: '/templates/pagination.html',
	  		controller: function($scope){

	  			if($scope.limit == 'undefined'){
	  				$scope.limit = 30;
	  			}
	  			$scope.items = [];

	  			$scope.$watch('count',function(){
	  				//console.log($scope.count+ ' ' + $scope.limit);
		  			for(var i = 1; i < $scope.count/$scope.limit; i++)
		  			{
						$scope.items.push(i);
		  			}
	  			});

	  		}

	  	}
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

		  //pagination
		  $scope.limit = 50;

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
		  		for(var i = 0; i < $scope.pharmacies.length; i++){
		  			$scope.pharmacies[i].page = Math.floor((i+1)/$scope.limit);
		  		}
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
	
	$('body').on('click', function (e) {
	    $('[data-toggle="popover"]').each(function () {
	        //the 'is' for buttons that trigger popups
	        //the 'has' for icons within a button that triggers a popup
	        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	            $(this).popover('hide');
	            //$(this).removeAttr('aria-describedby');
	        }
	    });
	});
	
	var autocomplete;
	$('.collapse li a').on('click',function(){
		if ($(this).parent('li').hasClass('active'))
		{
			console.log('click');
			$(this).parent('li').removeClass('active');
			
			$(this).click();
		}

	});
