const  authJwt  = require("../middleware/authJwt.js");
const controller = require("../controllers/broadrec.customer.controller");
const  crossRef  = require("../middleware/crossRef.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/test/broadrec/customers/v3/customer",
    [],
    controller.broadrecBoard
  );
  

  app.get(
    "/api/test/broadrec/customers/v3/contract_references",
    [],
    controller.broadrecBoard
  );

};
