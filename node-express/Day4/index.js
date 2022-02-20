const express = require('express');
const myRouter = require('./demo-router');

const app = express();

// Express Router
app.use(myRouter);

// Pattern matching
app.get('/ab*cd', (req, res) => {
    res.send({message: "pattern matched"});
})

app.listen(8080, () => {
    console.log("Server listening on port 8080...");
});