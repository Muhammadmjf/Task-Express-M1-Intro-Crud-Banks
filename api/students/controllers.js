const Student = require("../../models/Student_");

//all student
const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (error) {
    next(error);
    // return res.status(500).json("server error", error);
  }
};
///get student by id

const getStudentByID = async (req, res, next) => {
  try {
    return res.status(200).json(req.student);
  } catch (error) {
    next(error);
  }
};

// add new student from body//
const createStudent = async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    return res.status(201).json(newStudent);
  } catch (error) {
    next(error);

    // console.log(error);
    // return res.status(500).json("server error", error);
  }
};
// DElete item
const deleteStudentByID = async (req, res, next) => {
  try {
    await Student.deleteOne(req.student);
    return res.status(204).end();
  } catch (error) {
    next(error);

    // console.log(error);
    // return res.status(500).json("server error", error);
  }
};
///update
const updateStudentById = async (req, res, next) => {
  try {
    await req.student.UpdateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);

    // console.log(error);
    // return res.status(500).json("server error", error);
  }
};
module.exports = {
  getAllStudents,
  createStudent,
  deleteStudentByID,
  getStudentByID,
  updateStudentById,
};
