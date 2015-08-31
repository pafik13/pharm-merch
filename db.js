//pharmacy

var pharmacies = Waterline.Collection.extend({

  identity: 'pharmacies',

  attributes: {	  
	  pharmacy_id: {
		  type: 'integer',
		  primaryKey: true,
		  columnName: 'id',
          autoIncrement: true
		  }, 
      full_name:{
		  type: 'string',
		  index: true
	  },
      address: 'string',
	  subway: 'string',
	  phone: '',
	  fax: '',
	  email:{
		  type: 'string'
	  },	
      //avg_purchase_amount
	  avg_purchase: 'integer',
	  traffic: 'integer',
      // reference to trademark
	  trademark: {
		  collection: 'trademark',
		  via: 'trademark_id'
	  },	
	  // reference to hospitals
	  hospitals:{
		collection: 'hospitals',
		via: 'hospital_id'
	  }
	
  }
});

var trademark = Waterline.Collection.extend({

  identity: 'trademark',

  attributes: {	  
      trademark_id: {
		  type: 'integer',
		  primaryKey: true,
		  columnName: 'id',
          autoIncrement: true
		  }, 
      name:{
		  type: 'string',
		  unique: true,
		  index: true
	  },	 
      description: 'string',
	  address: 'string'
	  phone: '',
	  fax: '',
	  email:{
		  type: 'string'
	  },
      // reference to pharmacy
	  pharmacies: {
		  model: 'pharmacies',
		  via: 'trademark'
	  }
	
  }
});

var hospitals = Waterline.Collection.extend({

  identity: 'hospitals',

  attributes: {	  
      hospital_id: {
		  type: 'integer',
		  primaryKey: true,
		  columnName: 'id',
          autoIncrement: true
		  }, 
      name:{
		  type: 'string',
		  unique: true,
		  index: true
	  },	 
      description: 'string',
	  address: 'string'
	  phone: '',
	  fax: '',
	  email:{
		  type: 'string'
	  },
      // reference to owner
	  pharmacies: {
		model: 'pharmacies',
		via: 'hospitals'
	  }
	
  }
});

var drugs = Waterline.Collection.extend({

  identity: 'drugs',

  attributes: {	  
      drug_id: {
		  type: 'integer',
		  primaryKey: true,
		  columnName: 'id',
          autoIncrement: true
		  }, 
      name:{
		  type: 'string',
		  unique: true,
		  index: true
	  },	 
      description: 'string',
	  instruction: 'text',
	  manufacturer:{
		  model: 'manufacturers',
		  via: 'manufacturer_id'
	  }
  }
});

var manufacturers = Waterline.Collection.extend({

  identity: 'manufacturers',

  attributes: {	  
      manufacturer_id: {
		  type: 'integer',
		  primaryKey: true,
		  columnName: 'id',
          autoIncrement: true
		  }, 
      name:{
		  type: 'string',
		  unique: true,
		  index: true
	  },	 
      description: 'string',
	  drugs:{
		  model: 'durgs',
		  via: 'manufacturer'
	  }
  }
});

//attendance
var attendances = Waterline.Collection.extend({

  identity: 'attendances',

  attributes: {	  
      attendance_id: {
		  type: 'integer',
		  primaryKey: true,
		  columnName: 'id',
          autoIncrement: true
		  },       
	  pharmacies:{
		  model: 'pharmacies',
		  via: 'pharmacy_id'
	  },
	  attendance_date: 'date'
  }
});

var attendance_drug_count = Waterline.Collection.extend({

  identity: 'attendance_drug_count',

  attributes: {	  
      attendance_id: {
		  type: 'integer',
		  primaryKey: true,
		  columnName: 'id',
          autoIncrement: true
		  },       
	  attendance:{
		  model: 'attendances',
		  via: 'attendance_id'
	  },
	  drug:{
		  model: 'drugs',
		  via: 'drug_id'
	  },
	  drug_count:{
		  type: 'integer',
		  required: true
	  }
  }
});