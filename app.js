const express = require("express");
const app = express(); // gives us the app object we can configure
const mongoose = require("mongoose");
const database = require("./config/keys").mongoURI;

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

mongoose
    .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(error => console.log(error));

app.listen(port, () => console.log(`Server is running on port ${port}`));