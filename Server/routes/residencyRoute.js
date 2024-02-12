import express from 'express';
import { createResidency,getAllResidency } from '../controller/residCntrl.js';

// Create an Express Router instance
const router = express.Router()


router.post('/create',createResidency)

router.get('/allresd',getAllResidency)
export {router as residencyRoute}

