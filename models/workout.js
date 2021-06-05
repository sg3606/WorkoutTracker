const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            duration: {
                type: Number,
                required: "Enter duration"
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
                type: Number,
            }
        }
    ],
},
    {
        toJSON: {
            virtuals: true
        },
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    const totalduration_init = 0
    const duration = this.exercises.reduce((total, current) => {
        return total + current.duration;
    }, totalduration_init);
    return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;