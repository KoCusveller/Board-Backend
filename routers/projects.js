const { Router } = require("express");
const router = new Router();

const Project = require("../models").project;

router.get("/", async (req, res) => {
	const projects = await Project.findAll();
	res.status(200).send({ message: "ok", projects });
});

module.exports = router;
