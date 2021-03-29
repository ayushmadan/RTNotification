const mongoose = require('mongoose');

const platformSchema = mongoose.Schema({
    source: {
        type: String,
        required: true
    },
    authorizationKey: {
        type: String,
        required: true,
        index: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("platforms", platformSchema)