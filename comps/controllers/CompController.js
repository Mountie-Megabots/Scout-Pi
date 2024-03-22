const { FetchBlueCompData, FetchBlueTeams } = require("../../common/fetches/DataFetches");
const CompModel = require("../../common/models/Comp");

module.exports = {
  getAllComps: (req, res) => {
    const { query: filters } = req;

    CompModel.findAllComps(filters)
      .then((comps) => {
        return res.status(200).json({
          status: true,
          data: comps,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getCompById: (req, res) => {
    const {
      params: { compID },
    } = req;

    CompModel.findComp({ id: compID })
      .then((comp) => {
        return res.status(200).json({
          status: true,
          data: comp.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createComp: (req, res) => {
    const { body } = req;
    const payload = req.body;

    if(!payload.teams && !payload.blueid){
      return res.status(400).json({
        status: false,
        error: {
          message: `Missing a blueid or team list one is needed`,
        }
      });
    }
    else if(payload.blueid && !payload.teams) {

      body.teams = ""

      CompModel.createComp(body)
      .then(async (comp) => {

        jComp = comp.toJSON()

        jComp.teams = await FetchBlueCompData(jComp.id, jComp.blueid);

        return res.status(200).json({
          status: true,
          data: jComp,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
    }
    else if(payload.teams && !payload.blueid) {

      body.blueid = ""

      CompModel.createComp(body)
      .then(async (comp) => {

        jComp = comp.toJSON()

        teams = JSON.parse(jComp.teams);

        await FetchBlueTeams(teams);

        return res.status(200).json({
          status: true,
          data: jComp,
        });
      })
      // .catch((err) => {
      //   return res.status(500).json({
      //     status: false,
      //     error: err,
      //   });
      // });
    }
    else {
      return res.status(400).json({
        status: false,
        error: {
          message: `Something is wrong with your request body`,
        }
      });
    }
  },

  updateComp: (req, res) => {
    const {
      params: { compId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can not update the comp.",
        },
      });
    }

    CompModel.updateComp({ id: compId }, payload)
      .then(() => {
        return CompModel.findComp({ id: compId });
      })
      .then((comp) => {
        return res.status(200).json({
          status: true,
          data: comp.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteComp: (req, res) => {
    const {
      params: { compId },
    } = req;

    CompModel.deleteComp({id: compId})
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfcompsDeleted: numberOfEntriesDeleted
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
