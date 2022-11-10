const axios = require('axios');
const fs = require('fs').promises;

const db = require("../models");
const User = db.user;
const Digital_account = db.digital_account;

const crossRef = require("../middleware/crossRef.js");




exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};


exports.userBoard = async(req, res) => {
  //console.log(${req.userId});
  
  const requestURLs = [
  {url:'https://ghibliapi.herokuapp.com/films?producer=Toshio%20Suzuki'},
  {url:'https://ghibliapi.herokuapp.com/films?producer=Hayao%20Miyazaki'}
];

res.status(200).send("User Content.");

};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getDigitalAccounts = (req, res) => {
	let param1 = req.query.authentIdValue;
    let param2 = req.query.authentIdType;
	
	console.log(">> authentId: ", param1);
	
	User.findOne({
    where: {
      //username: req.body.username
	  authent_id: param1
    }
  })
    .then(user => {
 
	Digital_account.findAll({
			where:{userId: user.id}, attributes:['authentIdValue','authentIdType','provider','platformCode','countryCode']}).then( digital_accounts => {
		
        res.status(200).send({
		  digitalAccounts: digital_accounts
        });
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
	});
};


