const router = require("express").Router();
const Resistance = require("../models/resistance");
const Cardio = require("../models/cardio");

router.get("/api/workouts", ({ body }, res ) => {

    Resistance.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });

    //     .sort({ day: -1 })
    //     .then(dbResistance => {
    //         res.json(dbResistance)
    //     })
    //     .catch(err => {
    //         res.status(400).json(err);
    //     });
    // Cardio.find({})
    //     .sort({ day: -1 })
    //     .then(dbCardio => {
    //         res.json(dbCardio)
    //     })
    //     .catch(err => {
    //         res.status(400).json(err)
    //     });
});

module.exports = router;