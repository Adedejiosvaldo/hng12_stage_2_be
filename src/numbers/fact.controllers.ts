import { Request, Response } from "express";
import {
  getFunFact,
  classifyNumberProperties,
  isPerfect,
  isPrime,
  getDigitSum,
} from "./fact.service";

export const classifyNumber = async (req: Request, res: Response) => {
  try {
    const number = Number(req.query.number);
    const properties = classifyNumberProperties(number);
    const is_prime = isPrime(number);
    const fun_fact = await getFunFact(number);

    const response = {
      number,
      is_prime,
      is_perfect: isPerfect(number),
      properties,
      digit_sum: getDigitSum(number),
      fun_fact,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error while fetching api response. Please try again later",
    });
  }
};
