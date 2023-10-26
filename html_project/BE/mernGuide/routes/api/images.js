const express = require("express");
const router = express.Router();

const Images = require("../../models/imagesModel");

router.get("/test", (req, res) => res.send("image route testing!"));

router.get("/images", (req, res) => {
    Images.find()
        .then((images) => res.json(images))
        .catch((err) =>
            res.status(404).json({ noimagesfound: "No Images found" })
        );
});

router.get("/images/:id", (req, res) => {
    Images.findById(req.params.id)
        .then((image) => res.json(image))
        .catch((err) =>
            res.status(404).json({ nobookfound: "No Image found" })
        );
});

router.post("/", (req, res) => {
    Images.create(req.body)
        .then((image) => res.json({ msg: "Image added successfully" }))
        .catch((err) =>
            res.status(400).json({ error: "Unable to add this IMage" })
        );
});

module.exports = router;
