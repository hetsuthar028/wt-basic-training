const express = require("express");
const serverConf = require("../config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const movieRouter = require('./routes/movie.route');

mongoose.connect(serverConf.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((result) => {
    console.log("Connected to Mongo")
}).catch((err) => {
    console.log(err);
})

let db = mongoose.connection
db.on("error", (err) => {
    console.log("Connection error with MongoDB:", err);
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/movie', movieRouter);

app.listen(serverConf.SERVER_PORT, () => {
    console.log(`Server listening on PORT ${serverConf.SERVER_PORT}...`);
});
