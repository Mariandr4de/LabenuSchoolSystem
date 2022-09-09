import { CanceledError } from "axios";
import { Request, Response } from "express";

export const getUsersBySign = async (req: Request, res: Response) => {
  try {
    const {sign} = req.body;

    if (sign) {
      res.statusCode = 400;
      throw new Error("Inform the sign to search");
    }

    //const studentBySign = await searchStudentBySign(sign);

 /*    if (!studentBySign.length) {
      res.statusCode = 404;
      throw new Error("There is no student with this sign");
    }

    res.status(201).send(studentBySign); */
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

