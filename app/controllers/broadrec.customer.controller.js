



exports.broadrecBoard = (req, res) => {
	var retour = "{ "+ '"url":' + req.url +', "crossref":' + req.headers['x-oney-crossref'] + "}";
	var ids = JSON.parse(req.headers['x-oney-crossref']);
	//var retour = JSON.stringify(ids[0].authent_id);
  res.setHeader("Content-Type","application/json");
  res.status(200).send(retour);
};
 
 


   