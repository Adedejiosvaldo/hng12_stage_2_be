import { Router } from "express";
import { validateNumber } from "./route.validator";
import { classifyNumber } from "./fact.controllers";

const router = Router();

router.get("/", validateNumber, classifyNumber);

export default router;
