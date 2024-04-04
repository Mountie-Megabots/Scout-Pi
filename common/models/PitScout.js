const { DataTypes } = require("sequelize");

const pitScoutModel = {
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
      },
      onDelete: 'CASCADE'
  },
  teamNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  botPic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autoRoutines: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  framePrimeter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  drivetrainType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  drivetrain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  intake: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scoringType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scoringPos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trap: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  driveUnderStage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  help: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  helpDetails: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("pitscouts", pitScoutModel)
    },
  
    createPitScout: (user) => {
      return this.model.create(user);
    },
  
    findPitScout: (query) => {
      return this.model.findOne({
        where: query,
      });
    },
  
    updatePitScout: (query, updatedValue) => {
      return this.model.update(updatedValue, {
        where: query,
      });
    },
  
    findAllPitScouts: (query) => {
      return this.model.findAll({
        where: query
      });
    },
  
    deletePitScout: (query) => {
      return this.model.destroy({
        where: query
      });
    }
  }