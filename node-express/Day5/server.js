const express = require('express');

const app = express();

// handlebars
// app.set('view engine', 'hbs');

// pug
app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//     res.render('index', {
//         engineName: "handlebars"
//     });
// });

app.get('/', (req, res) => {
    res.render('first', {
        username: 'hetsuthar028'
    })
})

app.listen(8081, () => {
    console.log("Server running on port 8081...");
})