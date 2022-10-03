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
    "/api/test/customers",
    [authJwt.verifyToken, crossRef.getIdsCustomer],
    controller.getCustomer
  );
  
  app.post(
    "/api/test/customers",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addCustomer
  );
  
  app.get(
    "/api/test/customers/contract_refrences",
    [authJwt.verifyToken, crossRef.getIdsCustomer],
    controller.getCustomerContractRef
  );
  
  app.post(
    "/api/test/customers/contract_refrences",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addCustomerContractRef
  );

};
