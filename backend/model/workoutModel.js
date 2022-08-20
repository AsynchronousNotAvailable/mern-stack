// import mongoose odm and Schema method
const mongoose = require('mongoose');
const Schema = mongoose.Schema
// create a data model that specifies the properties of the field in the collection
const workOutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reputation: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })//states the time when the document is created and last updated


// exports the data model scheme to workouts.js
module.exports = mongoose.model('Workout', workOutSchema)