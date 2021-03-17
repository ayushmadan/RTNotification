const express = require('express');
const app = express();
const setupRoutes = require("./routes")

app.use("/api", setupRoutes())

app.use("*", (req, res) => {
	return res
		.status(httpStatusCodes.NOT_FOUND)
		.json({
			error: {
				message: "not found"
			},
			is_success: false
		})
})

module.exports = app;