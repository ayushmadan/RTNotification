const app = require("express").Router();
const {
    createChannelController
} = require("./channel.controller");

const routeMapping = [{
    route: "/createChannel",
    controller: createChannelController,
    method: "post",
    // middlewares: "",
}]


module.exports = () => {
    routeMapping.forEach((mapping) => {
        app[mapping.method](mapping.route, mapping.controller)
    })
    return app
}