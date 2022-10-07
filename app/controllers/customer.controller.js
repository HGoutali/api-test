const db = require("../models");
const Customer_data = db.customer_data;
const {Sequelize,Op} = require("sequelize");

//customer
exports.getCustomer  = (req, res) => {
var param1 = req.query.authent_id;
var param2 = req.query.platform;

console.log("userId: " + param1); 

  Customer_data.findOne({
        //where: { [Op.and]: [{ object_id: req.idsCustomer[0].authent_id},{platform: req.idsCustomer[0].platform},{ object_type: 'CUSTOMER'}]}
		where: { [Op.and]: [{ object_id: param1},{platform: param2},{ object_type: 'CUSTOMER'}]}
    }).then(token => {
		res.setHeader("Content-Type","application/json");
		let result = token.object_value.replaceAll("'", '"');
		res.status(200).send(result);
    }).catch(err => console.log('error: ' + err));
 
};

exports.addCustomer = (req, res) => {
	console.log("platform:" + req.body.platform);
  Customer_data.create({
        platform: req.body.platform,
		object_id: req.body.object_id,
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
  var param2 = req.query.platform;

  console.log("userId: " + param1); 
  console.log("platform: " + param2); 

  Customer_data.findAll({
        where: { [Op.and]: [{ object_type: 'CONTRACT_REFERENCES'}, { object_id: param1}, { platform: param2}]}
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
        platform: req.body.platform,
		object_id: req.body.object_id,
		object_type: "CONTRACT_REFERENCES",
		object_value: req.body.object_value,
		createdAt: Date.Now,
		updatedAt: Date.Now
    }).then(customer_data => {
        
	res.send(customer_data);
    }).catch(err => console.log('error: ' + err));
};

  