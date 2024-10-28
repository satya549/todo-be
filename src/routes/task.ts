import { Router, Request, Response } from 'express';
import { CreateTask, DeleteTask, GetTask, UpdateTask } from '../controller/task.controller';

const router = Router();

router.post('/', CreateTask);
router.get('/', GetTask);
router.put('/:id', UpdateTask);
router.delete('/:id', DeleteTask);


export default router;