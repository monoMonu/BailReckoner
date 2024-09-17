import express from 'express';
const router = express.Router();
import { createBailApplication, getBailApplications } from '../controllers/bailApplicationController.js';

router.post('/', createBailApplication);
router.get('/', getBailApplications);

export default router;