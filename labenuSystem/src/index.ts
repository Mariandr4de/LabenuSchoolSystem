import { app } from "./app";
import { connectionTest } from "./endpoints/connectionTest";
import { getActiveClass } from "./endpoints/getActiveClass";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import { getStudentByName } from "./endpoints/getStudentByName";
import { postClass } from "./endpoints/postClass";
import { postStudent } from "./endpoints/postStudent";
import { postTeacher } from "./endpoints/postTeacher";
import { putClassModule } from "./endpoints/putClassModule";
import { putStudentClass } from "./endpoints/putStudentClass";
import { putTeacherClass } from "./endpoints/putTeacherClass";

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