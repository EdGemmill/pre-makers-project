const mongoose = require("mongoose");
const newImageSchema = new mongoose.Schema({
    // author: ObjectId,
    title: { type: String, required: true },
    body: { type: String, required: true },
    postedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = ImagePost = mongoose.model("ImagePost", newImageSchema);
