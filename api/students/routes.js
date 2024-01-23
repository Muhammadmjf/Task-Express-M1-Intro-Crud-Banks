const express = require("express");
const router = express.Router();
const Student = require("../../models/Student_");

const {
  updateStudentById,
  getAllStudents,
  getStudentByID,
  createStudent,
  deleteStudentByID,
} = require("./controllers");

//
router.param("_id", async (req, res, next, _id) => {
  const student = await Student.findById(_id);
  if (!student)
    return res
      .state(404)
      .json({ message: `student with the id ${id},was not found` });
  req.student = student;
  next();
});

router.put("/:_id", updateStudentById);
router.get("/", getAllStudents);
router.get(":_id", getStudentByID);
router.post("/", createStudent);
router.delete("/:_id", deleteStudentByID);

module.exports = router;
