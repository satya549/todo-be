import { Router, Request, Response } from 'express';
import {register } from "../controller/user.controller"

const router = Router();

router.post('/resister',register);


export default router;