import { app } from "./app";
import { connectionTest } from "./endpoints/connectionTest";
import { getActiveClass } from "./endpoints/Class/getActiveClass";
import { getAllTeachers } from "./endpoints/Teacher/getAllTeachers";
import { getStudentByHobby } from "./endpoints/Student/getStudentByHobby";
import { getStudentByName } from "./endpoints/Student/getStudentByName";
import { getTeacherbyExpertise } from "./endpoints/Teacher/getTeacherBuExpertise";
import { getUsersByClass } from "./endpoints/Users/getUsersSameClass";
import { postClass } from "./endpoints/Class/postClass";
import { postHobby } from "./endpoints/Student/postHobby";
import { postStudent } from "./endpoints/Student/postStudent";
import { postStudentHobby } from "./endpoints/Student/postStudentHobby";
import { postTeacher } from "./endpoints/Teacher/postTeacher";
import { putClassModule } from "./endpoints/Class/putClassModule";
import { putStudentClass } from "./endpoints/Student/putStudentClass";
import { putTeacherClass } from "./endpoints/Teacher/putTeacherClass";

//Test
app.get("/connectionTest", connectionTest);

//Class
app.post("/class", postClass);
app.get("/class", getActiveClass);
app.put("/class", putClassModule);

//Student
app.post("/student", postStudent);
app.get("/student/:name", getStudentByName);
app.put("/student", putStudentClass);

//Teacher
app.post("/teacher", postTeacher);
app.get("/teacher", getAllTeachers);
app.put("/teacher", putTeacherClass);

//Hobby
app.post("/hobby", postHobby);

//Challenge - All people in same class
app.get("/users/:class_id", getUsersByClass);

//Challenge - Student with the same hobby
app.post("/studentHobby", postStudentHobby);
app.get("/studentHobby/:hobby_id", getStudentByHobby);

//Challenge - Student with the same hobby
app.get("/teacher/:expertise_id", getTeacherbyExpertise);
