const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const StudentAuthRoute = require("./routes/StudentAuth");
const studentRoute = require("./routes/students");
const SubjectRoute = require("./routes/subjects");
const AttendenceRoute = require("./routes/attendences")
const OnlineFeesRoute = require("./routes/OnlineFeeses");
const PhysicalFeesRoute = require("./routes/PhysicalFeeses");
const NotificationRoute = require("./routes/Notifications");
const schedRoute = require("./routes/exam_schedules");
const paymentsRoute = require("./routes/payments");
// const StaffAuth=require('./routes/StaffAuth');
// const staff=require('./routes/staff');
const classRoute = require("./routes/classes");
const multer = require("multer");
const path = require("path");

const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 


 dotenv.config();
 app.use(cors()) 
 app.use(express.json());
 app.use("/images", express.static(path.join(__dirname, "/images")));


 mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null,req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

 app.use("/api/StudentAuth", StudentAuthRoute);
 app.use("/api/students", studentRoute);
 app.use("/api/subjects", SubjectRoute);
 app.use("/api/attendences",AttendenceRoute);
 app.use("/api/OnlineFeeses", OnlineFeesRoute);
 app.use("/api/PhysicalFeeses", PhysicalFeesRoute);
 app.use("/api/Notifications", NotificationRoute);
 app.use("/api/exam_schedules", schedRoute);
 app.use("/api/payments", paymentsRoute);
//  app.use("/api/StaffAuth",StaffAuth);
//  app.use("/api/staff",staff);
 app.use("/api/classes", classRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});

