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
      type: "number",
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
    scoringPos: {
      type: "string",
    },
    driveUnderStage: {
      type: "boolean",
    },
    comments: {
      type: "string",
    },
  },
  required: ["teamNum", "botPic", "autoRoutines", "framePrimeter", "weight", "drivetrain", "intake", "scoringPos", "driveUnderStage", "comments"],
  additionalProperties: false,
};
