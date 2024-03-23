const router = require("express").Router();

// Controller Imports
const ScoutDataController = require("./controllers/ScoutdataController");

// Middleware Imports
const isAuthenticatedMiddleware = require("../common/middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

// JSON Schema Imports for payload verification
const createScoutDataPayload = require("./schemas/createScoutdataPayload");
const updateScoutDataPayload = require("./schemas/updateScoutdataPayload");
const { roles } = require("../config");

router.get(
  "/comp/:compID/all",
  [isAuthenticatedMiddleware.check],
  ScoutDataController.getAllPitScouts
);

router.get(
  "/comp/:compID/match/:matchNum/all",
  [isAuthenticatedMiddleware.check],

);

router.get(
  "/comp/:compID/team/:teamNum/all",
  [isAuthenticatedMiddleware.check],

);

router.get(
  "/comp/:compID/match/:matchNum/:team/:teamNum",
  [isAuthenticatedMiddleware.check],

);

router.post(
  "/comp/:compID/create",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(createScoutDataPayload),
  ],
  ScoutDataController.createPitScout
);

router.patch(
  "/comp/:compID/match/:matchNum/:team/:teamNum",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(updateScoutDataPayload),
  ],
  
);

router.delete(
  "/comp/:compID/match/:matchNum/:team/:teamNum",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],

);

router.delete(
  "/comp/:compID/match/:matchNum",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],

);

router.get(
  "/csv/comp/compID/all",
  [isAuthenticatedMiddleware.check],

);

router.get(
  "/csv/comp/:compID/team/:teamNum/all",
  [isAuthenticatedMiddleware.check],

);

module.exports = router;
