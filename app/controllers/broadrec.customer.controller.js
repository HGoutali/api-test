



exports.getCustomer = (req, res) => {
	console.log('debut');
  var suburl = req.url.replaceAll('/broadrec', ''); // "/api/test/customers/v3/customer";
  var ids = JSON.parse(req.headers['x-oney-digital_accounts']);
  var param1 = ids[0].provider;
  console.log('provider');
  var param2 = ids[0].authentId;
  console.log('debut2');
  
  var lurl = "http://" + req.headers['host'] + suburl + "?provider=" + param1 + "&authent_id=" + param2;
  //var lurl =  lurl.replaceAll('"', '');
  var encoded = encodeURI(lurl);
  console.log(encoded);
  
  var retour = "{ "+ '"url":' + suburl +', "digital_accounts":' + req.headers['x-oney-digital_accounts'] + "}";
  //console.log(retour);
	
  res.setHeader("Content-Type","application/json");
  //res.status(200).send(retour);
  res.redirect(encoded);
  
 
  /*var param1 = JSON.stringify(ids[0].platform) ;
  var param2 = JSON.stringify(ids[0].authent_id);
  var location = req.headers['host'] + req.url + "?platform=" + param1 + "&authent_id=" + param2;
  res.status(200).send(location);*/
  
};

exports.getContractReferences = (req, res) => {
	console.log('debut');
  var suburl = req.url.replaceAll('/broadrec', ''); // "/api/test/customers/v3/customer";
 
  var ids = JSON.parse(req.headers['x-oney-digital_accounts']);
  
   console.log(ids);
  var param1 = JSON.stringify(ids[0].provider);
  var param2 = JSON.stringify(ids[0].authentId);
  var lurl = req.headers['host'] + suburl + "?provider=" + param1 + "&authent_id=" + param2;
  var lurl =  lurl.replaceAll('"', '');
  var encoded = encodeURI(lurl);
  console.log(encoded);
  
  var retour = "{ "+ '"url":' + suburl +', "digital_accounts":' + req.headers['x-oney-digital_accounts'] + "}";
  console.log(retour);
	
  res.setHeader("Content-Type","application/json");
  res.status(200).send(retour);
  //res.redirect(encoded);
  
 
  /*var param1 = JSON.stringify(ids[0].platform) ;
  var param2 = JSON.stringify(ids[0].authent_id);
  var location = req.headers['host'] + req.url + "?platform=" + param1 + "&authent_id=" + param2;
  res.status(200).send(location);*/
  
};


 
 


   