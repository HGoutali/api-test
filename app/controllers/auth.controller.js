const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Digital_account = db.digital_account;
const Authent_factor = db.authent_factor;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const uuid = require('uuid');
const uniqueRandomID = uuid.v4();


exports.signup = (req, res) => {
  // Save User to Database
  let userId = "";
  User.create({
    authent_id: uniqueRandomID, //req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
	description: req.body.description
  })
    .then(user => {
	  userId = user.id;
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(user => {
            if (req.body.digitalAccounts) {
				createDigitalAccounts(req, userId, req.body.digitalAccounts)
					res.send({ message: "User registered successfully!" });
			};
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(user => {
            if (req.body.digitalAccounts) {
				createDigitalAccounts(req, userId, req.body.digitalAccounts)
					res.send({ message: "User registered successfully!" });
			};
          });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      //username: req.body.username
	  email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
		
		Digital_account.findAll({
			where:{userId: user.id},}).then( digital_accounts => {
	 
	    //res.setHeader('x-oney-crossref',JSON.stringify(digital_accounts));
		
        res.status(200).send({
          id: user.id,
          authentId: user.authent_id,
          email: user.email,
          //roles: authorities,
		  description: user.description,
		  digitalAccounts: digital_accounts,
          accessToken: token
        });
      });
    })})
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

function createDigitalAccounts (req, userId, digitalAccounts) {
	let i =-1;
	for(digitalAccount of digitalAccounts) {
		i = i+1;
		createDigitalAccount (i,req, userId, digitalAccount);
	}
};



function createDigitalAccount (index, req, userId, digitalAccount) {
  return Digital_account.create({
    authentId: digitalAccount.authentId,
    provider: digitalAccount.provider,
    platform: digitalAccount.platform,
	countryCode: digitalAccount.countryCode,
    userId: userId
  }).then((digitalAccount) => {
			  console.log("1- digitalAccount.id: " + digitalAccount.id);
            //if (req.body.digitalAccounts['authentFactors']) {
				for(authentFactor of req.body.digitalAccounts[index].authentFactors) {
					createAuthentFactor (digitalAccount.id, authentFactor).then(() => {
					console.log(">> Created authentFactor: " + JSON.stringify(authentFactor, null, 4));
					return digitalAccount;
				});
			   }
			//};
          })
    .catch((err) => {
      console.log(">> Error while creating digitalAccount: ", err);
    });
};

function createAuthentFactor (digitalAccountId, authentFactor) {
  return Authent_factor.create({
    type: authentFactor.type,
    value: authentFactor.value,
    digital_accountId: digitalAccountId
  }).then((authentFactor) => {
      console.log(">> Created authentFactor: " + JSON.stringify(authentFactor, null, 4));
      return authentFactor;
    })
    .catch((err) => {
      console.log(">> Error while creating authentFactor: ", err);
    });
};