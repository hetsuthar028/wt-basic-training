const express = require('express');
const myRouter = express.Router();


myRouter.get('/', (req, res) => {
    res.send({success: true, message: 'Response from myRouter'});
    res.end();
});

module.exports = myRouter;