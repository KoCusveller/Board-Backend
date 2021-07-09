"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"pebbles",
			[
				{
					text: "Our passionate graduates are trained in the most in-demand technologies and coached to develop the soft skills needed to become outstanding professionals.",
					projectId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imgUrl: "https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/02/iStock-1163542789-945x630.jpg",
					projectId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Vacation days?",
					projectId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "We want the best!",
					projectId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Why Codaisseur?",
					text: "We help you succeed by growing your team with junior developers who are ready to hit the ground running. We have a rigorous admission process designed to only select students with the motivation and talent to become outstanding professionals. Our Career Services team helps you find your ideal candidates. We believe in having a Social Impact and Diversity. We sport 53 nationalities, 40% female graduates and all kinds of backgrounds (including tech)",
					projectId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("pebbles", null, {});
	},
};
