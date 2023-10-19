
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const uri = "mongodb+srv://myAtlasDBUser:Cluster6311@myatlasclusteredu.i3zmnhm.mongodb.net/?retryWrites=true&w=majority";
var url = "mongodb://localhost:27017/";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});

async function run() {
try {
    const database = client.db('sample_geospatial');
    const shipwrecks = database.collection('shipwrecks');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    const shipwreck = await shipwrecks.findOne();

    console.log(shipwreck);
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
run().catch(console.dir);