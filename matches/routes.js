const router = require("express").Router();

// Controller Imports
const MatchController = require("./controllers/MatchController");

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");

router.get(
  "/comp/:compID/all",
  [isAuthenticatedMiddleware.check],
  MatchController.getAllMatches
);

router.get(
  "/comp/:compID/team/:teamNum",
  [isAuthenticatedMiddleware.check],
  MatchController.getAllMatchesByTeamNum
);

router.get(
  "/comp/:compID/match/:matchNum",
  [isAuthenticatedMiddleware.check],
  MatchController.getMatchByMatchNum
);

module.exports = router;
