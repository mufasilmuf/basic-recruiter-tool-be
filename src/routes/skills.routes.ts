import express from 'express';
import SkillController from '../controllers/skills.controller';


const router = express.Router();
const skilssController = new SkillController()

router.get('/skills', async (req, res) => {
    await skilssController.getSkills(req, res);
});

router.post('/skills', async (req, res) => {
    await skilssController.addSkill(req, res);
});

export default router;