"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"projects",
			[
				{
					name: "Burly Heads",
					bgImgUrl: "https://i.imgur.com/saPeTM8.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Zandvoort",
					bgImgUrl: "https://i.imgur.com/JrM5OTz.jpeg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Puerto Chicama",
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
