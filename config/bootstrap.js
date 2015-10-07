/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  console.log("Bootstrap START");
	
	User.findOne({ "username" : "admin"}).exec(function(err, found){
		if (err) { 
			sails.log.error(err);
//			cb();
		}
		
		if (found){
			sails.log.info(" admin : " + JSON.stringify(found));
//			cb();		
			
		} else {
			
			sails.log.warn("User 'admin' NOT FOUND");
			var admin = {
				"username" : "admin",
				"password" : 'q1234567'
			};
			
			sails.services.passport.protocols.local.createUser(admin, function(err, created) {  
				if (err) { 
					sails.log.error(err);
//					cb();
				}
				
				sails.log.info(created);
//				cb();
			});
		}
	});

	User.findOne({ "username" : "guest"}).exec(function(err, found){
		if (err) { 
			sails.log.error(err);
//			cb();
		}
		
		if (found){
			sails.log.info(" guest : " + JSON.stringify(found));
//			cb();		
			
		} else {
			
			sails.log.warn("User 'guest' NOT FOUND");
			var guest = {
				"username" : "guest",
				"password" : "q1234567"
			};
			
			sails.services.passport.protocols.local.createUser(guest, function(err, created) {  
				if (err) { 
					sails.log.error(err);
//					cb();
				}
				
				sails.log.info(created);
//				cb();
			});
		}
	});

	User.findOne({ "username" : "lyubin"}).exec(function(err, found){
		if (err) { 
			sails.log.error(err);
//			cb();
		}
		
		if (found){

			sails.log.info(" lyubin : " + JSON.stringify(found));
//			cb();	
//			
			Manager.findOne({"user" : found.id}).exec(function(err, manager){
				if (err) sails.log.error(err);

				if (!manager){
					sails.log.error("Manager NOT found");
				} else {
					sails.log.info("Manager : " + JSON.stringify(manager));
				}
			});	
			
		} else {
			
			sails.log.warn("User 'lyubin' NOT FOUND");
			var lubin = {
				"username" : "lyubin",
				"password" : "q1234567",
				'email'	   : "lyubin.p@gmail.com"
			};
			
			sails.services.passport.protocols.local.createUser(lubin, function(err, created) {  
				if (err) { 
					sails.log.error(err);
//					cb();
				}
				
				sails.log.info("New USER : " + JSON.stringify(created));

				var manager = {
					"lastName": "Любин",
				    "firstName" : "Павел",
				    "middleName" : "Геннадьевич",
				    "phone": "+7 (495) 777-11-11",
				    "sex": 1,
				    "user": created.id,
				    "job_role": "manager"
				};

				Manager.create(manager).exec(function(err, createdManager){
					if (err) sails.log.error(err);

					sails.log.info("New MANAGER : " + JSON.stringify(createdManager));
				});

//				cb();
			});
		}
	});

	User.findOne({ "username" : "aksenov"}).exec(function(err, found){
		if (err) { 
			sails.log.error(err);
//			cb();
		}
		
		if (found){
			sails.log.info(" aksenov : " + JSON.stringify(found));
//			cb();		
			
			Manager.findOne({"user" : found.id}).exec(function(err, manager){
				if (err) sails.log.error(err);

				if (!manager){
					sails.log.error("Manager NOT found");
				} else {
					sails.log.info("Manager : " + JSON.stringify(manager));
				}
			});	

		} else {
			
			sails.log.warn("User 'aksenov' NOT FOUND");
			var anatoliy = {
				"username" : "aksenov",
				"password" : "q1234567",
				"email"	   : "anatoliy@aksenov.org"
			};
			
			sails.services.passport.protocols.local.createUser(anatoliy, function(err, created) {  
				if (err) { 
					sails.log.error(err);
//					cb();
				}
				
				sails.log.info("New USER : " + JSON.stringify(created));

				var manager = {
					"lastName": "Аксенов",
				    "firstName" : "Анатолий",
				    "middleName" : "Анатольевич",
				    "phone": "+7 (495) 777-11-11",
				    "sex": 1,
				    "user": created.id,
				    "job_role": "manager"
				};

				Manager.create(manager).exec(function(err, createdManager){
					if (err) sails.log.error(err);

					sails.log.info("New MANAGER : " + JSON.stringify(createdManager));
				});

//				cb();
			});
		}
	});    

	User.findOne({ "username" : "bliznyuk"}).exec(function(err, found){
		if (err) { 
			sails.log.error(err);
//			cb();
		}
		
		if (found){
			sails.log.info(" bliznyuk : " + JSON.stringify(found));
//			cb();		
			
			Manager.findOne({"user" : found.id}).exec(function(err, manager){
				if (err) sails.log.error(err);

				if (!manager){
					sails.log.error("Manager NOT found");
				} else {
					sails.log.info("Manager : " + JSON.stringify(manager));
				}
			});	

		} else {
			
			sails.log.warn("User 'bliznyuk' NOT FOUND");
			var anatoliy = {
				"username" : "bliznyuk",
				"password" : "q1234567",
				"email"	   : "bliznyuk.a@gmail.com"
			};
			
			sails.services.passport.protocols.local.createUser(anatoliy, function(err, created) {  
				if (err) { 
					sails.log.error(err);
//					cb();
				}
				
				sails.log.info("New USER : " + JSON.stringify(created));

				var manager = {
				    "lastName": "Близнюк",
				    "firstName" : "Александр",
				    "phone": "+7 (495) 585-50-74",
				    "sex": 1,
				    "user": created.id,
				    "job_role": "manager"
				};

				Manager.create(manager).exec(function(err, createdManager){
					if (err) sails.log.error(err);

					sails.log.info("New MANAGER : " + JSON.stringify(createdManager));
				});

//				cb();
			});
		}
	});    
    
  console.log("Bootstrap END");
  cb();
};
