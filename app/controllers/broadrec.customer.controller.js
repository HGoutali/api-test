var axios = require('axios');



exports.getCustomer = (req, res) => {
  var suburl = req.url.replaceAll('/broadrec', ''); // "/api/test/customers/v3/customer";
  var ids = JSON.parse(req.headers['x-oney-digital_accounts']);
  var param1 = ids[0].provider;
  var param2 = ids[0].authentId;
  var lurl = "http://" + req.headers['host'] + suburl + "?provider=" + param1 + "&authent_id=" + param2;
  var encoded = encodeURI(lurl);
  //var retour = "{ "+ '"url":' + suburl +', "digital_accounts":' + req.headers['x-oney-digital_accounts'] + "}";
  //console.log(retour);
	
  //res.setHeader("Content-Type","application/json");
  //res.status(200).send(retour);
  res.redirect(encoded);
};

exports.getContractReferences =   (req, res) => {
  var suburl = req.url.replaceAll('/broadrec', ''); // "/api/test/customers/v3/customer";
  var ids = JSON.parse(req.headers['x-oney-digital_accounts']);
  const listeURLs = [];
  
  // retrieve all the Backend URLs
  ids.forEach(id => {
	var param1 = id.provider;
	var param2 = id.authentId;
	var lurl = "http://" + req.headers['host'] + suburl + "?provider=" + param1 + "&authent_id=" + param2;
	var encoded = encodeURI(lurl);
	listeURLs.push(encoded);
  });
  
  
  //
  let posts = [];

  // call all Backend URLs
  // now we can use that data from the outside!

	
  listeURLs.forEach(url => {
    axiosTesta(url)
    .then(data => {
        console.log({ url: url, data });
		var contracts =  []; //JSON.stringfy(data);
		//console.log("datataaa" + contracts);
		for(let i = 0; i < contracts.length; i++) {
			posts.push(data[i]);
		}
    })
    .catch(err => console.log(err))
  });
  //

  res.setHeader("Content-Type","application/json");
  
  res.send({ posts: posts });
  //res.status(200).send(listeURLs[0]);
  
};

function axiosTest(url) {
    // create a promise for the axios request
    const promise = axios.get(url)

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)

    // return it
    return dataPromise
};


async function axiosTesta(url) {
    const response = await axios.get(url)
    return response.data
}

 
 


   