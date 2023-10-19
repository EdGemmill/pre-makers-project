const express = require("express");
const app = express();

const mongoose = require("mongoose");
const uri =
    "mongodb+srv://myAtlasDBUser:Cluster6311@myatlasclusteredu.i3zmnhm.mongodb.net/ImagePost?retryWrites=true&w=majority";


mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const newImageSchema = new mongoose.Schema({
    // author: ObjectId,
    title: String,
    body: String,
    postedAt: {
        type: Date,
        default: Date.now,
    },
});

const ImagePost = mongoose.model("ImagePost", newImageSchema);

const sunflowers = new ImagePost({
    title: "Sunflowers",
    body: "A picture of a sunflowers",
});

sunflowers
    .save()
    .then(() => console.log("image created"))
    .catch((err) => console.log(err));

ImagePost.find()
    .then((images) => console.log(images))
    .catch((err) => console.log(err));

ImagePost.findOneAndUpdate({ title: "Sunflowers" }, { title: "Bedroom in Arles" })
    .then(() => console.log("Image updated"))
    .catch((err) => console.log(err));

ImagePost.deleteOne({ title: "Sunflowers" })
    .then(() => console.log("Image deleted"))
    .catch((err) => console.log(err));

