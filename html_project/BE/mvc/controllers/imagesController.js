const express = require("express");
const router = express.Router();
const ImagePost = require("../models/imagesModel.js");

router.get("/images", (req, res) => {
    ImagePost.find({})
        .then((images) => {
            res.render("images/index", { images });
        })
        .catch(console.error);
});

module.exports = router;