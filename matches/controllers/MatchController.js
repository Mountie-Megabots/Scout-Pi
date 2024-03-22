const MatchModel = require("../../common/models/Match");

module.exports = {
  getAllMatches: (req, res) => {
    const {
      params: { compID },
    } = req;

    MatchModel.findAllMatches({ compID: compID })
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
  
  getAllMatchesByTeamNum: (req, res) => {
    const {
      params: { compID, teamNum },
    } = req;

    MatchModel.findAllMatchesTeamNum({ compID: compID }, teamNum)
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

  getMatchByMatchNum: (req, res) => {
    const {
      params: { compID, matchNum },
    } = req;

    MatchModel.findMatch({ compID: compID, matchNum: matchNum })
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
};
