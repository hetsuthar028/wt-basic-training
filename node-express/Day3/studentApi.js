const express = require('express');
const path = require('path')
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

app.post('/add/student', (req, res) => {
    let {username, age} = req.body;
    res.send({success: true});
})


app.listen(8081, () => {
    console.log("Server listening on port 8081...");
})