import Student from '../models/Student.js';

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ 
        error: 'All fields (firstName, lastName, email) are required' 
      });
    }

    const student = await Student.create({ firstName, lastName, email });
    res.status(201).json(student);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Email already exists' });
    } else if (error.name === 'SequelizeValidationError') {
      res.status(400).json({ error: error.errors.map(e => e.message).join(', ') });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single student by ID
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a student
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    
    const student = await Student.findByPk(id);
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    await student.update({ firstName, lastName, email });
    res.json(student);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Email already exists' });
    } else if (error.name === 'SequelizeValidationError') {
      res.status(400).json({ error: error.errors.map(e => e.message).join(', ') });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    await student.destroy();
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
