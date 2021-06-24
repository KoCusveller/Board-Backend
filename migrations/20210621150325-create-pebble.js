"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("pebbles", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			text: {
				type: Sequelize.TEXT,
			},
			imgUrl: {
				type: Sequelize.STRING,
			},
			posLeft: {
				type: Sequelize.INTEGER,
			},
			posTop: {
				type: Sequelize.INTEGER,
			},
			projectId: {
				type: Sequelize.INTEGER,
				references: {
					model: "projects",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("pebbles");
	},
};
