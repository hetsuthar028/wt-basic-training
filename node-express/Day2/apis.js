const express = require('express');
const fs = require('fs');

const app = express();

app.get('/getUsers', (req, res) => {
    fs.readFile('./users.json', (err, data) => {
        if(err){
            console.log("Error reading data", err);
            return res.send({error: err});
        }

        return res.json(JSON.parse(data.toString()));
    });
});

app.get('/getuser/:id', (req, res) => {
    fs.readFile('./users.json', (err, data) => {
        if(err){
            console.log("Error fetching user", err);
            return res.send({error: err})
        }
        let users = JSON.parse(data.toString())
        
        return res.json({user: users["user" + req.params.id]});
    })
})

app.listen(8080, () => {
    console.log("Server running on port 8080...");
})