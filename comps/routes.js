const router = require("express").Router();

// Controller Imports
const CompController = require("./controllers/CompController");

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

// JSON Schema Imports for payload verification
const createCompPayload = require("./schemas/createCompPayload");
const updateCompPayload = require("./schemas/updateCompPayload");
const { roles } = require("../config/config");

router.get(
  "/all",
  [isAuthenticatedMiddleware.check],
  CompController.getAllComps
);

router.post(
  "/create",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(createCompPayload),
  ],
  CompController.createComp
);

// router.get(
//   "/teams",
//   [isAuthenticatedMiddleware.check]//,
//   //Gets all teams at comp
// );

router.get(
  "/:compID",
  [isAuthenticatedMiddleware.check],
  CompController.getCompById
);

router.patch(
  "/:compId",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(updateCompPayload),
  ],
  CompController.updateComp
);

router.delete(
  "/:compId",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
  CompController.deleteComp
);

module.exports = router;
