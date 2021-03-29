const mongoose = require('mongoose');

const receiptSchema = mongoose.Schema({
    messageId: {
        type: String,
        required: true,
        index: true
    },
    readBy: {
        type: [String],
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("receipts", receiptSchema)