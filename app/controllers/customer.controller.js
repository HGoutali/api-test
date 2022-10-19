const db = require("../models");
const Customer_data = db.customer_data;
const {Sequelize,Op} = require("sequelize");

//customer
exports.getCustomer  = (req, res) => {
var param1 = req.query.authent_id;
var param2 = req.query.authent_id_field;

console.log("userId: " + param1); 

  Customer_data.findOne({
        //where: { [Op.and]: [{ object_id: req.idsCustomer[0].authent_id},{provider: req.idsCustomer[0].provider},{ object_type: 'CUSTOMER'}]}
		where: { [Op.and]: [{ authent_id: param1},{authent_id_field: param2},{ object_type: 'CUSTOMER'}]}
    }).then(token => {
		if (token) {
			res.setHeader("Content-Type","application/json");
			let result = token.object_value.replaceAll("'", '"');
			res.status(200).send(result);
		} else {
			res.status(204).send("[]");
		}
		
    }).catch(err => console.log('error: ' + err));
 
};

exports.addCustomer = (req, res) => {
	console.log("authent_id_field:" + req.body.authent_id_field);
  Customer_data.create({
        provider: req.body.provider,
        authent_id_field: req.body.authent_id_field,
		authent_id: req.body.authent_id,
		object_type: "CUSTOMER",
		object_value: req.body.object_value,
		createdAt: Date.Now,
		updatedAt: Date.Now
    }).then(customer_data => {
        
	res.send(customer_data);
    }).catch(err => console.log('error: ' + err));
};


exports.getCustomerContractRef  = (req, res) => {
  var param1 = req.query.authent_id;
  var param2 = req.query.authent_id_field;

  console.log("userId: " + param1); 
  console.log("authent_id_field: " + param2); 

  Customer_data.findAll({
	    where: { [Op.and]: [{ authent_id: param1},{authent_id_field: param2},{ object_type: 'CONTRACT_REFERENCES'}]}
    }).then(tokens => {
        console.log(tokens.length);
		res.setHeader("Content-Type","application/json");
		if(tokens.length > 0) {
			let result = tokens[0].object_value.replaceAll("'", '"');
			res.status(200).send(result);
		} else
			res.status(204).send("[]");
    }).catch(err => console.log('error: ' + err));
 
};

exports.addCustomerContractRef = (req, res) => {
  Customer_data.create({
	    provider: req.body.provider,
        authent_id_field: req.body.authent_id_field,
		authent_id: req.body.authent_id,
		object_type: "CONTRACT_REFERENCES",
		object_value: req.body.object_value,
		createdAt: Date.Now,
		updatedAt: Date.Now
    }).then(customer_data => {
        
	res.send(customer_data);
    }).catch(err => console.log('error: ' + err));
};

  