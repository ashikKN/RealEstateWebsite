import express from 'express';
import { createResidency,getAllResidency, getResidency } from '../controller/residCntrl.js';

// Create an Express Router instance
const router = express.Router()


router.post('/create',createResidency)

router.get('/allresd',getAllResidency)

router.get("/:id",getResidency)

export {router as residencyRoute}

