const app = require("express").Router()
const {
	logger
} = require("./utils/logger")

const modules = ["channel"]

module.exports = () => {
	modules.forEach((module) => {
		app.use(`/${module}`, require(`./${module}/${module}.route.js`)())
		logger.info(`Loaded API: ${module}`)
	})
	return app
}