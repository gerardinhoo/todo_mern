const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const items = require("./routes/api/items");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to Mongo DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Mongo DB Database is connected")
})

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})