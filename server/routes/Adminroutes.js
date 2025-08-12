import express from 'express';
import { adminLoginHandler } from '../controller/Admincontroller.js';

const router = express.Router();

router.post('/login', adminLoginHandler);

export default router;