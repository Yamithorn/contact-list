const express = require("express");
const app = express(); // Gives us the app object so we can configure
const mongoose = require("mongoose"); // Database
const database = require("./config/keys").mongoURI; // Specific username and password used to access our database
const bodyParser = require("body-parser"); // Parse the json we seend to our front end

// Routes
const contacts = require("./routes/api/contacts");

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

async function connect() {
    try {
        await mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

connect();

// our app can respond to other software like postman
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json()); // respond with json request

// Use routes within contacts start with /api/contacts
app.use("/api/contacts", contacts);

app.listen(port, () => console.log(`Server is running on port ${port}`));