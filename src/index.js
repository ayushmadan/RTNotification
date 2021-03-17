const cors = require("cors");
const app = require("./app");
const config = require("./utils/config")
const {
    logger
} = require("./utils/logger")

//CORS middleware
app.use(cors());


app.listen(config.APP.PORT, () => {
    logger.info(`app listening on port: ${config.APP.PORT}`)
})