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

let dummyUser = {
    "user6": {
        "id": 6, 
        "username": "hetsuthar",
        "password": "het028",
        "admin": true,
        "status": "active"
    }
}

app.post('/add/user', (req, res) => {
    fs.readFile('./users.json', (err, data) => {
        if(err){
            console.log("Error reading file:", err);
            return res.send({error: err});
        }

        data = JSON.parse(data);
        data["user6"] = dummyUser["user6"];

        fs.writeFile('./users.json', JSON.stringify(data), (err) => {
            if(err){
                console.log("Error writing the user:", err)
            }
            
            return res.send({success: true, message: "User added successfully", user: dummyUser});
        });
    })
});


app.delete('/delete/user/:id', (req, res) => {
    fs.readFile('./users.json', (err, data) => {
        if(err){
            console.log("Error reading file:", err);
            return res.send({error: err});
        }

        data = JSON.parse(data);
        delete data["user" + req.params.id];

        // homework
        fs.writeFile('./users.json', JSON.stringify(data), (writeErr) => {
            if(writeErr){
                console.log("Error writing the user:", writeErr)
                return res.send({error: writeErr});
            }

            return res.send({success: true, message: "user deleted successfully", users: data});
        })
    })
})

app.listen(8080, () => {
    console.log("Server running on port 8080...");
})