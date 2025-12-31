import express from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();

// Create a new student
router.post('/', createStudent);

// Get all students
router.get('/', getAllStudents);

// Get a single student by ID
router.get('/:id', getStudentById);

// Update a student
router.put('/:id', updateStudent);

// Delete a student
router.delete('/:id', deleteStudent);

export default router;
