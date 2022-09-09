import { connection } from "../dataBase";

export const searchStudentByHobby = async (
  hobby_id: number
): Promise<any> => {
  const result = await connection("student_hobby")
    .select("*")
    .where("hobby_id", `${hobby_id}`);

  return result;
};