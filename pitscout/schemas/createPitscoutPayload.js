module.exports = {
  type: "object",
  properties: {
    teamNum: {
      type: "number",
    },
    botPic: {
      type: "string",
    },
    autoRoutines: {
      type: "string",
    },
    framePrimeter: {
      type: "string",
    },
    drivetrainType: {
      type: "string",
    },
    weight: {
      type: "number",
    },
    drivetrain: {
      type: "string",
    },
    intake: {
      type: "string",
    },
    scoringType: {
      type: "string",
    },
    scoringPos: {
      type: "string",
    },
    trap: {
      type: "boolean",
    },
    driveUnderStage: {
      type: "string",
    },
    help: {
      type: "string",
    },
    helpDetails: {
      type: "string",
    },
    comments: {
      type: "string",
    },
  },
  required: ["teamNum", "botPic", "autoRoutines", "framePrimeter", "drivetrainType", "weight", "drivetrain", "intake", "scoringType", "scoringPos", "trap", "driveUnderStage", "help", "helpDetails", "comments"],
  additionalProperties: false,
};
