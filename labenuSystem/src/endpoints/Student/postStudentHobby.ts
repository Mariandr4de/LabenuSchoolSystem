import { Request, Response } from "express";
import { createStudentHobby } from "../../data/StudentData/createStudentHobby";

export const postStudentHobby = async (req: Request, res: Response) => {
  try {
    const { hobby_id, student_id } = req.body;

    if (!hobby_id || !student_id) {
      res.statusCode = 400;
      throw new Error("Inform hobby id and student id");
    }

    if (isNaN(Number(hobby_id)) || isNaN(Number(student_id))) {
      res.statusCode = 422;
      throw new Error("Inform hobby id and student id like number");
    }

    await createStudentHobby(hobby_id, student_id);

    res.status(201).send({ message: "Student hobby created successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
