import { Router, Request, Response } from 'express';
import { Login, SignUp } from "../controller/user.controller"

const router = Router();

router.post('/register', SignUp);
router.post('/login', Login);


export default router;