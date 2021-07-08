const { Router } = require("express");
const router = new Router();

const Pebble = require("../models").pebble;

/* router.get("/", async (req, res) => {
	const Pebbles = await Pebble.findAll();
	res.status(200).send({ message: "ok", Pebbles });
}); */

router.get("/:id", async (req, res) => {
	const Pebbles = await Pebble.findAll({
		where: { projectId: req.params.id },
	});
	console.log("testing");
	console.log(req.params.id);
	res.status(200).send({ message: "ok", Pebbles });
});

router.post("/", async (req, res) => {
	const newPebble = await Pebble.create(req.body);

	return res.status(201).send({ message: "Pebble created", newPebble });
});

module.exports = router;
