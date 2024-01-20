import CandidatesModel from "../models/candidates.model";

class CandidatesService {
    private candidateModel: CandidatesModel;

    constructor() {
        this.candidateModel = new CandidatesModel();
    }

    public async getAllCandidates() {
        return await this.candidateModel.getAllCandidates();
    }
}

export default CandidatesService;
