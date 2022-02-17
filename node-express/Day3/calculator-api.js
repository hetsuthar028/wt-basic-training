const express = require('express');
const path = require('path')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './addition.html'))
});

app.post('/add', (req, res) => {
    let {number1, number2} = req.body;
    res.send("Addition = " + (parseInt(number1) + parseInt(number2)))
});

app.post('/subtract', (req, res) => {
    let {number1, number2} = req.body;
    res.send("Subtraction = " + (parseInt(number1) - parseInt(number2)))
});

app.post('/multiply', (req, res) => {
    let {number1, number2} = req.body;
    res.send("Multiplication = " + (parseInt(number1) * parseInt(number2)))
});

app.post('/divide', (req, res) => {
    let {number1, number2} = req.body;
    res.send("Division = " + (parseInt(number1) / parseInt(number2)))
});


app.listen(8081, () => {
    console.log("Server listening on port 8081...");
})