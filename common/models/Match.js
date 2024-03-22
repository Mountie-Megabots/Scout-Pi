const { DataTypes, Sequelize } = require("sequelize");

const matchModel = {
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
  matchNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  red1: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  red2: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  red3: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  blue1: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  blue2: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  blue3: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'teams',
        key: 'teamNum'
      }
  },
  redScore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  blueScore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  matchTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("matches", matchModel)
    },
  
    createMatch: (user) => {
      return this.model.create(user);
    },
  
    findMatch: (query) => {
      return this.model.findOne({
        where: query,
      });
    },
  
    updateMatch: (query, updatedValue) => {
      return this.model.update(updatedValue, {
        where: query,
      });
    },
  
    findAllMatches: (query) => {
      return this.model.findAll({
        where: query
      });
    },

    findAllMatchesTeamNum: (query, teamNum) => {
      return this.model.findAll({
        where: Sequelize.and(
          query,
          Sequelize.or(
            { red1: teamNum },
            { red2: teamNum },
            { red3: teamNum },
            { blue1: teamNum },
            { blue2: teamNum },
            { blue3: teamNum }
          )
        )
      });
    },
  
    deleteMatch: (query) => {
      return this.model.destroy({
        where: query
      });
    }
  }