import db from "../config/db";

class CandidatesSkillsModel {
    public async getCandidateSkilsByCandidateId(candidateId: number) {
        return await db.query(
            `
        SELECT skills.id, skills.name
        FROM candidates
        LEFT JOIN skills ON skills.id = ANY(candidates.skillIds)
        WHERE candidates.id = $1;        
        `,
            [candidateId]
        );
    }

    public async addCandidateSkills(
        candidateSkillsData: {
            candidateId: number;
            skillId: number;
            experience: number;
        }[]
    ) {
        const placeholders = candidateSkillsData
            .map(
                (_, index) =>
                    `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`
            )
            .join(",");

        const values = candidateSkillsData.flatMap((data) => [
            data.candidateId,
            data.skillId,
            data.experience,
        ]);

        const insertCandidateSkillsQuery = `
        INSERT INTO candidateSkills (candidate_id, skill_id, experience)
        VALUES 
            ${placeholders}
        RETURNING *;
    `;

        return db.query(insertCandidateSkillsQuery, values);
    }
}

export default CandidatesSkillsModel;
