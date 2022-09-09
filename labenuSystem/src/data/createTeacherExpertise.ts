import { connection } from "./dataBase";

export const createTeacherExpertise = async (
  teacher_id: number,
  expertise_id: number
): Promise<any> => {
  await connection("teacher_expertise").insert({
    teacher_id,
    expertise_id,
  });
};
