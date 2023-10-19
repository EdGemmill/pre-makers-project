const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const config = require("./config/config");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// // Define your routes here
// const exampleRoutes = require("./routes/exampleRoutes");
// app.use("/api/example", exampleRoutes);

const uri =
    "mongodb+srv://myAtlasDBUser:Cluster6311@myatlasclusteredu.i3zmnhm.mongodb.net/ImagePost?retryWrites=true&w=majority";

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
