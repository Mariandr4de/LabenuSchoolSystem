import { connection } from "./dataBase";

export const updateTeacherClass = async (
  id: number,
  class_id: number
): Promise<any> => {
  await connection("teacher")
    .update({ class_id })
    .where("id", `${id}`);
};
