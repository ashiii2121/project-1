import express from 'express';
import { signUpHandler, sendOTPhandler, userLoginHandler, authChecking, verifyOTPHandler, getOTPStatus, addToCartHandler, getCartHandler, checkoutHandler } from '../controller/Usercontroller.js';

const router = express.Router();

router.post('/signup', signUpHandler);
router.post('/sendOTP', sendOTPhandler);
router.post('/verifyOTP', verifyOTPHandler);
router.post('/login', userLoginHandler);
router.get('/authCheck', authChecking);
router.get('/otpStatus', getOTPStatus);
router.post('/addToCart', addToCartHandler);
router.get('/getCart', getCartHandler);
router.post('/checkout', checkoutHandler);

export default router;