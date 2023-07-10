const express = require("express");
//const {body,param,query} =require("express-validator");

const Controller = require("./../Controllers/teacherController");
//const authMW=require("./../Middleware/authMiddleware")

const router = express.Router();
router
  .route("/teachers")
  .get(Controller.getActiveTeachers)
  .put(Controller.updateTeacher)
  .post(Controller.registerTeacher);

router.route("/teachers/:id?").get(Controller.getTeacherById);

router.route("/allTeachers/notActive").get(Controller.getNotActiveTeachers);

router.route("/allTeachers/highRate").get(Controller.getHighRateTeachers);

router.route("/activateteacher/:id").post(Controller.activateTeacher);

router
  .route("/teacherFeedbackandRate/:id")
  .get(Controller.getFeedbackForTeacher);

module.exports = router;
