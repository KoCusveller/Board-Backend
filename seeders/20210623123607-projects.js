"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"projects",
			[
				{
					name: "Game Changer",
					bgImgUrl: "https://i.imgur.com/saPeTM8.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "RE:DEVELOPMENT",
					bgImgUrl: "https://i.imgur.com/JrM5OTz.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Codaisseur",
					bgImgUrl: "https://i.imgur.com/LwNmJyT.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("projects", null, {});
	},
};
