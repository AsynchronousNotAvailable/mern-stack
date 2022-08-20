const Workout = require('../model/workoutModel');

//GET all workout
//GET single workout

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

//UPDATE a workout

module.exports = {createWorkout}