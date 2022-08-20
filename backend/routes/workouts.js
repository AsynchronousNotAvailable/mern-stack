// store routes right here. (example: GET, POST PUT, DELETE)

const express = require('express')
const router = express.Router()
//import data model scheme from workoutModel.js
const Workout = require('../model/workoutModel')
const { createWorkout, getWorkOuts, getWorkOut, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

//GET all workout
router.get('/', getWorkOuts) 

//GET single workout
router.get('/:id', getWorkOut)

//POST a new workout/create a new document
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router //export the routes to server.js