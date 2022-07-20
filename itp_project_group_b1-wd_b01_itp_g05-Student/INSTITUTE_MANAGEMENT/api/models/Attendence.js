const mongoose = require("mongoose");

const AttendenceSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      
    },
    name: {
      type: String,
      
    },
    subjects: {
      type: String,
    },
    attendence:{
        type: String,
        required: true,
    }
}
);

module.exports = mongoose.model("Attendence", AttendenceSchema);