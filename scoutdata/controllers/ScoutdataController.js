const ScoutDataModel = require("../../common/models/ScoutData");

module.exports = {
  getAllScoutData: (req, res) => {
    const {
      params: { compID },
    } = req;

    ScoutDataModel.findAllScoutData({ compID: compID })
      .then((teams) => {
        return res.status(200).json({
          status: true,
          data: teams,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getScoutDataByMatchNum: (req, res) => {
    const {
      params: { compID, matchNum },
    } = req;

    ScoutDataModel.findAllScoutData({ compID: compID, matchNum: matchNum })
      .then((teams) => {
        return res.status(200).json({
          status: true,
          data: teams,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getScoutDataByTeamNum: (req, res) => {
    const {
      params: { compID, teamNum },
    } = req;

    ScoutDataModel.findAllScoutData({ compID: compID, teamNum: teamNum })
      .then((teams) => {
        return res.status(200).json({
          status: true,
          data: teams,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getScoutDataByTeamNumByMatchNum: (req, res) => {
    const {
      params: { compID, teamNum, matchNum },
    } = req;

    ScoutDataModel.findScoutData({ compID: compID, teamNum: teamNum, matchNum: matchNum })
      .then((teams) => {
        return res.status(200).json({
          status: true,
          data: teams,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createScoutData: (req, res) => {
    const {
      params: { compID },
      body: payload,
    } = req;

    payload.compID = compID

    ScoutDataModel.createScoutData(payload)
      .then((scoutdata) => {
        return res.status(200).json({
          status: true,
          data: scoutdata.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateScoutData: (req, res) => {
    const {
      params: { compID, teamNum, matchNum },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can not update the pitscout.",
        },
      });
    }

    ScoutDataModel.updateScoutData({ compID: compID, teamNum: teamNum, matchNum: matchNum }, payload)
      .then(() => {
        return ScoutDataModel.findScoutData({ compID: compID, teamNum: teamNum, matchNum: matchNum });
      })
      .then((pitscout) => {
        return res.status(200).json({
          status: true,
          data: pitscout.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteScoutData: (req, res) => {
    const {
      params: { compID, teamNum, matchNum },
    } = req;

    ScoutDataModel.deleteScoutData({compID: compID, teamNum: teamNum, matchNum: matchNum})
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfPitScoutsDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteMatchScoutData: (req, res) => {
    const {
      params: { compID, matchNum },
    } = req;

    ScoutDataModel.deleteScoutData({compID: compID, matchNum: matchNum})
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfPitScoutsDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
};
