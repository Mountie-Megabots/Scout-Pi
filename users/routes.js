const router = require("express").Router();

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

// Controller Imports
const UserController = require("./controllers/UserController");

// JSON Schema Imports for payload verification
const updateUserPayload = require("./schemas/updateUserPayload");
const changeRolePayload = require("./schemas/changeRolePayload");

const { roles } = require("../config/config");

router.get("/", [isAuthenticatedMiddleware.check], UserController.getUser);

router.patch(
  "/",
  [
    isAuthenticatedMiddleware.check,
    SchemaValidationMiddleware.verify(updateUserPayload),
  ],
  UserController.updateUser
);

router.get(
  "/all",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.SUPADMIN)],
  UserController.getAllUsers
);

router.patch(
  "/change-role/:userId",
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.SUPADMIN),
    SchemaValidationMiddleware.verify(changeRolePayload),
  ],
  UserController.changeRole
);

router.delete(
  "/:userId",
  [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.SUPADMIN)],
  UserController.deleteUser
);

module.exports = router;
