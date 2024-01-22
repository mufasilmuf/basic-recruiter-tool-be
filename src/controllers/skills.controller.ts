import { Request, Response } from "express";
import { validationResult } from 'express-validator';

import SkillsService from "../services/skills.service";
import { addSkillValidationRules } from "../utils/validation";

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
            await Promise.all(addSkillValidationRules.map((addSkillValidationRules) => addSkillValidationRules.run(req)));

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

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