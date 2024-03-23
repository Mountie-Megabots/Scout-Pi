const { DataTypes } = require("sequelize");

const scoutDataModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  compID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'comps',
        key: 'id'
      }
  },
  matchNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //     model: 'matches',
    //     key: 'matchNum'
    //   }
  },
  teamNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  startPos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autoLeave: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  notesScoredAuto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  notesAutoOrder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pickupLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ampNotesScored: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  speakerNotesScored: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  speakerNotesMissed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  scoringPos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  drivingQuality: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  penalities: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disconnects: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  proformaceUnderDefense: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defenseByBot: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("scoutdata", scoutDataModel)
    },
  
    createScoutData: (user) => {
      return this.model.create(user);
    },
  
    findScoutData: (query) => {
      return this.model.findOne({
        where: query,
      });
    },
  
    updateScoutData: (query, updatedValue) => {
      return this.model.update(updatedValue, {
        where: query,
      });
    },
  
    findAllScoutData: (query) => {
      return this.model.findAll({
        where: query
      });
    },
  
    deleteScoutData: (query) => {
      return this.model.destroy({
        where: query
      });
    }
  }