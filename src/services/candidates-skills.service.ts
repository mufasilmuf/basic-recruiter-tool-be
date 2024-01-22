import CandidatesSkillsModel from "../models/candidates-skills.model";

class CandidatesSkillsService {
    private candidateSkillModel: CandidatesSkillsModel;

    constructor() {
        this.candidateSkillModel = new CandidatesSkillsModel();
    }

    public async addCandidateSkills(candidateSkillData: {
        candidateId: number,
        skillId: number,
        experience: number
    }[]) {
        return this.candidateSkillModel.addCandidateSkills(candidateSkillData);
    }

    public async getCandidateSkilsByCandidateId(candidateId: number) {
        return this.candidateSkillModel.getCandidateSkilsByCandidateId(candidateId)
    }
}

export default CandidatesSkillsService;