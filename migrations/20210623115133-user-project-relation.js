"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("users", "projectId", {
			type: Sequelize.INTEGER,
			references: {
				model: "projects",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("users", "projectId");
	},
};
