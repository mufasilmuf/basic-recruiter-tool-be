import express from 'express';
import CandidatesController from '../controllers/candidates.controller';

const router = express.Router();
const candidatesController = new CandidatesController()

router.get('/candidates', async (req, res) => {
    await candidatesController.getAllCandidates(req, res);
});

router.post('/candidates', async (req, res) => {
    await candidatesController.addNewCandidates(req, res);
});

router.patch('/candidates/:candidateId', async (req, res) => {
    await candidatesController.updateCandidateById(req, res);
});

router.delete('/candidates/:candidateId', async (req, res) => {
    await candidatesController.deleteCandidateById(req, res);
});

export default router;