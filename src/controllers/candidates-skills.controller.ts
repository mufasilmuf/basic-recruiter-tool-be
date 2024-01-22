import { Request, Response } from "express";
import { validationResult } from "express-validator";

import CandidatesSkillsService from "../services/candidates-skills.service";
import { calculateAndStoreComputedScores } from "../utils/helper-function";
import { addCandidateSkillsValidationRules } from "../utils/validation";
class CandidatesSkillsController {
    private candidatesSkillService: CandidatesSkillsService;

    constructor() {
        this.candidatesSkillService = new CandidatesSkillsService();
    }

    public async addCandidateSkills(req: Request, res: Response) {
        try {
            const { skillData } = req.body;

            await Promise.all(addCandidateSkillsValidationRules.map((validationRule) => validationRule.run(req)));

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            await calculateAndStoreComputedScores(skillData)
            await this.candidatesSkillService.addCandidateSkills(skillData);

            res.status(201).json({ message: 'candidates skills added successfully!' });
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public async getCandidateSkilsByCandidateId(req: Request, res: Response) {
        try {
            const { candidateId } = req.params;

            const candidateSkills = await this.candidatesSkillService.getCandidateSkilsByCandidateId(Number(candidateId));

            res.status(201).json({ candidateSkills: candidateSkills.rows });
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default CandidatesSkillsController;