import express from 'express';
import { signUpHandler, sendOTPhandler, userLoginHandler, authChecking, verifyOTPHandler, getOTPStatus } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', signUpHandler);
router.post('/sendOTP', sendOTPhandler);
router.post('/verifyOTP', verifyOTPHandler);
router.post('/login', userLoginHandler);
router.get('/authCheck', authChecking);
router.get('/otpStatus', getOTPStatus);

export default router; 
