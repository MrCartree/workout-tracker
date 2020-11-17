const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter type of workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for this workout"
            },
            duration: {
                type: Number,
                required: "Enter a duration for this workout"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number
            }

        }
    ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;