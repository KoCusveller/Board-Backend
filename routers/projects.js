const { Router } = require("express");
const router = new Router();

const Project = require("../models").project;

router.get("/", async (req, res) => {
	const projects = await Project.findAll();
	res.status(200).send({ message: "ok", projects });
});

router.get("/:id", async (req, res) => {
	try {
		const projectName = await Project.findByPk(req.params.id);
		res.status(200).send({ message: "ok", projectName });
	} catch (error) {
		send(error);
	}
});

module.exports = router;
