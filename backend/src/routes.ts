import { Router, RouterOptions } from 'express';
import userController from './controllers/userController';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hello World 2!');
});

router.get('/users', userController.index);
router.post('/users/create', userController.create);

export default router;