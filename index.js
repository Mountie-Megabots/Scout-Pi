const Express = require("express");
const app = Express();
const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");

const { port } = require("./config/config");
const PORT = process.env.PORT || port;

// Express Routes Import
const AuthorizationRoutes = require("./authorization/routes");
const UserRoutes = require("./users/routes");
const CompRoutes = require("./comps/routes");
const TeamRoutes = require("./teams/routes");
const MatchRoutes = require("./matches/routes");
const PitScoutRoutes = require("./pitscout/routes");
const ScoutDataRoutes = require("./scoutdata/routes");

// Sequelize model imports
const UserModel = require("./common/models/User");
const CompModel = require("./common/models/Comp");
const TeamModel = require("./common/models/Team");
const PitScoutModel = require("./common/models/PitScout");
const MatchModel = require("./common/models/Match");
const ScoutDataModel = require("./common/models/ScoutData");
const { MakeBlueApiRequest } = require("./common/apis/BlueApiRequest");
const { MakeFirstApiRequest } = require("./common/apis/FirstApiRequest");

app.use(morgan("tiny"));
app.use(cors());

// Middleware that parses the body payloads as JSON to be consumed next set
// of middlewares and controllers.
app.use(Express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.db", // Path to the file that will store the SQLite DB.
});

// Initialising the Model on sequelize
UserModel.initialise(sequelize);
CompModel.initialise(sequelize);
TeamModel.initialise(sequelize);
PitScoutModel.initialise(sequelize);
MatchModel.initialise(sequelize);
ScoutDataModel.initialise(sequelize);

// Gets Event List 
// MakeBlueApiRequest("/team/frc" + 7197 + "/events/" + 2024 + "/simple").then((data) => {console.log(data)});
// Gets All Teams At An Event
// MakeBlueApiRequest("/event/" + "2024mimcc" + "/teams/simple").then((data) => {console.log(data)});
// Gets All Matches At An Event
// MakeBlueApiRequest("/event/" + "2024mibkn" + "/matches/simple").then((data) => {console.log(data)});
// Gets Avatar by teamNum
// MakeFirstApiRequest("/2024/avatars?teamNumber=" + 7197).then((data) => {console.log(data)});

// Syncing the models that are defined on sequelize with the tables that alredy exists
// in the database. It creates models as tables that do not exist in the DB.
sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");

    // Attaching the Authentication and User Routes to the app.
    app.use("/", AuthorizationRoutes);
    app.use("/user", UserRoutes);
    app.use("/team", TeamRoutes)
    app.use("/comp", CompRoutes);
    app.use("/match", MatchRoutes);
    app.use("/pitscout", PitScoutRoutes);
    app.use("/scoutdata", ScoutDataRoutes);

    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", port);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });
