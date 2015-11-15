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

	// Типы данных 
	DrugInfoType.findOrCreate(
		{id:1}, 
		{name:'Наличие', valueType: 'boolean'}
	).exec(function createFindCB(err, infoType){
		if (err) sails.log.error(err);

		sails.log.info("New DrugInfoType : " + JSON.stringify(infoType));
	});
 
	DrugInfoType.findOrCreate(
		{id:2}, 
		{name:'Выкладка', valueType: 'boolean'}
	).exec(function createFindCB(err, infoType){
		if (err) sails.log.error(err);

		sails.log.info("New DrugInfoType : " + JSON.stringify(infoType));
	});

	DrugInfoType.findOrCreate(
		{id:3}, 
		{name:'Количество', valueType: 'number'}
	).exec(function createFindCB(err, infoType){
		if (err) sails.log.error(err);

		sails.log.info("New DrugInfoType : " + JSON.stringify(infoType));
	});

	DrugInfoType.findOrCreate(
		{id:4}, 
		{name:'Розничная цена', valueType: 'number'}
	).exec(function createFindCB(err, infoType){
		if (err) sails.log.error(err);

		sails.log.info("New DrugInfoType : " + JSON.stringify(infoType));
	});

	DrugInfoType.findOrCreate(
		{id:5}, 
		{name:'Цена конкурента', valueType: 'number'}
	).exec(function createFindCB(err, infoType){
		if (err) sails.log.error(err);

		sails.log.info("New DrugInfoType : " + JSON.stringify(infoType));
	});

	// Округ 
	Territory.findOrCreate(
		{id:1}, 
		{name:'ЦАО', info: 'Центральный Автономный Округ', baseCity: 'Москва'}
	).exec(function createFindCB(err, territory){
		if (err) sails.log.error(err);

		sails.log.info("New Territory : " + JSON.stringify(territory));
	});

	// Препараты
	Drug.findOrCreate(
		{id:1}, 
		{ fullName:'Амиксин', 
		  officialName: 'Амиксин',
		  description: 'Амиксин'
		}
	).exec(function createFindCB(err, drug){
		if (err) sails.log.error(err);

		sails.log.info("New Drug : " + JSON.stringify(drug));
	});

	Drug.findOrCreate(
		{id:2}, 
		{ fullName:'Арбидол', 
		  officialName: 'Арбидол',
		  description: 'Арбидол'
		}
	).exec(function createFindCB(err, drug){
		if (err) sails.log.error(err);

		sails.log.info("New Drug : " + JSON.stringify(drug));
	});

	Drug.findOrCreate(
		{id:3}, 
		{ fullName:'Аскофен-П', 
		  officialName: 'Аскофен-П',
		  description: 'Аскофен-П'
		}
	).exec(function createFindCB(err, drug){
		if (err) sails.log.error(err);

		sails.log.info("New Drug : " + JSON.stringify(drug));
	});

	Drug.findOrCreate(
		{id:4}, 
		{ fullName:'Афобазо', 
		  officialName: 'Афобазо',
		  description: 'Афобазо'
		}
	).exec(function createFindCB(err, drug){
		if (err) sails.log.error(err);

		sails.log.info("New Drug : " + JSON.stringify(drug));
	});

	Drug.findOrCreate(
		{id:5}, 
		{ fullName:'Аципол', 
		  officialName: 'Аципол',
		  description: 'Аципол'
		}
	).exec(function createFindCB(err, drug){
		if (err) sails.log.error(err);

		sails.log.info("New Drug : " + JSON.stringify(drug));
	});

	Drug.findOrCreate(
		{id:6}, 
		{ fullName:'Компливит', 
		  officialName: 'Компливит',
		  description: 'Компливит'
		}
	).exec(function createFindCB(err, drug){
		if (err) sails.log.error(err);

		sails.log.info("New Drug : " + JSON.stringify(drug));
	});

	// Аптеки
	Pharmacy.findOrCreate(
		{id:1}, 
		{ fullName:'ООО "Соломон Фарма"', 
		  address: 'Новослободская, 46',
		  territory: 1,
		  latitude: 55.78541727710486,
		  longitude: 37.59603049999999
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:2}, 
		{ fullName:'ОАО "ТС Аптечка"', 
		  address: 'Миусская 1-я, 24/22с4',
		  territory: 1,
		  latitude: 55.781296277062324,
		  longitude: 37.593317499999976
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:3}, 
		{ fullName:'ООО "ВИТИМ"', 
		  address: 'Трифоновская, д.4',
		  territory: 1,
		  latitude: 55.788124777073094,
		  longitude: 37.612676499999985
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:4}, 
		{ fullName:'ООО "Фармамед"', 
		  address: 'Новослободская, 36',
		  territory: 1,
		  latitude: 55.78458177703648,
		  longitude: 37.59668649999999
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:5}, 
		{ fullName:'ООО "Диасфарм"', 
		  address: 'Сущевский Вал, 13/15',
		  territory: 1,
		  latitude: 55.79298927706359,
		  longitude: 37.59527649999991
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Drug : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:6}, 
		{ fullName:'ООО "Аптечная Сеть 03"', 
		  address: 'Крымский Вал, 6',
		  territory: 1,
		  latitude: 55.73089227725813,
		  longitude: 37.6100985
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:7}, 
		{ fullName:'ООО "АдониФарм"', 
		  address: 'Калужская пл., 1к1',
		  territory: 1,
		  latitude: 55.72839277729199,
		  longitude: 37.612649499999954
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:8}, 
		{ fullName:'Аптека Ригла', 
		  address: 'Гарибальди, 27к4',
		  subway: 'Новые Черемушки',
		  territory: 1,
		  latitude: 55.66982777752242,
		  longitude: 37.558220499999955
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:9}, 
		{ fullName:'Снадобница', 
		  address: 'Гарибальди, 29к4',
		  subway: 'Новые Черемушки',
		  territory: 1,
		  latitude: 55.66918877751582,
		  longitude: 37.56010749999994
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:10}, 
		{ fullName:'"ГорЗдрав Ленинский"', 
		  address: 'пр-т 60-летия Октября, 5к4',
		  subway: 'Ленинский Проспект',
		  territory: 1,
		  latitude: 55.70292627744675,
		  longitude: 37.58033749999998
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:11}, 
		{ fullName:'"ГорЗдрав Ленинский"', 
		  address: 'Ленинский пр-т, 41',
		  subway: 'Ленинский Проспект',
		  territory: 1,
		  latitude: 55.705040322796286,
		  longitude: 37.57941370875116
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:11}, 
		{ fullName:'"ГорЗдрав Ленинский"', 
		  address: 'Ленинский пр-т, 41',
		  subway: 'Ленинский Проспект',
		  territory: 1,
		  latitude: 55.705040322796286,
		  longitude: 37.57941370875116
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:12}, 
		{ fullName:'"СТОЛИЧНЫЕ АПТЕКИ #1/29"', 
		  address: '2-й Красногвардейский пр-д, д. 10',
		  subway: 'Деловой Центр',
		  territory: 1,
		  latitude: 55.75378277719609,
		  longitude: 37.53454149999994
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});

	Pharmacy.findOrCreate(
		{id:13}, 
		{ fullName:'"Планета Здоровья"', 
		  address: 'Пресненская набережная, 12',
		  subway: 'Деловой Центр',
		  territory: 1,
		  latitude: 55.749395277210475,
		  longitude: 37.536966499999934
		}
	).exec(function createFindCB(err, pharmacy){
		if (err) sails.log.error(err);

		sails.log.info("New Pharmacy : " + JSON.stringify(pharmacy));
	});


	// Проект
	Project.findOrCreate(
		{id:1}, 
		{ fullName:'SBL Pharma', 
		  drugs: [1, 2, 3, 4, 5, 6],
		  infos: [1, 2, 3, 4, 5]
		}
	).exec(function createFindCB(err, project){
		if (err) sails.log.error(err);

		sails.log.info("New Project : " + JSON.stringify(project));
	});

	// DrugInfoType.find().exec(function(err, dits){
	// 	if (err) sails.log.error(err);

	// 	Drug.find().exec(function(err,drugs){
	// 		if (err) sails.log.error(err);

	// 		Project.create({
	// 			id: 2,
	// 			fullName:'OTC Pharma', 
	// 	  		drugs: drugs,
	// 	  		infos: dits
	// 		})
	// 		.exec(function(err, created){
	// 			if (err) sails.log.error(err);

	// 			sails.log.info("New Project : " + JSON.stringify(created));				
	// 		});
	// 	});
	// });


  console.log("Bootstrap END");
  cb();
};
