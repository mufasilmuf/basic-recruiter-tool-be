import CandidatesModel from "../models/candidates.model";

class CandidatesService {
    private candidateModel: CandidatesModel;

    constructor() {
        this.candidateModel = new CandidatesModel();
    }

    public async getAllCandidates() {
        return await this.candidateModel.getAllCandidates();
    }

    public async getCandidateById(candidateId: number) {
        return await this.candidateModel.getCandidateById(candidateId)
    }

    public async addNewCandidates(
        name: string,
        email: string,
        phone: string,
        qualification: string,
        currentStatus: string,
        expectedSalary: number,
        computedScore: number,
        skillIds: number[],
    ) {
        return await this.candidateModel.addNewCandidates(
            name,
            email,
            phone,
            qualification,
            currentStatus,
            expectedSalary,
            computedScore,
            skillIds,
        );
    }

    public async updateCandidate(
        candidateId: number,
        name: string,
        email: string,
        phone: string,
        qualification: string,
        currentStatus: string,
        expectedSalary: number,

    ) {
        return this.candidateModel.updateCandidateById(
            candidateId,
            name,
            email,
            phone,
            qualification,
            currentStatus,
            expectedSalary,

        );
    }

    public async deleteCandidateById(candidateId: number) {
        return this.candidateModel.deleteCandidateById(candidateId)
    }
}

export default CandidatesService;
