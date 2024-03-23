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
  ScoutDataController.getAllScoutData
);

router.get(
  "/comp/:compID/match/:matchNum/all",
  [isAuthenticatedMiddleware.check],
  ScoutDataController.getScoutDataByMatchNum
);

router.get(
  "/comp/:compID/team/:teamNum/all",
  [isAuthenticatedMiddleware.check],
  ScoutDataController.getScoutDataByTeamNum
);

router.get(
  "/comp/:compID/match/:matchNum/:team/:teamNum",
  [isAuthenticatedMiddleware.check],
  ScoutDataController.getScoutDataByTeamNumByMatchNum
);

router.post(
  "/comp/:compID/create",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(createScoutDataPayload),
  ],
  ScoutDataController.createScoutData
);

router.patch(
  "/comp/:compID/match/:matchNum/:team/:teamNum",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(updateScoutDataPayload),
  ],
  ScoutDataController.updateScoutData
);

router.delete(
  "/comp/:compID/match/:matchNum/:team/:teamNum",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
  ScoutDataController.deleteScoutData
);

router.delete(
  "/comp/:compID/match/:matchNum",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
  ScoutDataController.deleteMatchScoutData
);

// router.get(
//   "/csv/comp/compID/all",
//   [isAuthenticatedMiddleware.check],

// );

// router.get(
//   "/csv/comp/:compID/team/:teamNum/all",
//   [isAuthenticatedMiddleware.check],

// );

module.exports = router;
