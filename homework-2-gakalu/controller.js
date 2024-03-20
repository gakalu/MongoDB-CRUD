const schoolModel=require('./model');

exports.addTeacher=async(req,res)=>{
const{name}=req.body;
const school=schoolModel.add({name});
res.send(school);
}
exports.updateTeacher=async(req,res)=>{
const{name}=req.body;
const{_schoolId,_teacherId}=req.params;
const teacher=schoolModel.updateTeacher({_schoolId,_teacherId,name});
res.send(teacher);
    }
exports.deleteTeacher=async(req,res)=>{
const{_schoolId,_teacherId}=req.params;
const school=schoolModel.deleteTeacher({_schoolId,_teacherId});
res.send(school);
}
exports.AddStudent=async(req,res)=>{
const{name}=req.body;
const{_schoolId,_courseId}=req.params;
const stu=schoolModel.AddStudent({_schoolId,_courseId,name});
res.send(stu);
}
exports.updateStudent=async(req,res)=>{
const{name}=req.body;
const{_schoolId,_courseId,_studentId}=req.params;
const stu=schoolModel.updateStudent({_schoolId,_courseId,_studentId,name});
res.send(stu);
}
exports.deleteStudent=async(req,res)=>{
const{_schoolId,_courseId,_studentId}=req.params;
const stu=schoolModel.deleteStudent({_schoolId,_courseId,_studentId});
res.send(stu);
}
