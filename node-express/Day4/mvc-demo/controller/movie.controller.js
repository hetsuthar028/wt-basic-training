const MovieSchema = require('../model/movie.model');

exports.test = (req, res) => {
    res.send({message: "Hiii from Movie Controller"});
    res.end();
}

exports.add = (req, res) => {
    console.log("Add request received...");
    
    let newMovie = new MovieSchema(req.body);
    newMovie.save().then((result) => {
        res.send({message: 'Movie added successfully!'})
    }).catch((err) => {
        console.log("Error adding new movie", err);
        res.send({success: false, error: err});
    });
}

exports.all = (req, res) => {
    MovieSchema.find({}).then((results) => {
        return res.send({success: true, results});
    }).catch((err) => {
        console.log(err);
        return res.send({success: false, error: err});
    })
}

exports.getMovie = (req, res) => {
    console.log(req.params.movieId);
    MovieSchema.find({movieId: parseInt(req.params.movieId)})
        .then((results) => {
            return res.send({success: true, results});
        }).catch((err) => {
            return res.send({success: false, error: err});
        })
}

exports.deleteMovie = (req, res) => {
    console.log(req.params.movieId);
    MovieSchema.find({movieId: parseInt(req.params.movieId)})
        .then((result) => {
            return res.send({success: true, result});
        })
        .catch((err) => {
            return res.send({success: false, error: err});
        })
}

exports.updateMovie = (req, res) => {
    console.log(req.params.movieId);
    MovieSchema.updateOne({movieId: parseInt(req.params.movieId)}, {$set: req.body})
        .then((result) => {
            return res.send({success: true, result});
        })
        .catch((err) => {
            return res.send({success: false, error: err});
        })
}