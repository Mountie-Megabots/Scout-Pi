const { DataTypes } = require("sequelize");

const teamModel = {
  teamNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  organization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("teams", teamModel)
    },
  
    createTeam: (query, updatedValue) => {
      return this.model.findOrCreate({
        where: { teamNum: query },
        defaults: updatedValue
      });
    },
  
    findTeam: (query) => {
      return this.model.findOne({
        where: query,
      });
    },
  
    updateTeam: (query, updatedValue) => {
      return this.model.update(updatedValue, {
        where: query,
      });
    },
  
    findAllTeams: (query) => {
      return this.model.findAll({
        where: query
      });
    },
  
    deleteTeam: (query) => {
      return this.model.destroy({
        where: query
      });
    }
  }