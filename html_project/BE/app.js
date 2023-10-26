const express = require("express");
const connectDB = require("./mernGuide/config/db");
const cors = require("cors");

const app = express();

const images = require("./mernGuide/routes/api/images");
// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("I'm in a glass case of emotion"));

app.use("/", images);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
