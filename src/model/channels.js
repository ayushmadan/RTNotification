const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
    channelId: {
        type: String,
        required: true,
        index: true,
    },
    members: {
        type: [String],
        // maxItems: 30,
    },
    platform: {
        type: String
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("channels", channelSchema);