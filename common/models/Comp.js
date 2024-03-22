const { DataTypes } = require("sequelize");

const CompModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blueid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teams: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("comp", CompModel)
    },
  
    createComp: (user) => {
      return this.model.create(user);
    },
  
    findComp: (query) => {
      return this.model.findOne({
        where: query,
      });
    },
  
    updateComp: (query, updatedValue) => {
      return this.model.update(updatedValue, {
        where: query,
      });
    },
  
    findAllComps: (query) => {
      return this.model.findAll({
        where: query
      });
    },
  
    deleteComp: (query) => {
      return this.model.destroy({
        where: query
      });
    }
  }