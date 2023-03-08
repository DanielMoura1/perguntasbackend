import {Router} from "express";
import loginRouter from "./loginRouter.js";

const router = Router();
router.use(loginRouter);

export default router;