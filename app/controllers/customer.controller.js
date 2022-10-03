const db = require("../models");
const CustomerData = db.customerData;





exports.getCustomerContractRef  = (req, res) => {
console.log("userId: " + req.userId); 
  CustomerData.findAll({
        where: { object_id: req.userId +''}
    }).then(tokens => {
        console.log(tokens.length);
		
		let result = tokens[0].object_value.replaceAll("'", '"');
		res.setHeader("Content-Type","application/json");
	res.status(200).send(result);
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

  