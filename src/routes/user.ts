import { Router, Request, Response } from 'express';
import { SignUp } from "../controller/user.controller"

const router = Router();

router.post('/register', SignUp);


export default router;