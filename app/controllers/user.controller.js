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

//
  let posts = [];

   // retrieve and filter all the ids customer from the crossRef
  //const idsCustomer = req.idsCustomer;
  
  // recupéartion des données
    let getApi = function (opt) {
    axios.get(opt.url)
    .then((response) => {
        console.log(`Successfully retrieved our list of movies ${opt.url}`);
        response.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['producer']}`);
        });
		return response;
    });
	};

  // make concurrent api calls
   const requests = requestURLs.map((request) => {
   //console.log(`url= ${request.url}`);
    //getApi(request);
	 axios.get(request.url);
   });
   
 



  try {
    // wait until all the api calls resolves
    const result = await Promise.all(requests);
    console.log(`url: ${result}`);
    // posts are ready. accumulate all the posts without duplicates
    result.map((item) => {
      posts = addNewPosts(posts, item.data);
    });
    return res.send({ posts: posts });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
  
//


//var idCustomer = req.idsCustomer[0];

//console.log(`User Content. ${idCustomer.appliField}:${idCustomer.fieldValue}`);
//res.status(200).send(`User Content. ${idCustomer.appliField}:${idCustomer.fieldValue}`);



//
/*
let getApi = function (opt) {
    axios.get(opt.url)
    .then((response) => {
        console.log(`Successfully retrieved our list of movies ${opt.url}`);
        response.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['producer']}`);
        });
    });
};

const functionArray = requestArray.map((opt) => { 
    return getApi(opt); 
});

async.parallel(
    functionArray, (err, results) => {
        if (err) {
            console.error('Error: ', err);
        } else {
             console.log('FIN');
        res.status(200).send(`User Content. ${req.userId}`);
        }
});

*/

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

