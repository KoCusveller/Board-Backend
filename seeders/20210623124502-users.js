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
					name: "Alejandro",
					email: "alejandro@beach.com",
					password: bcrypt.hashSync("1234a", 10),
					projectId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Antonius",
					email: "antonius@beach.com",
					password: bcrypt.hashSync("1234a", 10),
					projectId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Connor",
					email: "connor@beach.com",
					password: bcrypt.hashSync("1234c", 10),
					projectId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Fernando",
					email: "fernando@beach.com",
					password: bcrypt.hashSync("1234f", 10),
					projectId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Martijn",
					email: "martijn@beach.com",
					password: bcrypt.hashSync("1234m", 10),
					projectId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Max",
					email: "max@beach.com",
					password: bcrypt.hashSync("1234m", 10),
					projectId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Rafael",
					email: "rafael@beach.com",
					password: bcrypt.hashSync("1234r", 10),
					projectId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Rakan",
					email: "rakan@beach.com",
					password: bcrypt.hashSync("1234r", 10),
					projectId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Sentwali",
					email: "sentwali@beach.com",
					password: bcrypt.hashSync("1234s", 10),
					projectId: 3,
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
