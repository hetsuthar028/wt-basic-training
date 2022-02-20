const makeMongoConnection = require("./mongo-connection");
let mongoClient = undefined;
const express = require("express");
const { ObjectId } = require("mongodb");

makeMongoConnection
    .then((connection) => {
        mongoClient = connection;
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/get/students", (req, res) => {
    mongoClient
        .db("api-training")
        .collection("students")
        .find({})
        .toArray()
        .then((result) => {
            return res.status(200).send({ success: true, result });
        })
        .catch((err) => {
            return res.status(502).send({ success: false, error: err });
        });
});

app.post("/add/students", (req, res) => {
    let { students } = req.body;
    if (Array.isArray(students)) {
        mongoClient
            .db("api-training")
            .collection("students")
            .insertMany(students)
            .then((result) => {
                res.send({ success: true, result });
            })
            .catch((err) => {
                res.send({ success: false, error: err });
            });
    } else {
        res.send({
            success: false,
            message: "students field must be an array",
        });
    }
});

app.delete("/delete/student/:id", (req, res) => {
    let studentId = req.params.id;
    if (studentId) {
        mongoClient
            .db("api-training")
            .collection("students")
            .deleteOne({ _id: ObjectId(studentId) })
            .then((result) => {
                return res.status(200).send({ success: true, result });
            })
            .catch((err) => {
                return res.send({ success: false, error: err });
            });
    } else {
        return res.send({
            success: false,
            message:
                "Student id is required with the url. For eg. ../student/<studentId>",
        });
    }
});

app.put("/update/student/:id", (req, res) => {
    let studentId = req.params.id;

    if (studentId) {
        mongoClient
            .db("api-training")
            .collection("students")
            .updateOne({ _id: ObjectId(studentId) }, { $set: req.body })
            .then((result) => {
                return res.status(200).send({ success: true, result });
            })
            .catch((err) => {
                return res.send({ success: false, error: err });
            });
    } else {
        return res.send({
            success: false,
            message:
                "Student id is required with the url. For eg. ../student/<studentId>",
        });
    }
});

app.listen(8082, () => {
    console.log("Server listening on PORT 8082...");
});
