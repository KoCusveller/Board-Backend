"use strict";
const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"users",
			[
				{
					name: "Mister Manager",
					email: "manager@beach.com",
					password: bcrypt.hashSync("1234m", 10),
					isManager: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Ko",
					email: "ko@beach.com",
					password: bcrypt.hashSync("1234k", 10),
					projectId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", null, {});
	},
};
