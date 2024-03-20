const mongoose=require('mongoose');

const myShema=mongoose.Schema({
    
        "teachers": [
            {"name":{type:String}}
        ],
        "courses":[
            {"students":[
                {"name":{type:String}},
            ]},
        ]
})
const schoolSchema=mongoose.model('school',myShema);
class schoolStracture{
static async Add({name,schoolId}){
const teach=schoolSchema.findOneAndUpdate(
{_id:schoolId},
{$push:{teacher:{name}}}
)
return teach;  
}
static async updateTeacher({schoolId,teacherId,name}){
const teach=schoolSchema.findByIdAndUpdate(
 {_id:schoolId},{_id:teacherId},
 {$set:{"teachers.$.name":{name}}}
)
return teach;
}
static async deleteTeacher({schoolId,teacherId}){
const teach=schoolSchema.findByIdAndUpdate(
{_id:schoolId},
{$pull:{teachers:{_id:teacherId}}}
)
return teach;
}
static async AddStudent({schoolId,courseId,name}){
const teach=schoolSchema.findByIdAndUpdate(
{_id:schoolId},{"course._id":courseId},
{$push:{"courses.$.student":{student:name}}}
)
return teach;
}
static async updateStudent({schoolId,courseId,studentId,name}){
const teach=schoolSchema.findByIdAndUpdate(
{_id:schoolId},{"teacher._id":teacherId},{"course._id":courseId},{"student._id":studentId},
{$set:{"courses.$[cor].students.$[stu].name":{student:name}}},
{arrayFilter:[{"cor._id":courseId},{"stu._id":schoolId}]}
)
return teach;
}
static async deleteStudent({schoolId,courseId,studentId}){
const teach=schoolSchema.findByIdAndUpdate(
{_id:schoolId},{"course._id":courseId},
{$pull:{"courses.$.students":{_id:studentId}}}
)
return teach;
}
}
module.exports=schoolStracture;