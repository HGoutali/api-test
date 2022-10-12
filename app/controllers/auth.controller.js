const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Digital_account = db.digital_account;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const uuid = require('uuid');
const uniqueRandomID = uuid.v4();


exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    authent_id: uniqueRandomID, //req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
	description: req.body.description
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully!" });
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
          roles: authorities,
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
