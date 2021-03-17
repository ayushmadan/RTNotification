const {
    createChannelService
} = require("./channel.service")

const createChannelController = async (req, res, next) => {
    await createChannelService()
}

module.exports = {
    createChannelController
}