const express = require('express');
const movieRouter = express.Router();

const movieController = require('../controller/movie.controller.js');

movieRouter.get('/', movieController.test);

movieRouter.post('/add', movieController.add);

movieRouter.get('/all', movieController.all);

movieRouter.get('/id/:movieId', movieController.getMovie);

movieRouter.delete('/delete/id/:movieId', movieController.deleteMovie);

movieRouter.put('/update/id/:movieId', movieController.updateMovie);
// movieRouter.get('/', (req, res) => {
//     res.send({message: "Hii from Movie router"});
//     res.end();
// })

module.exports = movieRouter;