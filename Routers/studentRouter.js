const express = require("express");
//const {body,param,query} =require("express-validator");

const Controller = require("./../Controllers/studentController");
//const authMW=require("./../Middleware/authMiddleware")

const router = express.Router();
router
  .route("/students")
  .get(Controller.getAllStudent)
  .post(Controller.createStudent)
  .put(Controller.updateStudent);

router
  .route("/students/:id?")
  .get(Controller.getStudentById)
  .delete(Controller.deleteStudent);

router.route("/BlockStudent/:id").post(Controller.blockAccount);

router.route("/ActiveStudent/:id").post(Controller.activateAccount);

router.route("/EnrollStudent").post(Controller.enrollStudent);

router.route("/teachers/:teacherId/ratings").post(Controller.addRating);

module.exports = router;
