const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", ({ body }, res) => {
    Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            console.log(dbWorkout);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get("/api/workouts/range", (req, res) => {
    var d = new Date();
    d.setDate(d.getDate() - 7)
    Workout.find({ day: { "$gte": d } }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;