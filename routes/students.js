const express = require('express');
const router = express.Router();

let students = [];

// CREATE - Add new student
router.post('/', (req, res) => {
    students.push(req.body);
    res.status(201).json({
        message: "Student added successfully",
        students
    });
});

// READ - Get all students
router.get('/', (req, res) => {
    res.json(students);
});

// READ - Get student by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    res.json(student);
});

// UPDATE - Update student name
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.map(student =>
        student.id === id
            ? { ...student, name: req.body.name }
            : student
    );
    res.json({
        message: "Student updated successfully",
        students
    });
});

// DELETE - Remove student
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(student => student.id !== id);
    res.json({
        message: "Student deleted successfully",
        students
    });
});

module.exports = router;
