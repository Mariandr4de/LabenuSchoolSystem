import { Request, Response } from "express";
import { searchTeacherByExpertise } from "../../data/TeacherData/searchTeacherbyExpertise";

export const getTeacherbyExpertise = async (req: Request, res: Response) => {
  try {
    const expertise_id = req.params.expertise_id;

    if (isNaN(Number(expertise_id))) {
      res.statusCode = 422;
      throw new Error("Inform the hobby id like number");
    }

    const TeacherbyExpertise = await searchTeacherByExpertise(
      Number(expertise_id)
    );

    if (!TeacherbyExpertise.length) {
      res.statusCode = 404;
      throw new Error("There is no teacher with this expertise");
    }

    res.status(200).send(TeacherbyExpertise);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
