const router = require("express").Router();

// Controller Imports
const PitScoutController = require("./controllers/PitscoutController");

// Middleware Imports
const isAuthenticatedMiddleware = require("../common/middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

// JSON Schema Imports for payload verification
const createPitScoutPayload = require("./schemas/createPitscoutPayload");
const updatePitScoutPayload = require("./schemas/updatePitscoutPayload");
const { roles } = require("../config/config");

router.get(
  "/comp/:compID/all",
  [isAuthenticatedMiddleware.check],
  PitScoutController.getAllPitScouts
);

router.get(
  "/comp/:compID/team/:teamNum",
  [isAuthenticatedMiddleware.check],
PitScoutController.getPitScoutByTeamNum
);

router.post(
  "/comp/:compID/create",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(createPitScoutPayload),
  ],
  PitScoutController.createPitScout
);

router.patch(
  "/comp/:compID/team/:teamNum",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(updatePitScoutPayload),
  ],
  PitScoutController.updatePitScout
);

router.delete(
  "/comp/:compID/team/:teamNum",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
  PitScoutController.deletePitScout
);

module.exports = router;
