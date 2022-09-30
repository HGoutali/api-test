const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Customer = db.customer;




function getIdsCustomer(req, res,next) {
	
	console.log(`getIdsCustomer.`);
  User.findByPk(req.userId).then(user => {
    user.getCustomers().then(customers => {
		const result = [];
		for (let i = 0; i < customers.length; i++) {
        //if (customers.length > 0) {
		const plainCustomer = customers[i].get({ plain: true })
			
			result.push(plainCustomer);
        //}
		}
		req.idsCustomer = result;
		next();
        return;

      res.status(403).send({
        message: "Require Admin Role!"
      });
	  next();
      return;
    });
  });
};



const crossRef = {
  getIdsCustomer: getIdsCustomer
};
module.exports = crossRef;
