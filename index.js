const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routers/auth");
const authMiddleWare = require("./auth/middleware");

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const projectsRouter = require("./routers/projects");
app.use("/", projectsRouter);

const pebblesRouter = require("./routers/pebbles");
app.use("/board", pebblesRouter);

app.use("/", authRouter);

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
