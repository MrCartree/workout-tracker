const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
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
    distance: {
        type: Number,
        required: "Enter a distance for this workout"
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;