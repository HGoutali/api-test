const  authJwt  = require("../middleware/authJwt.js");
const controller = require("../controllers/customer.controller");
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
    "/api/test/customers/v3/customer",
    [authJwt.verifyToken],
    controller.getCustomer
  );
  
  app.post(
    "/api/test/customers/v3/customer",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addCustomer
  );
  
  app.get(
    "/api/test/customers/v3/contract_references",
    [authJwt.verifyToken],
    controller.getCustomerContractRef
  );
  
  app.post(
    "/api/test/customers/v3/contract_references",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addCustomerContractRef
  );

};
