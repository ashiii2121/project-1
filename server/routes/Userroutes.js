import express from 'express';
import { signUpHandler, sendOTPhandler, userLoginHandler, authChecking } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', signUpHandler);
router.post('/sendOTP', sendOTPhandler);
router.post('/login', userLoginHandler);
router.get('/authCheck', authChecking);

export default router; 
