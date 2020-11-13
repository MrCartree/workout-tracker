const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
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
        required: "Enter a weight for this workout"
    },
    reps: {
        type: Number,
        required: "Enter an amount of reps for this workout"
    },
    set: {
        type: Number,
        required: "Enter an amount of reps for this workout"
    }


});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;