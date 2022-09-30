const axios = require('axios');
const fs = require('fs').promises;

const crossRef = require("../middleware/crossRef.js");




exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};


exports.userBoard = (req, res) => {
  //console.log(${req.userId});
  res.status(200).send("User Id: " + ${req.userId});
  
 exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

//
function addNewPosts(oldPosts, newPosts) {
  for (let i = 0; i < newPosts.length; i++) {
    isAlreadyAvailable = false;

    for (let j = 0; j < oldPosts.length; j++) {
      if (_.isEqual(oldPosts[j], newPosts[i])) {
        isAlreadyAvailable = true;
        break;
      }
    }

    // add a post to old posts only if it already has not added
    if (!isAlreadyAvailable) {
      oldPosts.push(newPosts[i]);
    }
  }

  return oldPosts;
}

