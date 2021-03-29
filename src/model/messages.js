const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    channelId: {
        type: String,
        required: true,
        index: true,
    },
    userId: {
        type: String,
        required: true,
        index: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["text", "image", "document"],
    },
    body: {
        type: String,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    isSent: {
        type: Boolean,
        default: false,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("messages", messageSchema);