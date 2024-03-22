const TeamModel = require("../../common/models/Team");

module.exports = {
  getTeamById: (req, res) => {
    const {
      params: { teamNum },
    } = req;
    console.log(teamNum)
    TeamModel.findTeam({ teamNum: teamNum })
      .then((team) => {
        return res.status(200).json({
          status: true,
          data: team.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  }
};
