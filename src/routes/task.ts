import { Router, Request, Response } from 'express';
import { Createtask, DeleteTask, GetTask, UpdateTask } from '../controller/task.controller';

const router = Router();

router.post('/create', Createtask);
router.get('/gettask', GetTask);
router.put('/updatatask/:id', UpdateTask);
router.delete('/deletetask/:id', DeleteTask);


export default router;