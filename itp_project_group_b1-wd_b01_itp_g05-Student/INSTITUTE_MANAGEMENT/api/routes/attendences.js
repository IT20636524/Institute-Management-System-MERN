const router = require("express").Router();
const Attendence = require("../models/Attendence");

//ADD ATTENDENCE
router.post("/addAttendence", async (req, res) => {
    const newAttendence = new Attendence({
        student_id : req.body.student_id,
        name : req.body.name,
        subjects : req.body.subjects,
        attendence : req.body.attendence
        
    });
    try {
        const attendence = await newAttendence.save();
        res.status(200).json(attendence);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ATTENDENCE
router.get("/", async (req, res) => {
    try {
        let attendence;
        attendence = await Attendence.find();
        res.status(200).json(attendence);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET COUNT
router.route("/countDocuments/:attendence/:subject").get(function(req, res) {
    Attendence.count({ subjects: req.params.subject,attendence:req.params.attendence }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  });


module.exports = router;