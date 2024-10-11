import { Router, Request, Response } from 'express';
import { Createtask, DeleteTask, GetTask, UpdateTask } from '../controller/task.controller';

const router = Router();

router.post('/create', Createtask);
router.get('/gettask', GetTask);
router.put('/updatatask', UpdateTask);
router.delete('/deletetask', DeleteTask);


export default router;