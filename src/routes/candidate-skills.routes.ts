import express from 'express';
import CandidatesSkillsController from '../controllers/candidates-skills.controller';

const router = express.Router();
const candidatesSkillsController = new CandidatesSkillsController();

router.post('/candidates-skills/:candidateId', async (req, res) => {
    await candidatesSkillsController.addCandidateSkills(req, res);
});

export default router;