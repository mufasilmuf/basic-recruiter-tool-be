import express from 'express';
import CandidatesSkillsController from '../controllers/candidates-skills.controller';

const router = express.Router();
const candidatesSkillsController = new CandidatesSkillsController();

router.post('/candidates-skills/', async (req, res) => {
    await candidatesSkillsController.addCandidateSkills(req, res);
});

router.get('/candidates-skills/:candidateId', async (req, res) => {
    await candidatesSkillsController.getCandidateSkilsByCandidateId(req, res);
});

export default router;