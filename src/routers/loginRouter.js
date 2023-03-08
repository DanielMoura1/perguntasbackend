import { Router } from "express";
import {
    tela1,
    tela2,
    tela3,
    daniel
    } from '../controllers/teste.js';

const authRouter = Router();

authRouter.post('/tela1', tela1);
authRouter.post('/tela2', tela2);
authRouter.post('/tela3', tela3);
authRouter.post('/daniel', daniel);
export default authRouter;

