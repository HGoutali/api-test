var axios = require('axios');



exports.getCustomer = (req, res) => {
  var suburl = req.url.replaceAll('/broadrec', ''); // "/api/test/customers/v3/customer";
  var ids = JSON.parse(req.headers['x-oney-digital_accounts']);
  var param1 = ids[0].authentIdField;
  var param2 = ids[0].authentId;
  var lurl = "http://" + req.headers['host'] + suburl + "?authent_id_field=" + param1 + "&authent_id=" + param2;
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
	var param1 = id.authentIdField;
	var param2 = id.authentId;
	var lurl = "http://" + req.headers['host'] + suburl + "?authent_id_field=" + param1 + "&authent_id=" + param2;
	var encoded = encodeURI(lurl);
	listeURLs.push(encoded);
  });
  
  // call all Backend URLs
  getAlunoArrayAsync(listeURLs,res);
};


 


 
 
 
 
 async function getAlunoArrayAsync (listeURLs, res) {
  let posts = [];


  for(let i = 0; i < listeURLs.length; i++) {
    const { data: contracts } = await axios.get(
      listeURLs[i]
    );

    for(contract of contracts) {
		posts.push(contract);
	}
  }

  return res.send({ contract_references: posts });
};



   