"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class pebble extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			pebble.belongsTo(models.project);
		}
	}
	pebble.init(
		{
			title: DataTypes.STRING,
			text: DataTypes.TEXT,
			imgUrl: DataTypes.STRING,
			posLeft: DataTypes.INTEGER,
			posTop: DataTypes.INTEGER,
			projectId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "pebble",
		}
	);
	return pebble;
};
