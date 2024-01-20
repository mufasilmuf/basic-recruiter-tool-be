import { Request, Response } from "express";

import CandidatesSkillsService from "../services/candidates-skills.service";
class CandidatesSkillsController {
    private candidatesSkillService: CandidatesSkillsService;

    constructor() {
        this.candidatesSkillService = new CandidatesSkillsService();
    }

    public async addCandidateSkills(req: Request, res: Response) {
        try {
            const { candidateId } = req.params;
            const { skillId, experience } = req.body;

            await this.candidatesSkillService.addCandidateSkills(Number(candidateId), skillId, experience);

            res.status(201).json({ message: 'candidates skills added successfully!' });
        }
        catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

export default CandidatesSkillsController;