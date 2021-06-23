const express = require("express");
const app = express();
const PORT = 4000;

const projectsRouter = require("./routers/projects");
app.use("/", projectsRouter);

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
