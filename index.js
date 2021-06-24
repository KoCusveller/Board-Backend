const express = require("express");
const app = express();

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const PORT = 4000;

const projectsRouter = require("./routers/projects");
app.use("/", projectsRouter);

const pebblesRouter = require("./routers/pebbles");
app.use("/board", pebblesRouter);

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
