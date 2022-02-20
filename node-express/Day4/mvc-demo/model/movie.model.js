const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true
    },
    movieName: {
        type: String,
        required: true,
    },
    ticketCost: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('movies', MovieSchema);