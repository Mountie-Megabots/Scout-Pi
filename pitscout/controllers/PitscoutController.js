const PitScoutModel = require("../../common/models/PitScout");

module.exports = {
  getAllPitScouts: (req, res) => {
    const {
      params: { compID },
    } = req;

    PitScoutModel.findAllPitScouts({ compID: compID })
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

  getPitScoutByTeamNum: (req, res) => {
    const {
      params: { compID, teamNum },
    } = req;

    PitScoutModel.findPitScout({ compID: compID, teamNum: teamNum })
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

  createPitScout: (req, res) => {
    const {
      params: { compID },
      body: payload,
    } = req;

    payload.compID = compID

    PitScoutModel.createPitScout(payload)
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

  updatePitScout: (req, res) => {
    const {
      params: { compID, teamNum },
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

    PitScoutModel.updatePitScout({ compID: compID, teamNum: teamNum }, payload)
      .then(() => {
        return PitScoutModel.findPitScout({ compID: compID, teamNum: teamNum });
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

  deletePitScout: (req, res) => {
    const {
      params: { compID, teamNum },
    } = req;

    PitScoutModel.deletePitScout({compID: compID, teamNum: teamNum})
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
