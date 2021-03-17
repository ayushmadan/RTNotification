const {
	createLogger,
	format,
	transports
} = require("winston")
const config = require("./config")

const logFormat = format.printf((info) => {
	if (info.message instanceof Object)
		info.message = `\n${JSON.stringify(info.message, null, 4)}`
	return `${info.timestamp}: [${info.level}]  ${info.message}`
})
const logger = createLogger({
	level: config.APP.WINSTON_LOG_LEVEL,
	format: format.combine(
		format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		format.colorize(),
		logFormat,
	),
	transports: [
		new transports.Console({
			handleExceptions: true,
		}),
	],
})


module.exports = {
	logger
}