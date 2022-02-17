const express = require('express');
const path = require('path')
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './addition.html'))
});

app.post('/add', (req, res) => {
    let {number1, number2} = req.body;
    res.send("Addition = " + (parseInt(number1) + parseInt(number2)))
})


app.listen(8081, () => {
    console.log("Server listening on port 8081...");
})