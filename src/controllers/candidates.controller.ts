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
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default CandidatesController;
