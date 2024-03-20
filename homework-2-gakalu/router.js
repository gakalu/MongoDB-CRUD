const express=require('express');
const schoolController=require('./controller');

const router=express.Router();
router.post('/:school_id/teachers',schoolController.addTeacher);//Q1
router.put('/:school_id/teachers/_teacherId',schoolController.updateTeacher)//Q2
router.delete('/:school_id/teachers/_teacherId',schoolController.deleteTeacher)//Q3
router.post('/:school_id/courses/_courseId',schoolController.AddStudent)//Q4
router.put('/:school_id/courses/_courseId/:_studentId',schoolController.updateStudent)//Q5
router.delete('/:school_id/courses/_courseId/:studentId',schoolController.deleteStudent)//Q6
module.exports=router;