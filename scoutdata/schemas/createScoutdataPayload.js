module.exports = {
  type: "object",
  properties: {
    matchNum: {
      type: "number",
    },
    teamNum: {
      type: "number",
    },
    startPos: {
      type: "string",
    },
    autoLeave: {
      type: "boolean",
    },
    notesScoredAuto: {
      type: "number",
    },
    notesAutoOrder: {
      type: "string",
    },
    pickupLocation: {
      type: "string",
    },
    ampNotesScored: {
      type: "number",
    },
    speakerNotesScored: {
      type: "number",
    },
    speakerNotesMissed: {
      type: "number",
    },
    scoringPos: {
      type: "string",
    },
    drivingQuality: {
      type: "number",
    },
    penalities: {
      type: "number",
    },
    disconnects: {
      type: "number",
    },
    proformaceUnderDefense: {
      type: "number",
    },
    defenseByBot: {
      type: "number",
    },
    comments: {
      type: "string",
    },
  },
  required: [
    "matchNum",
    "teamNum",
    "startPos",
    "autoLeave",
    "notesScoredAuto",
    "notesAutoOrder",
    "pickupLocation",
    "ampNotesScored",
    "speakerNotesScored",
    "speakerNotesMissed",
    "scoringPos",
    "drivingQuality",
    "penalities",
    "disconnects",
    "proformaceUnderDefense",
    "defenseByBot",
    "comments"
  ],
  additionalProperties: false,
};
