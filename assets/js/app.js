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
	  function getTerritories(http){
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
      
      
	  /*--------------------------- MANAGERS ------------------------------------------*/
      app.controller('managersList', function($scope, $http) {
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
		  	$scope.managers = getManagers();
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
      app.controller('merchantList', function($scope, $http) {
          $scope.users = [];
		  $scope.last_user = {};
		  $scope.last_user.firstName = '';
		  $scope.last_user.middleName = '';
		  $scope.last_user.lastName = '';
		  $scope.last_user.sex = 0;
		  $scope.last_user.phone = '';
		  $scope.last_user.email = '';
		  $scope.last_user.territories = getTerritories();
		  $scope.last_user.projects = getProjects();
		  $scope.last_user.territory = {};
		  $scope.last_user.project = {};
		  $scope.last_user.id    = 0;
		  
		  $scope.$watch('menuMerchants', function(oldValue, newValue) {
		  	$scope.users = getUsers();
		  }, true);
		  
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
			  $scope.last_user = {};
			});
		  });			  
      });
	  /*---------------------------- PHARMACIES -----------------------------------*/
      app.controller('pharmaciesList', function($scope) {
	      $scope.pharmacies = [];
		  $scope.last_pharmacy = {};
		  $scope.last_pharmacy.fullName = '';
		  $scope.last_pharmacy.address = '';
		  $scope.last_pharmacy.email = '';
		  $scope.last_pharmacy.id = 0;
		  $scope.last_pharmacy.validated = false;
		
		  $scope.$watch('menuPharmacies', function(oldValue, newValue) {
		  	$scope.pharmacies = getPharmacies();
		  }, true);
	    
          $scope.create = function(){
		    
			var data = {
			    fullName: $scope.last_pharmacy.fullName,
				address: $scope.last_pharmacy.address,
				phone: $scope.last_pharmacy.phone,
				email: $scope.last_pharmacy.email,
				validated: $scope.last_pharmacy.validated
			};
			var cp = createPharmacy(data);
			
			$scope.pharmacies.push({
			  fullName:  cp.fullName,
			  address:   cp.address,
			  phone:     cp.phone,
			  email:     cp.email,
			  id:        cp.id,
			  validated: cp.validated
			});
			$scope.last_pharmacy = {};
			$("#pharmacy_add").modal('hide'); 
		  };
		  $scope.clear_last = function(){
		    $scope.last_pharmacy = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getPharmacy(id);
			
			$scope.last_pharmacy.fullName  = cu.fullName;
		    $scope.last_pharmacy.address   = cu.address;
			$scope.last_pharmacy.phone     = cu.phone;
		    $scope.last_pharmacy.email     = cu.email;
			$scope.last_pharmacy.id        = cu.id;
			$scope.last_pharmacy.validated = cu.validated;
		  };
		  $scope.update = function(id){
		    var data = {
			    fullName:  $scope.last_pharmacy.fullName,
				address:   $scope.last_pharmacy.address,
				phone:     $scope.last_pharmacy.phone,
				email:     $scope.last_pharmacy.email,
				id:        $scope.last_pharmacy.id,
				validated: $scope.last_pharmacy.validated
			};
			
			var cu = updatePharmacy(data);
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
				valicated: cu.validated
			};
			$scope.last_pharmacy = {};
			$("#pharmacy_upd").modal('hide');
		  };
		  $('#pharmacy_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.last_pharmacy = {};
			});
		  });	
      });	

	  /*------------------------------- DRUGS -----------------------------------*/
      app.controller('drugsList', function($scope) {
          $scope.drugs = [];
		  $scope.last_drug = {};
		  $scope.last_drug.fullName = '';
		  $scope.last_drug.officialName = '';
		  $scope.last_drug.description = '';
		  $scope.last_drug.barcode = 0;
		  $scope.last_drug.id    = 0;
		  
		  $scope.view = 'grid';
		  
		  $scope.$watch('menuDrugs', function(oldValue, newValue) {
		  	$scope.drugs = getDrugs();
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
	  app.controller('companiesList', function($scope) {
          $scope.companies = [];
		  $scope.last_company = {};
		  $scope.last_company.fullName = '';
		  $scope.last_company.shortName = '';
		  $scope.last_company.officialName = '';
		  $scope.last_company.description = '';
		  $scope.last_company.id = 0;
		  
  		  $scope.$watch('menuDrugs', function(oldValue, newValue) {
  		  	$scope.companies = getCompanies();
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
	  app.controller('projectsList', function($scope) {
          $scope.projects = [];
		  $scope.last_project = {};
		  $scope.last_project.fullName = '';
		  $scope.last_project.description = '';
		  $scope.last_project.id = 0;
		  $scope.last_project.drugList = getDrugs();
		  $scope.last_project.drugs = [];

  		  $scope.$watch('menuProjects', function(oldValue, newValue) {
			$scope.projects = getProjects();
		  }, true);		  

		  $scope.create = function(){		    
			var data = {
			    fullName:     $scope.last_project.fullName,
				description:  $scope.last_project.description
			};
			var cu = createProject(data);
			
			$scope.projects.push({
			    fullName:     cu.fullName,
				description:  cu.description,
				drugs:        cu.drugs,
			    id:           cu.id
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
			
			$scope.last_project.fullName     = cu.fullName;
		    $scope.last_project.description  = cu.description;
		    $scope.last_project.drugList     = getDrugs();
		    $scope.last_project.drugs        = cu.drugs;
		    $scope.last_project.id           = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    fullName:     $scope.last_project.fullName,
				description:  $scope.last_project.description,
				drugs:        $scope.last_project.drugs,
				id:			  id
			};
			var cu = updateProject(data);
			var idx = -1;
			var old = $.grep($scope.projects,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.projects[idx] = {
			    fullName:     cu.fullName,
				description:  cu.description,
				drugs:        cu.drugs,
			    id:           cu.id
			};
			$scope.last_project = {};
			$("#project_upd").modal('hide');
		  };
		  $('#project_add').on('show.bs.modal', function (event) {
		    $scope.$apply(function(){
			  $scope.last_project = {};
			});
		  });			  
      });		  
	
	 /*----------------------------- Territories -----------------------------------*/
	  app.controller('territoriesList', function($scope) {
          $scope.territories = [];
		  $scope.last_territory = {};
		  $scope.last_territory.name = '';
		  $scope.last_territory.info = '';
		  $scope.last_territory.baseCity = '';
		  $scope.last_territory.id = 0;
		  
  		  $scope.$watch('menuTerritories', function(oldValue, newValue) {
			  $scope.territories = getTerritories();
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
	  app.controller('drugInfoTypesList', function($scope) {
          $scope.drugInfoTypes = [];
		  $scope.last_drugInfoType = {};
		  $scope.last_drugInfoType.name = '';
		  $scope.last_drugInfoType.valueType = '';
		  $scope.last_drugInfoType.id = 0;
		  
  		  $scope.$watch('menuDrugInfoTypes', function(oldValue, newValue) {
  		  	$scope.drugInfoTypes = getDrugInfoTypes();
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