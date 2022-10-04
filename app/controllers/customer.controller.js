const db = require("../models");
const CustomerData = db.customerData;
const {Sequelize,Op} = require("sequelize");

//customer
exports.getCustomer  = (req, res) => {
console.log("userId: " + req.userId); 
  CustomerData.findOne({
        where: { [Op.and]: [{ object_id: req.userId +''}, { object_type: 'CUSTOMER'}]}
    }).then(token => {
		res.setHeader("Content-Type","application/json");
		let result = token.object_value.replaceAll("'", '"');
		res.status(200).send(result);
    }).catch(err => console.log('error: ' + err));
 
};

exports.addCustomer = (req, res) => {
	console.log("platform:" + req.body.platform);
  CustomerData.create({
        platform: req.body.platform,
		object_id: req.body.object_id,
		object_type: "CUSTOMER",
		object_value: req.body.object_value,
		createdAt: Date.Now,
		updatedAt: Date.Now
    }).then(customerData => {
        
	res.send(customerData);
    }).catch(err => console.log('error: ' + err));
};


exports.getCustomerContractRef  = (req, res) => {
  console.log("platform: " + req.header('x-platform'));
  console.log("userId: " + req.userId); 
  CustomerData.findAll({
        where: { [Op.and]: [{ object_type: 'CONTRACT_REFERENCES'}, { object_id: req.userId +''}, { platform: req.header('x-platform')}]}
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
  CustomerData.create({
        platform: req.body.platform,
		object_id: req.body.object_id,
		object_type: "CONTRACT_REFERENCES",
		object_value: req.body.object_value,
		createdAt: Date.Now,
		updatedAt: Date.Now
    }).then(customerData => {
        
	res.send(customerData);
    }).catch(err => console.log('error: ' + err));
};

  