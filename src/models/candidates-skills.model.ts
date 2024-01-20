import db from "../config/db";

class CandidatesSkillsModel {
    public async addCandidateSkills(
        candidateId: number,
        skillId: number,
        experience: number
    ) {
        return db.query(
            "INSERT INTO candidateSkills (candidate_id, skill_id, experience) VALUES ($1, $2, $3) RETURNING *",
            [candidateId, skillId, experience]
        );
    }
}

export default CandidatesSkillsModel;
