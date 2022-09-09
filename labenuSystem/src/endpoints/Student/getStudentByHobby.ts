import { Request, Response } from "express";
import { searchStudentByHobby } from "../../data/StudentData/searchStudentByHobby";

export const getStudentByHobby = async (req: Request, res: Response) => {
  try {
    const hobby_id = req.params.hobby_id;

    if (isNaN(Number(hobby_id))) {
      res.statusCode = 400;
      throw new Error("Inform the hobby id like number");
    }

    const studentByHobby = await searchStudentByHobby(Number(hobby_id));

    if (!studentByHobby.length) {
      res.statusCode = 404;
      throw new Error("There is no student in this hobby");
    }

    res.status(200).send(studentByHobby);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
