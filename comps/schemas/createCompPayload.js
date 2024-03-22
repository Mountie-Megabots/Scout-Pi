module.exports = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    blueid: {
      type: "string",
    },
    teams: {
      type: "string",
    },
  },
  required: ["name"],
  additionalProperties: false,
};
