const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true,
    },
    name: {
        type: String,
    },
    notificationToken: {
        type: String,
    },
    platform: {
        type: [String],
    },
    socketId: {
        type: [String],
    },
    consentGiven: {
        type: Boolean,
        required: true,
        default: false,
    },
    profilePicture: {
        type: String,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("users", userSchema);