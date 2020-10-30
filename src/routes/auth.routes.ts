import {Router, Request, Response} from 'express';
import {signup, signin, profile} from '../controllers/auth.controller';
import {verifyToken} from '../libs/validateToken';

const router: Router = Router();

router.post('/api/auth/signup', signup);
router.post('/api/auth/signin', signin);
router.get('/api/auth/profile', verifyToken, profile);

export default router;