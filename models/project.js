"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class project extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			project.hasMany(models.pebble);
			project.hasMany(models.user);
		}
	}
	project.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			bgImgUrl: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "project",
		}
	);
	return project;
};
