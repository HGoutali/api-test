const axios = require('axios');
const fs = require('fs').promises;

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


