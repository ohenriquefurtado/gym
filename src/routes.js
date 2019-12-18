import { Router } from 'express';
import StudentController from './app/controllers/StudentController';

const router = new Router();

router.post('/student', StudentController.create);

export default router;
