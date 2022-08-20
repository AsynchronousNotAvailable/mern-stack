// store routes right here. (example: GET, POST PUT, DELETE)

const express = require('express')
const router = express.Router()
//import data model scheme from workoutModel.js
const Workout = require('../model/workoutModel')
const { createWorkout } = require('../controllers/workoutController')

//GET all workout
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all workouts'});
}) 

//GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//POST a new workout/create a new document
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})


module.exports = router //export the routes to server.js