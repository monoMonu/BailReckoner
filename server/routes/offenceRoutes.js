import express from 'express';
const router = express.Router();
import { getOffences, addOffence } from '../controllers/offenceController.js';

router.get('/', getOffences);
router.post('/', addOffence);

export default router;
