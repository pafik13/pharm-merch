	  /*----------------------- MERCHANTS --------------------------------*/
	  function getUsers(){
	    var users = {};
		$.ajax(
		{
		  async: false,
		  url: "/Merchant/find?manager="+manager.id, 
		  success: function (data) {
		    users = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
       return users;   
	  };
	  
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
	  };
	  
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
	  };
	  
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
	  };	  
	  /*--------------------- PHARMACIES -------------------------*/	
	  function getPharmacies(){
	    var pharmacies = {};
		$.ajax(
		{
		  async: false,
		  url: "/Pharmacy/find?", 
		  success: function (data) {
		    pharmacies = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
       return pharmacies;   
	  };	
	  
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
	  };

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
	  };

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
	  };	  	 
	  /*----------------------- DRUGS --------------------------------*/
	  function getDrugs(){
	    var drugs = {};
		$.ajax(
		{
		  async: false,
		  url: "/Drug/find?", 
		  success: function (data) {
		    drugs = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
       return drugs;   
	  };
	  
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
	  };
	  
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
	  };
	  
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
	  };		
	  /*----------------------- COMPANIES --------------------------------*/
	  function getCompanies(){
	    var d = {};
		$.ajax(
		{
		  async: false,
		  url: "/Company/find?", 
		  success: function (data) {
		    d = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
       return d;   
	  };
	  
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
	  };
	  
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
	  };
	  
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
	  };	
	  /*----------------------- PROJECTS --------------------------------*/
	  function getProjects(){
	    var users = {};
		$.ajax(
		{
		  async: false,
		  url: "/Project/find?manager="+manager.id, 
		  success: function (data) {
		    users = data;	
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
       return users;   
	  };
	  
  	  function getProject(id){
	    var d = {};
	    $.ajax(
		{
		  async: false,
		  url: "/Project/find?manager=" + manager.id + "&id="+id, 
		  success: function (data) {
		    d = data;			
		  },
		  error: function(xhr, status, data){
			alert(status + "\n" + data);
		  },
		  dataType: 'json'
		});
        return d;
	  };
	  
	  function createProject(data){	  
	    var d = {};
		data.manager = manager.id;
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
	  };
	  
	  function updateProject(data){	  
	    var d = {};
		data.manager = manager.id;
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
	  };	 	 
	  
	  /*-------------------------- ANGULAR APP -----------------------------------------*/
      var app = angular.module('App', []);
	  /*--------------------------- MERCHANTS ------------------------------------------*/
      app.controller('merchantList', function($scope, $http) {
          $scope.users = {};
		  $scope.last_user = {};
		  $scope.last_user.firstName = '';
		  $scope.last_user.middleName = '';
		  $scope.last_user.lastName = '';
		  $scope.last_user.sex = 0;
		  $scope.last_user.phone = '';
		  $scope.last_user.email = '';
		  $scope.last_user.id    = 0;
		  
		  $scope.users = getUsers();
		  
		  $scope.create = function(){		    
			var data = {
			    username:   $scope.last_user.username,
				firstName:  $scope.last_user.firstName,
				middleName: $scope.last_user.middleName,
				lastName:   $scope.last_user.lastName,
				sex:        $scope.last_user.sex,
				email:      $scope.last_user.email,
				phone:      $scope.last_user.phone
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
	      $scope.pharmacies = {};
		  $scope.last_pharmacy = {};
		  $scope.last_pharmacy.fullName = '';
		  $scope.last_pharmacy.address = '';
		  $scope.last_pharmacy.email = '';
		  $scope.last_pharmacy.id = 0;
		  
		  $scope.pharmacies = getPharmacies();
	    
          $scope.create = function(){
		    
			var data = {
			    fullName: $scope.last_pharmacy.fullName,
				address: $scope.last_pharmacy.address,
				phone: $scope.last_pharmacy.phone,
				email: $scope.last_pharmacy.email
			};
			var cp = createPharmacy(data);
			
			$scope.pharmacies.push({
			  fullName: cp.fullName,
			  address: cp.address,
			  phone: cp.phone,
			  email: cp.email,
			  id: cp.id
			});
			$scope.last_pharmacy = {};
			$("#pharmacy_add").modal('hide'); 
		  };
		  $scope.clear_last = function(){
		    $scope.last_pharmacy = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getPharmacy(id);
			
			$scope.last_pharmacy.fullName = cu.fullName;
		    $scope.last_pharmacy.address  = cu.address;
			$scope.last_pharmacy.phone    = cu.phone;
		    $scope.last_pharmacy.email    = cu.email;
			$scope.last_pharmacy.id       = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    fullName: $scope.last_pharmacy.fullName,
				address:  $scope.last_pharmacy.address,
				phone:    $scope.last_pharmacy.phone,
				email:    $scope.last_pharmacy.email,
				id:       $scope.last_pharmacy.id
			};
			
			var cu = updatePharmacy(data);
			var idx = -1;
			var old = $.grep($scope.pharmacies,function(u,i){
			          if (u.id == id){					    
			            idx = i;
					  }					  
			        });				
			$scope.pharmacies[idx] = {
			    fullName: cu.fullName,
				address: cu.address,
				phone: cu.phone,
				email: cu.email,
				id: cu.id
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
          $scope.drugs = {};
		  $scope.last_drug = {};
		  $scope.last_drug.fullName = '';
		  $scope.last_drug.officialName = '';
		  $scope.last_drug.description = '';
		  $scope.last_drug.barcode = 0;
		  $scope.last_drug.id    = 0;
		  
		  $scope.drugs = getDrugs();
		  
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
          $scope.companies = {};
		  $scope.last_company = {};
		  $scope.last_company.fullName = '';
		  $scope.last_company.shortName = '';
		  $scope.last_company.officialName = '';
		  $scope.last_company.description = '';
		  $scope.last_company.id = 0;
		  
		  $scope.companies = getCompanies();
		  
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
          $scope.projects = {};
		  $scope.last_project = {};
		  $scope.last_project.fullName = '';
		  $scope.last_project.description = '';
		  $scope.last_project.id = 0;
		  
		  $scope.projects = getProjects();
		  
		  $scope.create = function(){		    
			var data = {
			    fullName:     $scope.last_project.fullName,
				description:  $scope.last_project.description
			};
			var cu = createProject(data);
			
			$scope.projects.push({
			    fullName:     cu.fullName,
				shortName:	  cu.shortName,
				officialName: cu.officialName,
				description:  cu.description,
			    id:           cu.id
			});
			$scope.last_project = {};
			$("#project_add").modal('hide');  
		  };
		  $scope.clear_last = function(){
		    $scope.last_project = {};
		  };
		  $scope.init_update = function(id){
		    var cu = getProject(id);
			
			$scope.last_project.fullName     = cu.fullName;
		    $scope.last_project.description  = cu.description;
		    $scope.last_project.id           = cu.id;
		  };
		  $scope.update = function(id){
		    var data = {
			    fullName:     $scope.last_project.fullName,
				description:  $scope.last_project.description,
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
	  
	$(document).ready(function(){
	    $("[data-toggle=tooltip]").tooltip();
	});	    	