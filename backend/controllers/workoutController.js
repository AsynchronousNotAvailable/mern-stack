const e = require('express');
const Workout = require('../model/workoutModel');
const mongoose = require('mongoose')

//GET all workout
const getWorkOuts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    
    res.status(200).json(workouts)
}
//GET single workout
const getWorkOut = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findById(id)

    //check whether if workout is null
    if (!workout) {
        return res.status(400).json({ error: 'No Such Workout'})
    }

    res.status(200).json(workout)
}
//CREATE new workout
const createWorkout = async (req, res) => {
    const { title, reputation, load } = req.body;
    try {
        
        const workout = await Workout.create({ title, reputation, load })
        res.status(200).json(workout)
    }
    catch (e){
        res.status(400).json({error: e.message})
    }
}
//DELETE a workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Workout'})
    }

   
    const deleteWorkout = await Workout.findByIdAndDelete(id)

    if (!deleteWorkout) {
        res.status(404).json({error: 'No such Workout'})
    }
    res.status(200).json(deleteWorkout)
    
}
//UPDATE a workout


const updateWorkout = async (req, res) => {
    const { id } = req.params
    // check whether id is valid or not
    if (!mongoose.Types.ObjectId.isValid) {
        res.status(404).json({error:'No such Workout'})
    }
    const updateWorkout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!updateWorkout) {
        res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(updateWorkout)
}
module.exports = {getWorkOuts, getWorkOut, createWorkout, deleteWorkout, updateWorkout}