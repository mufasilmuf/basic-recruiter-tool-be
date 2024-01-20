import { Request, Response } from "express";

import CandidatesService from "../services/candidates.service";

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

    public async addNewCandidates(req: Request, res: Response) {
        try {
            const {
                name,
                email,
                phone,
                qualification,
                currentStatus,
                expectedSalary,
            } = req.body;
            const computedScore = 0;

            await this.candidateService.addNewCandidates(name, email, phone, qualification, currentStatus, expectedSalary, computedScore);

            res.status(201).json({ message: 'Candidates created successfully!' })
        } catch (err) {
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
                computedScore, } = req.body;

            await this.candidateService.updateCandidate(Number(candidateId), name, email, phone, qualification, currentStatus, expectedSalary, computedScore);

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
