import { Request, Response } from "express";

import SkillsService from "../services/skills.service";

class SkillController {
    private skillService: SkillsService;

    constructor() {
        this.skillService = new SkillsService()
    }

    public async getSkills(req: Request, res: Response) {
        try {
            const skills = await this.skillService.getSkills();

            res.status(200).json({ skills: skills.rows });
        }
        catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public async addSkill(req: Request, res: Response) {
        try {
            const { name } = req.body;
            await this.skillService.addSkills(name);

            res.status(201).json({ message: 'skills sucessfully created!' })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default SkillController;