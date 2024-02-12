import express from 'express';
import { createUser } from '../controller/userCntrl.js';

// Create an Express Router instance
const router = express.Router()

// register user
router.post('/register',createUser)




export {router as userRoute}