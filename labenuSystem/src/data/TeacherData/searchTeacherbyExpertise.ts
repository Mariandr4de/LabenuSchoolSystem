import { connection } from "../dataBase";

export const searchTeacherByExpertise = async (
  expertise_id: number
): Promise<any> => {
  const result = await connection("teacher_expertise")
    .select("*")
    .where("expertise_id", `${expertise_id}`);

  return result;
};
