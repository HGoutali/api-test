const db = require("../models");
const CustomerData = db.customerData;
const {Sequelize,Op} = require("sequelize");





exports.getCustomerContractRef  = (req, res) => {
console.log("userId: " + req.userId); 
  CustomerData.findAll({
        where: { [Op.and]: [{ object_id: req.userId +''}, { object_type: 'CONTRACT_REFERENCES'}]}
    }).then(tokens => {
        console.log(tokens.length);
		res.setHeader("Content-Type","application/json");
		if(tokens.length > 1) {
			let result = tokens[0].object_value.replaceAll("'", '"');
			res.status(200).send(result);
		} else
			res.status(204).send("[]");
    }).catch(err => console.log('error: ' + err));
 
};

exports.addCustomerContractRef = (req, res) => {
	console.log("platform:" + req.body.platform);
  CustomerData.create({
        platform: req.body.platform,
		object_id: req.body.object_id,
		object_type: req.body.object_type,
		object_value: req.body.object_value,
		createdAt: Date.Now,
		updatedAt: Date.Now
    }).then(customerData => {
        
	res.send(customerData);
    }).catch(err => console.log('error: ' + err));
};

  