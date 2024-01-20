import express from 'express';
import CandidatesController from '../controllers/candidates.controller';

const router = express.Router();
const candidatesController = new CandidatesController()

router.get('/candidates', async (req, res) => {
    await candidatesController.getAllCandidates(req, res);
});

export default router;