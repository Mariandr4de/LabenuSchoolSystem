import { Request, Response } from "express";
import { createTeacher } from "../data/createTeacher";
import { connection } from "../data/dataBase";

export const postTeacher = async (req: Request, res: Response) => {
  try {
    const { teacher_name, teacher_email, birth_date, class_id } = req.body;

    if (!teacher_name || !teacher_email || !birth_date || !class_id) {
      res.statusCode = 400;
      throw new Error("Inform all Data");
    }

    const existsClass = await connection("classes")
      .select("*")
      .where("id", class_id);

    if (!existsClass.length) {
      res.statusCode = 404;
      throw new Error("There are no classes with this id");
    }

    await createTeacher(teacher_name, teacher_email, birth_date, class_id);

    res.status(201).send({ message: "teacher created successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
