const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Digital_account = db.digital_account;


function getIdsCustomer(req, res,next) {
  Digital_account.findAll({where:{userId: req.userId}}).then( digital_accounts => {
		const result = [];
		//console.log(`digital_accounts: ${digital_accounts.length}`);
		//console.log(`digital_accounts: ${digital_accounts[0].provider}`);
		for (let i = 0; i < digital_accounts.length; i++) {
        //if (customers.length > 0) {digital_accounts
		const plainCustomer = digital_accounts[i].get({ plain: true })
		
			
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
};


function getIdsCustomer_old(req, res,next) {
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
