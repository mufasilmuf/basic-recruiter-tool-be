import CandidatesSkillsModel from "../models/candidates-skills.model";

class CandidatesSkillsService {
    private candidateSkillModel: CandidatesSkillsModel;

    constructor() {
        this.candidateSkillModel = new CandidatesSkillsModel();
    }

    public async addCandidateSkills(
        candidateId: number,
        skillId: number,
        experience: number
    ) {
        return this.candidateSkillModel.addCandidateSkills(candidateId, skillId, experience);
    }
}

export default CandidatesSkillsService;