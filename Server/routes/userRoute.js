import express from 'express';
import { bookVisit, createUser } from '../controller/userCntrl.js';

// Create an Express Router instance
const router = express.Router()

// register user
router.post('/register',createUser)

router.post('/bookVisit',bookVisit)


export {router as userRoute}