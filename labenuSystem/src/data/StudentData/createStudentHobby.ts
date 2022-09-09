import { connection } from "../dataBase";

export const createStudentHobby = async (
  hobby_id: number,
  student_id: number
): Promise<any> => {
  await connection("student_hobby").insert({
    hobby_id,
    student_id,
  });
};
