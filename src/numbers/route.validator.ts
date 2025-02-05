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
        error: true,
        number: ``,
      });
    }
    const result = numberSchema.safeParse(req.query);
    if (!result.success) {
      return res.status(400).json({
        error: true,
        number: req.query.number,
      });
    }
    next();
  } catch (error) {
    res.status(400).json({
      error: true,
      number: `${req.query.number}`,
    });
  }
};
