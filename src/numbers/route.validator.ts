import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const numberSchema = z.object({
  number: z.string().regex(/^\d+$/, "Invalid number format").transform(Number),
});

export const validateNumber = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryHeader = req.query.number;
    if (!queryHeader) {
      res.status(400).json({
         number: "alphabet",
        error: true,
      });
    }
    numberSchema.parse(req.query);
    next();
  } catch (error) {
    res.status(400).json({
      number: "alphabet",
      error: true,
    });
  }
};
