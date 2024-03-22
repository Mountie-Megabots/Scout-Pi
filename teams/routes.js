const router = require("express").Router();

// Controller Imports
const TeamController = require("./controllers/TeamController");

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");

router.get(
  "/:teamNum",
  [isAuthenticatedMiddleware.check],
  TeamController.getTeamById
);

module.exports = router;
