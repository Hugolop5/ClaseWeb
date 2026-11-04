import { Router } from 'express';
import * as taskController from '../controllers/task.controller.js';
import { validateTaskRules } from '../middlewares/task-validators.js'; 

const router = Router();

router.get('/', taskController.list);
router.get('/:id', taskController.getById);
router.post('/', validateTaskRules, taskController.create);
router.put('/:id', validateTaskRules, taskController.update);
router.delete('/:id', taskController.remove);

export default router;