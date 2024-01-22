import { Request, Response } from "express";
import { validationResult } from 'express-validator';

import CandidatesService from "../services/candidates.service";
import { addCandidateValidationRules } from "../utils/validation";

class CandidatesController {
    private candidateService: CandidatesService;

    constructor() {
        this.candidateService = new CandidatesService();
    }

    public async getAllCandidates(req: Request, res: Response) {
        try {
            const candidates = await this.candidateService.getAllCandidates();

            res.status(200).json({ candidates: candidates.rows });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async getCandidateById(req: Request, res: Response) {
        try {
            const { candidateId } = req.params;

            const candidates = await this.candidateService.getCandidateById(Number(candidateId));

            res.status(200).json({ candidates: candidates.rows[0] });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async addNewCandidates(req: Request, res: Response) {
        try {
            const {
                name,
                email,
                phone,
                qualification,
                currentStatus,
                expectedSalary,
                skillIds,
            } = req.body;
            const computedScore = 0;

            await Promise.all(addCandidateValidationRules.map((addSkillValidationRules) => addSkillValidationRules.run(req)));

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            let result = await this.candidateService.addNewCandidates(name, email, phone, qualification, currentStatus, expectedSalary, computedScore, skillIds);

            res.status(201).json({ candidateId: result.rows[0]?.id, message: 'Candidates created successfully!' })
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async updateCandidateById(req: Request, res: Response) {
        try {
            const { candidateId } = req.params;
            const { name,
                email,
                phone,
                qualification,
                currentStatus,
                expectedSalary,
            } = req.body;

            await this.candidateService.updateCandidate(Number(candidateId), name, email, phone, qualification, currentStatus, expectedSalary);

            res.status(201).json({ message: 'Candidates updated successfully!' })
        }
        catch (err) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async deleteCandidateById(req: Request, res: Response) {
        try {
            const { candidateId } = req.params;

            await this.candidateService.deleteCandidateById(Number(candidateId))

            res.status(201).json({ message: `Candidates ${candidateId} is successfully deleted!` })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default CandidatesController;
